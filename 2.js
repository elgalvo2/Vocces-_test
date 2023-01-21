// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.


function numbersTop(array) {

    // creamos variables auxiliares
    // aux arr contendra objetos con las propiedades item (objeto del array a analizar) y frec (frecuencia de aparicion)
    let aux_arr = []
    // result es el array que contrendra la solucion del reto,... es un arreglo que contendra los 3 item que mas se repiten
    let result = []
    
    try{
        // creamos map 
        const map = new Map(array.map(el => [el, 0]))

        // aumentamos el valor del key que coincide con el elemento del array
        array.forEach(element => {
            map.set(element, map.get(element) + 1)
        });
        
        // se inserta un objeto en el array aux_arr con las propiedades de las entradas del map
        map.forEach((val, key) => {
            aux_arr.push(
                {
                    item: key,
                    frec: val
                }
            )
        })
        
        // ordenamos aux_arr por la propiedad frec de sus objetos
        aux_arr.sort((a, b) => {
            return b.frec - a.frec
        })
        
        // mantenemos los 3 primeros objetos de aux_arr... luego, se itera caux_arr y se inserta el valor de la propuedad item de cada
        // objeto en el array result
        aux_arr.slice(0, 3).forEach(item => result.push(item.item))

    }catch(err){
        // si ocurre un error es manejado aqui
        result = 'Ha sucedido un error'

    }finally{
        // retorna result
        return result

    }
    
}


/**
 * TEST Ejercicio 2
*/
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]) // [ 1, 3, 2 ]
numbersTop(['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3]) // [ 'a', 3, 2 ]

// export numbersTop para realizar pruebas unitarias
module.exports = numbersTop