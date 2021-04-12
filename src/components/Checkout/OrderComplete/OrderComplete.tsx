
import './order-complete.css';

export default function OrderComplete() {
    return (
        <div id="confirmation">
            <div id="content">
                <div id="top-image"></div>
                <h1>Thank you</h1>
                <p>
                    bla bla
          </p>
                <div id="summary">
                    <div>
                        <h2>Shipping info</h2>
                        <p><span className="info-title">shipped to</span>
                            <span className="pull-right">
                                ship_address.address1
                      </span>
                        </p>


                        <p><span className="info-title"></span>
                            <span className="pull-right">ship_address.city, ship_address.zipcode
                      </span>
                        </p>
                        <br />
                        <p><span className="info-title">name</span>
                            <span className="pull-right">
                                ship_address.firstname ship_address.lastname
                      </span>

                        </p>
                    </div>
                    <div>
                        <h2>orderInfo</h2>
                        <p>
                            <span className="info-title">orderId</span>

                            <span className="pull-right">
                                orderDetails.id
                        </span>


                        </p>
                        <p><span className="info-title">totalItems</span>

                            <span className="pull-right">
                                item_total
                        </span>

                        </p>
                        <p><span className="info-title">totalAmount</span>
                            <span className="pull-right">
                                total currency
                        </span>
                        </p>
                    </div>
                </div>

                <div>
                    {/* <a *ngIf="isAuthenticated" href="/user/orders">{{tranz.isAuth}}</a> */}
                    {/* <a *ngIf="!isAuthenticated" href="/auth/signup">{{tranz.isNotAuth}}</a> */}
                    <a href="/">Continue Shopping</a>
                </div>

            </div>
        </div>

    )
}