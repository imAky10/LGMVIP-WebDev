import React from "react";

const UserCard = ({ first_name, last_name, email, avatar }) => {
  return (
    <div className="card column">
      <img src={avatar} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">
          {first_name} {last_name}
        </h3>
        <p className="card-text">{email}</p>
        <div>
          <ul>
            <li>
              <i class="fa fa-facebook"></i>
            </li>
            <li>
              <i class="fa fa-twitter"></i>
            </li>
            <li>
              <i class="fa fa-linkedin"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
