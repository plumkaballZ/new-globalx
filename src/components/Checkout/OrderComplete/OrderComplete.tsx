
import { IOrderCompletedProps } from '../../../models/IProps';
import './order-complete.css';

export default function OrderComplete(props: IOrderCompletedProps) {

    let completedOrder = props.orderOverview;

    return (
        <div id="confirmation">
            <div id="content">
                <div id="top-image"></div>
                <h1 style={{ paddingTop: "15px" }}>TAK FOR DIT KØB</h1>
                <p>
                    Din order bliver nu behandlet og afsendt hurtigst muligt
          </p>
                <div id="summary">
                    <div>
                        <h2>Leverings Detaljer</h2>
                        {/* <p><span className="info-title">shipped to</span>
                            <span className="pull-right">
                                ship_address.address1
                      </span>
                        </p> */}
                        <p><span className="info-title">Navn:</span>
                            <span className="pull-right info-title">
                                {completedOrder.firstName} {completedOrder.lastName}
                            </span>

                        </p>
                        {completedOrder.hasServicePoint &&
                            <p>
                                <span className="info-title">Udleveringssted:</span>
                                <span className="pull-right info-title">{completedOrder.servicePointName}
                                </span>
                            </p>}
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
                            <span className="info-title">Order nummer</span>

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
                    <a className="goToFrontPage" href="/">GÅ TIL FORSIDE</a>
                </div>

            </div>
        </div>

    )
}