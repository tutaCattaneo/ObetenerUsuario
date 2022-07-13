import React from "react";
import "./style.css";

export default function App() {
  let usuarios=[{
     id:1,
     nombre: 'Marcos'
  },
  {
     id:2,
     nombre:'lena'
  }];

  let telefonos=[{
    id:1,
    telefono:1235355
  },
   {
     id:2,
     telefono:132454
   }];

    const obtenerUsuario=id=>{
       return new Promise((resolve,reject)=>{
          if(usuarios.find(usuario => usuario.id ===id)){
             resolve('el usuario existe!');
          }else{
            reject('El usuario no existe');
          }
       });

    };
    const obtenerTelefono=id=>{
      return new Promise((resolve,reject)=>{
        if(telefonos.find(telefono => telefono.id ===id)){
           resolve('el telefono existe!');
        }else{
          reject('El telefono no existe');
        }
     });
    };
     obtenerUsuario(4)
      .then(res =>{
         console.log(res);
      })
      .cath(error =>{
         console.error(error);
      });



  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
