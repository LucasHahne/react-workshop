import React from "react";

interface LikeCounterProps {
  numLikes: number;
  setNumLikes: (newLikes: number) => void;
}

export const LikeCounter = ({ numLikes, setNumLikes }: LikeCounterProps) => {
  return (
    <button className="secondary" onClick={() => setNumLikes(numLikes + 1)}>
      {numLikes > 0 ? <span>{numLikes}</span> : <span>👏</span>}
    </button>
  );
};
