import shevlin_logo from './../../../assets/logo/shevlin_logo_white.png';
import './footer.css';
import { Link, useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();
  return (
    <div _ngcontent-c0="" _nghost-c6="">
      <footer _ngcontent-c6="" className="footer-distributed">
        <div _ngcontent-c6="" className="row">
          <div _ngcontent-c6="" className="col-md-12">
            <div _ngcontent-c6="" className="leftBottom  ">

              <a _ngcontent-c6="" className="navbar_brand_footer">

                <img _ngcontent-c6="" alt="" style={{ cursor: "pointer" }} src={shevlin_logo}
                  onClick={() => { history.push('/'); }} />
              </a>
              <span _ngcontent-c6="" className="txt-color-white ng-binding" style={{ marginRight: '15px' }}>
                CVR nr. 38 95 98 24 |
                  <Link _ngcontent-c6="" className="linkz" to="/info">Facts</Link>
                  |
                  <Link _ngcontent-c6="" className="linkz" to="/contact">Contact</Link>
                  |
                  <Link _ngcontent-c6="" className="linkz" to="/terms">Conditions</Link>
                  |
                  <Link _ngcontent-c6="" className="linkz" to="/cookiepolicy">Privacy Policy</Link>

                <a className="linkz social-media-link social-media-link--instagram" href="https://www.instagram.com/shevlin.co_/">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>

                <a className="linkz social-media-link social-media-link--facebook" href="https://www.facebook.com/Shevlin.co/">
                  <i className="fa fa-facebook-f" aria-hidden="true"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}