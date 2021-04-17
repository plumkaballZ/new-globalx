import { ServicePoint } from "./ServicePoint";

export class ShippingOption {
    dispaly_string: string;
    carrier_code: string;
    description: string;
    product_code: string;
    price: string;
    price_before_vat: string;
    service_points: ServicePoint[];
    has_service_points: boolean;
    
    selected_service_point: ServicePoint;
}
