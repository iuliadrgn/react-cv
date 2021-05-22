import React, {Component} from 'react';

class Hobbies extends Component {
    render() {
        return (
            <div>

                <div className="card red lighten-2 z-depth-0">
                    <div className="card-content">
                        <h6 className="white-text">
                            <strong>Hobby-uri</strong>
                        </h6>
                        <hr />
                        <br/>
                        <p className="grey-text text-lighten-2 pt">
                            <i className="fas fa-paint-brush"></i> Desenul si Pictura
                        </p>

                        <p className="grey-text text-lighten-2 pt">
                            <i className="fas fa-book-open"></i> Cititul
                        </p>

                        <p className="grey-text text-lighten-2 pt">
                            <i className="fas fa-paw"></i> Ingrijirea animalelor
                        </p>


                    </div>
                </div>

            </div>
        );
    }
}

export default Hobbies;