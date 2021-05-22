import React, {Component} from 'react';
import ImgProfile from "../../images/me.jpeg";

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="avatarImg">
                    <img className="circle responsive-img"
                         src={ImgProfile}
                         alt="Iulia Dragan"
                         />
                </div>
                <div className="card red lighten-2 z-depth-0 hide-on-large-only">
                    <div className="card-content center social">
                        <h2 className="white-text text-darken-3">
                            <strong>
                                Iulia Dragan
                            </strong>
                        </h2>
                        <h5 className="grey-text text-lighten-3">Studenta</h5>

                            <p className="solid">
                        <a href="https://www.facebook.com/iuliaa.dragan/" target="blank">
                            <i className="fab white-text fa-facebook-square fa-2x"></i>
                        </a></p>
                        <a href="https://github.com/iuliadrgn" target="blank">
                            <i className="fab white-text fa-github-square fa-2x"></i>
                        </a>
                    </div>
                </div>
                <div className="card red lighten-2 z-depth-0">







                </div>
            </div>
        );
    }
}

export default Profile;