import React, { Component } from "react";

export default class users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>
              {user.username} : {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
