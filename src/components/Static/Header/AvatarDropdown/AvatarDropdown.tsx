import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { IAvatarDropDownProps } from '../../../../models/IProps';
import { LocalUser } from '../../../../models/LocalUser';
import avatar_logo from './../../../../assets/avatar.png';

export default function AvatarDropdown(props: IAvatarDropDownProps) {
    const history = useHistory();
    const [dropdownClass, setDropdownClass] = useState("dropdown");
    const wrapperRef = useRef<HTMLLIElement>(null);

    let userIsLoggedIn = (Object.keys(props.user).length !== 0);
    let userLvl = userIsLoggedIn ? props.user.lvl : 0;

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (wrapperRef.current) {
                if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                    setDropdownClass('dropdown');
                }
            }

        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <li ref={wrapperRef} _ngcontent-c13="" className={dropdownClass} onClick={() => {
            if (dropdownClass.includes('open')) {
                setDropdownClass('dropdown');
            }
            else {
                setDropdownClass('dropdown open');
            }
        }}>

            <a _ngcontent-c13="" className="dropdown-toggle" aria-haspopup="true"
                aria-expanded="true">
                <i _ngcontent-c13="" aria-hidden="true" className="fa">
                    <img _ngcontent-c13="" className="iconPics" src={avatar_logo} />
                </i>
                <span _ngcontent-c13="" className="caret"></span>
            </a>

            {!userIsLoggedIn &&
                <ul _ngcontent-c13="" className="dropdown-menu">
                    <li _ngcontent-c13="" className="divider" role="separator"></li>
                    <li _ngcontent-c13=""><a _ngcontent-c13="" style={{ cursor: "pointer" }} onClick={() => {
                        history.push('/auth/signup');
                    }}>
                        Bliv vores ven
                    </a>
                    </li>
                    <li _ngcontent-c13="" className="divider" role="separator"></li>
                    <li _ngcontent-c13=""><a _ngcontent-c13="" style={{ cursor: "pointer" }} onClick={() => {
                        history.push('/auth/login');
                    }}>Log p??</a>
                    </li>
                </ul>
            }
            {userIsLoggedIn &&
                <ul _ngcontent-c13="" className="dropdown-menu">
                    <li _ngcontent-c13="" className="divider" role="separator"></li>
                    <li _ngcontent-c13="">
                        <a _ngcontent-c13="" style={{ cursor: "pointer" }} onClick={() => {
                            history.push('/orders');
                        }}>
                            {userLvl === 99 ? 'Alle Ordre' : 'Mine Ordre'}
                        </a>
                    </li>
                    <li _ngcontent-c13="" className="divider" role="separator"></li>
                    <li _ngcontent-c13=""><a _ngcontent-c13="" style={{ cursor: "pointer" }} onClick={() => {
                        LocalUser.logOff();
                        props.logOffUserAndGoToFrontpage();
                    }}>Log af</a>
                    </li>
                </ul>
            }
        </li>
    )
}