var num1: number;
num1 = 1;

var person: any = {
    name: 'Thuy',
    age: 24
} 

var arrayPerson = [
    {
        name: 'Thuy',
        age: 24
    },
    {
        name: 'Hoa',
        age: 25
    }
]

console.log(num1);

{   
    let str2: string;
    var num2: number;
    str2 = 'goodbye';
    num2 = 3;
    console.log(num1);
    console.log(str2);
}

{
    let str1: string;
    str1 = 'hello'; 
    console.log(num1);
    console.log(str1);
    console.log(num2);
    
}

function tenfunction(bien: number){
    console.log('thuy ham ' + bien);
};

tenfunction(2);

console.log(person.age + ' - ' + person.name);

console.log(arrayPerson[1].name);