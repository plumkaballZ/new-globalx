import { useState } from 'react';
import { Address } from '../../../../models/Address';
import { IAddressListProps } from '../../../../models/IProps';
import { PickupPoint } from '../../../../models/PickupPoint';
import { ShippingOption } from '../../../../models/ShippingOption';
import slectedLogo from './../../../../assets/selected02.png';
import './address-list.css';

export default function AddressList(props: IAddressListProps) {
    let renderAddresses: any[] = [];
    let renderShippingOptions: any[] = [];

    let allAddresses = props.allAddresses;
    let selectedAddress = props.selectedAddress;
    let shippingOptions = props.shippingOptions;

    let currentOrderLines = props.OrderLines;
    let hasNoOrderLines = currentOrderLines === undefined || currentOrderLines.length === 0;

    let subTotal: number = 0;
    let numberOfOrderLines: number = 0;
    let total: number = 0;

    if (!hasNoOrderLines) {
        currentOrderLines.forEach(x => subTotal += x.price * x.quantity);
        currentOrderLines.forEach(x => numberOfOrderLines += x.quantity);
        total = subTotal;
    }

    let [selectedShippingQuote, setSelectedShippingQuote] = useState('');
    let [selectedShippingOption, setSelectedShippingOption] = useState({} as ShippingOption);

    console.log(selectedShippingOption);


    if (allAddresses != null) {
        allAddresses.map((value: Address, index: number) => {
            renderAddresses.push(
                <div key={"addr_" + index.toString()} _ngcontent-c22="" className="address-row">
                    <div className="clickDivAddr" onClick={() => {
                        if (selectedAddress.uid !== value.uid) {
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
                            (selectedAddress && selectedAddress.uid === value.uid) &&
                            <div className="selectedLogoContainer">
                                <img src={slectedLogo} />
                            </div>
                        }
                    </div>

                    <div _ngcontent-c22="" className="remove-edit">
                        <span _ngcontent-c22="" className="remove">
                            <strong _ngcontent-c22="" onClick={() => {
                                props.deleteAddress(value);
                            }}>Fjern</strong>
                        </span>
                    </div>

                </div>
            );
        });
    }

    if (shippingOptions != null) {
        shippingOptions.map((ship: ShippingOption, index: number) => {

            let shippingIsSelected = selectedShippingQuote === ship.product_code;

            renderShippingOptions.push(
                <div key={"shipment_" + index.toString()} _ngcontent-c22="" className="del-options" onClick={() => {
                    if (selectedShippingQuote !== ship.product_code) {
                        setSelectedShippingQuote(ship.product_code);
                    }
                }}>
                    <div _ngcontent-c22="" className="option" >
                        {
                            shippingIsSelected &&
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
                        {shippingIsSelected &&

                            <div className="col-md-12 card-content">
                                <hr></hr>
                                <div onChange={(event: any) => {

                                    let arry = event.target.value.split("$");
                                    let shippingOption = shippingOptions.filter(x => x.product_code === arry[0])[0];

                                    let selected = { ...shippingOption };

                                    if (arry.length === 2) {
                                        let pickup = shippingOption.pickup_points.filter(x => x.name === arry[1])[0];
                                        selected.pickup_points = [];
                                        selected.pickup_points.push(pickup);
                                    }
                                    setSelectedShippingOption(selected);

                                }}>
                                    {ship.has_pickup_points && ship.pickup_points.map((pickup: PickupPoint, indexY: number) => {
                                        return <p key={"pickup_point" + ship.carrier_code + indexY.toString()} className="address-content">
                                            <label>
                                                <input name="pickupPointRadioBtn" type="radio" id="gls" className="with-gap m-top-15" value={ship.product_code + "$" + pickup.name} />
                                                <span className="pickup-point">{pickup.company_name} - {pickup.address} {pickup.city} {pickup.zipcode}</span>
                                            </label>
                                        </p>
                                    })}
                                    {ship.has_pickup_points == false &&
                                        <p className="p-top-10">
                                            <label>
                                                <input name="pickupPointRadioBtn" type="radio" id="gls" className="with-gap m-top-15" value={ship.product_code} />
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
                                    props.setDoGoToCreatePage(true);
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
                                    {numberOfOrderLines}
                                </div>
                                <div _ngcontent-c23="" className="order-total">
                                    <span _ngcontent-c23="">Subtotal</span>
                                    <span _ngcontent-c23="" className="value">
                                        {subTotal.toFixed(2)} DKK
                                    </span>
                                </div>
                                <div _ngcontent-c23="" className="shipping">
                                    <span _ngcontent-c23="">Levering</span>
                                    <span _ngcontent-c23="" className="shipping-fee c-green">{(Object.keys(selectedShippingOption).length === 0) ? 0 : parseInt(selectedShippingOption.price).toFixed(2)} DKK</span>
                                </div>
                            </div>
                            <div _ngcontent-c23="" className="pay-lbl-total">
                                <span _ngcontent-c23="" className="pay-lbl">Total</span>
                                <span _ngcontent-c23="" className="pay-total">{(Object.keys(selectedShippingOption).length === 0) ? total : (total + parseInt(selectedShippingOption.price)).toFixed(2)} DKK</span>
                            </div>
                        </div>
                        <button _ngcontent-c21="" className="pay-btn">TIL BETALING</button>
                    </div>
                </div>
            </div>
        </div >
    )
}