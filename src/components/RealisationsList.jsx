import feteDeLhuitre from "../assets/img/realisations/fete-de-lhuitre.jpg";
import fdhSet from "../assets/img/realisations/fdh-set.jpg";
import fdhBrochure1 from "../assets/img/realisations/fdh-brochure1.jpg";
import fdhBrochure2 from "../assets/img/realisations/fdh-brochure2.jpg";

import auRayonDesMerveilles from "../assets/img/realisations/ardm.jpg";
import armdCharte from "../assets/img/realisations/ardm-charte.jpg";
import armdEssaie1 from "../assets/img/realisations/ardm-essaie1.jpg";
import armdEssaie2 from "../assets/img/realisations/ardm-essaie2.jpg";

import museeDeNantes from "../assets/img/realisations/midn.jpg";
import vds from "../assets/img/realisations/vds.jpg";
import depliantVds from "../assets/img/realisations/depliant-vds.jpg";
import flyerVds from "../assets/img/realisations/flyer-vds.jpg";
import newsVds from "../assets/img/realisations/news-vds.jpg";

import biomeVideo from "../assets/video/biome.mp4";
import afficheBiome from "../assets/img/realisations/affiche-biome.jpg";
import logoBiome from "../assets/img/realisations/logo-biome.jpg";
import storyBiome from "../assets/img/realisations/story-biome.jpg";

import manVSforestVideo from "../assets/video/manvsforest.mp4";
import fondMvsf from "../assets/img/realisations/fond-mvsf.jpg";
import charadesignMvsf from "../assets/img/realisations/charadesign-mvsf.jpg";
import storyMvsf from "../assets/img/realisations/story-manvsf.jpeg";

import lotrVideo from "../assets/video/sda.mp4";
import showreel from "../assets/video/showreel.mp4";

import artbox from "../assets/img/realisations/artbox.jpg";
import artboxSingle from "../assets/img/realisations/artbox-single.jpg";

import planty from "../assets/img/realisations/planty.jpg";
import plantyMaquette from "../assets/img/realisations/planty-maquette.jpg";
import plantyContact from "../assets/img/realisations/planty-contact.jpg";
import plantyRencontre from "../assets/img/realisations/planty-rencontre.jpg";

import motaPhoto from "../assets/img/realisations/mota-photo.jpg";
import motaMaquette from "../assets/img/realisations/mota-maquette.jpg";
import motaSingle from "../assets/img/realisations/mota-single.jpg";
import motaLightbox from "../assets/img/realisations/mota-lightbox.jpg";

import koukaki from "../assets/img/realisations/studio-koukaki.jpg";
import koukakiMaquette from "../assets/img/realisations/koukaki-maquette.jpg";
import koukakiBurger from "../assets/img/realisations/koukaki-burger.jpg";
import koukakiExemple from "../assets/img/realisations/koukaki-exemple.jpg";

