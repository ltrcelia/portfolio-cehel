import React, { useState } from "react";
import designGraphique from "../assets/img/DM.png";
import motionDesign from "../assets/img/MD.png";
import webDesign from "../assets/img/WD.png";
import more from "../assets/img/+.png";

const Competences = () => {
  const [designVisible, setDesignVisible] = useState(false);
  const toggleDesignVisibility = () => {
    setDesignVisible(!designVisible);
    setMotionVisible(false);
    setWebVisible(false);
  };
  const [motionVisible, setMotionVisible] = useState(false);
  const toggleMotionVisibility = () => {
    setDesignVisible(false);
    setMotionVisible(!motionVisible);
    setWebVisible(false);
  };
  const [webVisible, setWebVisible] = useState(false);
  const toggleWebVisibility = () => {
    setDesignVisible(false);
    setMotionVisible(false);
    setWebVisible(!webVisible);
  };

  return (
    <div id="competences">
      <h2 className="title">compétences.</h2>
      <div className="competences">
        <div className="design-graphique">
          <img src={designGraphique} alt="" />
          <h3>design de marque</h3>
          <div className="more">
            <img src={more} alt="" />
            <p onClick={toggleDesignVisibility}>Découvrir</p>
          </div>
        </div>

        <div className="motion-design">
          <img src={motionDesign} alt="" />
          <h3>motion design.</h3>
          <div className="more">
            <img src={more} alt="" />
            <p onClick={toggleMotionVisibility}>Découvrir</p>
          </div>
        </div>

        <div className="web-design">
          <img src={webDesign} alt="" />
          <h3>web design et site web.</h3>
          <div className="more">
            <img src={more} alt="" />
            <p onClick={toggleWebVisibility}>Découvrir</p>
          </div>
        </div>
      </div>
      <span className="border"></span>
      {designVisible && (
        <div className="hidden-container">
          <div className="hidden">
            <img src="" alt="" />
            <div className="texte-container">
              <h2>Design de marque.</h2>
              <p className="title">
                Création d'une image de marque qui présente votre univers et vos
                valeurs. <br /> Elle constitue la base de votre communication.
              </p>
              <div className="flex">
                <p>Adobe Photoshop</p>
                <div className="progress-bar">
                  <div className="progress ph"></div>
                </div>
              </div>
              <div className="flex">
                <p>Adobe Illustrator</p>
                <div className="progress-bar">
                  <div className="progress ill"></div>
                </div>
              </div>
              <div className="flex">
                <p>Adobe InDesign</p>
                <div className="progress-bar">
                  <div className="progress id"></div>
                </div>
              </div>
              <div className="bouton">
                <button className="btn-pink">Découvrir</button>
              </div>
            </div>
          </div>
          <span className="border"></span>
        </div>
      )}

      {motionVisible && (
        <div className="hidden-container">
          <div className="hidden">
            <img src="" alt="" />
            <div className="texte-container">
              <h2>motion design.</h2>
              <p className="title">
                Création de vos supports de communication imprimés et digitaux
                afin de sublimer votre image de marque.
              </p>
              <div className="flex">
                <p>Adobe After Effects</p>
                <div className="progress-bar">
                  <div className="progress ae"></div>
                </div>
              </div>
              <div className="flex">
                <p>Adobe Premiere Pro</p>
                <div className="progress-bar">
                  <div className="progress pp"></div>
                </div>
              </div>
              <div className="bouton">
                <button className="btn-pink">Découvrir</button>
              </div>
            </div>
          </div>
          <span className="border"></span>
        </div>
      )}

      {webVisible && (
        <div className="hidden-container">
          <div className="hidden">
            <img src="" alt="" />
            <div className="texte-container">
              <h2>web design et site web.</h2>
              <p className="title">
                Création de votre site web présantant votre plus belle image,
                pour que votre clients vous trouve troujours.
              </p>
              <div className="flex">
                <p>Adobe XD</p>
                <div className="progress-bar">
                  <div className="progress xd"></div>
                </div>
              </div>
              <div className="flex">
                <p>Figma</p>
                <div className="progress-bar">
                  <div className="progress fig"></div>
                </div>
              </div>
              <div className="flex">
                <p>HTML / CSS</p>
                <div className="progress-bar">
                  <div className="progress hc"></div>
                </div>
              </div>
              <div className="flex">
                <p>JavaScript</p>
                <div className="progress-bar">
                  <div className="progress js"></div>
                </div>
              </div>
              <div className="flex">
                <p>React</p>
                <div className="progress-bar">
                  <div className="progress re"></div>
                </div>
              </div>
              <div className="flex">
                <p>PHP</p>
                <div className="progress-bar">
                  <div className="progress php"></div>
                </div>
              </div>
              <div className="flex">
                <p>WordPress</p>
                <div className="progress-bar">
                  <div className="progress wp"></div>
                </div>
              </div>
              <div className="bouton">
                <button className="btn-pink">Découvrir</button>
              </div>
            </div>
          </div>
          <span className="border"></span>
        </div>
      )}
    </div>
  );
};

export default Competences;
