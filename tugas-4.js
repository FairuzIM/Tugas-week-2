function even(val){
    for(let i = 0; i <= val; i++){
       if(i % 2 === 0) console.log(i + ' adalah genap')
    }
}

let a = prompt(`Masukkan Angka`)
even(a)