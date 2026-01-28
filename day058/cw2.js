function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
    this.talk = function () {
        console.log("bark bark");
    };
}

let dog1 = new Dog("Buddy", "Labrador");
dog1.talk();