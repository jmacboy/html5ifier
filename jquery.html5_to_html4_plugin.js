/* 
 * Html5ifier es un plugin jQuery que se utiliza para navegadores antiguos que no soportan html5 convirtiendo
 * el los elementos html5 a un div con class del nombre del elemento html5
 * 
 * Como Usar:
 * $('Elemento html5 a convertir').html5ifier();
 * esto convertira automaticamente todo el html5 en html4 
 */

$(document).ready(function(){
    $.fn.html5ifier=function(){
        //aqui tenemos el elemnto seleccionado 
        var elementoHTML5seleccionado=$(this); //contenido del elemento html5 seleccionado
     for(var j=0;j<elementoHTML5seleccionado.length;j++){
            var nombreElementoSeleccionado=elementoHTML5seleccionado[0].tagName;//sacamos el tipo de elemento html5 que es
            //sacamos el elemento seleccionado en el caso de que existieran mas de uno igual
            var elemento=elementoHTML5seleccionado[j]
             //sacamos el contenido del elemento seleccionado
            var ContenidoElementoSeleccionado= elemento.innerHTML;
            //convertivos el nombre del elemento a minuscula
            var nombreElementoSeleccionadoMinuscula=  nombreElementoSeleccionado.toLowerCase();
            //obtenemos los atributos del elemento y los colocamos en una variable como cadena de texto
            var atributosElemento="";
            var elementoClase=null;
            var atributos=elementoHTML5seleccionado[j].attributes;
            for(var i=0;i<atributos.length;i++){
                var attr = atributos[i];
                //Verificamos si existe un atributo class para concatenarlo a nuestro atributo que se creara
                if(attr.name==="class"){
                    elementoClase=attr.value+"'";
                }else{
                    atributosElemento=atributosElemento+" "+attr.name+"='"+attr.value+"'";
                }
            }
            if(localStorage){
                var ContenidoHTML4aInsertar;
                if(elementoClase!==null){
                    ContenidoHTML4aInsertar="<div class="+"'"+nombreElementoSeleccionadoMinuscula+" "+elementoClase+" "+atributosElemento+"> "+ContenidoElementoSeleccionado+" </div>";   
                }else{
                    ContenidoHTML4aInsertar="<div class="+"'"+nombreElementoSeleccionadoMinuscula+"' "+atributosElemento+"> "+ContenidoElementoSeleccionado+" </div>";
                }
                //insertamos el contenido de html4 como un hermano de el anterior elemento
                $(elemento).before(ContenidoHTML4aInsertar);
                //eliminamos el elemnto seleccionado 
                $(elemento).remove();
            }
     
        }
    }
    
    
    
});

