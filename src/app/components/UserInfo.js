import React from "react";

export class UserInfo extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <div className="">
                <p>Hi! My name is {this.props.user.author}. You can find my projects on <a href={this.props.user.git}>GitHub</a>.
                And contact me through <a href={this.props.user.vk}>vk</a>.</p>
                <p>Project technology stack:</p>
                <ul>
                    {this.props.stack.map((el,i) => <li key={i}>{el}</li>)}
                </ul>
            </div>
        );
    }
}

UserInfo.propTypes = {
    user: React.PropTypes.object,
    // author: React.PropTypes.string,
    // link: React.PropTypes.string,
    stack: React.PropTypes.array
};

