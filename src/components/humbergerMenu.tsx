import React, { MouseEventHandler, useState } from "react";

interface props {
  clickHandler: MouseEventHandler<HTMLDivElement>;
}

const SignupButton: React.FC<props> = ({ clickHandler }) => {
  const [active, setActive] = useState(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setActive(!active);
    clickHandler(e);
  };

  return (
    <div
      className="btn"
      onClick={handleClick}
    >
      {active ? "home" : "signup"}
    </div>
  );
};

export default SignupButton;
