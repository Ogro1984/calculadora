// Variables globales
var valor=0.0;
var operando="";


// Módulo calculadora

//atributos del modulo (privadas)
var calculadora = (function (valor,operando){
var resultado = 0.0;
var interno=0.0;
var buildvalue=false;
var contadorceros=1;
var internochar="";
var contadordecenas=0;
var cadena,indice,subcadena,decimalescount,diferencia,entero;
var resultadoacum=0;
var division=false;
var multiplicacion=false;
var suma=false;
var resta=false;
var decimales1=0;
var primeroper=0;
var segundooper=0;
var pp=true;
var memoria=0;


//metodos del modulo (privados)
//funciones para procesar ceros a la derecha del numero decimal
function conforma_valor(valor){
  if (punto==true){
      if (contadorceros<=7){
    resultado =(valor/(Math.pow(10,contadorceros)))+resultado;
      resultado=parse(resultado,contadorceros);
      contadorceros++;}
      else{resultado=resultado;}
    }
    else{if  (contadordecenas<=7){ resultado=resultado*10+valor;
        contadordecenas++;}
        else{resultado=resultado;}}

   return(round(resultado));

}

function valida_dec(valor){

  cadena=String(valor);
  var indice = cadena.indexOf(".");

  if (indice == -1){
  entero=true;
  cadena=cadena+".";

  }

  return cadena;



}

function valida_dif (cadena,contadorceros){
var indice = cadena.indexOf(".");
subcadena=cadena.substr(indice+1);
decimalescount=subcadena.length;
diferencia=contadorceros-decimalescount;
return diferencia;
}

function fenteros (cadena){
var indice = cadena.indexOf(".");
return indice;
}

function fdecimales (cadena){
var indice = cadena.indexOf(".");
subcadena=cadena.substr(indice+1);
decimalescount=subcadena.length;
return decimalescount;
}


function modif_cadena(cadena,diferencia){
  if (diferencia==1){
    cadena=cadena+"0";
  }
  else if (diferencia==2){
    cadena=cadena+"00";
  }
  else if (diferencia==3){
      cadena=cadena+"000";
    }
  else if (diferencia==4){
        cadena=cadena+"0000";
      }
  else if (diferencia==5){
          cadena=cadena+"00000";
      }
  else if (diferencia==6){
        cadena=cadena+"000000";
      }
  else if (diferencia==7){
          cadena=cadena+"0000000";}

return cadena;
}

function convert(valor,contadorceros){
return(modif_cadena(valida_dec(valor),valida_dif(valida_dec(valor,contadorceros),contadorceros)));
}

function llamaconvert(){
  if (contadorceros==1){
      if (resultado!=0){
      internochar=convert(resultado,contadorceros);}
      else{internochar="0.0";}
      contadorceros++;}

     else if (contadorceros==2){
      if (resultado!=0){internochar=convert(resultado,contadorceros);}
      else{internochar="0.00";}

        contadorceros++;}

     else  if (contadorceros==3){
         if (resultado!=0){internochar=convert(resultado,contadorceros);}
         else{internochar="0.000";}
    contadorceros++;
          }
    else  if (contadorceros==4){
            if (resultado!=0){internochar=convert(resultado,contadorceros);}
          else{internochar="0.0000";}
      contadorceros++;
               }
     else  if (contadorceros==5){
       if (resultado!=0){internochar=convert(resultado,contadorceros);}
       else{internochar="0.00000";}
    contadorceros++;
        }

      else  if (contadorceros==6){
        if (resultado!=0){internochar=convert(resultado,contadorceros);}
        else{internochar="0.000000";}
           contadorceros++;
         }

      else  if (contadorceros==7){
          if (resultado!=0){internochar=convert(resultado,contadorceros);}
            else{internochar="0.0000000";}
            }

      return internochar;
         }

function parse(num,decimales){
  var a=parseFloat(intlRound(num,decimales)) ;
    return a;

         }

function intlRound(numero, decimales = 7, usarComa = false) {
             var opciones = {
                 maximumFractionDigits: decimales,
                 useGrouping: false
             };
             usarComa = usarComa ? "es" : "en";
             return new Intl.NumberFormat(usarComa, opciones).format(numero);
         }

function round (value){

  var fixint=value.toFixed(7);
  var intfloat=fixint*1.0
  var enteros= fenteros(String(intfloat));
  var decimales1 = fdecimales(String(intfloat));
  var total=enteros+decimales1+1;


  value=parse(value,(9-enteros-1));
  if (value>99999999){value=99999999;}
  if (value<-9999999){value=-99999999;}
return value;
}

function operar(op,primeroper,segundooper){

      if (op=="div"){resultado=primeroper/segundooper;}
      else if (op=="por"){resultado=primeroper*segundooper;}
      else if (op=="mas"){resultado=primeroper+segundooper;}
      else if (op=="menos"){resultado=primeroper-segundooper;}
      else {resultado=resultado;}
      resultado=round(resultado);
      return resultado;
    }


// metodos y atributos publicos


  return {

    operacion: function(operacion){
      switch (operacion) {
        case "on":
        //inicializa las variables
        division=false;
        multiplicacion=false;
        suma=false;
        resta=false;
        interno=0;
        punto=false;
        contadorceros=1;
        contadordecenas=0;
        resultado=0;
        primeroper=0;
        segundooper=0;
        pp=true;
        memoria=0;
        document.getElementById('display').innerHTML=String(resultado);   //inicializa las variables todas a cero
        break;

        case "sign":
        resultado=resultado*(-1);

        document.getElementById('display').innerHTML=String(resultado);   //invierte el resultado


        break;

        case "raiz":
        //resultado=sqrt(resultado*(-1));
        //document.getElementById('display').innerHTML=String(interno);  //no hace nada porque no esta solicitado


        break;

        case "punto":
        var indice24 = String(resultado).indexOf(".");
        if (indice24 == -1){
          document.getElementById('display').innerHTML=String(resultado)+".";}


        punto=true;

        break;

        case "dividido":
        punto=false;
        contadorceros=1;
        contadordecenas=0;
        suma=false;
        resta=false;
        multiplicacion=false;
        division=true;
        primeroper=resultado;
        resultado=0;
        pp=true
        document.getElementById('display').innerHTML="";
        break;


        case "por":
        punto=false;
        contadorceros=1;
        contadordecenas=0;
        suma=false;
        resta=false;
        division=false;
        multiplicacion=true;
        primeroper=resultado;
        resultado=0;
        pp=true
        document.getElementById('display').innerHTML="";
        break;

        case "menos":
        punto=false;
        contadorceros=1;
        contadordecenas=0;
        suma=false;
        multiplicacion=false;
        division=false;
        resta=true;
        primeroper=resultado;
        resultado=0;
        pp=true
        document.getElementById('display').innerHTML="";
        break;

        case "mas":
        punto=false;
        contadorceros=1;
        contadordecenas=0;
        resta=false;
        multiplicacion=false;
        division=false;
        suma=true;
        primeroper=resultado;
        resultado=0;
        pp=true
        document.getElementById('display').innerHTML="";
        break;

        case "igual":
        punto=false;
        contadorceros=1;
        contadordecenas=0;

          if (pp==true){segundooper=resultado;memoria=segundooper;pp=false;}
          else{primeroper=resultado;segundooper=memoria;}



            if (suma==true){resultado=operar("mas",primeroper,segundooper);}
            else if(division==true){operar("div",primeroper,segundooper);}
            else if (resta==true){operar("menos",primeroper,segundooper);}
            else if (multiplicacion==true){operar("por",primeroper,segundooper);}


            document.getElementById('display').innerHTML=String(resultado);


        break;

        case "0":

            if (punto==true){

          document.getElementById('display').innerHTML=llamaconvert();
          }
              else {
            resultado=resultado*10;
            document.getElementById('display').innerHTML=String(resultado);
           }

        break;



        case "1":


              conforma_valor(1);

              document.getElementById('display').innerHTML=String(resultado);

        break;
        case "2":


              conforma_valor(2);

              document.getElementById('display').innerHTML=String(resultado);
        break;
        case "3":



              conforma_valor(3);

              document.getElementById('display').innerHTML=String(resultado);;
        break;
        case "4":

              conforma_valor(4);

              document.getElementById('display').innerHTML=String(resultado);
        break;
        case "5":


              conforma_valor(5);

              document.getElementById('display').innerHTML=String(resultado);
        break;
        case "6":



              conforma_valor(6);

              document.getElementById('display').innerHTML=String(resultado);
        break;
        case "7":



              conforma_valor(7);

              document.getElementById('display').innerHTML=String(resultado);
        break;
        case "8":



              conforma_valor(8);

              document.getElementById('display').innerHTML=String(resultado);
        break;
        case "9":


              conforma_valor(9);

              document.getElementById('display').innerHTML=String(resultado);
        break;

      }
          },


  }
})();





