// Kerjakan kode JavaScript kalian di bawah ini
// Kerjakan kode JavaScript kalian di bawah ini
// cara 1
let nama = "max";
let umur = 20;
let uang = 25000;

if (nama.length !== 0) {
    if (umur < 13) {
        console.log("Anda hanya boleh pesen Jus.");
        if (uang === 10000) {
            console.log("Anda bisa pesan minum dan uang anda pas.");
        } else if (uang > 10000) {
            console.log("Anda bisa pesan minum. Sisa uang anda: " + (uang - 10000) + ".");
        } else {
            console.log("Uang tidak cukup, Jadi kamu tidak bisa pesan.");
        }
    } else {
        console.log("Anda hanya boleh pesen Kopi.");
        if (uang === 25000) {
            console.log("Anda bisa pesan minum dan uang anda pas.");
        } else if (uang > 25000) {
            console.log("Anda bisa pesan minum. Sisa uang anda: " + (uang - 25000)) + ".";
        } else {
            console.log("Uang tidak cukup, Jadi kamu tidak bisa pesan."); 
        }
    }
} else {
    console.log("cafe kosong !");
}

