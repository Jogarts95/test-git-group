import React from "react";

const JosueGallardo = () => {
	return (
		<div className="bg-[#665AF2] p-5 rounded-lg shadow-lg shadow-gray-600 flex flex-col gap-3">
			<h1 className="bg-[#2f268b]/50 p-2 rounded-lg text-3xl text-[#fff] shadow-lg shadow-gray-600">
				Josue Gallardo
			</h1>

			<h2 className="bg-[#ea499c] text-[#fff] text-2xl rounded-lg p-1 shadow-lg shadow-gray-600 flex justify-center items-center">
				Hobbies
			</h2>
			<ul className="bg-[#edb84c] p-2 rounded-lg shadow-lg shadow-gray-600 flex flex-col font-semibold justify-center items-center">
				<li>Videojuegos</li>
				<li>Dibujar</li>
				<li>Ver Youtube</li>
				<li>Dormir</li>
			</ul>
		</div>
	);
};

export default JosueGallardo;
