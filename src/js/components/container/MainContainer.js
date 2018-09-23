import React, {Component} from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import NavBar from "../presentational/NavBar";
import MyUpgradedForm from "../presentational/MyUgradedForm";
import Cards from "../presentational/Cards";
import Title from "../presentational/Title";
import ContentTexts from "../presentational/ContentTexts";
import Banner from "../presentational/Banner";
import HalfBanner from "../presentational/HalfBanner";
import Tile from "../presentational/Tile";
import Footer from "../presentational/Footer";

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


import banner from 'SRC/img/image006.jpg'
import halfBanner from 'SRC/img/image007.jpg'


import geometrized_bgGreen from 'SRC/img/geometrized/geometrized_bgGreen.png'
import geometrized_bgPorsche from 'SRC/img/geometrized/geometrized_bgPorsche.png'
import geometrized_bgSpace from 'SRC/img/geometrized/geometrized_bgSpace.png'
import geometrized_bgLandscape from 'SRC/img/geometrized/geometrized_bgLandscape.png'
import geometrized_bgAbstract from 'SRC/img/geometrized/geometrized_bgAbstract.png'
import geometrized_bgLichKing from 'SRC/img/geometrized/geometrized_bgLichKing.png'
import geometrized_bgTyrande from 'SRC/img/geometrized/geometrized_bgTyrande.png'
import geometrized_bgAnduin from 'SRC/img/geometrized/geometrized_bgAnduin.png'
import geometrized_bgCthulu1 from 'SRC/img/geometrized/geometrized_bgCthulu1.png'
import geometrized_bgCthulu2 from 'SRC/img/geometrized/geometrized_bgCthulu2.png'
import geometrized_bgCthulu3 from 'SRC/img/geometrized/geometrized_bgCthulu3.png'
import geometrized_bgCthulu4 from 'SRC/img/geometrized/geometrized_bgCthulu4.png'
import geometrized_bgCthulu5 from 'SRC/img/geometrized/geometrized_bgCthulu5.png'

import "SRC/css/ironImage.css"


export default class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: "Random Title",
            background: bgLandscape,
            color: "#1B8BC2",
            preloadImage: geometrized_bgLandscape
        };
        this.ironImageHd = null;
    }

    hdLoaderImg = () => {
        const hdLoaderImg = new Image();

        hdLoaderImg.src = this.state.background;

        hdLoaderImg.onload = () => {
            this.ironImageHd.setAttribute(
                'style',
                `background: #ffffff url('${this.state.background}') no-repeat center; background-size: cover`
            );

            this.ironImageHd.classList.add('iron-image-fade-in');
        }
    };

    componentDidMount() {
        this.hdLoaderImg();
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    };

    handleChange = event => {
        const value = event.target.value;
        const bgMap = {
            [bgPorsche]: {primaryColor: "#CCA735", preloadImage: [geometrized_bgPorsche]},
            [bgGreen]: {primaryColor: "#468551", preloadImage: [geometrized_bgGreen]},
            [bgSpace]: {primaryColor: "#DE8A46", preloadImage: [geometrized_bgSpace]},
            [bgAbstract]: {primaryColor: "#1B8BC2", preloadImage: [geometrized_bgAbstract]},
            [bgLandscape]: {primaryColor: "#D5846F", preloadImage: [geometrized_bgLandscape]},
            [bgLichKing]: {primaryColor: "#0a426a", preloadImage: [geometrized_bgLichKing]},
            [bgTyrande]: {primaryColor: "#0D4359", preloadImage: [geometrized_bgTyrande]},
            [bgAnduin]: {primaryColor: "#304979", preloadImage: [geometrized_bgAnduin]},
            [bgCthulu1]: {primaryColor: "#231E01", preloadImage: [geometrized_bgCthulu1]},
            [bgCthulu2]: {primaryColor: "#C32029", preloadImage: [geometrized_bgCthulu2]},
            [bgCthulu3]: {primaryColor: "#05354B", preloadImage: [geometrized_bgCthulu3]},
            [bgCthulu4]: {primaryColor: "#233A40", preloadImage: [geometrized_bgCthulu4]},
            [bgCthulu5]: {primaryColor: "#48516E", preloadImage: [geometrized_bgCthulu5]},
        };

        this.setState({
            [event.target.name]: value,
            color: bgMap[value].primaryColor || "",
            preloadImage: bgMap[value].preloadImage || ""
        });

        this.hdLoaderImg()
    };

    render() {

        return (
            <div>

                <section
                    className="hero is-fullheight iron-image-preload"
                    style={{background: `#ffffff url('${this.state.preloadImage}') no-repeat center`, backgroundSize: 'cover'}}>
                </section>

                <section className="hero is-fullheight iron-image-loaded"
                         ref={imageLoadedElem => this.ironImageHd = imageLoadedElem}
                >

                    <div className="hero-head">

                        <NavBar background={this.state.background} handleChange={this.handleChange} color={this.state.color}/>
                        <MyUpgradedForm title={this.state.title} submitButtonColor={this.state.color}/>

                    </div>

                    {/*<Title/>*/}

                </section>

                <Cards name={'Cards'} color={this.state.color}/>

                <HalfBanner banner={halfBanner}/>

                <ContentTexts name={'Texts'}/>

                <Banner banner={banner}/>

                <Tile name={'Examples'} color={this.state.color}/>

                <Footer name={'Footer'}/>

            </div>
        );
    }
}
