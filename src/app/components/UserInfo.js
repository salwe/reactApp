import React from "react";

export const UserInfo = ({user}) => {
    return (
        <div className="">
            <p>Hi! My name is {user.author}. You can find my projects on <a href={user.git}>GitHub</a>.
                And contact me through <a href={user.vk}>vk</a>.</p>
            <p>Project technology stack:</p>
            <ul>
                { user.stack.map((el,i) => <li key={i}>{el}</li>) }
            </ul>
        </div>
    );
};


UserInfo.propTypes = {
    user: React.PropTypes.object
};

