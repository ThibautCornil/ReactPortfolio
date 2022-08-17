import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-BleuNuit text-BlancAntique">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-Citron">
              A propos de moi
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid gap-8 px-4 sm:grid-cols-2">
          <div className="text-4xl font-bold sm:text-right">
            <p>Bonjour. Je m'appelle Thibaut, enchanté de vous rencontrer.</p>
          </div>
          <div>
            <p>
            Jeune papa en plein évolution professionnelle, passionné par la technologie et les sciences j'ai décidé de suivre une formation de Concepteur Développeur d'Applications afin de me lancer dans un domaine qui me tien particuliérement à coeur. <br />
            Durant cette formation j'ai appris de nombreux langages et technologie, je suis donc à la recherche d'un emploi, au sein d'une entreprise afin de me perfectionner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
