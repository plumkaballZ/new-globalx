import { PickupPoint } from "./PickupPoint";

export class ShippingOption {
    dispaly_string: string;
    carrier_code: string;
    description: string;
    product_code: string;
    price: string;
    price_before_vat: string;
    pickup_points: PickupPoint[];
    has_pickup_points: boolean;
    
    selected_pickup_point: PickupPoint;
}
