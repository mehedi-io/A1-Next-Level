"use strict";
//  * Problem 1 * ------------------------
function multiplyValue(value, multiplier) {
    if (multiplier !== undefined) {
        return value * multiplier;
    }
    return value * 2;
}
console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));
// * Problem 2----------------------------
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLocaleLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    return value ? "Active" : "Inactive";
}
console.log(processInput("TypeScript"));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
// * Problem 3 ---------------------
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return ` Location:${locationName},${latitude},${longitude},`;
}
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
///    * Problem  4 ----------------
function concatenateArrays(...arrays) {
    return arrays.flat();
}
console.log(concatenateArrays(['a', 'b'], ['c', 'd']));
console.log(concatenateArrays(['1', '2'], ['3', '4'], ['5']));
function getPopularCourses(course, minStudents) {
    return course.filter((course) => course.isPublished && course.students >= minStudents);
}
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 80));
//  *   Problem   ------------------
function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));
console.log(pluckValues(users, "role"));
//   *  Problem  7  ----------------------------
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return ` Employee: &{this.name},Base Salary:&{this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();
console.log(manager);
console.log(manager.getRoleInfo());
console.log(manager.getDetails());
//  * Problem 8  ---------------------
async function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
}
async function test(age) {
    try {
        const result = await validateAgeAsync(age);
        console.log(result);
    }
    catch (error) {
        const message = (error instanceof Error ? error.message : error);
    }
}
test(15);
//test(20);
// async function test0(){
//     const result1 = await validateAgeAsync(15);
//     console.log(result1)
// }
// test();
