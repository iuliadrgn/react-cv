import React, {Component} from 'react';

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="card z-depth-0">
                    <div className="card-content">
                <h5 className="grey-text text-darken-3">
                    <strong>
                        <i className="fas fa-cat"></i> Proiecte
                    </strong>
                </h5>
                <hr/>
                <div className="row mt">
                    <div className="col s12">
                        <blockquote className="content-right">
                            <h6 className="no-pad mt-bottom red-text text-lighten-1">
                                <strong>SistemGestionareCafenea</strong>
                            </h6>
                            <br/>
                            <h7 className="red-text text-lighten-1">
                                <span>Fundamente de inginerie Software </span>
                            </h7>


                            <p className=" grey-text text-darken-3 pt">
                                <br/>
                                <i className="fas fa-sun"></i> echipa de 3 persoane
                                <br/> <br/>
                                <i className="fas fa-sun"></i> Este o aplicatie simplificata in Java in care un utilizator se poate conecta cu 3 roluri:
                                Administrator, Angajat sau Furnizor. In functie de rol se pot crea cereri, oferte si contracte,
                                care pot fi acceptate sau respinse.

                                <br/>
                                <br/>
                                <i className="fas fa-sun"></i> Tehnologii si tool-uri folosite: <br/>
                                <br/>• Java
                                <br/>• JavaFx
                                <br/> • Git
                                <br/>• Gradle
                                <br/> • JUnit
                                <br/> • Jira
                                <br/>
                                <br/>
                                <i className="fas fa-sun"></i> <a href="https://github.com/iuliadrgn/SistemGestionareCafenea">https://github.com/iuliadrgn/SistemGestionareCafenea</a> <br/>

                            </p>
                        </blockquote>
                    </div>
                </div>


                <div className="row mt">
                    <div className="col s12">
                        <blockquote className="content-right">
                            <h6 className="no-pad mt-bottom red-text text-lighten-1">
                                <strong>KeepOnLearning</strong>
                            </h6>
                            <br/>
                            <h7 className="red-text text-lighten-1">
                                <span>Programarea aplicatiilor distribuite</span>
                            </h7>


                            <p className=" grey-text text-darken-3 pt">
                                <br/>
                                <i className="fas fa-sun"></i> echipa de 4 persoane
                                <br/> <br/>
                                <i className="fas fa-sun"></i> Este o aplicatie pentru elevi si profesori in care profesorii pot adauga cursuri la care vor
                                sa ajute elevii care nu se descurca, iar elevii pot sa vada cursurile disponibile in functie de diverse materii, sau sa caute un
                                anumit curs. Elevii se pot inrola la cate cursuri vor, iar pentru asta trebuie sa completeze un formular.
                                <br/>
                                <br/>
                                <i className="fas fa-sun"></i> Tehnologii si tool-uri folosite: <br/>
                                <br/>• Java
                                <br/>• Angular
                                <br/> • TypeScript
                                <br/> • HTML
                                <br/> • Spring Boot
                                <br/> • Git
                                <br/>• Maven

                                <br/>
                                <br/>
                                <i className="fas fa-sun"></i> <a href="https://github.com/CristianaLucaci/KeepOnLearningApp">https://github.com/CristianaLucaci/KeepOnLearningApp</a> <br/>
                            </p>
                        </blockquote>
                    </div>
                </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default Projects;