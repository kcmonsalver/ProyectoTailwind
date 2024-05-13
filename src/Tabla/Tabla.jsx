import React from "react";


export function Tabla() {
    return (
      <div className="flex space-x-20">
        <Tabla2 />
        <Tabla2 />
        <Tabla2 />
      </div>
    );
  }
  
  function Tabla2() {
    return (
      <table className="border-separate rounded-lg ">
        <caption className="caption-top bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Ensayo Tailwind.
        </caption>
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-lg p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white m-2">Nombre</th>
            <th className="border border-slate-600 rounded-lg p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white m-2">Apellido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-700 rounded-lg p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white m-2">Kristhian</td>
            <td className="border border-slate-700 rounded-lg p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white m-2">Monsalve</td>
          </tr>
          <tr>
            <td className="border border-slate-700 rounded-lg p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white m-2">Alejandra</td>
            <td className="border border-slate-700 rounded-lg p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white m-2">Solorzano</td>
          </tr>
          <tr>
            <td className="border border-slate-700 rounded-lg p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white m-2">Antonella</td>
            <td className="border border-slate-700 rounded-lg p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white m-2">Monsalve</td>
          </tr>
        </tbody>
      </table>
    );
  }
