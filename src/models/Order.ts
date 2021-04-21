import { Address } from "./Address";
import { LineItem } from "./LineItem";

export class Order {
    uid: string;
    addressUid: string;
    id: string;
    number: string;
    item_total: string;
    total: string;
    ship_total: number;
    state: string;
    adjustment_total: string;
    user_id: string;
    created_At: string;
    updated_at: string;
    completed_at: string;
    payment_total: string;
    shipment_State: string;
    payment_state: string;
    email: string;
    special_instructions: string;
    channel: string;
    included_tax_total: string;
    additional_tax_total: string;
    display_included_tax_total: string;
    display_additional_tax_total: string;
    tax_total: string;
    currency: string;
    considered_risky: boolean;
    total_quantity: string;
    bill_address: Address;
    ship_Address: Address;
    public line_items: LineItem[];


    deliveryCode: string;
    shippingId: string;

    constructor() {
        this.canBeUpdated = false;
    }

    canBeUpdated: boolean;
}
