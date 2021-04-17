import { Address } from "./Address";
import { LineItem } from "./LineItem";
import { ShippingOption } from "./ShippingOption";
import { Product } from "./Product";
import { OrderOverview } from "./OrderOverview";
import { Order } from "./Order";
import { User } from "./User";


export interface ICheckoutBagProps {
    OrderLines: LineItem[];
    totalQuantity: number;
    subTotal: number;
    removeOrderLineCallBack(lineItem: LineItem): void;
    allProducts: Product[];
}
export interface IHeaderProps {
    totalQuantity: number;
    userIsLoggedIn: boolean;
    setUser: any;
}
export interface IProductListProps {
    addOrderLineCallback(lineItem: LineItem): void;
    allProducts: Product[];
    goToIndex(index: number): void;
}
export interface IAddAddressProps {
    createNewAddress(address: Address): void;
    setDoGoToCreatePage: any;
    loggedInUser: User;
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
    setCompleteOrderCallBack(orderOverview: OrderOverview): void;
    addressIsLoading: boolean;
    loggedInUser: User;
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
    orderOverview: OrderOverview;
    setPaymentDoneCallback(orderOverview: OrderOverview): void;
}
export interface IOrderCompletedProps {
    orderOverview: OrderOverview;
}
export interface ILoginProps {
}
export interface IAvatarDropDownProps {
    userIsLoggedIn: boolean;
    setUser: any;
}
export interface IUserOrderProps {
    userOrders: Order[];
    loggedInUser: User;
    allProds: Product[];
}
export interface IOrderDetailsProps {
    selectedUserOrder: Order;
}
export interface IProductFilterProps {
    prodFilterArray: string[];
    setProdFilterArray: any;
}