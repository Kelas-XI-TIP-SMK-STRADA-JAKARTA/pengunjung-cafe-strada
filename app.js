// Kerjakan kode JavaScript kalian di bawah ini

//1. Jika nama dari si pengunjung kafe kosong, tampilkan di console "Anda tidak boleh masuk!" dan program selesai. Jika nama tidak kosong, lanjut ke step ke 2.

var nama = "terisi irene";
if (nama === "terisi irene") 
    console.log('irene, lanjutkan administasi')
else if (nama === "tidak terisi")
    console.log("Anda tidak boleh masuk!")

//2. Jika umur dari si pengunjung di bawah 13 tahun, maka ia hanya boleh memesan juice. Jika umur 13 tahun keatas, ia hanya boleh memesan kopi.

let umur = 17;
if (umur >= 16)
console.log("irene, anda hanya boleh memesan coffe")
else if (umur <= 13 )
console.log("maaf, anda hanya boleh memesan juice")


//Juice memiliki harga 10000, sedangkan kopi memiliki harga 25000.
//Jika uang yang dimiliki tidak mencukupi, maka tampilkan di console "Uang tidak cukup. Kamu tidak bisa pesan.". 
//Jika uang cukup, tampilkan "Anda bisa pesan minum. Sisa uang anda: [____]", dan gantilah [____] dengan sisa uang yang telah dikurangi oleh harga minuman.

let uangPelanngan = 45000

if (uangPelanngan >= 25000)
console.log("irene, Sisa uang anda: [Rp.20000]")
else if (uangPelanngan <= 25000)
console.log( "Uang tidak cukup. Kamu tidak bisa pesan.")
