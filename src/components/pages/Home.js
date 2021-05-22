import React, {Component} from 'react';
import Profile from "../pages/profile/Profile";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Skills from "../pages/skills/Skills";
import Education from "../pages/education/Education";
import Projects from "../pages/projects/Projects"
import Language from "../pages/language/Language"

class Home extends Component {
    render() {
        return (
            <section>
                <div className="row sameHeight">
                    <div className="col s12 m12 l4 red lighten-2 sameHeight_child">
                        <Profile/>
                        <Contact/>
                        <Skills/>
                        <Language/>

                    </div>
                    <div className="col s12 m12 l8 white sameHeight_child">
                        <About/>
                        <Education/>
                        <Projects/>

                    </div>
                </div>
            </section>
        );
    }
}

export default Home;