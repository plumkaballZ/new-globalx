import { IProductFilterProps } from '../../../models/IProps';
import './product-filter.css'

export default function ProductFilter(props: IProductFilterProps) {

    let prodFilterArray = props.prodFilterArray;

    const handleCheckboxChange = (event: any) => {
        let value = event.target.value;
        let newArray = [...prodFilterArray, value];

        if (prodFilterArray.includes(value)) {
            newArray = prodFilterArray.filter(x => x !== value);
        }

        props.setProdFilterArray(newArray);
    };

    return (
        <div _ngcontent-c7="" _nghost-c9="">
            <form _ngcontent-c9="" action="https://shevlin.co/#" className="search-form ng-untouched ng-pristine ng-valid" id="search-form" method="post" role="search">

                <section _ngcontent-c9="" className="search-terms">
                    <label _ngcontent-c9="" className="search-term-label screen-reader-text">Search Terms</label>
                    <div _ngcontent-c9="">
                    </div>
                </section>

                <section _ngcontent-c9="" className="search-filters" id="search-filters">
                    <h4 _ngcontent-c9="" className="search-filters-title h4override" id="search-filters-title">Kategorier</h4>
                    <div _ngcontent-c9="" className="size-filters filter-group">
                        <div _ngcontent-c9="" className="filter-box">
                            <ul _ngcontent-c9="" className="taxonomy">
                                <label _ngcontent-c9="">TØJ</label>

                                <li _ngcontent-c9="" className="filter">
                                    <label _ngcontent-c9="" className="vertical-filters-label common-customCheckbox">
                                        <input value={"Sokker"} _ngcontent-c9="" type="checkbox" onChange={handleCheckboxChange} /> Sokker
                                            <div _ngcontent-c9="" className="common-checkboxIndicator"></div>
                                    </label>
                                </li>

                            </ul>
                            <ul _ngcontent-c9="" className="taxonomy">

                                <label _ngcontent-c9="">TILBEHØR</label>

                                <li _ngcontent-c9="" className="filter">
                                    <label _ngcontent-c9="" className="vertical-filters-label common-customCheckbox">
                                        <input value={"Kortholdere"} _ngcontent-c9="" type="checkbox" onChange={handleCheckboxChange} />Kortholdere
                                            <div _ngcontent-c9="" className="common-checkboxIndicator"></div>
                                    </label>
                                </li>
                                <li _ngcontent-c9="" className="filter">
                                    <label _ngcontent-c9="" className="vertical-filters-label common-customCheckbox">
                                        <input value={"Bælter"} _ngcontent-c9="" type="checkbox" onChange={handleCheckboxChange} />Bælter
                                            <div _ngcontent-c9="" className="common-checkboxIndicator"></div>
                                    </label>
                                </li>
                                <li _ngcontent-c9="" className="filter">
                                    <label _ngcontent-c9="" className="vertical-filters-label common-customCheckbox">
                                        <input value={"Nøgleringe"} _ngcontent-c9="" type="checkbox" onChange={handleCheckboxChange} />Nøgleringe
                                            <div _ngcontent-c9="" className="common-checkboxIndicator"></div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
}
