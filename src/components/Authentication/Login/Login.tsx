import { propTypes } from 'react-bootstrap/esm/Image';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ILoginProps } from '../../../models/IProps';
import { userService } from '../../../services/UserService';
import './login.css';

interface ILoginFromData {
    email: string;
    password: string;
}

export default function Login() {
    const history = useHistory();
    const { register, handleSubmit } = useForm<ILoginFromData>();

    return (
        <div _nghost-c23="">
            <div _ngcontent-c23="" className="row register-container" data-hook="" style={{ paddingTop: "90px" }}>
                <div _ngcontent-c23="" className="col-sm-12" data-hook="" >
                    <div _ngcontent-c23="" className="col-md-5 col-centered">
                        <div _ngcontent-c23="" className="panel panel-default">
                            <div _ngcontent-c23="" className="panel-heading">
                                <h3 _ngcontent-c23="" className="panel-title">
                                    Log på Shevlin.co
                      </h3>
                            </div>
                            <div _ngcontent-c23="" className="panel-body" data-hook="login" id="existing-customer">

                                <p _ngcontent-c23="" className="register-info-text">

                                </p>
                                <form onSubmit={handleSubmit(async (data: ILoginFromData, event: any) => {
                                    event.preventDefault();
                                    let res = await userService.loginUser(data.email, data.password);
                                    if (res) {
                                        history.push('/');
                                        history.go(0);
                                    }

                                })} _ngcontent-c23="" className="register-register-form ng-untouched ng-pristine ng-invalid"
                                    noValidate={false}>
                                    <fieldset _ngcontent-c23="" className="register-input-container">
                                        <div _ngcontent-c23="" className="register-input-item">

                                            <input required={true} _ngcontent-c23="" autoComplete="off" ref={register}
                                                className="register-user-input-email register-user-input ng-untouched ng-pristine ng-invalid"
                                                formMethod="email" name="email" type="email" placeholder="Din email" />
                                        </div>
                                        <div _ngcontent-c23="" className="register-input-item">

                                            <input required={true} _ngcontent-c23="" autoComplete="off" ref={register}
                                                className="register-user-input-password register-user-input ng-untouched ng-pristine ng-invalid"
                                                formMethod="password" name="password" type="password" placeholder="Adangskode" />
                                        </div>
                                    </fieldset>
                                    <fieldset _ngcontent-c23="" className="register-register-button-container">
                                        <button _ngcontent-c23="" className="btn btn-danger register-register-button" type="submit">Log
                            in</button>
                                    </fieldset>
                                </form>
                                <div _ngcontent-c23="" className="register-link-container">
                                    <small _ngcontent-c23="">
                                        <div _ngcontent-c23="" className="register-right-links">
                                            <span _ngcontent-c23="" className="register-info-text">
                                                Glemt din adgangskode?
                            </span>
                                            <a _ngcontent-c23="" className="register-create-account-link register-link"
                                                style={{ marginLeft: "5px", cursor: "pointer" }}>
                                                Gendan adgangskode
                            </a>
                                        </div>
                                        <div _ngcontent-c23="" className="register-right-links">
                                            <span _ngcontent-c23="" className="register-info-text">
                                                Er du ny her?
                            </span>
                                            <a _ngcontent-c23="" className="register-create-account-link register-link"
                                                href="https://shevlin.co/auth">
                                                Opret konto
                            </a>
                                        </div>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}