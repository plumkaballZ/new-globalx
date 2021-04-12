import './payment.css';
import { PayPalButton } from "react-paypal-button-v2";
import { IPaymentProps } from '../../../models/IProps';

export default function Payment(props: IPaymentProps) {

    let totalQuantity = props.totalQuantity;
    let subTotal = props.subTotal;
    let shippingPrice = parseInt(props.selectedShippingOption.price);


    let name = props.selectedAddress.firstname;
    let lastName = props.selectedAddress.lastname;


    let pickupPoint = props.selectedShippingOption.pickup_points[0];




    return (
        <div _nghost-c26="">
            <div _ngcontent-c26="" className="payment-section" id="asdf01">
                <div _ngcontent-c26="" className="row">
                    <div _ngcontent-c26="" className="col-sm-6">
                        <div _ngcontent-c26="" className="right">
                            <div _ngcontent-c26="" className="mini-bag-summary">
                                <div _ngcontent-c26="" className="lbl">ORDER OVERSIGT</div>
                                <div _ngcontent-c26="" className="items">{totalQuantity} VARE</div>
                                <div _ngcontent-c26="" className="order-total">
                                    <span _ngcontent-c26="">Subtotal</span>
                                    <span _ngcontent-c26="" className="value">{subTotal.toFixed(2)} DKK</span>
                                </div>
                                <div _ngcontent-c26="" className="shipping">
                                    <span _ngcontent-c26="">Delivery</span>
                                    <span _ngcontent-c26="" className="shipping-fee c-green">{shippingPrice.toFixed(2)} DKK</span>
                                </div>
                            </div>

                            <div _ngcontent-c26="" className="pay-lbl-total">
                                <span _ngcontent-c26="" className="pay-lbl">TOTAL</span>
                                <span _ngcontent-c26="" className="pay-total">{(subTotal + shippingPrice).toFixed(2)} DKK</span>
                            </div>

                            <div _ngcontent-c26="" className="address-summary">
                                <div _ngcontent-c26="" className="address-lbl">LEVERES TIL</div>
                                <div _ngcontent-c26="" className="name"></div>
                                <div _ngcontent-c26="" className="add-info">{props.selectedAddress.firstname} {props.selectedAddress.lastname}</div>

                                {props.selectedShippingOption.has_pickup_points &&
                                    <div>
                                        <div _ngcontent-c26="" className="add-info">{pickupPoint.company_name}</div>
                                        <div _ngcontent-c26="" className="add-info">{pickupPoint.address}</div>
                                        <div _ngcontent-c26="" className="add-info">{pickupPoint.city}{pickupPoint.zipcode}</div>

                                    </div>
                                }

                                {/* <div _ngcontent-c26="" className="add-info">{add}</div>
                                <div _ngcontent-c26="" className="add-info">Lystrup - 8520</div>
                                <div _ngcontent-c26="" className="add-info">Mobile : 71675589</div> */}
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-c26="" className="col-sm-6">
                        <div _ngcontent-c26="" className="left">
                            <div _ngcontent-c26="" className="payment-header">

                                <span _ngcontent-c26="" className="lbl">You Pay: </span>
                                <span _ngcontent-c26="" className="amt you-pay">

                                    <span _ngcontent-c26="" className="you-pay">146.00 €</span>
                                </span>

                            </div>
                            <div _ngcontent-c26="" className="pay-body">
                                <div _ngcontent-c26="" _nghost-c27="">
                                    <div _ngcontent-c27="" className="selected-mode">
                                        <div _ngcontent-c27="" _nghost-c29="">
                                            <div _ngcontent-c29="" className="cod-block">
                                                <div _ngcontent-c29="" className="section-help">
                                                    <span _ngcontent-c29="" className="lbl">
                                                        PayPal
                            </span>
                                                    <span _ngcontent-c29="" className="sub-lbl">
                                                        Pay with PayPal
                            </span>
                                                </div>
                                                <div _ngcontent-c29="" className="cod-info">
                                                    NOTE: more paymenttypes are being impmented :)
                          </div>
                                            </div>


                                            <div _ngcontent-c29="" className="pay-btn-wrap">
                                                <div _ngcontent-c29="" _nghost-c30="">

                                                    <PayPalButton
                                                        amount="0.01"
                                                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                                        onSuccess={(details: any, data: any) => {
                                                            alert("Transaction completed by " + details.payer.name.given_name);

                                                            // OPTIONAL: Call your server to save the transaction
                                                            return fetch("/paypal-transaction-complete", {
                                                                method: "post",
                                                                body: JSON.stringify({
                                                                    orderID: data.orderID
                                                                })
                                                            });
                                                        }}
                                                        options={{
                                                            clientId: "AWi18rxt26-hrueMoPZ0tpGEOJnNT4QkiMQst9pYgaQNAfS1FLFxkxQuiaqRBj1vV5PmgHX_jA_c1ncL"
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div >
    )
}