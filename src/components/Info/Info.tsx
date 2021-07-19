import './info.css';
import CollapsibleContent from "../../functions/CollapsibleContent";
import leatherPicture from './../../assets/leather.jpg';

export default function Info() {
    return (
        <div _nghost-c16="">
            <div _ngcontent-c16="" className="pusher">

                <div _ngcontent-c16="" className="ui inverted vertical masthead center aligned segment">
                    <div _ngcontent-c16="" className="ui text container">
                        <h1 _ngcontent-c16="" className="ui inverted header">
                            Shevlin
                        </h1>
                        <h2 _ngcontent-c16="">
                            Sustainability
                        </h2>
                    </div>
                </div>

                <div _ngcontent-c16="" className="ui vertical stripe segment">
                    <div _ngcontent-c16="" className="ui middle aligned stackable grid container">
                        <div _ngcontent-c16="" className="row">
                            <div _ngcontent-c16="" className="eight wide column">

                                <h3 _ngcontent-c16="" className="ui header">
                                    Vi ønsker det bedste for miljøet!
                                </h3>

                                <p _ngcontent-c16="">
                                    Fordi vi tænker så meget på miljøet bliver vores varer produceret langsommere end
                                    konventionelle produkter. Her er det bl.a. vores læder der skal garve i vandbassiner med bark
                                    i stedet for kemiske løsninger.
                                </p>

                                <CollapsibleContent
                                    header="Vores tekstiler laves af..."
                                    content={[
                                        <p _ngcontent-c16="" key="1">
                                            Vores tekstiler laves af organiske og bæredygtige materialer såsom bambus, hemp, økologisk bomuld mm.
                                            Vi stræber hele tiden efter at udvikle og producere de mest bæredygtige produkter vi kan på den mest
                                            bæredygtige måde - for dig, for mig og for os alle sammen.
                                        </p>
                                    ]} />

                                <h3 _ngcontent-c16="" className="ui header">
                                    Inspiration og Mission
                                </h3>
                                <p _ngcontent-c16="">
                                    Vi tager vores inspiration fra en velafbalanceret blanding af 1920'ernes klassiske udtryk samt
                                    det moderne og stilrene London.
                                </p>

                                <CollapsibleContent
                                    header="Vores mission er..."
                                    content={[
                                        <p _ngcontent-c16="" key="1">
                                            Vores mission er at skabe produkter til den modeinteresserede mand der ikke går på kompromis for sit udseende som samtidig også ønsker det
                                            bedste for miljøet og fremtiden. Alle vores lædervarer er lavet i hånden for at give den absolut højeste kvalitet i hvert eneste produkt.
                                        </p>
                                    ]} />

                                <p _ngcontent-c16=""></p>

                            </div>
                            <div _ngcontent-c16="" className="six wide right floated column">
                                <img _ngcontent-c16="" className="ui large bordered rounded image" src={leatherPicture} />
                            </div>
                        </div>
                    </div>
                </div>

                <div _ngcontent-c16="" className="ui vertical stripe segment">
                    <div _ngcontent-c16="" className="ui text container">
                        <h3 _ngcontent-c16="" className="ui header">

                            CODE OF CONDUCT AND CSR
                        </h3>
                        <p _ngcontent-c16="">
                            Code of Conduct og Corporate Social Responsibilities dækker over en række forskellige krav, som vi
                            sætter til os selv og vores under-leverandører

                        </p>

                        <CollapsibleContent
                            header="det gælder blandt:"
                            content={[
                                <ul _ngcontent-c16="" key="1" style={{ fontSize: "19px" }}>
                                    <li _ngcontent-c16="">
                                        Ingen børnearbejde
                                    </li>
                                    <li _ngcontent-c16="">
                                        Ingen diskrimination eller krænkelse af menneske- og arbejdsrettigheder
                                    </li>
                                    <li _ngcontent-c16="">
                                        Sundt arbejdsmiljø og faciliteter for de ansatte
                                    </li>
                                    <li _ngcontent-c16="">
                                        Miljømæssige hensyn, herunder håndtering af spildevand, forurening m.m
                                    </li>
                                </ul>
                            ]} />

                        <h4 _ngcontent-c16="" className="ui horizontal header divider">
                            <a _ngcontent-c16="" href="https://www.facebook.com/Shevlin.co/" target="_blank">Shevlin @
                                Facebook</a>
                        </h4>
                        <h3 _ngcontent-c16="" className="ui header">
                            Fremstilling af vores produkter
                        </h3>

                        <p _ngcontent-c16="">
                            Håndtering af kemikalier, er et meget vigtigt
                            element, når man får produceret produkter i Østen. Det omhandler naturligvis både miljøet men
                            også vores slutforbrugeres sikkerhed.
                        </p>

                        <CollapsibleContent
                            header="I Europa har vi selvfølgelig..."
                            content={[
                                <p _ngcontent-c16="" key="1">
                                    I Europa har vi selvfølgelig en
                                    kemikalielovgivning, der kaldes REACH forordning. REACH bygger på et hav af studier, og har via
                                    dem opsat regler og love for håndtering af kemikalier i produktion og slut-produkterne. Det
                                    betyder rent praksis at vi sætter krav til
                                </p>,
                                <ul _ngcontent-c16="" style={{ fontSize: "19px", marginTop: "10px" }} key="2">
                                    <li _ngcontent-c16="">
                                        ChromVI i læder
                                    </li>
                                    <li _ngcontent-c16="">
                                        Ulovlige Azo-farvestoffer
                                    </li>
                                    <li _ngcontent-c16="">
                                        Formaldehyd
                                    </li>
                                    <li _ngcontent-c16="">
                                        Alkylphenol, Alkulphenolethoxylates (APEO, miljøskadelige stoffer)
                                    </li>
                                    <li _ngcontent-c16="">
                                        Tungmetaller i metaldele (lynlåse, studs m.v.)
                                    </li>
                                    <li _ngcontent-c16="">
                                        PH-værdier
                                    </li>
                                </ul>
                            ]} />
                    </div>
                </div>



                <div _ngcontent-c16="" className="ui vertical stripe segment">

                    <div _ngcontent-c16="" className="ui text container">

                        <h3 _ngcontent-c16="" className="ui header">
                            OM OS
                        </h3>
                        <br _ngcontent-c16="" />
                        <p _ngcontent-c16="">
                            Oprindeligt startede vi denne virksomhed i håbet om at kunne lave et eller andet der kunne gøre en
                            forskel for vores miljø.
                        </p>

                        <CollapsibleContent
                            header="Hurtigt nåede vi til en konklusion..."
                            content={[
                                <p _ngcontent-c16="" key="1">
                                    Hurtigt nåede vi til en konklusion om at lave tilbehør samt tøj til den modebevidste mand. Der
                                    blev brugt rigtig meget tid på ideer og samtaler med vores forskellige producenter, men til sidst
                                    fandt vi frem til de der deler samme vision som vi selv gør!
                                </p>,
                                <p _ngcontent-c16="" key="2">
                                    Nu laves alle vores produkter under bæredygtige forhold, med skrappe krav omkring kemikalier samt
                                    arbejdsforhold for de ansatte i fabrikkerne.
                                </p>,
                                <p _ngcontent-c16="" key="3">
                                    Vi er stadig en meget ung virksomhed, med tro på at vores idé og vores virksomhed har stort
                                    potentiale, og derfor arbejder vi konstant på højtryk for at opnår de bedste løsninger og
                                    resultater for alt vores arbejde nu og i fremtiden
                                </p>
                            ]} />
                    </div>
                </div>

            </div>
        </div>
    );
}