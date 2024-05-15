import React from "react";
import stars from "../assets/img/stars.png";
import photoProfil from "../assets/img/photo-profil.png";

const APropos = () => {
  return (
    <div id="a-propos">
      <h2>à propos.</h2>
      <div className="a-propos-container">
        <img src={photoProfil} alt="" />
        <div className="texte-apropos">
          <h2>Hello, je suis Célia.</h2>
          <p>
            Designer de marque et motion designer, j'aime en apprendre chaque
            jour d'avantage pour nourrir ma passion de la communication. Que ce
            soit au moyen du print, du web ou de la vidéo, j'aime me diversifier
            afin de développer au maximum mes compétences. <br /> <br />
            Aujourd'hui basée en Loire-Atlantique, je souhaite vous proposez mes
            services, alors n'hésitez pas à me contacter !
          </p>
        </div>
      </div>
      <div className="encart-pourquoi">
        <h2>Pourquoi travailler avec moi ?</h2>
        <p>
          Forte de mes différentes expériences à l’école, en stage ou en tant
          que freelance, j’ai acquis diverses capacités qui me permettent d’être
          rapide, efficace, autonome, polyvalante, créative et de bien
          communiquer avec les clients pour comprendre leurs besoins.
        </p>
      </div>

      <h2>expériences.</h2>
      <div className="experience">
        <div className="experience-container">
          <p>
            depuis <br />
            juillet 2020
          </p>
          <div className="boules"></div>
          <p>
            <span className="noms-ecoles">Graphiste et motion designer</span>{" "}
            (France) <br /> Freelance
            <br />
            -Template de présentation pour Kiplin,
            <br />
            -Design de cartes intéractives pour Google, Lenovo, Caisse
            d’épargne,
            <br />
            -Illustration à destination d’un motion design pour la SNCF et MSA,
            <br />
            -Portraits pour différents couples,
            <br />
            -Carte postal à animer via téléphone.
          </p>
        </div>

        <div className="experience-container">
          <p>
            Avril Juillet 2018 <br />& Avril Mai 2017
          </p>
          <div className="boules"></div>
          <p>
            <span className="noms-ecoles">Graphiste digital marketing</span>{" "}
            (Lorient 56)
            <br /> SELLTIM, 5 mois
            <br />
            -Motion Design pour Ford et Le sous-marin Jaune.
            <br />
            -Montage vidéo publicitaire pour Konica Minolta, Class’croute,
            Fermeture Philippe, Joaillerie Renan Lucas,
            <br />
            -Affiche et brochure de la Fête de l’Huitre,
            <br />
            -Post facebook pour le calendrier du Marketing pour plus de 30
            clients de l’entreprise,
            <br />
            -Logo pour les entreprises Dany’s Rêve Lingerie, Les Délices Celtes,
            Shoopiz,
            <br />
            -Agencement des site web de Bretagne Antennes, Dany’s Rêve, Les
            Menuisiers Bretons.
          </p>
        </div>

        <div className="experience-container">
          <p>2014-2018</p>
          <div className="boules"></div>
          <p>
            <span className="noms-ecoles">Infographiste</span> (Lorient 56)
            <br /> Imprimerie de Basse Bretagne, 1 mois
            <br />
            -Apprentissage des techniques d’impression.
            <br />
            -Création d’une forme de découpe pour une étiquette de caramel.
            <br />
            -Amélioration de Carte de visite, entête de lettre et carte de
            correspondance pour les entreprise Bretagne Sud Habitat.
          </p>
        </div>
      </div>

      <h2>formations.</h2>
      <div className="formations">
        <div className="formations-container">
          <p>2023-2024</p>
          <div className="boules"></div>
          <p>
            <span className="noms-ecoles">OpenClassroom</span> (Online)
            Formation Développeur web
          </p>
        </div>

        <div className="formations-container">
          <p>2018-2019</p>
          <div className="boules"></div>
          <p>
            <span className="noms-ecoles">École Pivaut</span> (Nantes 44)
            Formation Motion design
          </p>
        </div>

        <div className="formations-container">
          <p>2014-2018</p>
          <div className="boules"></div>
          <p>
            <span className="noms-ecoles">École Pivaut</span> (Nantes 44)
            Diplômée en Design graphique
          </p>
        </div>

        <div className="formations-container">
          <p>2013-2014</p>
          <div className="boules"></div>
          <p>
            <span className="noms-ecoles">Rennes 2</span> Licence 1 Information
            et Communication
          </p>
        </div>

        <div className="formations-container">
          <p>2010-2013</p>
          <div className="boules"></div>
          <p>
            <span className="noms-ecoles">Lycée Dupuy de Lôme</span> (Lorient
            56) Bac section général <br />
            Filière Littéraire - Option art plastique
          </p>
        </div>
      </div>

      <div className="stars">
        <img src={stars} alt="Etoiles" className="star" />
      </div>
      <span className="border"></span>

      <h2>langues.</h2>
      <div className="langues-container">
        <div className="langues">
          <p className="langue">Anglais</p>
          <p>TOEIC 750</p>
        </div>
        <div className="langues">
          <p className="langue">Espagnol</p>
          <p>A2</p>
        </div>
        <div className="langues">
          <p className="langue">Français</p>
          <p>Langue maternelle</p>
        </div>
      </div>

      <h2>passions.</h2>
      <div className="passions-container">
        <div className="passions">
          <p className="icones">✏️</p>
          <p>dessin.</p>
        </div>
        <div className="passions">
          <p className="icones">📚</p>
          <p>lecture.</p>
        </div>
        <div className="passions">
          <p className="icones">🎮</p>
          <p>jeux vidéos.</p>
        </div>
        <div className="passions">
          <p className="icones">🛩</p>
          <p>voyage.</p>
        </div>
        <div className="passions">
          <p className="icones">🖋</p>
          <p>écriture.</p>
        </div>
        <div className="passions">
          <p className="icones">🏋️️</p>
          <p>musculation.</p>
        </div>
      </div>

      <div className="stars">
        <img src={stars} alt="Etoiles" className="star" />
      </div>
    </div>
  );
};

export default APropos;
