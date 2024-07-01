// Here's a simple of the for in

const student ={
name: "Monica",
class: 7,

};

//loop troug the keys of student object

for(let key in  student){

    //display the key-value pairs
    console.log(`${key}=> ${student[key]}`);

}

const salaries ={
jack: 24000,
Paul: 34000,
Monica: 55000

};

//use for...in

for(let i in salaries){
let salary = "$" + salaries [i];

console.log(`${i}:  ${salary}`)
}



