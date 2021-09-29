import React, { useState, useEffect } from "react";

import userService from "../services/user.service";

const UserWallet = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    userService.getUserWallet().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      },
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default UserWallet;
