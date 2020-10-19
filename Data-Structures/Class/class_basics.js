class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "You are EXPELLED!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b});
        return sum / this.scores.length;
    }
    static enrollStudents(){
        return "Enrolling Students!"
        // maybe send email here
    }
}

let firstStudent = new Student("Jon", "Rhymes", 3);
let secondStudent = new Student("Alison", "Thornsberry", 4);

// console.log(firstStudent, secondStudent.firstName)
// firstStudent.markLate();
// firstStudent.markLate();
// console.log(firstStudent.markLate())
console.log(Student.enrollStudents())
// secondStudent.addScore(99)
// console.log(secondStudent.addScore(92))
// console.log(secondStudent.calculateAverage())