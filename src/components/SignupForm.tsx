import React from "react";
import { signupFormStyle } from "../styles";

// team name
// team mail

export const SignupForm: React.FC = () => {
  return (
    <div className={signupFormStyle.signup}>
      <h2>Signup for Frontend Awards</h2>
      <form action="">
        <div className={signupFormStyle.formGroup}>
          <label htmlFor="team-name">Team name</label>
          <input type="text" id="team-name" placeholder="eg: cody coda" />
        </div>
  
        <div className={signupFormStyle.formGroup}>
          <label htmlFor="team-mail">Team mail</label>
          <input type="email" id="team-mail" placeholder="codycoda@gmai.com" />
        </div>
  
        <div className={signupFormStyle.formGroup}>
          <button className="btn">Participate</button>
        </div>
      </form>
    </div>
  );
};
