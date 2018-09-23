import React, {Component} from "react";
import {Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'

import HamburgerButton from "../helper/Hamburger"

import bgGreen from "SRC/img/image001.jpg";
import bgPorsche from "SRC/img/image002.jpg";
import bgSpace from "SRC/img/image003.jpg";
import bgAbstract from "SRC/img/image004.jpg";
import bgLandscape from "SRC/img/image005.jpg";
import bgLichKing from "SRC/img/image007.jpg";
import bgTyrande from "SRC/img/image008.jpg";
import bgAnduin from "SRC/img/image009.jpg";
import bgCthulu1 from "SRC/img/image10.jpg";
import bgCthulu2 from "SRC/img/image11.jpg";
import bgCthulu3 from "SRC/img/image12.jpg";
import bgCthulu4 from "SRC/img/image13.jpg";
import bgCthulu5 from "SRC/img/image14.jpg";

export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            toggle: false,
            hover: false
        }
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    componentDidMount() {
        window.addEventListener("resize", () => {
                if (window.innerWidth > 1087) {
                    this.setState({toggle: false});
                }
            }
        )
    }

    handleClick = () => {
        if (window.innerWidth <= 1087) {
            this.setState({toggle: !this.state.toggle});
        }
    };

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    };

    render() {

        return (
            <nav>
                <div className={`${this.state.toggle === true && "is-active"} navbar-menu is-hidden-desktop`}
                     style={{
                         backgroundColor: "transparent",
                     }}>
                    <div className="navbar-start">
                        <div className="select is-success is-rounded is-small">
                            <select name="background"
                                    value={this.props.background}
                                    onChange={this.props.handleChange}
                            >
                                <option>Select dropdown</option>
                                <option value={bgPorsche}>Background 1</option>
                                <option value={bgGreen}>Background 2</option>
                                <option value={bgSpace}>Background 3</option>
                                <option value={bgAbstract}>Background 4</option>
                                <option value={bgLandscape}>Background 5</option>
                                <option value={bgLichKing}>Background 6</option>
                                <option value={bgTyrande}>Background 7</option>
                                <option value={bgAnduin}>Background 8</option>
                                <option value={bgCthulu1}>Background 9</option>
                                <option value={bgCthulu2}>Background 10</option>
                                <option value={bgCthulu3}>Background 11</option>
                                <option value={bgCthulu4}>Background 12</option>
                                <option value={bgCthulu5}>Background 13</option>
                            </select>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <Link activeClass="active" className="Cards" to="Cards" spy={true}
                              smooth={true}>
                            <p onClick={this.handleClick} className="navbar-item has-text-white">Cards</p>
                        </Link>
                        <Link activeClass="active" className="Texts" to="Texts" spy={true} smooth={true}
                              duration={500}>
                            <p onClick={this.handleClick} className="navbar-item has-text-white">Forum</p>
                        </Link>
                        <Link activeClass="active" className="Examples" to="Examples" spy={true} smooth={true}>
                            <p onClick={this.handleClick} className="navbar-item has-text-white">Examples</p>
                        </Link>
                        <Link activeClass="active" className="Footer" to="Footer" spy={true} smooth={true}>
                            <p onClick={this.handleClick} className="navbar-item has-text-white">Footer</p>
                        </Link>
                    </div>
                </div>

                <div className="columns is-mobile is-marginless heading text-weight-bold">

                    <div className="column left has-text-white">
                        <div className="field">
                            <div className="control">
                                <div className="select is-success is-rounded is-small desktop">
                                    <select name="background"
                                            value={this.props.background}
                                            onChange={this.props.handleChange}
                                    >
                                        <option>Select dropdown</option>
                                        <option value={bgPorsche}>Background 1</option>
                                        <option value={bgGreen}>Background 2</option>
                                        <option value={bgSpace}>Background 3</option>
                                        <option value={bgAbstract}>Background 4</option>
                                        <option value={bgLandscape}>Background 5</option>
                                        <option value={bgLichKing}>Background 6</option>
                                        <option value={bgTyrande}>Background 7</option>
                                        <option value={bgAnduin}>Background 8</option>
                                        <option value={bgCthulu1}>Background 9</option>
                                        <option value={bgCthulu2}>Background 10</option>
                                        <option value={bgCthulu3}>Background 11</option>
                                        <option value={bgCthulu4}>Background 12</option>
                                        <option value={bgCthulu5}>Background 13</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column center desktop">
                        <Link activeClass="active" className="Cards" to="Cards" spy={true}
                              smooth={true}>
                            <p className="navbar-item has-text-white">Cards</p>
                        </Link>
                        <Link activeClass="active" className="Texts" to="Texts" spy={true} smooth={true}
                              duration={500}>
                            <p className="navbar-item has-text-white">Forum</p>
                        </Link>
                        <Link activeClass="active" className="Examples" to="Examples" spy={true} smooth={true}>
                            <p className="navbar-item has-text-white">Examples</p>
                        </Link>
                        <Link activeClass="active" className="Footer" to="Footer" spy={true} smooth={true}>
                            <p className="navbar-item has-text-white">Footer</p>
                        </Link>
                    </div>

                    <div className="column right">
                        <p className="navbar-item desktop has-text-white">SIGN IN </p>
                        <figure className={`navbar-item has-text-white is-hidden-desktop`}
                                onMouseEnter={this.toggleHover}
                                onMouseLeave={this.toggleHover}
                                onClick={this.scrollToTop}
                                style={{
                                    fontSize: "3rem",
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: "fixed",
                                    top: "1rem",
                                    right: "1rem",
                                    zIndex: 5,
                                    backgroundColor: `${this.props.color}`,
                                    opacity: `${this.state.hover ? 1 : 0.7}`,
                                    borderRadius: "2rem",
                                }}>
                            <HamburgerButton handleClick={this.handleClick} toggle={this.state.toggle}/>
                        </figure>
                    </div>

                </div>
            </nav>
        )
    }
}