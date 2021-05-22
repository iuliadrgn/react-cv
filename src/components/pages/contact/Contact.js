import React, {Component} from 'react';
import {Link} from "react-router-dom";
const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="card red lighten-2 z-depth-0">
                 <div className="card-content">
                    <h6 className="white-text">
                        <strong>Contact</strong>
                    </h6>
                    <hr />
                     <br/>
                    <p className="grey-text text-lighten-2 pt">
                        <i className="fas fa-envelope-square fa-1x"></i> : <ButtonMailto label="draganiuliaandreea@gmail.com" mailto="mailto:draganiuliaandreea@gmail.com" />
                    </p>

                     <p className="grey-text text-lighten-2 pt">
                         <i className="fas fa-envelope-square fa-1x"></i> : <ButtonMailto label="iulia.dragan@student.upt.ro" mailto="mailto:draganiuliaandreea@gmail.com" />
                     </p>

                    <p className="grey-text text-lighten-2 pt">
                        <i className="fas fa-phone fa-1x"></i> : 0730589705
                    </p>
                </div>
                </div>
            </div>
        );
    }
}

export default Contact;