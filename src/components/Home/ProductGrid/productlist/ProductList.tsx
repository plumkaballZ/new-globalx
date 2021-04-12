import { useState } from 'react';
import { IProductListProps } from '../../../../models/IProps';
import { LineItem } from '../../../../models/LineItem';
import { Product } from '../../../../models/Product';
import { orderService } from '../../../../services/OrderService';
import './product-list.css'

export default function ProductList(props: IProductListProps) {

    let [executing, setExecuting] = useState(false);
    let renderItems: any[] = [];
    let allProds = props.allProducts;

    if (allProds != null) {
        allProds.map((value: Product, index: number) => {
            renderItems.push(
                <li key={"prod" + index.toString()} _ngcontent-c12="" className="product-base" itemScope itemType="https://schema.org/Product" style={{ margin: '0px 15px 20px 0px' }}>
                    <div _ngcontent-c12="" className="product-thumbShim"></div>

                    <a _ngcontent-c12="" itemProp="url" onClick={() => {
                        props.goToIndex(index);
                    }}>
                        <img _ngcontent-c12="" className="product-thumb" itemProp="image" alt="Belt" src={value.smallImage} />
                        <div _ngcontent-c12="" className="product-productMetaInfo">
                            <div _ngcontent-c12="" className="product-brand" itemProp="name">{value.shortName}</div>
                            <h2 _ngcontent-c12="" className="product-product prodName">By Shevlin</h2>
                            <div _ngcontent-c12="" className="product-price" itemProp="offers" itemType="https://schema.org/Offer">
                                <span _ngcontent-c12="">
                                    <span _ngcontent-c12="" className="product-discountedPrice" itemProp="price">{value.displayPrice}</span>
                                </span>
                            </div>
                        </div>
                    </a>

                    <div _ngcontent-c12="" className="product-actions">
                        <span _ngcontent-c12="" className="product-actionsButton product-addToaddToBag" onClick={async () => {

                            if (executing === false) {

                                setExecuting(true);

                                var newOrderLine =
                                    orderService.createNewOrderLine(value, 1, value.defaultVariant);

                                props.addOrderLineCallback(newOrderLine);

                                setExecuting(false);
                            }
                        }}>
                            <span _ngcontent-c12="" className="addToBagSpan" onClick={() => {
                            }}>ADD TO BAG</span>
                        </span>
                    </div>
                </li>
            );
        });
    }


    return (
        <div _nghost-c12="">
            <div _ngcontent-c12="" className="prodListContainer" style={{ display: '-webkit-flex' }}>

                <section _ngcontent-c12="">
                    <ul _ngcontent-c12="" className="prodListUl">
                        {renderItems}
                    </ul>
                </section>

            </div>
        </div>
    );
}