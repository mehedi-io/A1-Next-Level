// Blog Task---------------
Title:What is Type Narrowing in TypeScript? Provide practical examples using typeof, instanceof, and the in operator.


Introduction:
Type Narrowing in Typescript process where the compiler refine a broad type string,number,unknown into  explain easily and create a type of code like function.

Detailed and Example:
type of example: In problem 2 i used type of .
function  processInput(value:string | number | boolean): string | number{
    if (typeof value === "string"){
        return value.trim().toLocaleLowerCase();
    }
}

instanceof: 
function showData(input: Date | string) {
  if (input instanceof Date) {
    console.log(input.getFullYear());
  } else {
      console.log(input.toUpperCase());
  }
}

conclusion:Type narrowing is the cornerstone of writing robust, type-safe TypeScript applications.