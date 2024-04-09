import React from "react";
import aboutImage from "../images/Chef with Empty Menu.png";
import "../css/About.css";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="text">
        <h1>Hear From Chi & Yamu!</h1>
        <p>
          In the world of culinary arts, baking is akin to weaving a tapestry of
          flavors or composing a vibrant drumbeat. Just as each ingredient
          brings its own rhythm, it's the dance of blending them that creates
          true magic. As esteemed bakers Yamukelwa and Chiamaka affirm, the only
          obstacle is the fear of the unknown. However, with a spirit of
          exploration and a dash of courage, anyone can embark on a flavorful
          journey. With our wisdom and encouragement, we believe that every
          aspiring baker has the power to unleash their inner pastry chef and
          infuse their creations with their unique touch.
        </p>
      </div>
      <div className="image">
        <img src={aboutImage} alt="About Us" />
      </div>
    </div>
  );
}

export default About;
