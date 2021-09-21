import React from "react";
import UserCard from "./UserCard";

const Cards = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        const { avatar, first_name, last_name, email } = user;
        return (
          <div className="user-Card">
            <UserCard
              first_name={first_name}
              last_name={last_name}
              email={email}
              avatar={avatar}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
