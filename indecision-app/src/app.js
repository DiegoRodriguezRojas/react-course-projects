console.log('app.js is running!');

//JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a cumputer",
    options: ['One', 'Two']
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.title && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are you options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    } else {
        return 'unknown'
    }
}

var user = {
    name: "Diego Angel Rodriguez Rojas",
    age: 27,
    location: "Mexico"
};
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);