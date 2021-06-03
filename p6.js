/*
CIT 281: Prject 6
Author: Erika Koopmans
*/

class Shape {
    constructor(sides = []) {
        this.sides = sides;
    }
    perimeter = () => {
        return (this.sides.length > 0 ? 
            this.sides.reduce((total, currentSide) => { 
                return total + currentSide},0): 0);
    }  
};
/*
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0
*/

class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
        super([length, width, length, width]);
        let fourSides = [length, width, length, width];
        this.length = length;
        this.width = width;
    }
    area = () => {
        return this.length * this.width;
    }
};
/*
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0
*/

class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0) {
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area = () => {
        let s = (this.sideA + this.sideB + this.sideC)/2;
        let answer = Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
        return answer;
    }
};
/*
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
for (x of data) {
    let number = null;
    switch (x.length) {
        case 2 :
            number = new Rectangle(...x);
            if(x[0] == x[1]){
                console.log(`Square with sides ${x.toString()} has perimeter of 
                ${number.perimeter()} and area of ${number.area()}`)
            } else {
                console.log(`Rectangle with sides ${x.toString()} has perimeter of 
                ${number.perimeter()} and area of ${number.area()}`)
            }
            break;

        case 3 :
            number = new Triangle(...x);
            console.log(`Triangle with sides ${x.toString()} has perimeter of 
            ${number.perimeter()} and area of ${number.area()}`)
            break;
        default:
            if(x.length == 1){
                console.log(`Shape with ${x.length} side unsupported`)
            }
            else {
                console.log(`Shape with ${x.length} sides unsupported`)
            }
            break;
    }
};