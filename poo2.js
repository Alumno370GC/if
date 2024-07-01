class Perosna{
constructor(nombre){

    this.nombre = nombre;


}

saludar = function(){
retunr `${this.nombre} dice hola!`;

   }
}


//Revisa estoy verá
Perosna.prototype.saludarIngles = function (){
    return `${this.nombre} says hi!`;
}

const personaUno = new Perosna ("Ignacio");
console.log(personaUno.saludarIngles());