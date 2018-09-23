import React from 'react'
import ReactDOM from "react-dom";

import serviceWorker from "../service-worker"

import 'bulma/css/bulma.css'
import './css/style.css'

import MainContainer from "./js/components/container/MainContainer";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.log(`Service Worker: Error: ${err}`));
    });
}


const App = document.getElementById("app");
ReactDOM.render(<MainContainer />, App);
serviceWorker();