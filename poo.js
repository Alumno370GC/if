//Modifyin prototypes
//suppose our constructions is the following

function Persona (nombre){
this.nombre = nombre;


this.saludar=function(){
return `${this.nombre}dice hola!`;

};

this.saludarIngles =function(){
return `${this.nombre} says hi!`

}


};

const personaUno = new Persona ("Ignacio");
console.log(personaUno.saludarIngles());