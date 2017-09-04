import React from "react";

export class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        this.loadData("../json/userData.json");
    }

    async loadData(path) {
        const res = await fetch(path);
        const json = await res.json();

        this.setState({ user: json})
    }

    render() {
        if (this.state.user.length) {
            const user = this.state.user[0];
            return (
                <div className="container">
                    <p>Hi! My name is {user.author}. You can find my projects on <a href={user.git}>GitHub</a>.
                        And contact me through <a href={user.vk}>vk</a>.</p>
                    <p>Project technology stack:</p>
                    <ul>
                        { user.stack.map((el, i) => <li key={i}>{el}</li>) }
                    </ul>
                </div>
            );
        }
        return (<p className="text-center">Loading...</p>);
    }
};

