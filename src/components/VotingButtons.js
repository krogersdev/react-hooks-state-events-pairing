import React, { useState } from "react";
import Button from "./Button";

function VotingButtons({ upvotes, downvotes }) {
  const [countUp, setCountUp] = useState(upvotes);
  const [countDown, setCountDown] = useState(downvotes);

  return (
    <div>
      <Button onClick={() => setCountUp(countUp + 1)}>{countUp}👍 </Button>
      <Button onClick={() => setCountDown(countDown + 1)}>{countDown}👎</Button>
    </div>
  );
}

export default VotingButtons;
