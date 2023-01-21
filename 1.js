// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.

function findUniq(array) {

    // Se define unn objeto que contendra la informacion de las solucion

    let result = {
        count:0,
        message:'No se encontraron items unicos',
        items:[]
    }
    
    
    try{
        // utiliza map porque esta estructura no modifica el tipo de los datos que se evaluan
        // creamos map 
        const map = new Map(array.map(el=>[el,0]))
        
        // aumentamos el valor del key que coincide con el elemento del array
        array.forEach(element => {
            map.set(element, map.get(element)+1)
        });
        
        // si el value del key evaluado es igual a uno, se inserta este key en la propiedad items del objeto result
        map.forEach((val,key)=>{
            if(val == 1){
                result.items.push(key)
                result.count++
            }
        })
        
    }catch(err){
        // si ocurre un error, aqui se maneja... se guarda el mensaje en la propiedad message del objeto result
        result.message = 'Hay un caso indefinido'
    }finally{
        
        //comprueba que el arreglo pasado solo obtiene un objeto unico

        if(result.count==1){
            
            result.message = `Resultado obtenido correctamente! => ${result.items[0]}`
        }else if(result.count>1){
            // si hay mas de un objeto, el mensaje es el siguiente
            result.message = `Se han encotrado ${result.count} resultados! => ${[...result.items]}`
        }

        // si la propiedad count del objeto result es igual a uno, la funcion retorna el primer valor alojado en la propiedad
        // items del objeto result, si no, retorna el mismo objeto result
        return result.count!=1 ? result : result.items[0] 
    }
}


/**
 * TEST Ejercicio 1
 */
findUniq(['12', 10, '12', 11, 1, 11, 10, '12']) // 1
findUniq(['Capitán América', 'Hulk', 'Deadpool', 'Capitán América', 'Hulk', 'Wonder Woman', 'Deadpool', 'Iron Man', 'Iron Man']) // 'Wonder Woman'

// exporta la funcion para hacer pruebas unitarias 
module.exports = findUniq