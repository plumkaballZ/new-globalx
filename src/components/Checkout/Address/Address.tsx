import { useState } from "react";
import { IAddressProps } from "../../../models/IProps";
import AddAddress from "./AddAddress/AddAddress";
import { Address } from '../../../models/Address';
import AddressList from "./AddressList/AddressList";
import Loader from "../../Loader/Loader";

export default function AddressTsx(props: IAddressProps) {
    let [doGoToCreatePage, setDoGoToCreatePage] = useState(false);

    let allAddresses = props.allAddresses;
    let hasAddresses = allAddresses.length === 0 ? false : true;
    let showCreatePage = false;

    if (doGoToCreatePage === true || !hasAddresses) {
        showCreatePage = true;
    }

    return (
        <div _nghost-c21="">
            <Loader isLoading={props.addressIsLoading} />
            <div _ngcontent-c21="" className="address-section">


                {showCreatePage &&
                    <AddAddress createNewAddress={(address: Address) => {
                        props.createAddressCallBack(address);
                    }}
                        setDoGoToCreatePage={setDoGoToCreatePage}
                        {...props} />
                }

                {!showCreatePage &&
                    <AddressList
                        allAddresses={allAddresses}
                        selectedAddress={props.selectedAddress}
                        shippingOptions={props.shippingOptions}
                        deleteAddress={props.deleteAddress}
                        createAddressCallBack={props.createAddressCallBack}
                        setDoGoToCreatePage={setDoGoToCreatePage}
                        selectAddressCallBack={props.selectAddressCallBack}
                        totalQuantity={props.totalQuantity}
                        subTotal={props.subTotal}
                    />
                }

            </div>
        </div>)
}