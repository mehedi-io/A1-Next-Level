
Title: Type Aliases vs. Interfaces in TypeScript: Core Differences and When to Use Each

Introduction:
TypeScript uses type aliases and interfaces to define data shapes. While both define objects, they differ in merging, inheritance, and flexibility.

Detailed Body Paragraphs with Code Examples:
ex-1: interface automaticlly merge  same name:
interface User {
  name: string;
}
interface User {
  age: number;
}
ex-2: Scope and Unions
Interfaces only describe objects and classes. Type aliases can also define primitives and union types
type Status = "success" | "error"; 
type ID = string | number;

Conclusion
Use interfaces for object shapes, class designs, and open libraries that need merging. Use type aliases for union types, primitives, and complex data combinations.