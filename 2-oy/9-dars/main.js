// 1 //
// let a = 1;
// if (a > 0) {
//   a = a + 1;
//   console.log(a)
// }

// 2 //
// let a = 1;
// if (a > 0) {
//   a = a + 1;
//   console.log(a);
// } else {
//   a = a - 2;
// }

// 3 //
// let a = 0;

// if (a > 0) {
//   a = a + 1;
//   console.log(a);
// } else if (a < 0) {
//   a = a - 2;
// } else {
//   a = 10;
// }

// 4 //
// let a = 1;
// let b = 1;
// let c = 1;
// let m = 0;

// if (a > 0) m = m + 1;

// if (b > 0) m = m + 1;

// if (c > 0) m = m + 1;

// console.log(m);

// 5 //
// let a = 1;
// let b = -1;
// let c = 1;
// let musbat = 0;
// let manfiy = 0;

// if (a > 0) musbat = musbat + 1; else manfiy = manfiy + 1
// if (b > 0) musbat = musbat + 1; else manfiy = manfiy + 1
// if (c > 0) musbat = musbat + 1; else manfiy = manfiy + 1

// console.log('Musbat', musbat);
// console.log('Manfiy', manfiy);

// 6 //
// let a = 5;
// let b = 9;

// if (a > b) console.log("Katta son b", a); else console.log("Katta son b")

// 7 //
// let a = 5;
// let b = 9;

// if (a < b) console.log("Tartib raqam", 1); else console.log("Tartib raqam", 2)

// 8 //
// let a = 5;
// let b = 9;

// if (a > b) {
//   console.log(a);
//   console.log(b);
// } else {
//   console.log(b);
//   console.log(a);
// }

// 9 //
// let a = 15;
// let b = 9;
// if (a > b) {
//   a = a + b;
//   b = a - b;
//   a = a - b;
//   console.log(a,b)
// }

// 10 //
// let a = 15;
// let b = 25;
// if (a !== b) a = b = a + b; else a = b = 0;
// console.log(a,b)

// 11 //
// let a = 15;
// let b = 2;
// if (a !== b) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// } else {
//   a = b = 0;
//   console.log(a, b);
// }

// 12 //
// let a = 6;
// let b = 2;
// let c = 1;

// if (a < b && a < c) a;
// else if (b < a && b < c) b;
// else if (c < a && c < b) c;

// 13 //
// let a = 6;
// let b = 5;
// let c = 1;

// if ((a < b && a > c) || (a > b && a < c)) a; else
// if ((b < a && b > c) || (b > a && b < c)) b; else
// if ((c < b && c > a) || (c > b && a < c)) c;

// 14 //
// let a = 9;
// let b = 16;
// let c = 47;

// let kattason = 0;
// let kichikson = 0;

// if (a < b && a < c) kichikson = a;
// if (b < a && b < c) kichikson = b;
// if (c < b && c < a) kichikson = c;

// if (a > b && a > c) console.log(a, kichikson);
// if (b > a && b > c) console.log(b, kichikson);
// if (c > b && c > a) console.log(c, kichikson);

// 15 //
let a = 9;
let b = 16;
let c = 47;

// a + b > a + c yoki b + c
// a + c > a + b yoki b + c
// b + c > b + a yoki a + b

if (a + b > a + c && b + c) console.log(a, b);
if (a + c > a + b && b + c) console.log(a, c);
if (b + c > b + a && a + b) console.log(b, c);
 