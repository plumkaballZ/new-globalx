import { IProductListProps } from '../../../models/IProps';
import './product-grid.css'
import ProductList from './productlist/ProductList';

export default function ProductGrid(props: IProductListProps) {
    return (
        <div _ngcontent-c7="">
            <div _nghost-c10="">
                <div _ngcontent-c10="" className="content showHide">
                    <div _ngcontent-c10="" className="queried-for">
                        <h4 _ngcontent-c10="" className="q" title="men casual shirts">Viser tilgængelige produkter</h4>
                        <span _ngcontent-c10="">&nbsp;</span>
                    </div>
                    <div _ngcontent-c10="" className="options">
                    </div>
                </div>
            </div>

            <div _nghost-c11="">
                <div _ngcontent-c11="" className="customize">
                    {/* <ul _ngcontent-c11="" className="properties">
                        <li _ngcontent-c11="" className="selected" data-filter="size_facet" data-order="0">Summer collection</li>
                    </ul> */}
                    <div _ngcontent-c11="" className="allOptions">
                    </div>
                </div>
            </div>

            <ProductList
                addOrderLineCallback={props.addOrderLineCallback}
                allProducts={props.allProducts}
                goToIndex={props.goToIndex} />
        </div>
    );
}