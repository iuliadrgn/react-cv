import React, {Component} from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card red lighten-2 z-depth-0">
                    <div className="card-content">
                        <h6 className="white-text">
                            <strong>*Abilități</strong>
                        </h6>
                        <hr />
                        <div className="row pt">
                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3 pt">Java</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '75%'}}></div>
                                </div>
                            </div>

                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3 pt">C</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '75%'}}></div>
                                </div>
                            </div>

                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3 pt">Microsoft Office</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '95%'}}></div>
                                </div>
                            </div>

                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3 pt">HTML,CSS</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '70%'}}></div>
                                </div>
                            </div>

                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3 pt">Matlab</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '30%'}}></div>
                                </div>
                            </div>

                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3 pt">Assembly</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '30%'}}></div>
                                </div>
                            </div>

                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3 pt">Linux, Scripts</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '57%'}}></div>
                                </div>
                            </div>
                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3 pt">Angular</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '35%'}}></div>
                                </div>
                            </div>

                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3 pt">TypeScript/JavaScript</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '25%'}}></div>
                                </div>
                            </div>

                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3 pt">React</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{width: '25%'}}></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;