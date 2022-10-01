import { subscribeStyle } from "../styles";

interface props {}

const Subscribe: React.FC<props> = () => {
  return (
    <form className={subscribeStyle.form}>
      <h2>Subscribe</h2>
      <p>Signup to get notified about any upcoming event.</p>
      <input type="text" placeholder="codycoda@gmail.com" />
      <button className={`btn ${subscribeStyle.btn}`}>Subscribe</button>
    </form>
  );
};

export default Subscribe;
