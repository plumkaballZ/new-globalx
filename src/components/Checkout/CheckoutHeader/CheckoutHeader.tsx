import './checkout-header.css';
import shevlin_logo from './../../../assets/logo/shevlin_logo.png';
import { useHistory, useLocation } from 'react-router-dom';

export default function CheckoutHeader() {
    const history = useHistory();
    let location = useLocation();

    let isOnBagPage = location.pathname.includes('bag');
    let isOnAddressPage = location.pathname.includes('address');
    let isOnPayment = location.pathname.includes('payment');

    return (
        <div _ngcontent-c0="" _nghost-c2="">
            <nav _ngcontent-c2="" className="navbar navbar-default navbar-fixed-top" style={{ borderColor: "transparent" }}>
                <div _ngcontent-c2="" className="row">
                    <div _ngcontent-c2="" className="container">


                        <a _ngcontent-c2="" className="navbar-brand" >
                            <img _ngcontent-c2="" alt="" style={{ cursor: "pointer" }} src={shevlin_logo}
                                onClick={() => { history.push('/'); }} />
                        </a>

                        <ol _ngcontent-c2="" className="checkout-steps">
                            <li _ngcontent-c2="" className="step step1">
                                <a _ngcontent-c2="" className={`${isOnBagPage ? "active" : "can-click"}`} onClick={() => {
                                    if (isOnAddressPage || isOnPayment) {
                                        history.push('/checkout/bag');
                                    }
                                }}>KURV</a>
                            </li>
                            <li _ngcontent-c2="" className="divider"></li>
                            <li _ngcontent-c2="" className="step step2">
                                <a _ngcontent-c2="" className={`${isOnAddressPage ? "active" : "can-click"}`} onClick={() => {
                                    if (isOnPayment) {
                                        history.push('/checkout/address');
                                    }

                                }}>LEVERING</a>
                            </li>
                            <li _ngcontent-c2="" className="divider"></li>
                            <li _ngcontent-c2="" className="step step3">
                                <a _ngcontent-c2="" className={`${isOnPayment ? "active" : "can-click"}`}>
                                    BETALING</a>
                            </li>
                        </ol>
                    </div>
                </div>

            </nav>

        </div>);
}