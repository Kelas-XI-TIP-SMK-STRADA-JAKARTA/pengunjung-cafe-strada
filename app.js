// Kerjakan kode JavaScript kalian di bawah ini
var nama= "sulthan";
var umur= 16;
var duit= 100000;
var hargaJus= 10000;
var hargaKopi= 25000;

if (nama !== "") {
    console.log([nama]+ " welcome to cafe");

/*kalo umur pengunjung diatas 13 tahun bisa pesen kopi */
 if (umur >= 13) {
    console.log([nama]+ " kamu boleh pesen kopi");
        if (duit === 25000){
            console.log("uang mu pas");
        }
            else if (duit >= 25000){
                console.log([nama] + " uang kembalimu " + [duit-hargaKopi]);
                }
            }
        else {
            console.log("uang mu tidak cukup, kamu tidak dapat memesannya.");
            }    
    }   
/*kalo umur pengunjung dibawah 13 tahun cuma boleh pesen jus*/       
if (umur >=0 && umur <= 13 ) {
        console.log([nama]+" kamu cuma bisa pesen jus");
        if (duit === 10000){
            console.log("uang mu pas");
        }
        else if (duit >= 10000){
            console.log([nama] +" uang kembali mu "+ [duit-hargaJus])
        }
        
        else {
            console.log("uang mu tidak cukup, kamu tidak dapat memesannya.")
        }
    } 
/*situasi jika pengunjungnya alien*/
else {
    // kalo gak ada namanya gak boleh masuk
    console.log("wait, this customer is ilegal.");
}
