const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ])
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Courage",
            animal: "Dog",
            breed: "Cowardly"
        }),
        React.createElement(Pet, {
            name: "Oggy",
            animal: "Cat",
            breed: "Chartreux"
        }),
        React.createElement(Pet, {
            name: "Mickey",
            animal: "Mouse",
            breed: "Cartoon"
        }),
    ])
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))