///inicializacion listeners

document.getElementById('1').onmousedown=t1down;
document.getElementById('1').onmouseup=t1up;
document.getElementById('2').onmousedown=t2down;
document.getElementById('2').onmouseup=t2up;
document.getElementById('3').onmousedown=t3down;
document.getElementById('3').onmouseup=t3up;
document.getElementById('4').onmousedown=t4down;
document.getElementById('4').onmouseup=t4up;
document.getElementById('5').onmousedown=t5down;
document.getElementById('5').onmouseup=t5up;
document.getElementById('6').onmousedown=t6down;
document.getElementById('6').onmouseup=t6up;
document.getElementById('7').onmousedown=t7down;
document.getElementById('7').onmouseup=t7up;
document.getElementById('8').onmousedown=t8down;
document.getElementById('8').onmouseup=t8up;
document.getElementById('9').onmousedown=t9down;
document.getElementById('9').onmouseup=t9up;
document.getElementById('0').onmousedown=t0down;
document.getElementById('0').onmouseup=t0up;
document.getElementById('on').onmousedown=tondown;
document.getElementById('on').onmouseup=tonup;
document.getElementById('sign').onmousedown=tsigndown;
document.getElementById('sign').onmouseup=tsignup;
document.getElementById('raiz').onmousedown=traizdown;
document.getElementById('raiz').onmouseup=traizup;
document.getElementById('dividido').onmousedown=tdivididodown;
document.getElementById('dividido').onmouseup=tdivididoup;
document.getElementById('por').onmousedown=tpordown;
document.getElementById('por').onmouseup=tporup;
document.getElementById('menos').onmousedown=tmenosdown;
document.getElementById('menos').onmouseup=tmenosup;
document.getElementById('punto').onmousedown=tpuntodown;
document.getElementById('punto').onmouseup=tpuntoup;
document.getElementById('mas').onmousedown=tmasdown;
document.getElementById('mas').onmouseup=tmasup;
document.getElementById('igual').onmousedown=tigualdown;
document.getElementById('igual').onmouseup=tigualup;



