import React from 'react'

const SebastianCastillo = () => {
    return (
       <div className="container w-1/6 bg-[#002864] p-8 rounded-3xl m-2">

        <h2 className="container_title text-center text-amber-100 p-3 font-serif text-lg">Sebastian Castillo Castillo</h2>
        <h3 className="text-center bg-[#48a3ff] m-1 text-amber-100 rounded-2xl" >Hobbies</h3>
        <ul className="container_list bg-purple-400 text-center m-1 text-amber-50 rounded-3xl font-serif font-bold">
            
            <li className="container_list p-4">Escuchar Musica</li>
            <li className="container_list p-4">Programar</li>
            <li className="container_list p-4">Leer</li>
            <li className="container_list p-4">Caminar</li>

        </ul>
       </div>
    )
}

export default SebastianCastillo