import { useState } from "react";
import { Route, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { IUserOrderProps } from "../../../models/IProps";
import { LineItem } from "../../../models/LineItem";
import { Order } from "../../../models/Order";
import Loader from "../../Loader/Loader";
import OrderDetails from "../OrderDetails/OrderDetails";
import './user-orders.css';

export default function UserOrders(props: IUserOrderProps) {
  const history = useHistory();
  const match = useRouteMatch();

  let setOrderShipped = props.setOrderShipped;
  let location = useLocation();
  let isOnDetailsPage = location.pathname.includes('details');

  let [orderDetail, setOrderDetail] = useState({} as Order);

  let userOrders = props.userOrders;
  let hasOrders = userOrders.length === 0 ? false : true;
  let renderOrders: any[] = [];

  let loggedInUser = props.loggedInUser;
  let allProds = props.allProds;

  if (userOrders != null) {
    userOrders.map((value: Order, index: number) => {

      if (allProds != null) {
        value.line_items.map((lineItem: LineItem) => {
          let prod = allProds.find(x => x.variants.find(x => x.id === lineItem.id));
          if (prod != null) {
            lineItem.prod = prod;
          }
        });
      }

      let shipAddress = value.ship_Address;
      if (shipAddress != null) {
        renderOrders.push(
          <div _ngcontent-c18="" key={"order_" + index.toString()}>
            <div _ngcontent-c18="" _nghost-c19="">
              <div _ngcontent-c19="" className="panel panel-default">
                <div _ngcontent-c19="" className="panel-body">
                  <h5 _ngcontent-c19="" className="active">
                    {value.id} / {shipAddress.email}
                  </h5>
                  <small _ngcontent-c19="">
                    Betalingsdato: {new Date(value.created_At).toDateString()}
                    <i _ngcontent-c19="" aria-hidden="true" className="fa fa-"></i>
                  </small>

                  <hr _ngcontent-c19="" />

                  <h4 _ngcontent-c19="" className="strong">
                    {/* Orderstatus: */}
                    <div _ngcontent-c19="" className="col-md-6">

                      {value.shipment_State === "1" &&

                        <div style={{ color: "#e29b10" }}>Afventer bekr??ftelse</div>

                      }
                      {value.shipment_State === "0" &&

                        <div className="orderIsSent" style={{ color: "#1d886d" }}>Er afsendt</div>

                      }
                    </div>

                    <div _ngcontent-c19="" className="col-md-6" style={{ textAlign: "end" }}>
                      <a _ngcontent-c19="" className="view-details-link strong" onClick={() => {
                        setOrderDetail(value);
                        history.push(match.url + '/details');
                      }}> Detaljer</a>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        )
      }
    });
  }

  return (
    <div _nghost-c16="">
      <Loader isLoading={props.ordersAreLoding} />
      <div _ngcontent-c16="" className="container-fluid user_fluid">
        <div _ngcontent-c16="" className="col-md-12">

          <div _ngcontent-c16="">
            {loggedInUser.id && <h4>
              Hej {loggedInUser.id}! velkommen! :)
            </h4>}
            {!loggedInUser.id &&
              <h4>
                Hej og velkommen til!
              </h4>
            }
          </div>
          <hr _ngcontent-c16="" />
        </div>

        <div _ngcontent-c16="" className="col-md-12">

          <div _nghost-c18="">


            <Route exact path={match.url + '/details'} render={(props) =>
              <OrderDetails
                selectedUserOrder={orderDetail}
                loggedInUser={loggedInUser}
                setOrderShipped={setOrderShipped}
                {...props} />} />


            {(hasOrders && !isOnDetailsPage) &&
              <div _ngcontent-c18="">
                {renderOrders}
              </div>
            }

            {(!hasOrders) &&
              <div _ngcontent-c18="" className="cart-empty">
                <div _ngcontent-c18="" className="empty-cart-icon"></div>
                <div _ngcontent-c18="" className="empty-cart-message">
                  Du har ikke bestilt noget endnu
                </div>
                <a _ngcontent-c18="" className="empty-wishlist-link"
                  href="https://shevlin.co/home">K??b noget</a>
              </div>
            }

          </div>
        </div>
      </div>
    </div>
  )
}