class StarWarsChar {
    constructor(name, age) {this.name = name;this.age = age;
        this.religion = "Jedi";}
    toString(){return `${this.name} is a ${this.religion} and ${this.age} years old.`;}
}
function myFunction(){
    let anakin = {name: "Anakin"}; //ordinary object
    let luke = new StarWarsChar("Luke", 17); //object of class StarWarsChar
    for (var person of [anakin, luke]) {console.log(person);}
    for (var property in luke){console.log(property, luke[property]);}
    let vader = new StarWarsChar();
    Object.assign(vader, anakin); //new in ES6
    vader.name = "Darth Vader";
    vader.religion = "Sith";
    vader.age = 45;
    anakin = vader; //now anakin becomes a StarWarsChar
    anakin.son = luke; //stored as reference
    luke.father ??= anakin; //nullish assignment
    console.log(vader.toString(), anakin instanceof StarWarsChar);
    StarWarsChar.prototype.birthday = function(){if(this.age !== null && this.age !== undefined) this.age++; else return false};
    [luke, vader].forEach(character => character.birthday());
     console.log(luke.toString(), vader.toString(), vader === luke.father, luke === vader.son);
}
