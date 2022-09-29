const http = require('http');

const servidor = http.createServer((req,res)=>{
//  console.log('Solicitud nueva..')

console.log('=== req (solicitud)');
console.log(req.url);

console.log(req.method);
res.end('Hola mundo');
});

const PUERTO = 3000;

servidor.listen(PUERTO,()=>{
  console.log(` El servidor esta escuchando en el puerto http://localhost:${PUERTO}...` );
});


