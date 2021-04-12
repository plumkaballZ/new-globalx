import { ILoaderProps } from '../../models/IProps';
import './loader.css';

export default function Loader(props: ILoaderProps) {
    let isHidden = !props.isLoading;
    return (
        <div _ngcontent-c0="" _nghost-c3="">
            <div _ngcontent-c3="" className="loading" hidden={isHidden}>
                <div _ngcontent-c3="" className="spinner triangles">
                    <div _ngcontent-c3="" className="tri invert"></div>
                    <div _ngcontent-c3="" className="tri invert"></div>
                    <div _ngcontent-c3="" className="tri"></div>
                    <div _ngcontent-c3="" className="tri invert"></div>
                    <div _ngcontent-c3="" className="tri invert"></div>
                    <div _ngcontent-c3="" className="tri"></div>
                    <div _ngcontent-c3="" className="tri invert"></div>
                    <div _ngcontent-c3="" className="tri"></div>
                    <div _ngcontent-c3="" className="tri invert"></div>
                </div>
            </div>
        </div>
    );
}