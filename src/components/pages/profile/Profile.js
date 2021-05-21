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
                <div className="card red lighten-2 z-depth-0">
                    <div className="card-content center social">
                        <h2 className="white-text text-lighten-3">
                            <strong>
                                Iulia Dragan
                            </strong>
                        </h2>

                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;