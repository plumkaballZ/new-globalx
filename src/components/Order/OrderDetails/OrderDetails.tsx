import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { IOrderDetailsProps } from "../../../models/IProps";
import { LineItem } from "../../../models/LineItem";
import './order-details.css';

export default function OrderDetails(props: IOrderDetailsProps) {
    const history = useHistory();

    let order = props.selectedUserOrder;
    let hasOrder = (Object.keys(order).length !== 0);
    let loggedInUser = props.loggedInUser;

    let addrs = order.ship_Address;
    let totalQuantity: number = 0;

    const renderLineItems: any[] = [];

    if (hasOrder) {
        order.line_items.forEach(x => totalQuantity += x.quantity);
        order.line_items.map((value: LineItem, index: Number) => {
            renderLineItems.push(
                <div _ngcontent-c8="" _nghost-c12="" key={"lineItem" + index.toString()}>
                    <div _ngcontent-c12="" className="prod-item">
                        <div _ngcontent-c12="" className="col1">
                            <img _ngcontent-c12="" alt="" src={value.prod.smallImage} />
                        </div>
                        <div _ngcontent-c12="" className="col2">
                            <div _ngcontent-c12="" className="prod-name">
                                <a _ngcontent-c12="" className="c-gray">
                                    {value.prod.name}
                                </a>
                            </div>

                            <div _ngcontent-c12="" className="size-qty-wrap">
                                <div _ngcontent-c12="" className="size-qty">
                                    {value.prod.hasVariants &&
                                        <span _ngcontent-c12="" className="size">


                                            {
                                                value.size ?
                                                    <span _ngcontent-c12="" className="gray">Størrelse:</span>
                                                    :
                                                    <span _ngcontent-c12="" className="gray">Farve:</span>
                                            }
                                            <span _ngcontent-c12="" className="value">{value.size ? value.size : value.color}</span>

                                        </span>
                                    }
                                    <span _ngcontent-c12="" className="qty">
                                        <span _ngcontent-c12="" className="gray">Antal:</span>
                                        <span _ngcontent-c12="" className="value">{value.quantity}</span>
                                    </span>
                                    <span _ngcontent-c12="" className="qty">
                                        <span _ngcontent-c12="" className="gray">Pris:</span>
                                        <span _ngcontent-c12="" className="value">{value.price.toFixed(2)} DKK</span>
                                    </span>

                                </div>
                                <div _ngcontent-c12="" className="seller"></div>
                            </div>
                            <div _ngcontent-c12="" className="prod-amount">
                                Samlet beløb: {(value.price * value.quantity).toFixed(2)} DKK
                        </div>
                        </div>
                    </div>

                </div>

            )
        });
    }
    return (
        <div _nghost-c15="">
            {!hasOrder && <Redirect to="/orders" />}
            {hasOrder &&
                <div>
                    <div _ngcontent-c15="">
                        <div _ngcontent-c15="" className="panel panel-default">
                            <div _ngcontent-c15="" className="panel-body">
                                <div _ngcontent-c15="" className="row">
                                    <div _ngcontent-c15="" className="active col-md-12">
                                        <div _ngcontent-c15="" className="row">

                                            <div _ngcontent-c15="" className="col-md-4" style={{ marginTop: "10px" }}>
                                                <small _ngcontent-c15="">ORDER ID.</small>
                                                <p _ngcontent-c15="">
                                                    <i _ngcontent-c15="" aria-hidden="true" className="fa fa-"></i>
                                                    {order.id}
                                                </p>
                                            </div>

                                            <div _ngcontent-c15="" className="col-md-4" style={{ marginTop: "10px" }}>
                                                <small _ngcontent-c15="">STATUS</small>
                                                <div _ngcontent-c15="" className="status">
                                                    {order.shipment_State === "1" &&

                                                        <div style={{ color: "#e29b10" }}>Afventer bekræftelse</div>

                                                    }
                                                    {order.shipment_State === "0" &&

                                                        <div className="orderIsSent" style={{ color: "#1d886d" }}>Er afsendt</div>

                                                    }

                                                </div>
                                            </div>

                                            <div _ngcontent-c15="" className="col-md-4" style={{ marginTop: "10px" }}>
                                                <small _ngcontent-c15="">ANTAL VARE</small>
                                                <p _ngcontent-c15="">
                                                    {totalQuantity}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <hr _ngcontent-c15="" />
                                {renderLineItems}
                            </div>

                        </div>
                    </div>


                    <h5 _ngcontent-c15="">FORSENDELSESDETALJER</h5>
                    <div _ngcontent-c15="" className="panel panel-default col-md-4">
                        <div _ngcontent-c15="" className="row panel-body">
                            <div _ngcontent-c15="" className="">
                                <address _ngcontent-c15="">
                                    <strong _ngcontent-c15="">{addrs.firstname} {addrs.lastname}</strong><br _ngcontent-c15="" />
                                    <span _ngcontent-c15="">{addrs.email}</span><br _ngcontent-c15="" />
                                    <span _ngcontent-c15="">{addrs.phone}</span><br _ngcontent-c15="" />
                                    {/* <strong _ngcontent-c15="">{addrs.phone}</strong><br _ngcontent-c15="" />
                                    <div _ngcontent-c15="" title="Phone"></div> {addrs.phone}
                                    <div _ngcontent-c15="" title="Phone"></div> {addrs.email} */}

                                    <br _ngcontent-c15="" />
                                    {addrs.address1}<br _ngcontent-c15="" />
                                    {addrs.zipcode} {addrs.city}<br _ngcontent-c15="" />

                                </address>
                            </div>
                        </div>
                    </div>

                    {loggedInUser.lvl === 99 &&
                        <div className="col-md-4 pull-right">
                            <button _ngcontent-c15="" className="order-btn" onClick={() => {
                            }}>BEKRÆFT ORDER</button>
                        </div>
                    }

                </div>
            }

        </div>

    )
}
