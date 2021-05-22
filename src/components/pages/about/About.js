import React, {Component} from 'react';
import { Link } from "react-router-dom";

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
                        <p>
                        <a class="item item-icon-right" href="https://www.facebook.com/iuliaa.dragan/" target="blank">
                            <i className="fab red-text text-lighten-1 fa-facebook-square fa-2x"> </i>
                        </a>
                        <a class="item item-icon-right" href="https://github.com/iuliadrgn" target="blank">
                            <i className="fab red-text text-lighten-1 fa-github-square fa-2x"></i>
                        </a>

                        <a class="item item-icon-right" href="https://www.linkedin.com/in/iulia-dragan-2739bb20b/" target="blank">
                            <i className="fab red-text text-lighten-1 fa-linkedin fa-2x"></i>
                        </a>






                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;