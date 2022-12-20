export {};

// // + * - / ** %

// //
// let x = 15 / 2;         x;
// let y = 15 % 2;         y;

// //
// let a = 3 ** 5;         a;
// let b = Math.sqrt(49);  b;
// let bb = 49 ** 1 / 3;   bb; // 3 Darajali ildizga olish
// let bbb = 27 ** 1 / 3;   bbb; // 3 Darajali ildizga olish

// console.log(Math.floor(1.99)) // Sonni butun qiymatini olish
// console.log(Math.round(1.51)) // Sonni yaxlit qiymatini olish
// console.log(Math.ceil(2.9)) // Sonni keyingi butun qiymatini olish

// 1 //
// let L = 235;
// let M = Math.floor(L / 100)
// console.log(L, 'sm da', M, 'to`liq metr');

// 2 //
// let M = 5236
// let T = Math.floor(M / 1000)
// console.log(M,'Kilogramda: ', T, 'tonna')

// 3 //
// let faylhajmi_bayt = 98465;
// let faylhajmi_kilobayt = faylhajmi_bayt / 1024;
// console.log(faylhajmi_bayt, "bayt = ", faylhajmi_kilobayt, "kilobaytga teng");

// 4 //
// let a = 15
// let b = 5
// console.log('a kesmada b kesma',a/b,"marta joylashadi")

// 5 //
// let a = 16;
// let b = 5;
// let jqism = a % b;
// console.log("a kesmada b kesma", a / b, "marta joylashadi");
// console.log("a kesmada b kesma joylashmagan qismi", jqism);

// // 6 //
// let a = 84;
// let unlik = Math.floor(a / 10);
// let birlik = a % 10;
// console.log("O `nlik: ", unlik, "Birlik: ", birlik);

// 7 //
// let son = 59;
// let son_un = Math.floor(son / 10);
// let son_bir = son % 10;
// console.log("Raqamlar yi`gindisi: ", son_un + son_bir);

// 8 //
// let son = 41;
// let son_un = Math.floor(son / 10);
// let son_bir = son % 10;
// let son_bir_a= son_bir*10;
// let natija = son_bir_a+son_un;
// natija;
// console.log("Ikki xonali sonlarni o`rnini almashtirish: ",natija);

// 9 //
// let son = 351;
// console.log('sonni yuzlar xonasidagi raqami: ', Math.floor(son/100));

// 10 //
// let son = 984;
// let son_yuzliklar = Math.floor(son / 100);
// let son_unliklar = Math.floor((son - son_yuzliklar * 100) / 10);
// let son_birliklar = (son - son_yuzliklar * 100) % 10;
// console.log("Yuzliklar: ", son_yuzliklar);
// console.log("O`nliklar: ", son_unliklar);
// console.log("birliklar: ", son_birliklar);

// 11 //
// let son = 984;
// let son_yuzliklar = Math.floor(son / 100);
// let son_unliklar = Math.floor((son - son_yuzliklar * 100) / 10);
// let son_birliklar = (son - son_yuzliklar * 100) % 10;
// let natija = son_yuzliklar + son_unliklar + son_birliklar;
// son_yuzliklar; son_unliklar; son_birliklar
// console.log("Uch xonali sonni raqamlari yig`indisi: ", natija);

// 12 //
// let son = 953;
// let son_yuzliklar = Math.floor(son / 100);
// let son_unliklar = Math.floor((son - son_yuzliklar * 100) / 10);
// let son_birliklar = (son - son_yuzliklar * 100) % 10;
// son_yuzliklar; son_unliklar; son_birliklar
// let natija = son_unliklar*100+son_birliklar*10+son_yuzliklar;
// console.log(natija)

// 13 //
// let son = 184;
// let son_yuzliklar = Math.floor(son / 100);
// let son_unliklar = Math.floor((son - son_yuzliklar * 100) / 10);
// let son_birliklar = (son - son_yuzliklar * 100) % 10;
// son_yuzliklar; son_unliklar; son_birliklar
// let natija = son_birliklar*100+son_unliklar*10+son_yuzliklar
// console.log(natija)

// 14 //
// let son = 426;
// let son_yuzliklar = Math.floor(son / 100);
// let son_unliklar = Math.floor((son - son_yuzliklar * 100) / 10);
// let son_birliklar = (son - son_yuzliklar * 100) % 10;
// son_yuzliklar; son_unliklar; son_birliklar
// let natija = son_birliklar*100+son_unliklar*10+son_yuzliklar
// console.log(natija)

// 15 //
// let son = 123;
// let son_yuzliklar = Math.floor(son / 100);
// let son_unliklar = Math.floor((son - son_yuzliklar * 100) / 10);
// let son_birliklar = (son - son_yuzliklar * 100) % 10;
// son_yuzliklar; son_unliklar; son_birliklar
// let natija = son_unliklar*100+son_yuzliklar*10+son_birliklar
// console.log(natija)

// 16 //
// let son = 123;
// let son_yuzliklar = Math.floor(son / 100);
// let son_unliklar = Math.floor((son - son_yuzliklar * 100) / 10);
// let son_birliklar = (son - son_yuzliklar * 100) % 10;
// son_yuzliklar; son_unliklar; son_birliklar
// let natija = son_yuzliklar*100+son_birliklar*10+son_unliklar
// console.log(natija)
