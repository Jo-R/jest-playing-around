import React, {useState} from "react";

const Status = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export const Link = (props) => {
  const [status, setStatus] = useState(Status.NORMAL);

  const onMouseEnter = () => {
    setStatus(Status.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(Status.NORMAL);
  };

  return(
    <a
      className={status}
      href={props.page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
  >
    {props.children}
  </a>
  );
}