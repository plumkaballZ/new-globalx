import { useHistory } from 'react-router-dom';
import { ICheckoutBagProps } from '../../../models/IProps';
import { LineItem } from '../../../models/LineItem';
import './checkout-bag.css';

export default function CheckoutBag(props: ICheckoutBagProps) {
    const history = useHistory();


    let currentOrderLines = props.OrderLines;
    let hasNoOrderLines = currentOrderLines === undefined || currentOrderLines.length === 0;

    let allProds = props.allProducts;
    let hasNoProds = allProds === undefined || allProds.length === 0;

    let totalPrice: number = 0;

    const renderItems: any[] = [];

    if (!hasNoOrderLines && !hasNoProds) {

        currentOrderLines.forEach(x => totalPrice += x.price * x.quantity);

        currentOrderLines.map((value: LineItem, index: number) => {
            let prod = allProds.find(x => x.variants.find(x => x.id === value.id));
            renderItems.push(
                <div _ngcontent-c8="" key={"lineItem" + index.toString()}>
                    <div _ngcontent-c8="" _nghost-c12="">
                        <div _ngcontent-c12="" className="prod-item">
                            <div _ngcontent-c12="" className="col1">
                                <img _ngcontent-c12="" alt="" src={prod?.smallImage} />
                            </div>
                            <div _ngcontent-c12="" className="col2">
                                <div _ngcontent-c12="" className="prod-name">
                                    <a _ngcontent-c12="" className="c-gray">
                                        {prod?.name}
                                    </a>
                                </div>

                                <div _ngcontent-c12="" className="size-qty-wrap">
                                    <div _ngcontent-c12="" className="size-qty">
                                        <span _ngcontent-c12="" className="size">

                                            {/* todo find better solution regarding variant */}
                                            {
                                                value.size ?
                                                    <span _ngcontent-c12="" className="gray">Størrelse:</span>
                                                    :
                                                    <span _ngcontent-c12="" className="gray">Farve:</span>
                                            }
                                            <span _ngcontent-c12="" className="value">{value.size ? value.size : value.color}</span>

                                        </span>
                                        <span _ngcontent-c12="" className="qty">
                                            <span _ngcontent-c12="" className="gray">Antal:</span>
                                            <span _ngcontent-c12="" className="value">{value.quantity}</span>
                                        </span>
                                        <span _ngcontent-c12="" className="qty">
                                            <span _ngcontent-c12="" className="gray">Pris:</span>
                                            <span _ngcontent-c12="" className="value">{value.price} DKK</span>
                                        </span>

                                    </div>
                                    <div _ngcontent-c12="" className="seller"></div>
                                </div>
                                <div _ngcontent-c12="" className="prod-amount">
                                    Samlet beløb: {value.price * value.quantity} DKK
                                </div>
                                <div _ngcontent-c12="" className="edit-move-delete">
                                    <div _ngcontent-c12="" className="actions">
                                        <span _ngcontent-c12="" className="delete-item" onClick={(e: any) => {
                                            props.removeOrderLineCallBack(value);
                                        }}>FJERN</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            );
        });
    }



    return (
        <div _nghost-c7="">
            <div _ngcontent-c7="" className="row">
                <div _ngcontent-c7="" className="cart-section">

                    {
                        (!hasNoOrderLines) &&
                        <div _ngcontent-c7="">

                            <div _ngcontent-c7="" className="col-xs-12 col-sm-8">
                                <div _ngcontent-c7="" className="left">
                                    <div _ngcontent-c7="" className="checkout-header-container">
                                        <div _ngcontent-c7="" className="checkout-header">
                                            <span _ngcontent-c7="" className="text">
                                                Antal vare i kruven ({props.numberOfOrderLines})</span>
                                        </div>
                                        <div _ngcontent-c7="" className="pull-right total-price">
                                            Total: {totalPrice.toFixed(2)} DKK</div>
                                    </div>
                                    <div _ngcontent-c7="" className="prod-set">
                                        <div _ngcontent-c7="" _nghost-c8="">
                                            {renderItems}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div _ngcontent-c7="" className="col-xs-12 col-sm-4 rect">
                                <div _ngcontent-c7="" className="right">
                                    <div _ngcontent-c7="" _nghost-c9="">
                                        <div _ngcontent-c9="" className="order-total-summary">

                                            <div _ngcontent-c9="" className="order-summary-span">
                                                <div _ngcontent-c9="" className="bag-total">
                                                    <span _ngcontent-c9="">
                                                        Din Order
                                                                </span>

                                                </div>


                                            </div>
                                            <div _ngcontent-c9="" className="order-total footer">
                                                <div _ngcontent-c9="" className="place-order">
                                                    <button _ngcontent-c9="" className="order-btn" onClick={() => {
                                                        if (props.hasAddresses) {
                                                            history.push('/checkout/address')
                                                        }
                                                        else {
                                                            history.push('/checkout/address/add')
                                                        }
                                                    }}>
                                                        TIL LEVERING
                                                                </button>
                                                </div>
                                                <div _ngcontent-c9="" className="total-amount">
                                                    <span _ngcontent-c9="" className="pull-left"> Total at betale</span>
                                                    <span _ngcontent-c9="" className="total-rupees">{totalPrice.toFixed(2)} DKK</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        (hasNoOrderLines) &&
                        <div _ngcontent-c7="" _nghost-c10=""><div _ngcontent-c10="" className="cart-empty">
                            <div _ngcontent-c10="" className="empty-cart-icon"></div>
                            <div _ngcontent-c10="" className="empty-cart-message">
                                Din Indkøbskurv er tom
                        </div>
                        </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
}