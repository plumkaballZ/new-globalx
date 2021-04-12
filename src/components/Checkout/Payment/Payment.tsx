import './payment.css';
import { PayPalButton } from "react-paypal-button-v2";

export default function Payment() {
    return (
        <div _nghost-c26="">
            <div _ngcontent-c26="" className="payment-section" id="asdf01">
                <div _ngcontent-c26="" className="row">
                    <div _ngcontent-c26="" className="col-sm-6">
                        <div _ngcontent-c26="" className="right">
                            <div _ngcontent-c26="" className="mini-bag-summary">
                                <div _ngcontent-c26="" className="lbl">ORDER SUMMARY</div>
                                <div _ngcontent-c26="" className="items">4 ITEMS</div>
                                <div _ngcontent-c26="" className="order-total">
                                    <span _ngcontent-c26="">Order Total</span>
                                    <span _ngcontent-c26="" className="value">146.00 €</span>
                                </div>
                                <div _ngcontent-c26="" className="shipping">
                                    <span _ngcontent-c26="">Delivery</span>
                                    <span _ngcontent-c26="" className="shipping-fee c-green">0.00 €</span>
                                </div>
                            </div>

                            <div _ngcontent-c26="" className="pay-lbl-total">
                                <span _ngcontent-c26="" className="pay-lbl">Total To Pay:</span>
                                <span _ngcontent-c26="" className="pay-total">146.00 €</span>
                            </div>

                            <div _ngcontent-c26="" className="address-summary">
                                <div _ngcontent-c26="" className="address-lbl">DELIVER TO</div>
                                <div _ngcontent-c26="" className="name"></div>
                                <div _ngcontent-c26="" className="add-info">Kastanjehaven</div>
                                <div _ngcontent-c26="" className="add-info"></div>
                                <div _ngcontent-c26="" className="add-info">Lystrup - 8520</div>
                                <div _ngcontent-c26="" className="add-info">Mobile : 71675589</div>
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