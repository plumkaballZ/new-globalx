import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ILoginProps } from '../../../models/IProps';
import { LocalUser } from '../../../models/LocalUser';
import { userService } from '../../../services/UserService';
import './signup.css';

export interface ISignUpFromData {
    email: string;
    password: string;
    password_confirmation: string;
    phone: string;
    newsLetter: string;
}

export default function SignUp(props: ILoginProps) {
    const history = useHistory();
    const { register, handleSubmit } = useForm<ISignUpFromData>();

    return (
        <div _nghost-c22="">
            <div _ngcontent-c22="" className="row register-container" style={{ paddingTop: "90px" }}>

                <div _ngcontent-c22="" className="col-sm-12">
                    <div _ngcontent-c22="" className="col-md-5 col-centered">

                        <div _ngcontent-c22="" className="panel panel-default">

                            <div _ngcontent-c22="" className="panel-heading">
                                <h3 _ngcontent-c22="" className="panel-title">
                                    Bliv vores ven

                        </h3>
                            </div>

                            <div _ngcontent-c22="" className="panel-body" data-hook="login" id="existing-customer">
                                <p _ngcontent-c22="" className="register-button-info-text register-info-text">
                                    Log på med email:
                        </p>
                                <form _ngcontent-c22="" className="register-register-form ng-untouched ng-pristine ng-invalid"
                                    onSubmit={handleSubmit(async (data: ISignUpFromData, event: any) => {
                                        if (data.password !== data.password_confirmation) {
                                            alert("password er ikke det samme");
                                            return;
                                        }
                                        event.preventDefault();
                                        let res = await userService.signUpUser(data) as any;

                                        if (res) {
                                            if (res.resString === "user already exists") {
                                                alert("bruger findes allarede");
                                                return;
                                            }
                                            if (res.resString === "ok") {
                                                let user = res.user;
                                                LocalUser.setEmail(user.email)
                                                LocalUser.setPw(user.password);
                                                props.loginUserAndGoToFrontpage();
                                            }
                                        }

                                    })}
                                    noValidate={false}>
                                    <fieldset _ngcontent-c22="" className="register-input-container">

                                        <div _ngcontent-c22="" className="register-input-item">
                                            <input ref={register} required={true} _ngcontent-c22="" autoComplete="off"
                                                className="register-user-input-email register-user-input ng-untouched ng-pristine ng-invalid"
                                                formMethod="email" name="email" type="email" placeholder="Din email" />
                                        </div>

                                        <div _ngcontent-c22="" className="register-input-item">
                                            <input _ngcontent-c22="" autoComplete="off"
                                                required={true} ref={register}
                                                className="register-user-input-password register-user-input ng-untouched ng-pristine ng-invalid"
                                                formMethod="password" name="password" type="password"
                                                placeholder="Vælg et password" />
                                        </div>

                                        <div _ngcontent-c22="" className="register-input-item">
                                            <input _ngcontent-c22="" autoComplete="off"
                                                required={true} ref={register}
                                                className="register-user-input-password register-user-input ng-untouched ng-pristine ng-invalid"
                                                formMethod="password_confirmation" name="password_confirmation" type="password"
                                                placeholder="Gentag password" />
                                        </div>

                                        <div _ngcontent-c22="" className="register-input-item">
                                            <input _ngcontent-c22=""
                                                required={true} ref={register}
                                                className="register-user-input-mobile register-user-input ng-untouched ng-pristine ng-invalid"
                                                formMethod="phone" name="phone" type="number" placeholder="Mobil nummer" />
                                        </div>

                                        <fieldset _ngcontent-c22="" className="register-gender" data-type="horizontal">
                                            <legend _ngcontent-c22="" className="register-gender-title">
                                                Vil du gerne tilmedes vores nyhedsbrev?
                              </legend>

                                            <input ref={register} _ngcontent-c22="" className="register-gender-radio ng-untouched ng-pristine ng-invalid"
                                                formMethod="gender" id="male" name="newsLetter" type="radio" value="Yes" />

                                            <label _ngcontent-c22="" className="register-gender-label"> Ja</label>

                                            <input ref={register} _ngcontent-c22="" className="register-gender-radio ng-untouched ng-pristine ng-invalid"
                                                formMethod="gender" id="female" name="newsLetter" type="radio" value="No" />

                                            <label _ngcontent-c22="" > Nej</label>

                                        </fieldset>
                                    </fieldset>

                                    <fieldset _ngcontent-c22="" className="register-register-button-container">
                                        <button _ngcontent-c22="" className="btn register-register-button">
                                            Bliv vores ven
                            </button>
                                    </fieldset>
                                </form>

                                <div _ngcontent-c22="" className="register-link-container">
                                    <small _ngcontent-c22="">
                                        <div _ngcontent-c22="" className="register-login-link">
                                            <span _ngcontent-c22="" className="register-info-text">
                                                Har du allerede en konto?
                              </span>
                                            <a _ngcontent-c22="" className="register-create-account-link register-link"
                                                onClick={() => {
                                                    history.push('/auth/login');
                                                }}>
                                                Log på here!
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