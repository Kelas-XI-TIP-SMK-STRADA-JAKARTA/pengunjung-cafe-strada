// Kerjakan kode JavaScript kalian di bawah ini

var nama = ("Michelle Iskak");
var umur = ("16");
var uang = ("40000");
var hargaJuice = 10000;
var hargaKopi = 25000;

if (nama !== "") {
    console.log([nama] + " Boleh Masuk");

    if (umur > 13) {
        console.log("hanya boleh memesan kopi");
    }
    if (uang > 25000) {
        console.log("anda bisa pesan Kopi, sisa uang anda: " + [uang - hargaKopi]);
    }
    else if (umur < 13) {
        console.log("hanya boleh memesan juice");
    }
    if (uang > 10000) {
        console.log("anda bisa pesan Juice, sisa uang anda: " + [uang - hargaJuice]);
    } else {
        // Jika uang yang dimiliki tidak mencukupi, maka tampilkan di console
        console.log("Uang tidak cukup. Kamu tidak bisa pesan");
    }

} else {
    console.log("Anda tidak boleh masuk!")
}
