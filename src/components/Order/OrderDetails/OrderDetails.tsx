import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IOrderDetailsProps } from "../../../models/IProps";
import { Order } from "../../../models/Order";
import './order-details.css';

export default function OrderDetails(props: IOrderDetailsProps) {
    const history = useHistory();
    
    let order = props.selectedUserOrder;
    let addrs = order.ship_Address;

    return (
        <div _nghost-c15="">
            <div _ngcontent-c15="">
                <div _ngcontent-c15="" className="panel panel-default">
                    <div _ngcontent-c15="" className="panel-body">
                        <div _ngcontent-c15="" className="row">
                            <div _ngcontent-c15="" className="active col-md-12">
                                <div _ngcontent-c15="" className="row">

                                    <div _ngcontent-c15="" className="col-md-4" style={{ marginTop: "10px" }}>
                                        <small _ngcontent-c15="">TOTAL</small>
                                        <p _ngcontent-c15="">
                                            <i _ngcontent-c15="" aria-hidden="true" className="fa fa-"></i>
                                            {order.total}
                                        </p>
                                    </div>

                                    <div _ngcontent-c15="" className="col-md-4" style={{ marginTop: "10px" }}>
                                        <small _ngcontent-c15="">STATUS</small>
                                        <div _ngcontent-c15="" className="status">

                                            <div _ngcontent-c15="">
                                                Order sendt med GLS:
                </div>

                                        </div>
                                    </div>

                                    <div _ngcontent-c15="" className="col-md-4" style={{ marginTop: "10px" }}>
                                        <small _ngcontent-c15="">ANTAL VARE</small>
                                        <p _ngcontent-c15="">
                                            {order.shipment_State}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <hr _ngcontent-c15="" />



                        <div _ngcontent-c15="" className="prod-item">

                            <div _ngcontent-c15="" className="col1">
                                <img _ngcontent-c15="" alt="" src="./Shevlin.co.orderdetail_files/small.png" />
                            </div>
                            <div _ngcontent-c15="" className="col2">
                                <div _ngcontent-c15="" className="prod-name">
                                    <a _ngcontent-c15="" className="c-gray">
                                        Belt By Shevlin
              </a>
                                </div>

                                <div _ngcontent-c15="" className="prod-amount">
                                    Pris: 349,95 DKK
            </div>
                                <div _ngcontent-c15="" className="size-qty-wrap">
                                    <div _ngcontent-c15="" className="size-qty">

                                        <span _ngcontent-c15="" className="size">
                                            <span _ngcontent-c15="" className="gray">Størrelse:</span>
                                            <span _ngcontent-c15="" className="value">80CM</span>
                                        </span>




                                        <span _ngcontent-c15="" className="qty">
                                            <span _ngcontent-c15="" className="gray">Antal:</span>
                                            <span _ngcontent-c15="" className="value">1</span>
                                        </span>


                                    </div>
                                    <div _ngcontent-c15="" className="seller"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <br _ngcontent-c15="" />
            <h5 _ngcontent-c15="">FORSENDELSESDETALJER</h5>
            <div _ngcontent-c15="" className="panel panel-default">
                <div _ngcontent-c15="" className="row panel-body">
                    <div _ngcontent-c15="" className="col-md-12">
                        <h5 _ngcontent-c15="">Order No: {order.id}</h5>
                    </div>

                    <br _ngcontent-c15="" />
                    <div _ngcontent-c15="" className="col-md-12">
                        <address _ngcontent-c15="">
                            <strong _ngcontent-c15="">{addrs.firstname}</strong><br _ngcontent-c15="" />
                            {addrs.address1}<br _ngcontent-c15="" />
                            {addrs.zipcode}<br _ngcontent-c15="" />
                            {addrs.city}<br _ngcontent-c15="" />
                            <abbr _ngcontent-c15="" title="Phone"></abbr> {addrs.phone}
                            <abbr _ngcontent-c15="" title="Phone"></abbr> {addrs.email}
                        </address>
                    </div>
                </div>
            </div>

            <button _ngcontent-c15="" className="pdp-add-to-bag pdp-button pull-right" onClick={() => {
                history.push('/user/orders');
            }}>BEKRÆFT ORDER</button>

        </div>
    )
}
