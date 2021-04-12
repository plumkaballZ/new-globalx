import './flag-dropdown.css';
import { useState, useEffect, useRef } from 'react';
import translation_logo from './../../../../assets/translation.png';

export default function FlagDropdown() {
    const [dropdownClass, setDropdownClass] = useState("dropdown");
    const wrapperRef = useRef<HTMLLIElement>(null);

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
        <li ref={wrapperRef} _ngcontent-c1="" className={dropdownClass} onClick={() => {
            if (dropdownClass.includes('open')) {
                setDropdownClass('dropdown');
            }
            else {
                setDropdownClass('dropdown open');
            }
        }}>
            <a _ngcontent-c1="" className="dropdown-toggle" aria-haspopup="true"
                aria-expanded="true">
                <i _ngcontent-c1="" aria-hidden="true" className="fa">
                    <img _ngcontent-c1="" className="iconPics" src={translation_logo} />
                </i>
                <span _ngcontent-c1="" className="caret"></span>
            </a>

            <ul _ngcontent-c1="" className="dropdown-menu">
                <li _ngcontent-c1="" className="divider" role="separator"></li>
                <li _ngcontent-c1="">
                    <a _ngcontent-c1="" href="https://shevlin.co/user"></a>
                    <div _ngcontent-c1="" className="flagSelect" _nghost-c14="">

                        <div _ngcontent-c14="" className="ib">
                            <input _ngcontent-c14="" className="hiddenCheckBox" type="checkbox" id="dk" />
                            <label _ngcontent-c14=""><img _ngcontent-c14="" className="smallFlag"
                                src="./Shevlin.co.dropdown_files/dk.svg" /></label>
                        </div>
                        <div _ngcontent-c14="" className="ib">
                            <input _ngcontent-c14="" className="hiddenCheckBox" type="checkbox" id="gb" />
                            <label _ngcontent-c14=""><img _ngcontent-c14="" className="smallFlag"
                                src="./Shevlin.co.dropdown_files/gb.svg" /></label>
                        </div>
                    </div>
                </li>
                <li _ngcontent-c1="" className="divider" role="separator"></li>
            </ul>
        </li>
    );
}