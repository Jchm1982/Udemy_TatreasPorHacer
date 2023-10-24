require('colors');

const mostrarMenu = ()=>{
   return new Promise(resolve =>{

      console.clear();
      console.log('========================'.green);
      console.log(' Seleccione una Opción '.green);
      console.log('========================\n'.green);

      console.log(`${ '1.'.green} Crear Tarea`);
      console.log(`${ '2.'.green} Listar Tareas`);
      console.log(`${ '3.'.green} Listar Tareas Completadas`);
      console.log(`${ '4.'.green} Listar Tareas Pendientes`);
      console.log(`${ '5.'.green} Completar tarea(s)`);
      console.log(`${ '6.'.green} Borrar tarea`);
      console.log(`${ '0.'.green} Salir\n`);

      //recibir info de usuario
      const readLine=require('readline').createInterface({
         input: process.stdin,
         output: process.stdout
      })

      readLine.question('Seleccione una opción: ',(opt)=>{
         //console.log({opt});
         readLine.close();
         resolve(opt);
      })

   });


}

//pausa de la aplicación
const pausa=()=>{
   return new Promise( resolve =>{
      const readLine=require('readline').createInterface({
         input: process.stdin,
         output: process.stdout
      })

      readLine.question(`\nSeleccione${'ENTER'.blue} para continuar\n`,(opt)=>{
         readLine.close();
         resolve();
      })
   });


}

module.exports = {
   mostrarMenu,
   pausa
}