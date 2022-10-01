import { aboutStyle } from "../styles";

function About() {
  return (
    <div className={aboutStyle.about}>
      <h2>About</h2>
      <p>
        <span>Front-end awards ?</span> it's a competition organised by techzara to
        find new talent and test our knowledge by building well designed website.
      </p>
    </div>
  );
}

export default About;
