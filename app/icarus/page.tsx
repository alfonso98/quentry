import Image from 'next/image';

const Page = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 min-h-screen">

            <div className="flex items-center justify-center bg-pink-200 p-4">
                <Image
                    src="/icarus_logo.png"
                    width={817}
                    height={358}
                    alt="Icarús Café"
                    className="h-24 md:h-28"
                />
            </div>
       
            <div className="row-span-1 md:row-span-2 col-span-1 flex items-center justify-center relative p-4">
                <Image
                    src="/coffe_hero.png"
                    width={527}
                    height={531}
                    alt="Taza de Café"
                    className="rounded-full w-[300px] md:w-[400px] lg:w-[450px] object-cover shadow-xl"
                />
                <div className="absolute text-center text-white">
                    <h2 className="text-2xl md:text-3xl font-bold">El Festival del Embudо</h2>
                    <p className="mt-1 text-sm md:text-base">17 DE MAYO DE 2025</p>
            
                    <button className="mt-4 px-5 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md shadow-lg text-sm md:text-lg">
                    Comprar boletos
                    </button>
            
                    <p className="mt-2 text-xs italic text-white">Cupo limitado a 150 personas</p>
                </div>
            </div>
        
            <div className="flex items-center justify-center bg-red-600 p-4">
                <Image
                    src="/erratio_logo.png"
                    width={1098}
                    height={860}
                    alt="Erratio Café"
                    className="h-28 md:h-40"
                />
            </div>
        
            <div className="flex items-center justify-center bg-white p-4">
                <Image
                    src="/barbo_logo.jpg"
                    width={1170}
                    height={596}
                    alt="Barbo"
                    className="h-12 md:h-16"
                />
            </div>

            <div className="flex items-center justify-center bg-black p-4">
                <Image
                    src="/casa_logo.png"
                    width={811}
                    height={685}
                    alt="Casa en Llamas"
                    className="h-24 md:h-28"
                />
            </div>

        </div>    
    );
};

export default Page;