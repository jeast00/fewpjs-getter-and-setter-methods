// Add your Circle class here

const pi = Math.PI;

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2; // diameter is radius * 2
    }

    get circumference() {
        return (this.radius * 2) * pi;
    }

    get area() {
        return pi * (this.radius * this.radius); // area is PI times radius squared
    }

    set diameter(diameter) {
        this.radius = diameter / 2; // radius of the diameter is half of the diameter which shows the correct equation (diameter / 2) set to this.radius
    }

    set circumference(circumference) {
        this.radius = circumference / (pi * 2); // radius of the circumference is the circumference divided by PI times 2 (circumference (PI * 2)) set to this.radius
    }

    set area(area) {
        this.radius = Math.sqrt(area / pi); // radius of an area is the square root of area divided by pi set to this.radius
    }
}