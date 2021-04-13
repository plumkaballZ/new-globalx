import { Address } from "./Address";
import { LineItem } from "./LineItem";
import { ShippingOption } from "./ShippingOption";
import { Product } from "./Product";
import { CompleteOrder } from "./CompleteOrder";


export interface ICheckoutBagProps {
    OrderLines: LineItem[];
    totalQuantity: number;
    subTotal: number;
    removeOrderLineCallBack(lineItem: LineItem): void;
    allProducts: Product[];
}
export interface IHeaderProps {
    totalQuantity: number;
}
export interface IProductListProps {
    addOrderLineCallback(lineItem: LineItem): void;
    allProducts: Product[];
    goToIndex(index: number): void;
}
export interface IAddAddressProps {
    createNewAddress(address: Address): void;
    setDoGoToCreatePage: any;
}
export interface IAddressProps {
    allAddresses: Address[];
    selectedAddress: Address;
    shippingOptions: ShippingOption[];
    deleteAddress(address: Address): void;
    createAddressCallBack(address: Address): void;
    selectAddressCallBack(address: Address): void;
    totalQuantity: number;
    subTotal: number;
    setSelectedShippingOption: any;
    selectedShippingOption: ShippingOption;
    setCompleteOrderCallBack(completedOrder: CompleteOrder): void;
}
export interface IAdminProductsProps {
    allProducts: Product[];
    goToIndex(index: number): void;
    addProductCallBack(product: Product): void;
}
export interface IEditableProductProps {
    upsertProduct(product: Product): void;
    allProducts: Product[];
}
export interface IProductDetailProps {
    allProducts: Product[];
    addOrderLineCallback(lineItem: LineItem): void;
}
export interface ILoaderProps {
    isLoading: boolean;
}
export interface IPaymentProps {
    completedOrder: CompleteOrder;
    setPaymentIsCompletedCallback(): void;
}
export interface IOrderCompletedProps {
    completedOrder: CompleteOrder;
}