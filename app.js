// Kerjakan kode JavaScript kalian di bawah ini
let nama = "joaquin";
let umur = 19;
let uang = 20000;

if(nama.length !== 0) {
    if (umur < 13) {
        console.log("Kamu Hanya dapat pesan kue");
        if (uang === 10000) {
            console.log("Kamu bisa pesan makanan dan uang kamu pas.");
        } else if (uang > 10000) {
            console.log("Kamu bisa pesan makanan. Sisa uang Kamu: " + (uang - 10000) + ".");
        } else {
            console.log("Uang tidak cukup, Jadi kamu tidak dapat memesan.");
        }
    } else {
        console.log("Kamu hanya dapat pesan jus");
        if (uang === 25000) {
            console.log("Kamu bisa pesan minum dan uang kamu pas.");
        } else if (uang > 25000) {
            console.log("Kamu bisa pesan minum. Sisa uang Kamu: " + (uang - 25000)) + ".";
        } else {
            console.log("Uang tidak cukup, jadi kamu tidak dapat memesan.");
        }
    }
} else {
    console.log("cafe kosong !");
}