//inicializacion de functiones

function tondown(){
document.getElementById('on').style="width:77px;margin-left:1px;margin-up:1px;;margin-left:1px;margin-up:1px;"

}


function tonup(){
document.getElementById('on').style="width:78px;margin-left-0px;margin-up:0px;;margin-left-0px;margin-up:0px;"

calculadora.operacion("on");

}


function tsigndown(){
document.getElementById('sign').style="width:77px;margin-left:1px;margin-up:1px;;margin-left:1px;margin-up:1px;"

}


function tsignup(){
document.getElementById('sign').style="width:78px;margin-left-0px;margin-up:0px;;margin-left-0px;margin-up:0px;"
calculadora.operacion("sign");

}

function traizdown(){
document.getElementById('raiz').style="width:77px;margin-left:1px;margin-up:1px;"
}

function traizup(){
document.getElementById('raiz').style="width:78px;margin-left-0px;margin-up:0px;"

calculadora.operacion("raiz");
}

function tdivididodown(){
document.getElementById('dividido').style="width:77px;margin-left:1px;margin-up:1px;"
}

function tdivididoup(){
document.getElementById('dividido').style="width:78px;margin-left-0px;margin-up:0px;"
calculadora.operacion("dividido");
}

function tpordown(){
document.getElementById('por').style="width:77px;margin-left:1px;margin-up:1px;"
}

