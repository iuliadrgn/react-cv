import React, {Component} from 'react';

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
                     <br/><br/><br/>
                    <p className="grey-text text-lighten-3 pt">
                        <i className="fas fa-envelope-square fa-1x"></i> : draganiuliaandreea@gmail.com
                    </p>
                    <p className="grey-text text-lighten-3 pt">
                        <i className="fas fa-phone fa-1x"></i> : 0730589705
                    </p>
                </div>
                </div>
            </div>
        );
    }
}

export default Contact;