var num1;
num1 = 1;
var person = {
    name: 'Thuy',
    age: 24
};
var arrayPerson = [
    {
        name: 'Thuy',
        age: 24
    },
    {
        name: 'Hoa',
        age: 25
    }
];
console.log(num1);
{
    var str2 = void 0;
    var num2;
    str2 = 'goodbye';
    num2 = 3;
    console.log(num1);
    console.log(str2);
}
{
    var str1 = void 0;
    str1 = 'hello';
    console.log(num1);
    console.log(str1);
    console.log(num2);
}
function tenfunction(bien) {
    console.log('thuy ham ' + bien);
}
;
tenfunction(2);
console.log(person.age + ' - ' + person.name);
console.log(arrayPerson[1].name);
