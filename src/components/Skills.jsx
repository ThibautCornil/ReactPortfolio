import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Github from '../assets/github.png';
import PHP from '../assets/PHP.png';
import Tailwind from '../assets/tailwind.png';
import Symfony from '../assets/symfony.png';

const Skills = () => {
    return (
        <div name="skills" className='w-full h-screen bg-BleuNuit text-BlancAntique'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='space-y-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-Citron'>Expérience</p>
                    <p className='py-4'>// Ce sont les technologies avec lesquels j'ai le plus d'affinité</p>
                </div>
                <div className='w-full grid grid-cols-2 gap-4 text-center py-8 sm:grid-cols-4'>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img src={HTML} className="w-20 mx-auto" alt="icone HTML" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img src={CSS} className="w-20 mx-auto" alt="icone HTML" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img src={Javascript} className="w-20 mx-auto" alt="icone HTML" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img src={ReactImg} className="w-20 mx-auto" alt="icone HTML" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img src={PHP} className="w-40 mx-auto" alt="icone HTML" />
                        <p className='my-4'>PHP</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img src={Symfony} className="w-20 mx-auto" alt="icone HTML" />
                        <p className='my-4'>SYMFONY</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img src={Tailwind} className="w-20 mx-auto" alt="icone HTML" />
                        <p className='my-4'>TAILWINDCSS</p>
                    </div>
                    <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                        <img src={Github} className="w-20 mx-auto" alt="icone HTML" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;