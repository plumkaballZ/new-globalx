import ProductFilter from './ProductFilter/ProductFilter';
import ProductGrid from './ProductGrid/ProductGrid';
import './home.css'
import { IProductListProps } from '../../models/IProps';
import { useState } from 'react';
import { Product } from '../../models/Product';

export default function Home(props: IProductListProps) {
    let [prodFilterArray, setProdFilterArray] = useState([] as string[]);

    let filteredProds: Product[] = [];

    props.allProducts.map((prod: Product) => {
        if (prodFilterArray.includes(prod.filterCategory)) {
            filteredProds.push(prod);
        }
    });

    let hasFilteredProds = prodFilterArray !== undefined && prodFilterArray.length != 0;

    return (
        <div _nghost-c7="">
            <div _ngcontent-c7="" className="shevlin-logo-pusher">
            </div>
            <div className="shevlin-logo">
                Shevlin
            </div>
            <div _ngcontent-c7="" className="ui inverted vertical masthead center aligned segment">
                <div _ngcontent-c7="" className="ui text container">
                    <h1 _ngcontent-c7="" className="ui inverted header">SUMMER COLLECTION</h1>
                </div>
            </div>

            <div _ngcontent-c7="" _nghost-c8="">
                <ul _ngcontent-c8="" className="bread_crumb">
                </ul>
            </div>


            <div _ngcontent-c7="" className="col-xs-12">
                <div _ngcontent-c7="" className="col-xs-3 taxCol">
                    <ProductFilter
                        prodFilterArray={prodFilterArray}
                        setProdFilterArray={setProdFilterArray} />
                </div>
                <div _ngcontent-c7="" className="col-xs-9 mainCol">
                    <ProductGrid
                        addOrderLineCallback={props.addOrderLineCallback}
                        allProducts={hasFilteredProds ? filteredProds : props.allProducts}
                        goToIndex={props.goToIndex} />
                </div>
            </div>
        </div>
    );
}
