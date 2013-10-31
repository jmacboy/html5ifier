/* 
 * Html5ifier is a jQuery plugin that is used for older browsers that do not support html5 
 * converting elements to a div with class name html5 element
 * 
 * how to use:
 * $('Convert html5 element').html5ifier();
 * this will convert automatically all in html4 html5 
 */

jQuery(document).ready(function() {

    $.fn.html5ifier = function() {
        //Here we have selected element
        var elementoHTML5seleccionado = $(this); //html5 element content selected
        for (var j = 0; j < elementoHTML5seleccionado.length; j++) {
            var nombreElementoSeleccionado = elementoHTML5seleccionado[0].tagName;//we get the type of element that is html5
                         //we get the selected item in the event that there is more than one equal
            var elemento = elementoHTML5seleccionado[j];
            //we get the contents of the selected item
            var ContenidoElementoSeleccionado = elemento.innerHTML;
            //become the element name to lowercase
            var nombreElementoSeleccionadoMinuscula = nombreElementoSeleccionado.toLowerCase();
            //get the attributes of the element and put them in a variable as a text string
            var atributosElemento = "";
            var elementoClase = null;
            var atributos = elementoHTML5seleccionado[j].attributes;
            for (var i = 0; i < atributos.length; i++) {
                var attr = atributos[i];
                //Check to see if there is a class attribute to concatenate our attribute the creation
                if (attr.value !== "null") {
                    if (attr.value !== "0") {
                        if (attr.value !== "") {
                            if (attr.name === "class") {
                                elementoClase = attr.value + "'";
                            } else {
                                atributosElemento = atributosElemento + " " + attr.name + "='" + attr.value + "'";
                            }
                        }
                    }
                }
            }

            function getInternetExplorerVersion()
                    // Returns the version of Internet Explorer or a -1 for other browsers.
                    {
                        var rv = -1;
                        if (navigator.appName == 'Microsoft Internet Explorer')
                        {
                            var ua = navigator.userAgent;
                            var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                            if (re.exec(ua) != null)
                                rv = parseFloat(RegExp.$1);
                        }
                        return rv;
                    }

            var onload = false;
            //get the internet explorer browser version
            var version = getInternetExplorerVersion();
            //if onload is true change to html4
            if (version <= 7 && version > -1)
            {
                onload = true;
            } else {
                onload = false;

            }
            if (navigator.userAgent.toLowerCase().indexOf("Chrome") > -1) {
                onload = false;
            } else {
                onload = true;
            }
            if (navigator.userAgent.toLowerCase().indexOf("Safari") >= -1 || navigator.userAgent.toLowerCase().indexOf("Firefox") >= -1 || navigator.userAgent.toLowerCase().indexOf("Opera") >= -1) {
                onload = false;
            } else {
                onload = true;
            }
            if (onload) {
               //CREATE THE DTD
		var newDoctype = document.implementation.createDocumentType('html', '-//W3C//DTD XHTML 1.0 Transitional//EN', 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtdd');
		//CHANGE TO THE HTML5 DTD XHMTL4.1
		document.doctype.parentNode.replaceChild(newDoctype,document.doctype);
                var ContenidoHTML4aInsertar;
                if (elementoClase !== null) {
                    ContenidoHTML4aInsertar = "<div class=" + "'" + nombreElementoSeleccionadoMinuscula + " " + elementoClase + " " + atributosElemento + "> " + ContenidoElementoSeleccionado + " </div>";
                } else {
                    ContenidoHTML4aInsertar = "<div class=" + "'" + nombreElementoSeleccionadoMinuscula + "' " + atributosElemento + "> " + ContenidoElementoSeleccionado + " </div>";
                }
                //html4 insert the contents of a brother of the former element
                $(elemento).before(ContenidoHTML4aInsertar);
                //remove the selected item
                $(elemento).remove();
            }

        }
    }



});

