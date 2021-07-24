// Kerjakan kode JavaScript kalian di bawah ini

var nama = prompt("Nama Pengunjung");
var umur = prompt("Usia Pengunjung");
var uang = prompt("Uang Pengunjung");
var hargaJuice = 10000;
var hargaKopi = 25000;

if(nama !== ""){
// Jika nama tidak kosong
console.log();
} else {
// Jika nama dari si pengunjung kafe kosong, tampilkan di console
console.log("Anda tidak boleh masuk!");
}

if(umur > 13){
console.log("hanya boleh memesan kopi");
} if(uang > 25000){
console.log("anda bisa pesan minum, sisa uang anda: " + [uang - hargaKopi]);
} 
else if(umur < 13) {
console.log("hanya boleh memesan juice");
} if(uang > 10000){
console.log("anda bisa pesan minum, sisa uang anda: " + [uang - hargaJuice]);
}

else {
// Jika uang yang dimiliki tidak mencukupi, maka tampilkan di console
console.log("Uang tidak cukup. Kamu tidak bisa pesan")
}