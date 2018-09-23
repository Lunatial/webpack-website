import React from "react";

import bnTorrentOfPower from "SRC/img/torrent-of-power.png";
import bnWellOfSouls from "SRC/img/well-of-souls.png";
import bnVauktOfEarthlyDemise from "SRC/img/vault-of-earthly-demise.png";


const Cards = props =>
<section name={props.name} className="section">
    <div className="is-fluid">
        <div className="columns is-centered">

            <div className="column is-3">
                <div className="card"
                     style={{boxShadow: `0 2px 3px ${props.color}, 0 0 0 1px ${props.color}`}}
                >
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={bnTorrentOfPower}
                                 alt="Placeholder image1"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png"
                                         alt="Placeholder image2"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4 is-size-3">John Smith</p>
                                <p className="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div className="content is-size-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            <br/>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>
            </div>

            <div className="column is-3">
                <div className="card"
                     style={{boxShadow: `0 2px 3px ${props.color}, 0 0 0 1px ${props.color}`}}
                >
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={bnWellOfSouls}
                                 alt="Placeholder image3"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png"
                                         alt="Placeholder image4"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4 is-size-3">John Smith</p>
                                <p className="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div className="content is-size-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            <br/>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>
            </div>

            <div className="column is-3">
                <div className="card"
                     style={{boxShadow: `0 2px 3px ${props.color}, 0 0 0 1px ${props.color}`}}
                >
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={bnVauktOfEarthlyDemise}
                                 alt="Placeholder image5"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png"
                                         alt="Placeholder image6"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4 is-size-3">John Smith</p>
                                <p className="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div className="content is-size-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            <br/>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>;

export default Cards