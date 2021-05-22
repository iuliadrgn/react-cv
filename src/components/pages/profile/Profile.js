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
                        <a href="https://www.facebook.com/iuliaa.dragan/" target="blank">
                            <i className="fab white-text fa-facebook-square fa-2x"></i>
                        </a>
                        <a href="https://github.com/iuliadrgn" target="blank">
                            <i className="fab white-text fa-github-square fa-2x"></i>
                        </a>
                    </div>
                </div>
                <div className="card red lighten-2 z-depth-0">
                    <div className="card-content">
                        <h6 className="white-text">
                            <strong>*Despre mine</strong>
                        </h6>
                        <hr />
                        <p className="grey-text text-lighten-3 pt">
                            Sunt studenta la Facultatea de Automatica și Calculatoare, în anul 3. Obiectivul meu este să îmi extind cunoștințele și să dobândesc experiență în domeniul programării
                            și nu numai. Sunt o persoana deschisa și sunt dornica să învăț.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;