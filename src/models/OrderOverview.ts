export class OrderOverview {
    public orderId: string;

    public addressUid: string;
    public subTotal: number;
    public shippingPrice: number;
    public totalQuantity: number;

    public totalPrice: string;

    public servicePointId: number;
    public servicePointName: string;
    public isPickupService: boolean;

    public firstName: string;
    public lastName: string;
    public phone: string;
    public email: string;

    public address: string;
    public zipcode: string;
    public city: string;
    public countryId: string;

    public product_code: string;
    public product_name: string;
}