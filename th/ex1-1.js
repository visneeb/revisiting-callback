/* 
- เราอยากพัฒนาโปรแกรมบวกลบคูณหารเลข ทุกครั้งจะรับ Parameter 3 ตัวคือ
    - เลขตัวที่ 1
    - เลขตัวที่ 2
    - กระบวนการทางคณิตศาสตร์
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

// Start Coding Here

//call back
let add = (a, b) => {
  return a + b;
};
let subtract = (a, b) => {
  return a - b;
};
let multiply = (a, b) => {
  return a * b;
};
let divide = (a, b) => {
  // ทำให้สั้นลงได้ด้วย ternary operator
  // return num===0? "Cannot divide by zero": a/b
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
};

let calculate = (a, b, callback) => callback(a, b);

// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
console.log(calculate(10, 5, add)); // 15
console.log(calculate(10, 5, subtract)); // 5
console.log(calculate(10, 5, multiply)); // 50
console.log(calculate(10, 5, divide)); // 2
console.log(calculate(10, 0, divide)); // "Cannot divide by zero"
