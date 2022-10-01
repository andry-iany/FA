import { partnersStyle } from "../styles";

import bocasay from "../image/partners/bocasay.jpeg";
import myagency from "../image/partners/myagency.png";
import novity from "../image/partners/novity.jpeg";
import pulse from "../image/partners/pulse.svg";
import techzara from "../image/partners/techzara.jpeg";

const partnersLogo = [techzara, novity, pulse, bocasay, myagency];

interface props {}

const Partners: React.FC<props> = () => {
  const renderLogos = partnersLogo.map((logo, index) => {
    return <img key={index} src={logo} />;
  });

  return (
    <article className={partnersStyle.partners}>
      <h2>Our partners</h2>
      <div className={partnersStyle.partnersWrapper}>{renderLogos}</div>
    </article>
  );
};

export default Partners;
