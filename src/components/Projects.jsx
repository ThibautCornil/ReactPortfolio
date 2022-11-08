import React from "react";
import TriskeliosImg from "../assets/triskelios.PNG";
import ReactProjet from "../assets/reactprojet.PNG";
import ReactNord from "../assets/ReactNord.PNG";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-BlancAntique bg-BleuNuit"
    >
      <div className="w-full h-full max-w-[1000px] flex flex-col mx-auto p-4 justify-center items-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-Citron">
            Projets
          </p>
          <p className="py-6">// Voici quelques un de mes projets</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${TriskeliosImg})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider px-2">
                Application Symfony
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.triskelios.fr">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ReactProjet})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider px-2">
                Application React
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ThibautCornil/ReactCountry" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ReactNord})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider px-2">
                Application React
              </span>
              <div className="pt-8 text-center">
                <a href="https://thibautcornil.github.io/react_nord" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ThibautCornil/react_nord" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
