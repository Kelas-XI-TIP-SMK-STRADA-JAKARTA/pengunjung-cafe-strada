// Kerjakan kode JavaScript kalian di bawah ini
var nama ="zefanya"
if (nama === "zefanya")
console.log("zefanya anda boleh masuk")
else if (nama === "tidak terisi")
console.log("zefanya anda tidak boleh masuk")

// 2. Jika umur dari si pengunjung di bawah 13 tahun, maka ia hanya boleh memesan juice. Jika umur 13 tahun keatas, ia hanya boleh memesan kopi.
var umur = 11
if (umur <= 13)
console.log("anda boleh memesan juice")
else if (umur => 13 )
console.log("anda hanya boleh memesan kopi")

/*Juice memiliki harga 10000, sedangkan kopi memiliki harga 25000.
4. Jika uang yang dimiliki tidak mencukupi, maka tampilkan di console "Uang tidak cukup. Kamu tidak bisa pesan.". */

var harga = 50000
if (harga => 10000)
console.log("kamu bisa pesan kopi,uang kembalian anda 25000")
else if (harga <= 10000 )
console.log("uang tidak cukup,kamu tidak bisa pesan")
