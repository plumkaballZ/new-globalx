import './payment.css';
import { PayPalButton } from "react-paypal-button-v2";
import { IPaymentProps } from '../../../models/IProps';
import { Redirect } from 'react-router-dom';

const credentials = {
    "sandbox": "AWi18rxt26-hrueMoPZ0tpGEOJnNT4QkiMQst9pYgaQNAfS1FLFxkxQuiaqRBj1vV5PmgHX_jA_c1ncL",
    "production": "Ae5kKArd7iUNkdxJRr6uGU9v7H0Q0BSKn6V5uaiGgv1j-Np3k4OAD3TvxNXZU1WnuZEHZrzd7xjV6gDk"
}

export default function Payment(props: IPaymentProps) {
    let orderOverview = props.orderOverview;

    let hasOrderOverview = (Object.keys(orderOverview).length !== 0);
    let totalPrice = orderOverview.totalPrice;
    let totalQuantity = orderOverview.totalQuantity
    let hasServicePoints = orderOverview.hasServicePoint;

    const createPayPalOrder = (data: any, actions: any) => {
        let order = actions.order.create({
            purchase_units: [{
                amount: {
                    currency_code: "DKK",
                    value: totalPrice
                }
            }],
            application_context: {
                shipping_preference: "NO_SHIPPING"
            }
        });

        return order;
    }
    const onSuccessPayPal = (details: any, data: any) => {
        if (details.status === "COMPLETED") {
            props.setPaymentDoneCallback(orderOverview);
            return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({
                    orderId: data.orderID
                })
            });
        }
    }

    return (
        <div _nghost-c26="">
            {!hasOrderOverview && <Redirect to="/checkout/address" />}
            {hasOrderOverview &&
                <div _ngcontent-c26="" className="payment-section" id="asdf01">
                    <div _ngcontent-c26="" className="row">
                        <div _ngcontent-c26="" className="col-sm-6">
                            <div _ngcontent-c26="" className="right">
                                <div _ngcontent-c26="" className="mini-bag-summary">
                                    <div _ngcontent-c26="" className="lbl">ORDER OVERSIGT</div>
                                    <div _ngcontent-c26="" className="items">{totalQuantity} VARE</div>
                                    <div _ngcontent-c26="" className="order-total">
                                        <span _ngcontent-c26="">Subtotal</span>
                                        <span _ngcontent-c26="" className="value">{orderOverview.subTotal.toFixed(2)} DKK</span>
                                    </div>
                                    <div _ngcontent-c26="" className="shipping">
                                        <span _ngcontent-c26="">Levering</span>
                                        <span _ngcontent-c26="" className="shipping-fee c-green">{orderOverview.shippingPrice.toFixed(2)} DKK</span>
                                    </div>
                                </div>

                                <div _ngcontent-c26="" className="pay-lbl-total">
                                    <span _ngcontent-c26="" className="pay-lbl">TOTAL</span>
                                    <span _ngcontent-c26="" className="pay-total">{orderOverview.totalPrice} DKK</span>
                                </div>

                                <div _ngcontent-c26="" className="address-summary">

                                    {hasServicePoints &&
                                        <div _ngcontent-c26="" className="address-lbl">LEVERES TIL UDLEVERINGSSTED</div>
                                    }
                                    {!hasServicePoints &&
                                        <div _ngcontent-c26="" className="address-lbl">LEVERES TIL PRIVAT ADRESSE</div>
                                    }
                                    <div _ngcontent-c26="" className="name"></div>

                                    {hasServicePoints &&
                                        <div>
                                            <div _ngcontent-c26="" className="add-info">{orderOverview.servicePointName}</div>

                                        </div>
                                    }
                                    <div>

                                        <div _ngcontent-c26="" className="add-info">{orderOverview.address}</div>
                                        <div _ngcontent-c26="" className="add-info">{orderOverview.zipcode} {orderOverview.city}</div>
                                    </div>


                                    <div _ngcontent-c26="" className="address-lbl">KONTAKT INFO</div>
                                    <div _ngcontent-c26="" className="add-info">{orderOverview.firstName} {orderOverview.lastName}</div>
                                    <div _ngcontent-c26="" className="add-info">{orderOverview.phone}</div>
                                    <div _ngcontent-c26="" className="add-info">{orderOverview.email}</div>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-c26="" className="col-sm-6">
                            <div _ngcontent-c26="" className="left">
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
                                                            Betal med PayPal
                                    </span>
                                                    </div>
                                                    <div _ngcontent-c29="" className="cod-info">
                                                        NOTE: Flere betalingsmetoder er på vej :)
                                  </div>
                                                </div>

                                                <div _ngcontent-c29="" className="pay-btn-wrap">
                                                    <div _ngcontent-c29="" _nghost-c30="">

                                                        <PayPalButton
                                                            createOrder={createPayPalOrder}
                                                            onSuccess={onSuccessPayPal}
                                                            onApprove={() => {
                                                            }}
                                                            options={{
                                                                clientId: "sb",
                                                                currency: "DKK"
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
            }
        </div >
    )
}