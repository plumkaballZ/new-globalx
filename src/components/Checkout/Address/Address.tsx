import { useState } from "react";
import { IAddressProps } from "../../../models/IProps";
import AddAddress from "./AddAddress/AddAddress";
import { Address } from '../../../models/Address';
import { useHistory } from "react-router-dom";
import slectedLogo from './../../../assets/selected02.png';
import { ShippingOption } from "../../../models/ShippingOption";
import { ServicePoint } from "../../../models/ServicePoint";
import './address.css';
import { OrderOverview } from "../../../models/OrderOverview";
import Loader from "../../Loader/Loader";


export default function AddressTsx(props: IAddressProps) {
    const history = useHistory();

    let [doGoToCreatePage, setDoGoToCreatePage] = useState(false);

    let allAddrs = props.allAddresses;

    let selectedAddrs = props.selectedAddress;
    let selectedShippingOpt = props.selectedShippingOption;
    let shippingOptions = props.shippingOptions;

    let showCreatePage = false;

    if (doGoToCreatePage === true || allAddrs.length === 0) {
        showCreatePage = true;
    }

    let renderAddresses: any[] = [];
    let renderShippingOptions: any[] = [];

    let subTotal = props.subTotal;
    let shippingPrice = (Object.keys(selectedShippingOpt).length === 0) ? 0 : parseFloat(selectedShippingOpt.price);

    if (allAddrs != null) {
        allAddrs.map((value: Address, index: number) => {
            renderAddresses.push(
                <div key={"addr_" + index.toString()} _ngcontent-c22="" className="address-row">
                    <div className="clickDivAddr" onClick={() => {
                        if (selectedAddrs.uid !== value.uid) {
                            props.selectAddressCallBack(value);
                        }
                    }}>
                        <div _ngcontent-c22="" className="name"><strong _ngcontent-c22="">Addresse: {index + 1}</strong></div>
                        <div _ngcontent-c22="" className="name"><strong _ngcontent-c22="">{value.firstname} {value.lastname}</strong></div>
                        <div _ngcontent-c22="" className="address" >
                            <div _ngcontent-c22="" className="address-content">
                                <div _ngcontent-c22="" className="address-field">{value.address1}, {value.zipcode} {value.city}</div>
                                <div _ngcontent-c22="" className="address-field">
                                    <span _ngcontent-c22="" className="mob-lbl">Land: </span>
                                    <span _ngcontent-c22="" className="mob-no">{value.countryId}</span>
                                </div>

                                <div _ngcontent-c22="" className="address-field">
                                    <span _ngcontent-c22="" className="mob-lbl">Mobile: </span>
                                    <span _ngcontent-c22="" className="mob-no">{value.phone}</span>
                                </div>

                            </div>
                        </div>
                        <br _ngcontent-c22="" />
                        {
                            (selectedAddrs && selectedAddrs.uid === value.uid) &&
                            <div className="selectedLogoContainer">
                                <img src={slectedLogo} />
                            </div>
                        }
                    </div>

                    <div _ngcontent-c22="" className="remove-edit">
                        <span _ngcontent-c22="" className="remove">
                            {/* <strong _ngcontent-c22="" onClick={() => {
                                props.deleteAddress(value);
                            }}>Fjern</strong> */}
                        </span>
                    </div>

                </div>
            );
        });
    }

    if (shippingOptions != null) {
        shippingOptions.map((ship: ShippingOption, index: number) => {

            let isSlected = selectedShippingOpt.product_code === ship.product_code;

            renderShippingOptions.push(
                <div key={"shipment_" + index.toString()} _ngcontent-c22="" className="del-options" onClick={() => {
                    if (selectedShippingOpt.product_code !== ship.product_code) {
                        props.setSelectedShippingOption(ship);
                    }
                }}>
                    <div _ngcontent-c22="" className="option" >
                        {
                            isSlected &&
                            <div className="selectedLogoContainer">
                                <img src={slectedLogo} />
                            </div>
                        }

                        <div _ngcontent-c22="" className="option-name">
                            {ship.dispaly_string}
                            <span style={{ float: "right" }}>
                                {ship.price} DKK
                                </span>
                        </div>
                        {isSlected &&

                            <div className="col-md-12 card-content">
                                <hr className="thickHr"></hr>
                                <div onChange={(event: any) => {

                                    let arry = event.target.value.split("$");
                                    let shippingOption = shippingOptions.filter(x => x.product_code === arry[0])[0];

                                    let newSelectedShippingOpt = { ...shippingOption };

                                    if (arry.length === 2) {
                                        let pickup = shippingOption.service_points.filter(x => x.name === arry[1])[0];
                                        newSelectedShippingOpt.selected_service_point = pickup;
                                    }

                                    props.setSelectedShippingOption(newSelectedShippingOpt);

                                }}>
                                    {ship.has_service_points && ship.service_points.map((servicePoint: ServicePoint, indexY: number) => {
                                        let isCheckedPickup = selectedShippingOpt.selected_service_point === servicePoint;
                                        return <p key={"pickup_point" + ship.carrier_code + indexY.toString()} className="address-content">
                                            <label>
                                                <input defaultChecked={isCheckedPickup} name="pickupPointRadioBtn" type="radio" id="gls" className="with-gap m-top-15" value={ship.product_code + "$" + servicePoint.name} />
                                                <span className="pickup-point">{servicePoint.company_name} - {servicePoint.address} {servicePoint.zipcode} {servicePoint.city}</span>
                                            </label>
                                        </p>
                                    })}

                                    {ship.has_service_points == false &&
                                        <p className="p-top-10">
                                            <label>
                                                <input defaultChecked={selectedShippingOpt.product_code === selectedShippingOpt.product_code} name="pickupPointRadioBtn" type="radio" id="gls" className="with-gap m-top-15" value={ship.product_code} />
                                                <span className="pickup-point">{ship.dispaly_string}</span>
                                            </label>
                                        </p>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            );
        });
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
                    <div _ngcontent-c21="">

                        <div>
                            <div _ngcontent-c21="" className="col-xs-12 col-sm-8">

                                <div _ngcontent-c21="" className="left">
                                    <div _ngcontent-c21="" className="edit-address">
                                        <span _ngcontent-c21="" className="edit-label">
                                            Vælg en leveringsadresse
                    </span>
                                    </div>
                                    <div _ngcontent-c21="" className="border-right-0">
                                        <div _ngcontent-c21="" className="add-address reviewlink pl-1">
                                            <span _ngcontent-c21="" className="add-label" onClick={() => {
                                                setDoGoToCreatePage(true);
                                            }}>+ Opret en ny leveringsadresse</span>
                                        </div>
                                    </div>

                                    <div _ngcontent-c21="" _nghost-c22="">
                                        <div _ngcontent-c22="" className="items">
                                            {renderAddresses}
                                        </div>

                                        <div _ngcontent-c22="" className="edit-address">
                                            <span _ngcontent-c22="" className="edit-label">
                                                Vælg en leveringsmetode
                                            </span>
                                        </div>


                                        <div _ngcontent-c22="" className="items">
                                            {renderShippingOptions}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div _ngcontent-c21="" className="col-xs-12 col-sm-4">
                                <div _ngcontent-c21="" className="right sticky">
                                    <div _ngcontent-c21="" _nghost-c23="">

                                        <div _ngcontent-c23="" className="del-lbl">
                                            ORDER OVERSIGT
                                    </div>

                                        <div _ngcontent-c23="" className="mini-bag-summary">
                                            <span _ngcontent-c23="">Antal vare</span>
                                            <div _ngcontent-c23="" className="items pull-right">
                                                {props.totalQuantity}
                                            </div>
                                            <div _ngcontent-c23="" className="order-total">
                                                <span _ngcontent-c23="">Subtotal</span>
                                                <span _ngcontent-c23="" className="value">
                                                    {subTotal.toFixed(2)} DKK
                                            </span>
                                            </div>
                                            <div _ngcontent-c23="" className="shipping">
                                                <span _ngcontent-c23="">Levering</span>
                                                <span _ngcontent-c23="" className="shipping-fee c-green">{shippingPrice.toFixed(2)} DKK</span>
                                            </div>
                                        </div>
                                        <div _ngcontent-c23="" className="pay-lbl-total">
                                            <span _ngcontent-c23="" className="pay-lbl">Total</span>
                                            <span _ngcontent-c23="" className="pay-total">{(subTotal + shippingPrice).toFixed(2)} DKK</span>
                                        </div>
                                    </div>
                                    <button _ngcontent-c21="" className="pay-btn" onClick={() => {


                                        if (Object.keys(selectedShippingOpt).length === 0) {
                                            alert("Du skal vælge en leveringsmetode");
                                            return;
                                        }
                                        if (selectedShippingOpt.has_service_points &&
                                            !selectedShippingOpt.selected_service_point) {
                                            alert("Du skal vælge en udleveringssted");
                                            return;
                                        }

                                        let orderOverview = new OrderOverview();

                                        orderOverview.addressUid = selectedAddrs.uid;
                                        orderOverview.subTotal = subTotal;
                                        orderOverview.shippingPrice = shippingPrice;
                                        orderOverview.totalQuantity = props.totalQuantity;
                                        orderOverview.totalPrice = (subTotal + shippingPrice).toFixed(2);

                                        if (selectedShippingOpt.has_service_points && selectedShippingOpt.selected_service_point) {
                                            let servicePoint = selectedShippingOpt.selected_service_point;

                                            orderOverview.address = servicePoint.address;
                                            orderOverview.city = servicePoint.city;
                                            orderOverview.zipcode = servicePoint.zipcode;
                                            orderOverview.hasServicePoint = true;
                                            orderOverview.servicePointName = servicePoint.company_name;
                                            orderOverview.servicePointId = servicePoint.id;
                                        }
                                        else {
                                            orderOverview.address = selectedAddrs.address1;
                                            orderOverview.city = selectedAddrs.city;
                                            orderOverview.zipcode = selectedAddrs.zipcode;
                                        }

                                        orderOverview.countryId = selectedAddrs.countryId;
                                        orderOverview.firstName = selectedAddrs.firstname;
                                        orderOverview.lastName = selectedAddrs.lastname;
                                        orderOverview.phone = selectedAddrs.phone;
                                        orderOverview.email = selectedAddrs.email;
                                        orderOverview.product_code = selectedShippingOpt.product_code;

                                        props.setCompleteOrderCallBack(orderOverview);

                                        history.push('/checkout/payment');

                                    }}>TIL BETALING</button>
                                </div>
                            </div>
                        </div>
                    </div >
                }

            </div>
        </div>)
}