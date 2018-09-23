import React from "react";

const HalfBanner = props =>
    <section style={{marginTop: "3rem", marginBottom: "3rem"}}>
        <div className="columns">

            <div className="column is-6">
                    <p className="title has-text-centered">
                        Hero title
                    </p>
                    <p className="subtitle has-text-centered">
                        Hero subtitle
                    </p>
                <p className="has-text-justified">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing
                    elit. Cras imperdiet risus et
                    elementum
                    posuere. Vestibulum vel ante eros. Orci varius natoque penatibus et magnis dis
                    parturient
                    montes, nascetur ridiculus mus.
                </p>
            </div>

            <div className="column is-6 is-paddingless">
                <img src={props.banner} style={{backgroundSize : "cover"}} alt="Banner"/>
            </div>

        </div>
    </section>;

export default HalfBanner