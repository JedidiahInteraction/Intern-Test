import { application, Application, Request, Response } from "express";

import Users from "../../data/counter.json";


var faker = require('faker');
const fs = require('fs');

let persona = ""
 let respuesta = {
  error: false,
  codigo: 200,
  mensaje: ''
 };



//Leer documento .txt
const readFile = ( nombre: string ) => {

  console.log("holaaaaa")
  const names = Users.users.find( e => e.name == nombre)
  
  console.log(names)

  
  return names?.name ? names?.name : "vacio" ;
}

//Cargar los nombres desde libreria Faker
export const loadApiEndpoints = (app: Application): void => {
 
  app.get("/getNames", (req: Request, res: Response) => {
    let names: Array<string> = new Array();
    let random = Math.floor(Math.random() * (9 - 5)) + 5;

    let a: string = "";
    for (let index = 0; index < random; index++) {
        const randomName = faker.name.findName();
        names.push(randomName);
    }
    return res.status(200).send(JSON.stringify(names));
  });

 
  //Actualizar el JSON y recibir string del front
  app.put("/updateName", (req: Request, res: Response) => {

    const name = req.query.name;

    res.send({
      'name': name,
    });

      if(req.query){
        console.log(req.query.name)
      }

      if(req.query.name) {

        persona = readFile(req.query.name.toString());
        respuesta = {
          error: false,
          codigo: 200,
          mensaje: 'Una persona ha sido encontrada'
        }
      
      } else {
        respuesta = {
         error: true,
         codigo: 501,
         mensaje: 'Houston, tenemos un problema'
        };
       } 
       
      res.send(respuesta);
     

  });

};


