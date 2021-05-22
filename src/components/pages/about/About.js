import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className="card z-depth-0 hide-on-med-and-down pt">
                    <div className="card-content social">
                        <h2 className="grey-text text-darken-3">
                            <strong>
                                Iulia Dragan
                            </strong>
                        </h2>
                        <h5 className="red-text text-lighten-3">Studenta</h5>
                        <a href="https://www.facebook.com/iuliaa.dragan/" target="blank">
                            <i className="fab red-text text-lighten-1 fa-facebook-square fa-2x"></i>
                        </a>
                        <a href="https://github.com/iuliadrgn" target="blank">
                            <i className="fab red-text text-lighten-1 fa-github-square fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;