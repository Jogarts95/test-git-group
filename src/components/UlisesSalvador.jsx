import React from 'react'

const UlisesSalvador = () => {
    return (
        <div class="max-w-sm mx-2 bg-sky-700 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg overflow-hidden">
            <div class="sm:flex sm:items-center px-6 py-4">
                <img
                class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
                src="https://picsum.photos/100/100"
                alt="Photo Profile"
            />
                <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                    <p class="text-xl  leading-tight font-bold underline">Ulices Salvador</p>
                    <ul className='text-center'>
                        <li>Ir al gym</li>
                        <li>Videojuegos</li>
                        <li>Salir</li>
                        <li>Ver series</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UlisesSalvador