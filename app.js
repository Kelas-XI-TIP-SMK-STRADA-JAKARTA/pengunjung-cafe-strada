// Kerjakan kode JavaScript kalian di bawah ini

var nama = ("Michelle Iskak"); // Nama Pengunjung
var umur = ("16"); // Umur Pengunjung
var uang = ("40000"); // Uang Pengunjung
var hargaJuice = 10000; // Harga Juice
var hargaKopi = 25000; // Harga Kopi

if (nama !== "") {
    console.log([nama] + " Boleh Masuk");
    if (umur > 13) {
        // jika umur ditulis lebih dari 13 tahun maka kamu dapat memesan kopi
        console.log("hanya boleh memesan kopi");
    }
    if (uang > 25000) {
        // uang anda akan dikurang dengan harga kopi
        console.log("anda bisa pesan Kopi, sisa uang anda: " + [uang - hargaKopi]);
    }
    else if (umur < 13) {
        // jika umur ditulis kurang dari 13 tahun maka kamu dapat memesan juice
        console.log("hanya boleh memesan juice");
    }
    if (uang > 10000) {
        // uang anda akan dikurang dengan harga juice
        console.log("anda bisa pesan Juice, sisa uang anda: " + [uang - hargaJuice]);
    } else {
        // Jika uang yang dimiliki tidak mencukupi, maka kamu tidak bisa pesan minum
        console.log("Uang tidak cukup. Kamu tidak bisa pesan");
    }
} else {
    // jika variabel nama kosong maka anda tidak boleh masuk
    console.log("Anda tidak boleh masuk!")
}
