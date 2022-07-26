
//dog constructor
function Dog(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

//class
class Cat {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

function testObjects() {
    console.log("test Object");
    // 1- object literal
    let lola = {
        name: "lola",
        age: 3,
        color: "green"
    };
    console.log(lola);
    
    let rocko = {
        name: "rocko",
        age: 3,
        color: "blue"
    }
    console.log(rocko);

    //2- object constructor
    let spot = new Dog("spot" ,3, "red");
        console.log(spot);

    let fido = new Dog("fido" ,4, "yellow");
        console.log(fido);

    //3- Class
    let lily = new Cat("lily", 5, )
}



// testing object
testObjects();



