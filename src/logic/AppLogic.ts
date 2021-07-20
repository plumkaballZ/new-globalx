import { LineItem } from "../models/LineItem";
import { Order } from "../models/Order";
import { User } from "../models/User";
import { addressService } from "../services/AddressService";
import { orderService } from '../services/OrderService'

class AppLogic {
    //order
    public async fetchAllOrders(user: User, setUserOrders: any) {
        if (user.lvl === 99) {
            await orderService.fetchAllOrders99(setUserOrders);
        }
        else {
            await orderService.fetchAllOrders(user.email, user.uid, setUserOrders);
        }
    }

    public addOrderLine(orderLine: LineItem, currentOrder: Order, setCurrentOrder: any) {
        let newCurrentOrder = orderService.addOrderLine(orderLine, currentOrder);
        setCurrentOrder(newCurrentOrder);
    }

    public removeOrderLine(orderLine: LineItem, currentOrder: Order, setCurrentOrder: any) {
        let newCurrentOrder = orderService.removeOrderLine(orderLine, currentOrder);
        setCurrentOrder(newCurrentOrder);
    }

    //address
    public async fetchAllAddresses(setIsLoading: any, setAllAddresses: any,
        setSelectedAddress: any, setShippingOptions: any) {

        setIsLoading(true);

        await addressService.fetchAllAddresses(setAllAddresses,
            setSelectedAddress,
            setShippingOptions);

        setIsLoading(false);
    }
}

export const appLogic = new AppLogic();