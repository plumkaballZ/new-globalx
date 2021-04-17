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
            <div _ngcontent-c6="" className="rightBottom">
              <a _ngcontent-c6="" className="navbar_brand_footer">

                <img _ngcontent-c6="" alt="" style={{ cursor: "pointer" }} src={shevlin_logo}
                  onClick={() => { history.push('/'); }} />
              </a>
            </div>
            <div _ngcontent-c6="" className="leftBottom">
              <div className="text-center">
                <ul className="list-inline social-links">
                  <li><a href="https://www.facebook.com/Shevlin.co/" target="_blank" className="btn-social btn-outline" title="Twitter"><i className="icon ion-social-facebook"></i></a>
                  </li>
                  <li style={{ marginRight: "10px" }}><a href="https://www.instagram.com/shevlin.co_/" target="_blank" className="btn-social btn-outline" title="LinkedIn"><i className="icon ion-social-instagram"></i></a>
                  </li>
                  <span _ngcontent-c6="" className="txt-color-white ng-binding" style={{ marginRight: '15px' }}>
                    CVR nr. 38 95 98 24 |
                  <Link _ngcontent-c6="" className="linkz" to="/info">Info</Link>
                  |
                  <Link _ngcontent-c6="" className="linkz" to="/contact">Kontak</Link>
                  |
                  <Link _ngcontent-c6="" className="linkz" to="/terms">Handelsbetingelser</Link>
                  |
                  <Link _ngcontent-c6="" className="linkz" to="/cookiepolicy">Privatlivspolitik</Link>
                  </span>
                </ul>

              </div>


            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}