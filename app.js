// Kerjakan kode JavaScript kalian di bawah ini
let nama = "Francois";
let umur = 10;
let myMoney = 1000;
let hargaKopi = 25000;
let hargaJuice = 10000;

var nama1 = nama.length !== 0 ? 'Silakan masuk' : 'Kafe kosong';
if(nama.length !== 0){
    console.log('Silakan masuk');
    if (umur < 13) {
        console.log ('Anda bisa memesan juice');
        if (myMoney === hargaJuice) {
            console.log ("uang anda pas")
        } else if (myMoney > hargaJuice) {
            console.log (`Sisa kembali anda = ${myMoney - hargaJuice}`);
        } else {
            console.log ('Maaf uang anda tidak cukup');
        }
    } else {  
        console.log ('Anda bisa memesan kopi');
        if (myMoney === hargaKopi) {
            console.log ("uang anda pas")
        } else if (myMoney > hargaKopi) {
            console.log (`Sisa kembali anda = ${myMoney - hargaKopi}`);
        } else {
            console.log ('Maaf uang anda tidak cukup');
        }    
    }

} else {
    console.log('Kafe kosong');
}
   
