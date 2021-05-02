import React from "react"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I'm
                    <span> Carly Gouge.</span>
                </h1>
                <p className="h-sub-text">
                Student web developer based in Kansas City
                </p>
            </header>
            <div className="icons">
                    <a target="_blank" href="https://www.linkedin.com/in/carly-gouge-570a001b9/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </a>
                    <a target="_blank" href="https://www.github.com/cgouge93" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a target="_blank" href="https://drive.google.com/file/d/1E32G3HB63SPELKBvSTiK7cFDHvvKRLYH/view" className="icon-holder">
                        <FontAwesomeIcon icon={faFile} className="icon res"/>
                    </a>
                </div>
        </div>
    )
}

export default HomePage