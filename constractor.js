// Creating Constructor
function Student(name, age, id, lang) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.lang = lang
    this.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.id);
        console.log(this.lang);
    }
}

const student1 = new Student('Uday', 20, 111, ['Bangla', 'English', 'Hindi']);
const student2 = new Student('Hasna', 21, 112, ['Bangla', 'English', 'Urdu']);
student1.display()
