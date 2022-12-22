// 1 //
// let a = 11
// console.log(a > 0 ? 'Musbat':'Manfiy')

// 2 //
// let a = 18;
// let check = a % 2 == 1 ? "Toq son" : "Juft son";
// console.log(check == true ? 'A soni toq son True' : 'A soni toq son emas False');

// 3 //
// let a = 18;
// let check = a % 2 == 1 ? "Toq son" : "Juft son";
// console.log(check == true ? 'A soni toq son False' : 'A soni toq son emas True');

// 4 //
// let a = 4;
// let b = 6;
// console.log(a > 2 && b<=3);

// 5 //
// let a = 4;
// let b = 6;
// console.log(a >= 0 ||  b < -2);

// 6 //
// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a <= b && a <= c && b <= c);

// 7 //
// let a = 3;
// let b = 4;
// let c = 6;
// console.log(b > a && b < c || b < a && b > c);

// 8 //
// let a = 3;
// let b = 3;
// console.log(a % 2 == 1 && b % 2 == 1);

// 9 //
let a = 2;
let b = 10;
let aa = true
let bb = true

if (a % 2 == 0) {
   aa = (b % 2 == 1)
}else{
   bb = (b % 2 == 1)
}


a % 2 == 0 || b % 2 == 0;

// 10 //
// let a = 4;
// let b = 3;
// console.log(a % 2 == 1 || b % 2 == 1);

// 11 //
// let a = 3;
// let b = 8;
// console.log(
//     (a % 2 == 1 && b % 2 == 1) || (a % 2 == 0 && b % 2 == 0)
//     ? 'ikkila son ham juft':'ikkila son ham toq'
// );

// 12 //
// let a = 1;
// let b = 1;
// let c = 1;
// console.log(a > 0 && b > 0 && c > 0);

// 13 //
// let a = 1;
// let b = -1;
// let c = -1;
// console.log(a > 0 || b > 0 || c > 0);

// 14 //
// let a = -1;
// let b = -1;
// let c = 1;

// console.log(
//     (a > 0 && b <= 0 && c <= 0) ||
//     (a <= 0 && b > 0 && c <= 0) ||
//     (a <= 0 && b <= 0 && c > 0)
// );

// 15 //
// let a = -1;
// let b = 1;
// let c = 1;

// console.log(
//     (a > 0) && (b > 0) ||
//     (b > 0) && (c > 0) ||
//     (a > 0) && (c > 0)
// );

// 16 //
// let a = 18;
// console.log((a > 9 && a < 100) && a % 2 == 0);

// 17 //
// let a = 109;
// console.log((a > 99 && a < 1000) && a % 2 == 1);

// 18 //
// let a = 0;
// let b = 1;
// let c = 1;
// console.log(
//     ((a = b) && (a = c)) ||
//     ((b = a) && (b = c)) ||
//     ((c = a) && (c = b))
// );

// 19 //
// let A = 0;
// let B = 1;
// let C = 1;
// console.log(
//     (A==(-1)*B)||(A==(-1)*C)||(B==(-1)*C)
// )

// 20 //
// let a = 564;
// let yuz = Math.floor(a / 100);
// let on = Math.floor(a - (yuz * 100) / 10);
// console.log(on);