function tporup(){
document.getElementById('por').style="width:78px;margin-left-0px;margin-up:0px;"
calculadora.operacion("por");
}

function tmenosdown(){
document.getElementById('menos').style="width:77px;margin-left:1px;margin-up:1px;"

}

function tmenosup(){
document.getElementById('menos').style="width:78px;margin-left-0px;margin-up:0px;"
calculadora.operacion("menos");
}

function tpuntodown(){
document.getElementById('punto').style="width:76px;margin-left:1px;margin-up:1px;"
}

function tpuntoup(){
document.getElementById('punto').style="width:77px;margin-left-0px;margin-up:0px;"
calculadora.operacion("punto");
}

function tigualdown(){
document.getElementById('igual').style="width:76px;margin-left:1px;margin-up:1px;"

}

function tigualup(){
document.getElementById('igual').style="width:77px;margin-left-0px;margin-up:0px;"
calculadora.operacion("igual");
}

function tmasdown(){
  document.getElementById('mas').style="width:78px;margin-left-1px;margin-bottom:1px;"
}

function tmasup(){
document.getElementById('mas').style="width:79px;margin-left-0px;margin-bottom:0px;"
calculadora.operacion("mas");
}

function t1down(){
  document.getElementById('1').style="width:76px;margin-left:1px;margin-up:1px;"
}

function t1up(){
document.getElementById('1').style="width:77px;margin-left-0px;margin-up:0px;"
calculadora.operacion("1");

}


function t2down(){
document.getElementById('2').style="width:76px;margin-left:1px;margin-up:1px;"

}

function t2up(){
document.getElementById('2').style="width:77px;margin-left-0px;margin-up:0px;"
calculadora.operacion("2");
}

function t3down(){
  document.getElementById('3').style="width:76px;margin-left:1px;margin-up:1px;"
}

function t3up(){
document.getElementById('3').style="width:77px;margin-left-0px;margin-up:0px;"
calculadora.operacion("3");
}

function t4down(){
  document.getElementById('4').style="width:77px;margin-left:1px;margin-up:1px;"

}

function t4up(){
document.getElementById('4').style="width:78px;margin-left-0px;margin-up:0px;"

calculadora.operacion("4");
}

function t5down(){
  document.getElementById('5').style="width:77px;margin-left:1px;margin-up:1px;"

}

function t5up(){
document.getElementById('5').style="width:78px;margin-left-0px;margin-up:0px;"
calculadora.operacion("5");
}

function t6down(){
  document.getElementById('6').style="width:77px;margin-left:1px;margin-up:1px;"
}

function t6up(){
document.getElementById('6').style="width:78px;margin-left-0px;margin-up:0px;"
calculadora.operacion("6");

}

function t7down(){
  document.getElementById('7').style="width:77px;margin-left:1px;margin-up:1px;"
}

function t7up(){
document.getElementById('7').style="width:78px;margin-left-0px;margin-up:0px;"
calculadora.operacion("7");

}

function t8down(){
  document.getElementById('8').style="width:77px;margin-left:1px;margin-up:1px;"


}

function t8up(){
document.getElementById('8').style="width:78px;margin-left-0px;margin-up:0px;"

calculadora.operacion("8");

}

function t9down(){
  document.getElementById('9').style="width:77px;margin-left:1px;margin-up:1px;"
}

function t9up(){
document.getElementById('9').style="width:78px;margin-left-0px;margin-up:0px;"
calculadora.operacion("9");

}

function t0down(){
  document.getElementById('0').style="width:76px;margin-left:1px;margin-up:1px;"



}

function t0up(){
document.getElementById('0').style="width:77px;margin-left-0px;margin-up:0px;"
calculadora.operacion("0");

}
