// Kerjakan kode JavaScript kalian di bawah ini
var nama = "gabrielle";
var umur = 80;
var duit = 30000;
var hargaJus = 10000;
var hargaKopi = 25000;

if (nama !== "") {
    console.log([nama] + " Welcome to cafe");

    /*jika umur di atas 13 tahun, bisa pesan kopi*/
    if (umur >= 13) {
        console.log([nama] + " Kamu bisa pesan kopi");
        if (duit === 25000) {
            console.log(" Uangnya pas ya");
        }
        else if (duit >= 25000) {
            console.log([nama] + " Ini kembaliannya" + [duit - hargaKopi]);
        }
    }

    /*Jika umur dibawah 13 tahun, hanya boleh membeli jus*/
    if (umur >=0 && umur < 13) {
        console.log([nama] + " Kamu hanya boleh memesan jus");
        if (duit === 10000) {
            console.log(" Uangnya pas ya");
        }
        else if (duit >= 10000) {
            console.log([nama] + " Ini kembaliannya ya " + [duit - hargaJus])
        }
    }
}