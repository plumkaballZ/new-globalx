import './product-filter.css'

export default function ProductFilter() {
    return (
        <div _ngcontent-c7="" _nghost-c9="">
            <form _ngcontent-c9="" action="https://shevlin.co/#" className="search-form ng-untouched ng-pristine ng-valid" id="search-form" method="post" role="search">

                <section _ngcontent-c9="" className="search-terms">
                    <label _ngcontent-c9="" className="search-term-label screen-reader-text">Search Terms</label>
                    <div _ngcontent-c9="">
                    </div>
                </section>

                <section _ngcontent-c9="" className="search-filters" id="search-filters">
                    <h3 _ngcontent-c9="" className="search-filters-title" id="search-filters-title">Categories</h3>
                    <div _ngcontent-c9="" className="size-filters filter-group">
                        <div _ngcontent-c9="" className="filter-box">
                            <ul _ngcontent-c9="" className="taxonomy">
                                <label _ngcontent-c9="">CLOTHING</label>

                                <li _ngcontent-c9="" className="filter">
                                    <label _ngcontent-c9="" className="vertical-filters-label common-customCheckbox">
                                        <input _ngcontent-c9="" type="checkbox" /> Socks
                                            <div _ngcontent-c9="" className="common-checkboxIndicator"></div>
                                    </label>
                                </li>

                            </ul>
                            <ul _ngcontent-c9="" className="taxonomy">

                                <label _ngcontent-c9="">ACCESSORIES</label>

                                <li _ngcontent-c9="" className="filter">
                                    <label _ngcontent-c9="" className="vertical-filters-label common-customCheckbox">
                                        <input _ngcontent-c9="" type="checkbox" /> Cardholders
                                            <div _ngcontent-c9="" className="common-checkboxIndicator"></div>
                                    </label>
                                </li>
                                <li _ngcontent-c9="" className="filter">
                                    <label _ngcontent-c9="" className="vertical-filters-label common-customCheckbox">
                                        <input _ngcontent-c9="" type="checkbox" /> Belts
                                            <div _ngcontent-c9="" className="common-checkboxIndicator"></div>
                                    </label>
                                </li>
                                <li _ngcontent-c9="" className="filter">
                                    <label _ngcontent-c9="" className="vertical-filters-label common-customCheckbox">
                                        <input _ngcontent-c9="" type="checkbox" /> Key hangers
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
