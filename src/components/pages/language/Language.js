import React, {Component} from 'react';

class Language extends Component {
    render() {
        return (
            <div>
                <div className="card red lighten-2 z-depth-0">
                    <div className="card-content">
                        <h6 className="white-text">
                            <strong>Limbi vorbite</strong>
                        </h6>
                        <hr />
                        <div className="row pt">
                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3 pt">Română</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '100%'}}></div>
                                </div>
                            </div>
                        <br/><br/><br/>

                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3 pt">Engleza</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '80%'}}></div>
                                </div>
                            </div>

                            <br/><br/><br/>

                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3 pt">Germana</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '45%'}}></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Language;