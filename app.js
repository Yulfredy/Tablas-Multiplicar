const fs = require('fs');
let base = 5;
let datos = '';


for (i = 0; i <= 10; i++) {
    datos += `${base}*${i}= ${base*i}\n`;
}

const data = new Uint8Array(Buffer.from(datos));
fs.writeFile(`tabla del ${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('Archivo creado correctamente');
});