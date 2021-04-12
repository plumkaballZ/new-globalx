import { Address } from "./Address";
import { LineItem } from "./LineItem";
import { ShippingOption } from "./ShippingOption";
import { Product } from "./Product";


export interface ICheckoutBagProps {
    OrderLines: LineItem[];
    numberOfOrderLines: number;
    removeOrderLineCallBack(lineItem: LineItem): void;
    allProducts: Product[];
    hasAddresses: boolean;
}
export interface IHeaderProps {
    numberOfOrderLines: number;
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
    addressIsLoading: boolean;
    selectAddressCallBack(address: Address): void;
    OrderLines: LineItem[];
}
export interface IAddressListProps {
    allAddresses: Address[];
    selectedAddress: Address;
    shippingOptions: ShippingOption[];
    deleteAddress(address: Address): void;
    createAddressCallBack(address: Address): void;
    setDoGoToCreatePage: any;
    selectAddressCallBack(address: Address): void;
    OrderLines: LineItem[];
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