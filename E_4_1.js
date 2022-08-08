const person = {
    sity: "Moscow"
}

const person2 = Object.create(person);
person2.ownName = 'Ivan';
person2.ownAge = '27';

console.log(person2);

function selfKeys(object){
    for(let key in object){
        if(object.hasOwnProperty(key)){
            console.log(`${key}: ${object[key]}`);
        }
    }
}
selfKeys(person2)