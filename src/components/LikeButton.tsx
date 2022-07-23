import { useState } from "react";

type PropType = {
  children?: any
}

export const LikeButton = ({ children }: PropType) => {
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button className="likeButton" onClick={ handleClick }>♥ { count }</button>
      { children }
    </>
  );
}
