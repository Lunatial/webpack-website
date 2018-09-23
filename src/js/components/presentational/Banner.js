import React from "react";

const Banner = props =>
    <section style={{marginBottom: "3rem"}}>
        <div className="is-fluid">
            <figure className="image image is-3by1">
                <img src={props.banner} alt="Banner"/>
            </figure>
        </div>
    </section>;

export default Banner