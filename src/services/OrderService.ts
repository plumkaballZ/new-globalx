import { Order } from '../models/Order';
import { httpRequestService } from './HttpRequestService';
import { apiEndpoint } from './../settings/ApiEndpoints';
import { LocalUser } from '../models/LocalUser';
import { LineItem } from '../models/LineItem';
import { Product } from '../models/Product';
import { Variant } from '../models/Variant';

class OrderService {
    private apiUrl = `${apiEndpoint}/api/order`;

    private getCurrent(): Promise<Order> {
        return httpRequestService
            .get<Order>(`${this.apiUrl}/${LocalUser.getIp()}/${LocalUser.getEmail()}/${LocalUser.getPw()}`)
            .then(order => {
                return order;
            });
    }

    private syncOrderWithBackend(currentOrder: Order): Order {
        const removeOrderLinesFromIndex: number[] = [];

        currentOrder.canBeUpdated = false;
        currentOrder.special_instructions = '';

        currentOrder.line_items.forEach(line => {
            if (line.deleted === true) {
                removeOrderLinesFromIndex.push(currentOrder.line_items.indexOf(line))
            }
            if (line.newLine === true) {
                line.newLine = false;
            }
            if (line.updated === true) {
                line.updated = false;
            }
        });

        for (var i = removeOrderLinesFromIndex.length - 1; i >= 0; i--)
            currentOrder.line_items.splice(removeOrderLinesFromIndex[i], 1);

        return { ...currentOrder };
    }

    private async updateOrder(order: Order): Promise<Order> {
        const res = await httpRequestService
            .post(`${this.apiUrl}/update`, { Order: order });

        return res as Order;
    }

    public updateCurrentOrder = async (currentOrder: Order, setCurrentOrder: any) => {
        if (currentOrder.canBeUpdated) {
            let res = await this
                .updateOrder(currentOrder)
                .catch((err: any) => {
                    console.log(err);
                });

            this.syncOrderWithBackend(currentOrder);

            let newCurrentOrder = { ...currentOrder };
            setCurrentOrder(newCurrentOrder);
        }
    }


    public fetchCurrentOrder = async (setCurrentOrder: any) => {

        const currentOrder = await this.getCurrent()
            .catch((err: any) => {
                console.log(err);
            });

        if (!currentOrder) return;
        setCurrentOrder(currentOrder);
    }

    public addOrderLine(orderLine: LineItem, currentOrder: Order): Order {

        if (currentOrder.line_items == null) {
            currentOrder.line_items = [];
        }

        let index = currentOrder.line_items.findIndex(x => x.id === orderLine.variant_id);

        if (index > -1) {
            currentOrder.special_instructions = 'updateLineItem';
            let index = currentOrder.line_items.findIndex(x => x.id === orderLine.variant_id);
            currentOrder.line_items[index].quantity += orderLine.quantity;
            currentOrder.line_items[index].updated = true;
        }
        else {
            currentOrder.line_items.push(orderLine);
            currentOrder.special_instructions = 'addLineItem';
        }

        currentOrder.canBeUpdated = true;

        return { ...currentOrder };
    }

    public removeOrderLine(orderLine: any, currentOrder: Order): Order {
        var lineId = orderLine.id;

        currentOrder.line_items.forEach(line => {
            if (line.id == lineId) {
                line.deleted = true;
                line.id = lineId;
            }
        });

        currentOrder.special_instructions = 'deleteLineItem';
        currentOrder.canBeUpdated = true;

        return { ...currentOrder };
    }
    public async setPaymentDone(currentOrder: Order, addressUid: string): Promise<Order> {
        currentOrder.addressUid = addressUid;
        currentOrder.special_instructions = 'updatePayment';

        let res = await this
            .updateOrder(currentOrder)
            .catch((err: any) => {
                console.log(err);
            });

        return currentOrder;
    }

    public setOrderIsShipped = async (orderId: string, addressUid: string) => {
        let res = await this.getRequest(`${this.apiUrl}/setordersent/${orderId}/${addressUid}`)
            .catch((err: any) => {
                console.log(err);
            });
    }

    public createNewOrderLine(prod: Product, quantity: number, variant: Variant): LineItem {
        var newOrderLine = new LineItem();

        let variantType = variant.type;

        newOrderLine.id = variant.id;
        newOrderLine.variant_id = variant.id;
        newOrderLine.quantity = quantity;

        newOrderLine.price = parseFloat(prod.price.replace(',', '.'));

        if (variantType === "Color") {
            newOrderLine.color = variant.value;
        }
        if (variantType === "Size") {
            newOrderLine.size = variant.value;
        }

        newOrderLine.newLine = true;

        return newOrderLine;
    }
    public fetchAllOrders = async (email: string, ip: string, setOrders: any) => {

        let res = await this.getRequest(`${this.apiUrl}/getall/${email}/${ip}`)
            .catch((err: any) => {
                console.log(err);
            });

        if (res) setOrders(res);
    }

    public fetchAllOrders99 = async (setOrders: any) => {
        let res = await this.getRequest(`${this.apiUrl}/getalllvl99`)
            .catch((err: any) => {
                console.log(err);
            });

        if (res) setOrders(res);
    }

    public getCurrentOrderTotals(currentOrder: Order, currentOrderLines: LineItem[]): any {
        let numberOfOrderLines = ((Object.keys(currentOrder).length === 0) ? 0 : currentOrderLines.length);

        let subTotal: number = 0;
        let totalQuantity: number = 0;

        if (numberOfOrderLines > 0) {
            currentOrderLines.forEach(x => subTotal += x.price * x.quantity);
            currentOrderLines.forEach(x => totalQuantity += x.quantity);
        }
        return {
            subTotal,
            totalQuantity
        };
    }

    private getRequest(url: string): Promise<any> {
        return httpRequestService
            .get<any[]>(url)
            .then(res => {
                return res;
            });
    }
}

export const orderService = new OrderService();