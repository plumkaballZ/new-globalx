import ProductFilter from './ProductFilter/ProductFilter';
import ProductGrid from './ProductGrid/ProductGrid';
import sticky_logo_2 from './../../assets/logo/shevlin_logo.png';
import './home.css'
import { IProductListProps } from '../../models/IProps';

export default function Home(props: IProductListProps) {
    return (
        <div _nghost-c7="">
            <a _ngcontent-c7="" className="navbar-brand">
                <img _ngcontent-c7="" alt="" className="stickyLogo2" src={sticky_logo_2} />
            </a>

            <div _ngcontent-c7="" className="ui inverted vertical masthead center aligned segment">
                <div _ngcontent-c7="" className="ui text container">
                    <h1 _ngcontent-c7="" className="ui inverted header">autumn</h1>
                </div>
            </div>

            <div _ngcontent-c7="" _nghost-c8="">
                <ul _ngcontent-c8="" className="bread_crumb">
                    {/* <li _ngcontent-c8="">
                            <a _ngcontent-c8="" className="crumb" href="https://shevlin.co/#">
                                <span _ngcontent-c8="">Shop</span>
                            </a>
                        </li>
                        <li _ngcontent-c8="">Categories</li> */}
                </ul>
            </div>


            <div _ngcontent-c7="" className="col-xs-12">
                <div _ngcontent-c7="" className="col-xs-3 taxCol">
                    <ProductFilter />
                </div>
                <div _ngcontent-c7="" className="col-xs-9 mainCol">
                    <ProductGrid
                        addOrderLineCallback={props.addOrderLineCallback}
                        allProducts={props.allProducts}
                        goToIndex={props.goToIndex} />
                </div>
            </div>
        </div>
    );
}
