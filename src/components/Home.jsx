import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-BleuNuit'>
            
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-Citron'>Bonjour, je m'appelle</p>
                <h1 className='text-4xl font-bold text-[#848C8E] sm:text-7xl'>Thibaut Cornil</h1>
                <h2 className='text 4xl font-bold text-[#BFB7B6] sm:text-7xl'>Je suis un développeur Full Stack Junior.</h2>
                <p className='text-[#BFB7B6] py-4 max-w-[700px]'>J'ai commencé le développement en novembre 2021 en intégrant une formation de Concepteur Développeur d'Applications, je recherche actuellement un premier emploi dans le milieu.</p>
                <Link to="projects" smooth={true} duration={500}>
                    <button className='text-BlancAntique group border-2 px-6 py-3 my-2 flex items-center hover:bg-Citron hover:border-Citron hover:text-BleuNuit duration-500'>Voir les projets 
                    <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-500' />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;