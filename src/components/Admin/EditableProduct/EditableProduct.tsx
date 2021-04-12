import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import EditableElement from "../../../functions/EditableElement";
import { IEditableProductProps } from "../../../models/IProps";
import { Product } from "../../../models/Product";
import './editable-product.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default function EditableProduct(props: IEditableProductProps) {

    let params = useParams() as any;
    let editableProd = props.allProducts[params.index];

    let oldName = editableProd.name;
    let [name, setName] = useState("");

    let oldLi01 = editableProd.liArray[0];
    let oldLi02 = editableProd.liArray[1];
    let oldLi03 = editableProd.liArray[2];

    let [li01, setLi01] = useState("");
    let [li02, setLi02] = useState("");
    let [li03, setLi03] = useState("");

    let oldDescription = editableProd.description;
    let [description, setDescription] = useState("");

    let oldMetaDescription = editableProd.metaDescription;
    let [metaDescription, setMetaDescription] = useState("");

    let oldPrice = editableProd.price;
    let [price, setPrice] = useState("");
    let oldDisplayPrice = editableProd.displayPrice;
    let [displayPrice, setDisplayPrice] = useState("");


    let inputRef = useRef();

    const updateProduct = (prod: Product) => {

        prod.name = name ? name : oldName;
        prod.shortName = name ? name : oldName;
        prod.description = description ? description : oldDescription;
        prod.metaDescription = metaDescription ? metaDescription : oldMetaDescription;
        prod.liArray[0] = li01 ? li01 : oldLi01;
        prod.liArray[1] = li02 ? li02 : oldLi02;
        prod.liArray[2] = li03 ? li03 : oldLi03;
        prod.price = price ? price : oldPrice;
        prod.displayPrice = displayPrice ? displayPrice : oldPrice;

        console.log(prod);

        return prod;
    };


    const images = [
        {
            original: editableProd.images[0],
            thumbnail: editableProd.images[0],
        },
        {
            original: editableProd.images[1],
            thumbnail: editableProd.images[1],
        },
        {
            original: editableProd.images[2],
            thumbnail: editableProd.images[2],
        },
    ];

    const renderCustomItem = (item: any) => <span> <img _ngcontent-c12="" className="thumbnails-selected-image article-img2" itemProp="image"
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
                        <div _ngcontent-c8="" className="rowZ grpZ" itemScope={false}>
                            <div _ngcontent-c8="" className="col-xs-12 col-sm-7">
                                <div _ngcontent-c8="" _nghost-c12="">

                                    <section _ngcontent-c12="" className="cards">
                                        <article _ngcontent-c12="">

                                            <div _ngcontent-c12="" className="image-container">
                                                <ImageGallery
                                                    additionalClass={"thumbnails-selected-image article-img2"}
                                                    items={images}
                                                    showBullets={true}
                                                    showPlayButton={false}
                                                    renderItem={renderCustomItem}
                                                    renderThumbInner={renderCustomThumbnails}
                                                    useBrowserFullscreen={true}
                                                    thumbnailPosition={"bottom"} />
                                            </div>
                                        </article>
                                    </section>
                                </div>
                            </div>

                            <div _ngcontent-c8="" className="col-xs-12 col-sm-5 colZ_002">

                                <h1 _ngcontent-c8="" className="hZ_001">
                                    <span _ngcontent-c8="">
                                        <EditableElement
                                            text={name}
                                            placeholder={oldName}
                                            type="input"
                                            childref={inputRef}>
                                            <input
                                                ref={inputRef as any}
                                                type="text"
                                                name="task"
                                                placeholder={oldName}
                                                value={name}
                                                onChange={e => setName(e.target.value)} />
                                        </EditableElement>

                                    </span>
                                </h1>

                                <div _ngcontent-c8="" className="pi1">
                                    <ul _ngcontent-c8="" className="ulz_001 centered">


                                        <li _ngcontent-c8="" className="">
                                            <EditableElement
                                                text={li01}
                                                placeholder={oldLi01}
                                                type="input"
                                                childref={inputRef}>
                                                <input
                                                    ref={inputRef as any}
                                                    type="text"
                                                    name="task"
                                                    placeholder={oldLi01}
                                                    value={li01}
                                                    onChange={e => setLi01(e.target.value)} />
                                            </EditableElement>
                                        </li>
                                        <li _ngcontent-c8="" className="">
                                            <EditableElement
                                                text={li02}
                                                placeholder={oldLi02}
                                                type="input"
                                                childref={inputRef}>
                                                <input
                                                    ref={inputRef as any}
                                                    type="text"
                                                    name="task"
                                                    placeholder={oldLi02}
                                                    value={li02}
                                                    onChange={e => setLi02(e.target.value)} />
                                            </EditableElement>
                                        </li>
                                        <li _ngcontent-c8="" className="">
                                            <EditableElement
                                                text={li03}
                                                placeholder={oldLi03}
                                                type="input"
                                                childref={inputRef}>
                                                <input
                                                    ref={inputRef as any}
                                                    type="text"
                                                    name="task"
                                                    placeholder={oldLi03}
                                                    value={li03}
                                                    onChange={e => setLi03(e.target.value)} />
                                            </EditableElement>
                                        </li>
                                    </ul>
                                </div>

                                <div _ngcontent-c8="" className="pi_box" style={{ "paddingTop": "20px" }}>

                                    <div _ngcontent-c8="" className="" _nghost-c13="">
                                        <div _ngcontent-c13="" itemProp="description" style={{ color: "#6b5154" }}>
                                            <i _ngcontent-c13="">
                                                <EditableElement
                                                    text={description}
                                                    placeholder={oldDescription}
                                                    type="textarea"
                                                    childref={inputRef}>
                                                    <textarea
                                                        ref={inputRef as any}
                                                        name="description"
                                                        placeholder={oldDescription}
                                                        rows={10}
                                                        value={description}
                                                        onChange={e => setDescription(e.target.value)} />
                                                </EditableElement>
                                            </i>
                                        </div>
                                    </div>

                                    <div _ngcontent-c8="" className="" _nghost-c13="" style={{ "marginTop": "20px" }}>
                                        <div _ngcontent-c13="" itemProp="description" style={{ color: "#6b5154" }}>
                                            <i _ngcontent-c13="">
                                                <EditableElement
                                                    text={metaDescription}
                                                    placeholder={oldMetaDescription}
                                                    type="textarea"
                                                    childref={inputRef}>
                                                    <textarea
                                                        ref={inputRef as any}
                                                        name="description"
                                                        placeholder={oldMetaDescription}
                                                        rows={10}
                                                        value={metaDescription}
                                                        onChange={e => setMetaDescription(e.target.value)} />
                                                </EditableElement>
                                            </i>
                                        </div>
                                    </div>
                                    <div _ngcontent-c8="" className="" _nghost-c144="" style={{ "marginTop": "10px" }}>
                                        <div _ngcontent-c144="">
                                            <h1 _ngcontent-c144="" className="title" itemProp="name">
                                                <EditableElement
                                                    text={name}
                                                    placeholder={oldName}
                                                    type="input"
                                                    childref={inputRef}>
                                                    <input
                                                        ref={inputRef as any}
                                                        type="text"
                                                        name="task"
                                                        placeholder={oldName}
                                                        value={name}
                                                        onChange={e => setName(e.target.value)} />
                                                </EditableElement>
                                            </h1>
                                            <div _ngcontent-c144="" className="selling-price" itemProp="price">
                                                <strong _ngcontent-c144="">
                                                    <EditableElement
                                                        text={price ? price + ' DKK' : price}
                                                        placeholder={oldDisplayPrice}
                                                        type="input"
                                                        childref={inputRef}>
                                                        <input
                                                            ref={inputRef as any}
                                                            type="text"
                                                            name="task"
                                                            placeholder={oldDisplayPrice}
                                                            value={price}
                                                            onChange={(e) => {
                                                                setPrice(e.target.value);
                                                                setDisplayPrice(e.target.value + ' DKK');
                                                            }}
                                                        />
                                                    </EditableElement>
                                                </strong>
                                            </div>
                                            <p _ngcontent-c144="" className="vatInfo">
                                                inkl. moms 25%
                            </p>
                                        </div>
                                    </div>

                                    <div _ngcontent-c8="" className="" _nghost-c15="">

                                        <div _ngcontent-c15="">

                                            <div _ngcontent-c15="" className="size-buttons-size-header">
                                                <h6 _ngcontent-c15="">Size</h6>
                                            </div>

                                            <button _ngcontent-c15="" className="option-buttons selected">
                                                <p _ngcontent-c15="">
                                                    80CM
                                <span _ngcontent-c15="" className="strike"></span>
                                                </p>
                                            </button><button _ngcontent-c15="" className="option-buttons">
                                                <p _ngcontent-c15="">
                                                    85CM
                                <span _ngcontent-c15="" className="strike"></span>
                                                </p>
                                            </button><button _ngcontent-c15="" className="option-buttons">
                                                <p _ngcontent-c15="">
                                                    90CM
                                <span _ngcontent-c15="" className="strike"></span>
                                                </p>
                                            </button><button _ngcontent-c15="" className="option-buttons">
                                                <p _ngcontent-c15="">
                                                    95CM
                                <span _ngcontent-c15="" className="strike"></span>
                                                </p>
                                            </button><button _ngcontent-c15="" className="option-buttons">
                                                <p _ngcontent-c15="">
                                                    100CM
                                <span _ngcontent-c15="" className="strike"></span>
                                                </p>
                                            </button>

                                        </div>
                                    </div>

                                    <div _ngcontent-c8="" id="app">
                                        <div _ngcontent-c8="" data-reactroot="">
                                            <p _ngcontent-c8="">Antal</p>
                                            <div _ngcontent-c8="" className="quantity-input">
                                                <button _ngcontent-c8=""
                                                    className="quantity-input__modifier quantity-input__modifier--left">—</button>
                                                <input _ngcontent-c8="" className="quantity-input__screen" type="text" />
                                                <button _ngcontent-c8=""
                                                    className="quantity-input__modifier quantity-input__modifier--right">＋</button>
                                            </div>
                                        </div>
                                    </div>


                                    <div _ngcontent-c8="" className="buttons">
                                        <button _ngcontent-c8="" className="pdp-add-to-bag pdp-button" onClick={() => {
                                            let updatedProd = updateProduct(editableProd);
                                            props.upsertProduct(updatedProd);
                                        }}>GEM</button>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}