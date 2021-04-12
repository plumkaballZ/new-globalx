import { useEffect, useState } from "react";


interface IEditableElement {
    text: string;
    type: string;
    placeholder: string;
    childref: any;
    children: any;
}

export default function EditableElement(props: IEditableElement) {
    let [isEditing, setEditing] = useState(false);

    let handleKeyDown = (event: any, type: any) => {
    };


    useEffect(() => {
        if (props.childref && props.childref.current && isEditing === true) {
            props.childref.current.focus();
        }
    }, [isEditing, props.childref]);

    return (
        <section {...props}>
            {isEditing ? (
                <div
                    onBlur={() => setEditing(false)}
                    onKeyDown={e => handleKeyDown(e, props.type)}
                >
                    {props.children}
                </div>
            ) : (
                <div onClick={() => setEditing(true)}>
                    <span>
                        {props.text || props.placeholder || "Editable content"}
                    </span>
                </div>
            )}
        </section>
    );
};
