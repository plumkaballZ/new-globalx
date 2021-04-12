import './contact.css';


export default function Contact() {
    return (
        <div _nghost-c16="">
            <div _ngcontent-c16="" className="row pusher">


                <div _ngcontent-c16="">

                    <div _ngcontent-c16="" className="col-md-6">
                        <div _ngcontent-c16="" className="title_001">
                            <h2 _ngcontent-c16="" className="">
                                Har du brug for hjælp, eller et spørgsmål?
                    </h2>
                            <span _ngcontent-c16="" className="span_001">
                                Så kontakt os, vi er altid klar til at hjælpe
                    </span>
                        </div>

                        <div _ngcontent-c16="" className="wow animated slideInLeft" data-wow-delay=".5s">
                            <input _ngcontent-c16="" className="form" id="name" name="name" required={true} type="text"
                                placeholder="Navn" />
                            <input _ngcontent-c16="" className="form" id="mail" name="mail" required={true} type="email"
                                placeholder="Email" />
                            <input _ngcontent-c16="" className="form" id="subject" name="subject" required={true} type="text"
                                placeholder="Emne" />
                        </div>

                        <div _ngcontent-c16="" className="wow animated slideInRight" data-wow-delay=".5s">
                            <textarea _ngcontent-c16="" className="form textarea" id="message" name="message"
                                placeholder="Beskrivelse"></textarea>
                        </div>

                        <div _ngcontent-c16="" className="relative fullwidth">
                            <button _ngcontent-c16="" className="form-btn semibold" id="submit" name="submit" type="submit">
                                Send
                    </button>
                        </div>
                        <div _ngcontent-c16="" className="mail-message-area">
                            <div _ngcontent-c16="" className="alert gray-bg mail-message not-visible-message">
                                <strong _ngcontent-c16="">Thank You !</strong> Your email has been delivered.
                    </div>
                        </div>
                        <div _ngcontent-c16="" className="clear"></div>
                    </div>

                    <div _ngcontent-c16="" className="col-md-6 secDiv">
                        <div _ngcontent-c16="" className="title_001">
                            <h2 _ngcontent-c16="" className="">
                                Kontakt os her på siden eller:
                    </h2>
                        </div>

                        <ul _ngcontent-c16="" className="ulz_001">
                            <li _ngcontent-c16="">
                                <h4 _ngcontent-c16="">
                                    Instagram: Shevlin.co
                      </h4>
                                <h4 _ngcontent-c16="">
                                    <div _ngcontent-c16="" className="icnz">
                                        <a _ngcontent-c16="" href="https://www.instagram.com/anthony.shevlin/"><i _ngcontent-c16=""
                                            className="fa fa-instagram"></i></a>
                                    </div>
                                </h4>
                                <h4 _ngcontent-c16="">
                                    Facebook: Shevlin.co
                      </h4>

                                <h4 _ngcontent-c16="">
                                    <div _ngcontent-c16="" className="icnz">
                                        <a _ngcontent-c16="" href="https://www.facebook.com/Shevlin.co/"><i _ngcontent-c16=""
                                            className="fa fa-facebook"></i></a>
                                    </div>
                                </h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
