import React from 'react';

const Page = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 min-h-screen">

            
            <div className="flex items-center justify-center bg-pink-200 p-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-green-800">ICARUS</h1>
                <p className="text-sm tracking-widest text-green-800">CAFÉ</p>
            </div>
            </div>

            
            <div className="row-span-2 col-span-1 flex items-center justify-center relative">
            {/* <img src="YOUR_COFFEE_IMAGE_PATH.jpg" alt="Taza de Café" className="rounded-full w-[450px] h-[450px] object-cover shadow-xl"> */}
            
            
            <div className="absolute text-center text-white">
                <h2 className="text-2xl font-bold">El Festival del Embudо</h2>
                <p className="mt-1 text-sm">17 DE MAYO DE 2025</p>
                    <button className="mt-4 px-6 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md shadow-lg text-lg">
                    Comprar boletos
                    </button>
                <p className="mt-2 text-xs italic">Cupo limitado a 150 personas</p>
            </div>
            </div>

            
            <div className="flex items-center justify-center bg-red-600">
            {/* <img src="YOUR_JAGUAR_IMAGE_PATH.png" alt="Jaguar" className="h-40"> */}
            </div>

            
            <div className="flex items-center justify-center bg-white">
            {/* <img src="YOUR_BARBO_LOGO_PATH.png" alt="barbo" className="h-16"> */}
            </div>

            
            <div className="flex items-center justify-center bg-black">
            {/* <img src="YOUR_ORANGE_LOGO_PATH.png" alt="Fuego" className="h-28"> */}
            </div>

        </div>
    );
};

export default Page;