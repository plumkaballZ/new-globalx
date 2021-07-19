import { useState } from "react";


interface ICollapsibleContent {
    header: string;
    content: any;
}

export default function CollapsibleContent(props: ICollapsibleContent) {
    let [open, setOpen] = useState(false);

    return (
        <div>
            <a _ngcontent-c16="" onClick={() => setOpen(true)} className='header read-more'>
                {open === false ? props.header : ''}
            </a>

            {open ? (
                <div _ngcontent-c16="" className='' onClick={() => {
                    setOpen(false);
                }}>
                    {props.content}
                </div>
            ) : null}
        </div>
    );
};
