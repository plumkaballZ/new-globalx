import { Address } from "./Address";
import { ShippingOption } from "./ShippingOption";

export class CompleteOrder {
    public orderId: number;

    public subTotal: number;
    public shippingPrice: number;
    public totalQuantity: number;

    public totalPrice: string;

    public companyName: string;
    public isPickup: boolean;

    public firstName: string;
    public lastName: string;
    public phone: string;
    public email: string;

    public address: string;
    public zipcode: string;
    public city: string;
    public countryId: string;
}