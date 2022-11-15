import React, { useState } from "react";
import Button from "./Button";

function Comments({ comments }) {
  const [isVisible, setIsVisible] = useState(false);

  const listOfComments = comments.map((author) => (
    <div key={author.id}>
      <h2>{author.user}</h2>
      {author.comment}
    </div>
  ));

  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <Button onClick={handleClick}>
        {isVisible ? "show Comments" : "Hide Comments"}
      </Button>
      {!isVisible && listOfComments}
    </div>
  );
}

export default Comments;
