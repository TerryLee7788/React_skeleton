var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

// the color is reference at "https://www.youtube.com/yt/brand/color.html"
ReactDOM.render(<ListManager title="Ingredients2" headingColor="#e52d27" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="toDo" headingColor="green" />, document.getElementById('todo'));
ReactDOM.render(<ListManager title="terrytest" headingColor="yellow" />, document.getElementById('terrytest'));
