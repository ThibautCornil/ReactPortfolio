import React from 'react';

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-BleuNuit flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/672f52ba-dd55-4db1-aecc-9f047218ce1d" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-Citron text-BlancAntique'>Contact</p>
                    <p className='text-BlancAntique py-4'>Remplissez le formulaire ci-dessous ou envoyez moi un email : thibaut.cornilpro@gmail.com</p>
                </div>
                <input type="text" placeholder='Nom' name='name' className='p-2 bg-[#ccd6f6]'/>
                <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]'/>
                <textarea name="message" placeholder='Message...' id=""rows="10" className='bg-[#ccd6f6] p-2'></textarea>
                <button className='text-white border-2 hover:bg-Citron hover:border-Citron hover:text-BleuNuit px-4 py-3 my-8 mx-auto flex items-center'>Collaborons !</button>
            </form>
        </div>
    );
};

export default Contact;