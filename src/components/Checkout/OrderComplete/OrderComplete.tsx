import { IOrderCompletedProps } from '../../../models/IProps';
import './order-complete.css';
import { Redirect, useHistory } from 'react-router-dom';

export default function OrderComplete(props: IOrderCompletedProps) {
    const history = useHistory();
    let completedOrder = props.orderOverview;
    let paymentIsDone = props.paymentIsDone;

    return (
        <div id="confirmation">
            {!paymentIsDone && <Redirect to="/" />}
            {paymentIsDone &&
                <div id="content">
                    <div id="top-image"></div>
                    <h1 style={{ paddingTop: "15px" }}>TAK FOR DIT KØB</h1>
                    <p>
                        Vi pakker din order og sender den hurtigst muligt
                    </p>
                    <div id="summary">
                        <div>
                            <h2>Leverings Detaljer</h2>
                            <p><span className="info-title">Navn:</span>
                                <span className="pull-right info-title">
                                    {completedOrder.firstName} {completedOrder.lastName}
                                </span>

                            </p>
                            {/* {completedOrder.hasServicePoint &&
                                <p>
                                    <span className="info-title">Udleveringssted:</span>
                                    <span className="pull-right info-title">{completedOrder.servicePointName}
                                    </span>
                                </p>} */}
                            <p>
                                <span className="info-title">Adresse</span>
                                <span className="pull-right info-title">{completedOrder.address}, {completedOrder.zipcode}  {completedOrder.city}
                                </span>
                            </p>
                            <p>
                                <span className="pull-right">

                                </span>
                            </p>
                            <br />

                        </div>
                        <div>
                            <h2>Order Detaljer</h2>
                            <p>
                                <span className="info-title">Order ID.</span>

                                <span className="pull-right info-title">
                                    {completedOrder.orderId}
                                </span>


                            </p>

                            <p><span className="info-title">Antal af vare</span>

                                <span className="pull-right info-title">
                                    {completedOrder.totalQuantity}
                                </span>

                            </p>
                            <p><span className="info-title">Total beløb</span>
                                <span className="pull-right info-title">
                                    {completedOrder.totalPrice} DKK
                                </span>
                            </p>
                        </div>
                    </div>

                    <div>
                        <a style={{ cursor: "pointer" }} className="goToFrontPage" onClick={() => {
                            props.setPaymentDone(false);
                            history.push('/');
                        }}>GÅ TIL FORSIDE</a>
                    </div>
                </div>
            }
        </div>

    )
}

