import React from 'react';

const ImageGallery = () => {
    return (
        <div className="container mx-auto px-4 md:px-10 xl:px-20">
            <div className='py-16'>
                <h2 className='text-center font-semibold text-2xl md:3xl xl:text-5xl mb-8'> Different College Graduate's Group Pictures. </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mb-3'>
                    <img className='w-full h-[200px]' src="https://i.ibb.co/wJH8T8f/g1.jpg" alt="" />
                    <img className='w-full h-[200px]' src="https://i.ibb.co/TkJ9n41/g2.jpg" alt="" />
                    <img className='w-full h-[200px]' src="https://i.ibb.co/j83pXfZ/g3.jpg" alt="" />
                    <img className='w-full h-[200px]' src="https://i.ibb.co/mNKXhR3/g4.jpg" alt="" />
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 mb-3'>
                    <img className='w-full h-[200px]' src="https://i.ibb.co/0q0w1LW/gl1.jpg" alt="" />
                    <img className='w-full h-[200px]' src="https://i.ibb.co/f99zyc7/gl2.jpg" alt="" />
                    <img className='w-full h-[200px]' src="https://i.ibb.co/gP4Rx5c/gl3.jpg" alt="" />
                    <img className='w-full h-[200px]' src="https://i.ibb.co/NSj2ZB7/gl4.jpg" alt="" />
                    <img className='w-full h-[200px]' src="https://i.ibb.co/t302jpy/gl5.jpg" alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3'>
                    <img className='w-full h-[200px]' src="https://i.ibb.co/pdzn2hF/gr1.jpg" alt="" />
                    <img className='w-full h-[200px]' src="https://i.ibb.co/0J2GHkq/gr2.jpg" alt="" />
                    <img className='w-full h-[200px]' src="https://i.ibb.co/SQ1NPVt/gr3.jpg" alt="" />
                    <img className='w-full h-[200px]' src="https://i.ibb.co/JrZXWvk/gr4.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;