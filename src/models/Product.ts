import { Variant } from "./Variant";

export class Product {
    name: string;
    shortName: string;
    description: string;
    price: string;
    price_en: string;
    displayPrice: string;
    available_on: string;
    slug: string;
    smallImage: string;
    images: string[];
    metaDescription: string;
    metaKeywords: string;
    shippingCategoryId: number;
    taxonIds: number[];
    totalOnHand: number;

    liArray: string[];

    //variant handling
    defaultVariant: Variant;
    variants: Variant[];

}
