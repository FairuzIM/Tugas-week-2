function ganjil(val){
    for(let i = 0; i <= val; i++){
       if(i % 2 !== 0) console.log(i + ' adalah ganjil')
    }
}

let a = prompt(`Masukkan Angka`)
ganjil(a)