export const realisationsList = [
  {
    titreDuProjet: "The Artbox",
    type: "web",
    texteRapide: "Site web",
    annee: "2023",
    theme: "Php",
    categorie: "web design & site internet",
    image: artbox,
    lien: "https://github.com/ltrcelia/The-Artbox",
    explication: `The Artbox, une galerie d’art moderne, avait besoin de rendre son site web plus facilement modifiable sans changer son apparence visuelle ni ajouter de nouvelles fonctionnalités. Le site existant, développé en HTML et CSS, devait être converti en PHP afin de faciliter les mises à jour de contenu. L'objectif principal était de factoriser le code en utilisant des fichiers PHP pour réduire le nombre de modifications nécessaires lors des mises à jour.`,
    processus:
      "J'ai analysé le code existant, j'ai converti le site en PHP en utilisant des templates et des inclusions de fichiers pour factoriser le code. Les fichiers HTML ont été divisés en en-têtes, pieds de page, et sections de contenu pour faciliter les mises à jour, en vérifiant à la fin que le site fonctionnait comme demandé.",
    enjeux:
      "*Conversion du code HTML statique en PHP tout en préservant l’apparence visuelle et la fonctionnalité. *Assurer que le code factorisé en PHP soit suffisamment intuitif pour permettre à la cliente de le modifier facilement par la suite.",
    imagesSecondaires: [artboxSingle],
    id: "8",
  },
  {
    titreDuProjet: "Planty",
    type: "web",
    texteRapide: "Site web",
    annee: "2023",
    theme: "Wordpress",
    categorie: "web design & site internet",
    image: planty,
    lien: "https://github.com/ltrcelia/Planty",
    explication:
      "Je devais développer un site vitrine pour présenter l'activité de la marque Planty et recueillir des précommandes, en suivant les spécifications fonctionnelles fournies par le client. En collaboration avec ma cheffe de projet, et le designer UI, j'ai travaillé à partir des maquettes fournies pour créer un site qui reflète l'image de marque de Planty et crée une expérience utilisateur optimale.",
    processus:
      "Pour ce projet j'ai étudié attentivement des spécifications fonctionnelles fournies par le client pour comprendre les besoins et les exigences du projet, j'ai installé WordPress et j'ai codé à partir de PHP des éléments pour construire le site en plus de m'appuyer sur Elementor. J'ai installé tous les éléments 'simples' via Elementor, le design en css et l'administration en php. ",
    enjeux:
      "*S'assurer que le site reflète fidèlement l'image de marque de Planty tout en offrant une expérience utilisateur intuitive. *Intégrer des fonctionnalités de précommande sans compromettre la simplicité et la fluidité du site.",
    imagesSecondaires: [plantyMaquette, plantyContact, plantyRencontre],
    id: "9",
  },
  {
    titreDuProjet: "Studio Koukaki",
    type: "web",
    texteRapide: "Site web",
    annee: "2024",
    theme: "Php, JavaScript",
    categorie: "web design & site internet",
    image: koukaki,
    lien: "https://github.com/ltrcelia/Koukaki",
    explication:
      "Le studio d'animation Koukaki, dont le dernier film a été nominé aux Oscars du meilleur court-métrage d'animation, souhaite améliorer l'expérience utilisateur de son site en ajoutant des animations modernes et engageantes. Je devais donc dynamiser le site internet du studio d'animation Koukaki en ajoutant des animations CSS et JavaScript conformément aux spécifications fournies par le client. ",
    processus:
      "Après avoir analysé les spécifications fournies, j'ai incorporé, suivant la maquette qui m'avait été fournis, les différents éléments demandés à partir de langage tel que Scss ou Javascript ou PHP. Les fleurs devaient tourner sur elles-mêmes, le hero-header devait contenir une vidéo, je devais ajouter un carrousel présentant les personnages et ajouter le menu burger. Pour terminer j'ai effectué plusieurs tests afin de m'assurer que le site fonctionnait correctement.",
    enjeux:
      "*Intégrer des animations CSS et JavaScript sans compromettre la performance du site ni la compatibilité avec les navigateurs. *Respecter les directives du client tout en maintenant un code propre et organisé.",
    imagesSecondaires: [koukakiMaquette, koukakiBurger, koukakiExemple],
    id: "10",
  },
  {
    titreDuProjet: "Mota photo",
    type: "web",
    texteRapide: "Site web",
    annee: "2024",
    theme: "Php, Javascript",
    categorie: "web design & site internet",
    image: motaPhoto,
    lien: "https://github.com/ltrcelia/motaphoto",
    explication:
      "Je devais développer un nouveau site web sous WordPress pour Nathalie Mota, afin qu'elle puisse gérer elle-même son hébergement et éviter de perdre à nouveau son site. Le site doit permettre de présenter ses séries de photos et de suivre les principes du Green code pour un impact environnemental réduit.",
    processus:
      "Après avoir examiné les spécifications, la maquette et les autres documents fournis, j'ai créé un site WordPress pour la cliente en développant un thème personnalisé basé sur la maquette. En utilisant l'objet WP_Query, j'ai récupéré ses publications pour afficher ses différentes photos sous forme de publications individuelles sur le site. Ensuite, j'ai implémenté une lightbox pour afficher chaque photo en grand format. Pour finir, j'ai effectué des tests de base pour vérifier le bon fonctionnement du site.",
    enjeux:
      "*Recréer le site de Nathalie avec précision selon les maquettes tout en intégrant les spécifications fonctionnelles. *Utilisation de techniques avancées de développement WordPress pour créer un thème personnalisé correspondant aux maquettes.",
    imagesSecondaires: [motaMaquette, motaSingle, motaLightbox],
    id: "11",
  },
  {
    titreDuProjet: "Fête de l'huître",
    type: "design",
    texteRapide: "Affiche et brochure",
    annee: "2018",
    theme: "Illustrator",
    categorie: "design graphique",
    image: feteDeLhuitre,
    explication:
      "La fête de l'huître avait besoin d'une affiche, une brochure, des sets de table et autres goodies pour célébrer sa 15ème édition. ",
    processus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam.",
    enjeux:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse.",
    imagesSecondaires: [fdhSet, fdhBrochure1, fdhBrochure2],
    id: "1",
  },
  {
    titreDuProjet: "Au rayon des merveilles",
    type: "design",
    texteRapide: "Logo et charte graphique",
    annee: "2021",
    theme: "Illustrator",
    categorie: "design graphique",
    image: auRayonDesMerveilles,
    explication:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam. Vivamus ullamcorper libero vitae eros efficitur, in iaculis metus volutpat.",
    processus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam.",
    enjeux:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse.",
    imagesSecondaires: [armdCharte, armdEssaie1, armdEssaie2],
    id: "2",
  },
  {
    titreDuProjet: "Musée de l'imprimerie de Nantes",
    type: "design",
    texteRapide: "Affiche",
    annee: "2018",
    theme: "Illustrator",
    categorie: "design graphique",
    image: museeDeNantes,
    explication:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam. Vivamus ullamcorper libero vitae eros efficitur, in iaculis metus volutpat.",
    processus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam.",
    enjeux:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse.",
    imagesSecondaires: "",
    id: "3",
  },
  {
    titreDuProjet: "Voyage des sens",
    type: "design",
    texteRapide: "Affiche",
    annee: "2018",
    theme: "Illustrator, Photoshop",
    categorie: "design graphique",
    image: vds,
    explication:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam. Vivamus ullamcorper libero vitae eros efficitur, in iaculis metus volutpat.",
    processus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam.",
    enjeux:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse.",
    imagesSecondaires: [depliantVds, flyerVds, newsVds],
    id: "3",
  },
  {
    titreDuProjet: "Biome",
    type: "motion",
    texteRapide: "Publicité",
    annee: "2019",
    theme: "Illustrator, After Effects",
    categorie: "motion design",
    video: biomeVideo,
    explication:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam. Vivamus ullamcorper libero vitae eros efficitur, in iaculis metus volutpat.",
    processus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam.",
    enjeux:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse.",
    imagesSecondaires: [afficheBiome, logoBiome, storyBiome],
    id: "4",
  },
  {
    titreDuProjet: "Man vs Forest",
    type: "motion",
    texteRapide: "Court métrage",
    annee: "2019",
    theme: "Illustrator, After Effects",
    categorie: "motion design",
    video: manVSforestVideo,
    explication:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam. Vivamus ullamcorper libero vitae eros efficitur, in iaculis metus volutpat.",
    processus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam.",
    enjeux:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse.",
    imagesSecondaires: [fondMvsf, charadesignMvsf, storyMvsf],
    id: "5",
  },
  {
    titreDuProjet: "Le seigneur des anneaux",
    type: "motion",
    texteRapide: "Court métrage",
    annee: "2018",
    theme: "Illustrator, After Effects",
    categorie: "motion design",
    video: lotrVideo,
    explication:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam. Vivamus ullamcorper libero vitae eros efficitur, in iaculis metus volutpat.",
    processus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam.",
    enjeux:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse.",
    imagesSecondaires: "imagesSecondaires",
    id: "6",
  },
  {
    titreDuProjet: "Showreel",
    type: "motion",
    texteRapide: "Présentation",
    annee: "2022",
    client: "Showreel",
    theme: "theme",
    categorie: "motion design",
    video: showreel,
    explication:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam. Vivamus ullamcorper libero vitae eros efficitur, in iaculis metus volutpat.",
    processus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse eu egestas urna. Nam sed nisi tellus. Suspendisse vel ligula diam.",
    enjeux:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ornare ligula. Vestibulum laoreet, nisl sit amet tempus consequat, tellus nunc rhoncus libero, non pharetra sapien sapien ut enim. Curabitur elementum non turpis elementum malesuada. Nulla interdum ipsum eget aliquam efficitur. Ut scelerisque lorem facilisis quam volutpat efficitur. Ut dignissim ac tellus quis fringilla. Suspendisse.",
    imagesSecondaires: "imagesSecondaires",
    id: "7",
  },
];
