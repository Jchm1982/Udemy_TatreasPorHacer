const colors = require('colors');

const { inquirerMenu,pausa,leerInput } = require('./helpers/inquirer.js');
const { Tarea} = require('./models/tarea.js');
const { Tareas} = require('./models/tareas.js');

const main = async() =>{
   
   let opt ='';
   const tareas = new Tareas();
   do {
      opt = await inquirerMenu();
      //console.log({ opt });
      switch ('opt') {
         case '1':
            //crear opcion
            const desc = await leerInput('Descripción:');
            console.log(desc);
            //tareas.crearTarea(desc);
            break;
         case '2':
               //listar las opciones
               console.log(tareas._listado);
               
               break;
      
         default:
            break;
      }
      
      //if(opt !=='0') await pausa();

      // const tareas = new Tareas();
      // const tarea = new Tarea('Comprar Comida');
      // tareas._listado[tarea.id]=tarea;
      //console.log(tareas);
      await pausa();
   } while ( opt !== '0');
   
   
   //pausa();
}

main();