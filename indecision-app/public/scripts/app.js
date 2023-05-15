"use strict";

console.log('app.js is running!');

//JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a cumputer"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    } else {
        return 'unknown';
    }
}

var user = {
    name: "Diego Angel Rodriguez Rojas",
    age: 27,
    location: "Mexico"
};
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
