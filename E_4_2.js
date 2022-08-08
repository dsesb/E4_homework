function showOwnProps(obj) {
    let result = "";
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result += key + ": " + obj[key] + "\n";
        }
    }
    console.log(result);
}


const student1 = {
    name: "Dmitry",
    ownCity: "Spb",
    age: 25,
    profession: "engineer"
};


showOwnProps(student1);