import { useParams } from 'react-router-dom';
import { IProductDetailProps } from '../../models/IProps';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './product-detail.css';
import { useState } from 'react';
import { orderService } from '../../services/OrderService';
import { Variant } from '../../models/Variant';

export default function ProductDetail(props: IProductDetailProps) {
    let params = useParams() as any;
    let [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    let [quantity, setQuantity] = useState(1);

    let prod = props.allProducts[params.index];

    let prodImages: any[] = [];
    let renderVariantItems: any[] = [];

    if (prod != null) {

        prod.images.map((value: string) => {
            prodImages.push({ original: value, thumbnail: value });
        });

        prod.variants.map((val: Variant, index: number) => {
            renderVariantItems.push(
                <button key={"variantButton" + index.toString()} _ngcontent-c15="" className={`option-buttons ${index === selectedVariantIndex ? "selected" : ""}`}
                    onClick={() => {
                        setSelectedVariantIndex(index);
                    }}>
                    <p _ngcontent-c15="">
                        {val.value}
                        <span _ngcontent-c15="" className="strike"></span>
                    </p>
                </button>)
        });
    }

    const renderImageItem = (item: any) => <span> <img _ngcontent-c12="" className="thumbnails-selected-image article-img2" itemProp="image"
        src={item.original} alt="null" /></span>

    const renderCustomThumbnails = (item: any) => <section _ngcontent-c12="" className="cards img002">
        <article _ngcontent-c12="">
            <div _ngcontent-c12="" className="thumbnails-thumbnail-button">
                <img _ngcontent-c12="" className="thumbnails-thumbnail article-img"
                    src={item.original} alt="null" />
            </div>
        </article>
    </section>

    return (
        <div _nghost-c7="">
            <div _ngcontent-c7="">
                <div _ngcontent-c7="" _nghost-c8="">
                    <div _ngcontent-c8="" className="row">
                        {prod ? (
                            <div _ngcontent-c8="" className="rowZ grpZ" itemScope={false}>
                                <div _ngcontent-c8="" className="col-xs-12 col-sm-7">
                                    <div _ngcontent-c8="" _nghost-c12="">
                                        <section _ngcontent-c12="" className="cards">
                                            <article _ngcontent-c12="">

                                                <div _ngcontent-c12="" className="image-container">
                                                    <div _ngcontent-c12="" className="image-container">
                                                        <ImageGallery
                                                            items={prodImages}
                                                            showBullets={true}
                                                            showPlayButton={false}
                                                            renderItem={renderImageItem}
                                                            renderThumbInner={renderCustomThumbnails}
                                                            useBrowserFullscreen={true}
                                                            thumbnailPosition={"bottom"} />
                                                    </div>
                                                </div>
                                            </article>
                                        </section>
                                    </div>
                                </div>


                                <div _ngcontent-c8="" className="col-xs-12 col-sm-5 colZ_002">

                                    <h1 _ngcontent-c8="" className="hZ_001">
                                        <span _ngcontent-c8="">
                                            {prod.name}
                                        </span>
                                    </h1>

                                    <div _ngcontent-c8="" className="pi1">
                                        <ul _ngcontent-c8="" className="ulz_001 centered">

                                            <li _ngcontent-c8="" className="">
                                                {prod.liArray[0]}
                                            </li>
                                            <li _ngcontent-c8="" className="">
                                                {prod.liArray[1]}
                                            </li>
                                            <li _ngcontent-c8="" className="">
                                                {prod.liArray[2]}
                                            </li>
                                        </ul>
                                    </div>

                                    <div _ngcontent-c8="" className="pi_box" style={{ "paddingTop": "20px" }}>

                                        <div _ngcontent-c8="" className="" _nghost-c13="">
                                            <div _ngcontent-c13="" itemProp="description" style={{ color: "#6b5154" }}>
                                                <i _ngcontent-c13="">
                                                    {prod.description}
                                                </i>
                                            </div>
                                        </div>

                                        <div _ngcontent-c8="" className="" _nghost-c13="" style={{ "marginTop": "20px" }}>
                                            <div _ngcontent-c13="" itemProp="description" style={{ color: "#6b5154" }}>
                                                <i _ngcontent-c13="">
                                                    {prod.metaDescription}
                                                </i>
                                            </div>
                                        </div>
                                        <div _ngcontent-c8="" className="" _nghost-c144="" style={{ "marginTop": "10px" }}>
                                            <div _ngcontent-c144="">
                                                <h1 _ngcontent-c144="" className="title" itemProp="name">
                                                    {prod.name}
                                                </h1>
                                                <p _ngcontent-c144="" className="selling-price" itemProp="price">
                                                    <strong _ngcontent-c144="">
                                                        {prod.displayPrice}
                                                    </strong>
                                                </p>
                                                <p _ngcontent-c144="" className="vatInfo">inkl. moms 25%</p>
                                            </div>
                                        </div>

                                        <div _ngcontent-c8="" className="" _nghost-c15="">

                                            <div _ngcontent-c15="">

                                                <div _ngcontent-c15="" className="size-buttons-size-header">
                                                    <h6 _ngcontent-c15="">{prod.defaultVariant.type}</h6>
                                                </div>
                                                {renderVariantItems}
                                            </div>
                                        </div>

                                        <div _ngcontent-c8="" id="app" style={{ "marginTop": "20px" }}>
                                            <div _ngcontent-c8="" data-reactroot="">
                                                <h6 _ngcontent-c15="">Vælg Antal</h6>
                                                <div _ngcontent-c8="" className="quantity-input">
                                                    <button _ngcontent-c8=""
                                                        className="quantity-input__modifier quantity-input__modifier--left"
                                                        onClick={() => {
                                                            if (quantity > 1) {
                                                                quantity = quantity - 1;
                                                            }
                                                            setQuantity(quantity);
                                                        }}>—
                                                        </button>
                                                    <input _ngcontent-c8="" className="quantity-input__screen" value={quantity}
                                                        onChange={(event) => {
                                                            event.preventDefault();
                                                        }} type="text" />
                                                    <button _ngcontent-c8=""
                                                        className="quantity-input__modifier quantity-input__modifier--right"
                                                        onClick={() => {
                                                            quantity = quantity + 1;
                                                            setQuantity(quantity);
                                                        }}>＋</button>
                                                </div>
                                            </div>
                                        </div>


                                        <div _ngcontent-c8="" className="buttons">
                                            <button _ngcontent-c8="" className="pdp-add-to-bag pdp-button" onClick={() => {

                                                let selectedVariant = prod.variants[selectedVariantIndex];

                                                var newOrderLine =
                                                    orderService.createNewOrderLine(prod, quantity, selectedVariant);

                                                props.addOrderLineCallback(newOrderLine);

                                            }}>TILFØJ TIL KURV</button>
                                        </div>


                                    </div>

                                </div>
                            </div>) : (<div style={{ marginTop: '100px' }}>Produkt kunne ikke findes</div>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}
