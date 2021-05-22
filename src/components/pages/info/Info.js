import React, {Component} from 'react';

class Info extends Component {
    render() {
        return (
            <div>

                <div className="card red lighten-2 z-depth-0">
                    <div className="card-content">
                        <h6 className="white-text">
                            <strong>Info</strong>
                        </h6>
                        <hr />
                        <br/>
                        <p className="grey-text text-lighten-2 pt">
                            Data  nașterii: 02/08/2000
                        </p>
                        <p className="grey-text text-lighten-2 pt">
                            Naționalitate: Română
                        </p>
                        <p className="grey-text text-lighten-2 pt">
                            Permis de conducere: B
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Info;