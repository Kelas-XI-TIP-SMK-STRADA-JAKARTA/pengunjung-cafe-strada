// Kerjakan kode JavaScript kalian di bawah ini
let nama = "Prima Kurniawan";
umur = 16;
myMoney = 20000;
var hargaKopi = 25000;
var hargaJuice = 10000;
var nama1 = (nama === 'Prima Kurniawan' ? ': Silakan masuk' : ' Anda Tidak Boleh Masuk ');
console.log ("===== Pengunjung Cafe Strada =====")
if (nama === "") {
    console.log (nama1)
} else if (nama === "Prima Kurniawan") {
    console.log (nama + ' ' + nama1);
} else {
    console.log(nama + nama1);
}

if (umur <= 0) {
    console.log ()
} else if (umur >=  13) {
    console.log ('Anda bisa memesan kopi')
} else {
    console.log ('Anda bisa memesan juice')
}

if (myMoney <= 0) {
    console.log ()
} else if (myMoney === hargaJuice) {
    console.log (`Sisa kembali anda = ${myMoney - hargaJuice}`)
} else if (myMoney >=hargaKopi) {
    console.log (`Sisa kembali anda = ${myMoney - hargaKopi}`)
} else {
    console.log ('Maaf uang anda tidak cukup')
}
console.log ("==================================")