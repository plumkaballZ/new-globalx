import './header.css';
import shevlin_logo from './../../../assets/logo/shevlin_logo.png';
import shopping_bag_logo from './../../../assets/shopping-bag.png';
import { Link, useHistory, useLocation } from "react-router-dom";
import AvatarDropdown from './AvatarDropdown/AvatarDropdown';
import FlagDropdown from './FlagDropdown/FlagDropdown';
import { IHeaderProps } from '../../../models/IProps';
import { useEffect, useState } from 'react';

export default function Header(props: IHeaderProps) {
    const history = useHistory();
    const location = useLocation();

    let isFrontPage = location.pathname === '/';
    let [showLogo, setShowLogo] = useState(!isFrontPage);

    useEffect(() => {
        if (isFrontPage) {
            setShowLogo(false);
            const handleScroll = () => {
                const currentScrollY = window.scrollY;

                if (currentScrollY > 130) {
                    setShowLogo(true);
                }
                else {
                    setShowLogo(false);
                }
            };
            window.addEventListener("scroll", handleScroll, { passive: true });
            return () => window.removeEventListener("scroll", handleScroll);
        }
        else {
            setShowLogo(true);
        }

    }, [isFrontPage]);


    return (
        <div _ngcontent-c0="" _nghost-c1="">
            <nav _ngcontent-c1="" className="navbar navbar-default navbar-fixed-top" style={{ borderColor: 'transparent' }}>
                <table _ngcontent-c1="" id="wrapper">
                    <tbody _ngcontent-c1="">
                        <tr _ngcontent-c1="">
                            <td _ngcontent-c1="">
                                {showLogo &&
                                    <img _ngcontent-c1="" alt="" style={{ cursor: "pointer" }} className="shevlin_logo" src={shevlin_logo}
                                        onClick={() => { history.push('/'); }} />
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div _ngcontent-c1="" className="row">
                    <div _ngcontent-c1="" className="container">

                        <div _ngcontent-c1="" className="cartZ" style={{ float: 'right', paddingTop: '10px', display: 'block !important' }}>
                            <div _ngcontent-c1="" _nghost-c13="">
                                <ul _ngcontent-c13="" className="nav navbar-nav navbar-right" id="profDown" style={{ display: '-webkit-inline-box' }}>

                                    <li _ngcontent-c13="" className="cart" tabIndex={0} onClick={() => {
                                        history.push('/checkout/bag');
                                    }}>
                                        <a _ngcontent-c13="">
                                            <i _ngcontent-c13="" aria-hidden="true" className="fa">
                                                <img _ngcontent-c13="" className="iconPics" src={shopping_bag_logo} />
                                            </i>
                                            <span _ngcontent-c13="" className="badge badge-danger">{props.totalQuantity}</span></a>
                                    </li>

                                    <AvatarDropdown />
                                </ul>
                            </div>
                        </div>

                        <div _ngcontent-c1="" className="cartZ" style={{ float: 'right', paddingTop: '10px', display: 'block !important' }}>
                            <ul _ngcontent-c1="" className="nav navbar-nav navbar-right" id="profDown" style={{ display: '-webkit-inline-box' }}>
                                <li _ngcontent-c1="" className="cart" tabIndex={0}>
                                    <a _ngcontent-c1="">
                                        <i _ngcontent-c1="" aria-hidden="true" className="fa"></i><span _ngcontent-c1="" className="badge badge-danger"></span>
                                    </a>
                                </li>

                                <FlagDropdown />
                            </ul>
                        </div>

                        <div _ngcontent-c1="" className="navbar-collapse padTop">
                            <div _ngcontent-c1="" className="bla1">
                                <ul _ngcontent-c1="" className="nav navbar-nav" id="navz" style={{ display: '-webkit-inline-box' }}>
                                    <li _ngcontent-c1="" className="">
                                        <Link to="/" _ngcontent-c1="" className="az_001">Butik</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}