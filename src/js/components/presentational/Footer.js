import React from "react";

const Footer = props =>
    <footer name={props.name} className="footer" style={{marginTop: "3rem"}}>
        <div className="content has-text-centered">
            <p>
                <strong>Footer</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                imperdiet risus et
                elementum
                posuere.
            </p>
            <div className="columns">
                <div className="column">
                    <p>First column</p>
                    <p>First column</p>
                    <p>First column</p>
                    <p>First column</p>
                </div>
                <div className="column">
                    <p>Second column</p>
                    <p>Second column</p>
                    <p>Second column</p>
                    <p>Second column</p>
                    <p>Second column</p>
                    <p>Second column</p>
                </div>
                <div className="column">
                    <p>Third column</p>
                    <p>Third column</p>
                    <p>Third column</p>
                </div>
                <div className="column">
                    <p>Fourth column</p>
                    <p>Fourth column</p>
                    <p>Fourth column</p>
                    <p>Fourth column</p>
                    <p>Fourth column</p>
                </div>
            </div>

        </div>
    </footer>;

export default Footer