/*
 * 3 formas de ejecutar un evento:
 * 
    * -Como atributo de un tag HTML
    * 
        * <p id="parrafo" onclick="hola()">
                   Esto es un párrafo
          </p>
 * 
 *    -Como manejador semántico
 *        obejoto.onevento = función
 *        
 *        document.querySelector('#parrafo').onclick = hola;
 * 
 *    -Como manejadores multiples
 *        obejor.addEventListener('evento', función, boolean (default=false)); 
 *        obejor.removeEventListener('evento', función, boolean (default=false));
 *        
 *        document.querySelector('#parrafo').addEventListener('click', hola);
 *        document.querySelector('#parrafo').removeEventListener('click', hola);
 *        
 *        -Boolean = false --> Fase de burbuja (Elemento más interno al más exteno)
 *        -Boolean = true --> Fase de captura (Elemento más externo al más interno)
 */       

/*
 * 
 * Encadenamiento de eventos en JS:
 * -Por defecto van desde el elemento más interno hasta el elemento más externo (elemento padre).
 *  -Es lo que se conoce como flujo de burbuja
 * 
 */

var divs = document.querySelectorAll('div');

function hola(evento)
{
    this.style.backgroundColor = 'yellow';
    alert("Hola, te saluda " + this.className + '\nEl click lo originó ' 
            + evento.target.className);
    
    console.log(evento);
    
    this.style.backgroundColor = '';
    
    evento.stopPropagation(); //Para evitar la propagación del evento a los demás elementos
    
    //document.querySelector('#parrafo').removeEventListener('click', hola);
}

for(var i = 0; i < divs.length; i++)
{
    //Fase de burbuja:
    divs[i].addEventListener('click', hola);
    
    //Fase de captura
    //divs[i].addEventListener('click', hola, true);
}



