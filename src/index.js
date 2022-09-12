import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
// import App from "./App";
// import Card from './AnimeCard.js/Card';
// import Generator from './meme-component/Meme-generator';
import RenderApp from './React Router/RenderApp';
import registerServiceWorker from "./registerServiceWorker";
import 'tachyons';

ReactDOM.render(<RenderApp/>, document.getElementById('root'));
registerServiceWorker();
