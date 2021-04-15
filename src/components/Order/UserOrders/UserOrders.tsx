import { useHistory } from "react-router-dom";
import { IUserOrderProps } from "../../../models/IProps";
import { Order } from "../../../models/Order";
import './user-orders.css';

export default function UserOrders(props: IUserOrderProps) {
  const history = useHistory();

  let userOrders = props.userOrders;
  let hasOrders = userOrders.length === 0 ? false : true;

  let renderOrders: any[] = [];

  if (userOrders != null) {
    userOrders.map((value: Order, index: number) => {
      renderOrders.push(
        <div _ngcontent-c18="" key={"order_" + index.toString()}>
          <div _ngcontent-c18="" _nghost-c19="">
            <div _ngcontent-c19="" className="panel panel-default">
              <div _ngcontent-c19="" className="panel-body">
                <h5 _ngcontent-c19="" className="active">
                  {value.id} / {value.email}
                </h5>
                <small _ngcontent-c19="">
                  Betalingsdato: {new Date(value.created_At).toDateString()}
                  <i _ngcontent-c19="" aria-hidden="true" className="fa fa-"></i>
                </small>

                <hr _ngcontent-c19="" />
                <h5 _ngcontent-c19="" className="strong">

                  Orderstatus:
              <div _ngcontent-c19="">
                    {value.shipment_State}
                  </div>

                  <div _ngcontent-c19="" className="pull-right">
                    <a _ngcontent-c19="" className="view-details-link strong" onClick={() => {
                      props.setUserOrder(value);
                      history.push('/orders/details');
                    }}> Detaljer</a>
                  </div>
                </h5>
              </div>
            </div>
          </div>
        </div>
      )
    });
  }

  return (
    <div _nghost-c16="">
      <div _ngcontent-c16="" className="container-fluid user_fluid">
        <div _ngcontent-c16="" className="col-md-12">

          <div _ngcontent-c16="">
            <h4 _ngcontent-c16="">Hej Anthony Shevlin, velkommen!</h4>
          </div>
          <hr _ngcontent-c16="" />
        </div>

        <div _ngcontent-c16="" className="col-md-12">

          <div _nghost-c18="">

            {(hasOrders) &&
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
                  href="https://shevlin.co/home">Køb noget</a>
              </div>
            }

          </div>
        </div>
      </div>
    </div>
  )
}