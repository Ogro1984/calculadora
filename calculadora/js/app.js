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

//metodos del modulo (privados)

function conforma_valor(valor){
  if (punto==true){
      if (contadorceros<=6){
    resultado = (valor/(Math.pow(10,contadorceros)))+resultado;

      contadorceros++;}
      else{resultado=resultado;}
    }
    else{if  (contadordecenas<=6){ resultado=resultado*10+valor;
        contadordecenas++;}
        else{resultado=resultado;}}

   return(resultado);

}


  return {

    operacion: function(operacion){
      switch (operacion) {
        case "on":

        interno=0;
        punto=false;
        contadorceros=1;
        contadordecenas=0;
        resultado=0;
        document.getElementById('display').innerHTML=String(resultado);
        break;

        case "sign":

        resultado=resultado*(-1);

        document.getElementById('display').innerHTML=String(resultado);
        break;



        case "raiz":
        //resultado=sqrt(resultado*(-1));
        //document.getElementById('display').innerHTML=String(interno);
        break;

        case "punto":
        punto=true;
        break;


        case "0":

        if (punto==true){
            if (contadorceros==1){
                if (resultado!=0){
                internochar=String(resultado)+".0";}
                else{internochar="0.0";}
                contadorceros++;}

            else if (contadorceros==2){
              if (resultado!=0){internochar=String(resultado)+"0";}
              else{internochar="0.00";}

              contadorceros++;}

         else  if (contadorceros==3){
           if (resultado!=0){internochar=String(resultado)+"0";}
           else{internochar="0.000";}
              contadorceros++;
            }
         else  if (contadorceros==4){
           if (resultado!=0){internochar=String(resultado)+"0";}
           else{internochar="0.0000";}
                 contadorceros++;
               }
          else  if (contadorceros==5){
                  if (resultado!=0){internochar=String(resultado)+"0";}
                  else{internochar="0.00000";}
                  contadorceros++;
                  }
          else  if (contadorceros==6){
                  if (resultado!=0){internochar=String(resultado)+"0";}
                    else{internochar="0.000000";}
                     contadorceros++;
                     }
           else  if (contadorceros==7){
                    if (resultado!=0){internochar=String(resultado);}
                      else{internochar="0.0000000";}
                      }
          document.getElementById('display').innerHTML=internochar;
          }
          else {
            resultado=resultado*10;
            document.getElementById('display').innerHTML=String(resultado);
          }


          if (ceropressed == false){
          ceropressed=true;
          }
        break;

        case "1":
        conforma_valor(1);

        document.getElementById('display').innerHTML=String(resultado);

        break;
        case "2":
        interno =interno*10+2;
        break;
        case "3":
        interno =interno*10+3;
        break;
        case "4":
        interno =interno*10+4;
        break;
        case "5":
        interno =interno*10+5;
        break;
        case "6":
        interno =interno*10+6;
        break;
        case "7":
        interno =interno*10+7;
        break;
        case "8":
        interno =interno*10+8;
        break;
        case "9":
        interno =interno*10+9;
        break;

      }


//document.getElementById('display').innerHTML=resultado;


    },






    sumar: function(num1,num2){
      var resultado = num1+num2;
      actualizarResultado(resultado)

    },
    restar: function(num1,num2){
      var resultado=num1-num2;
      actualizarResultado (resultado)

    },
    multiplicar: function(num1,num2){

      var resultado = num1*num2;
      actualizarResultado (resultado);
      return resultado
    },

    resultado:function(){
      return resultado;

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
operando="on";
calculadora.operacion(operando);

}


function tsigndown(){
document.getElementById('sign').style="width:77px;margin-left:1px;margin-up:1px;;margin-left:1px;margin-up:1px;"

}


function tsignup(){
document.getElementById('sign').style="width:78px;margin-left-0px;margin-up:0px;;margin-left-0px;margin-up:0px;"
operando="sign";
calculadora.operacion(operando);

}

function traizdown(){
document.getElementById('raiz').style="width:77px;margin-left:1px;margin-up:1px;"
}

function traizup(){
document.getElementById('raiz').style="width:78px;margin-left-0px;margin-up:0px;"
operando="raiz";
calculadora.operacion(operando);
}

function tdivididodown(){
document.getElementById('dividido').style="width:77px;margin-left:1px;margin-up:1px;"
}

function tdivididoup(){
document.getElementById('dividido').style="width:78px;margin-left-0px;margin-up:0px;"
operando="dividido";
calculadora.operacion(operando);
}

function tpordown(){
document.getElementById('por').style="width:77px;margin-left:1px;margin-up:1px;"
}

function tporup(){
document.getElementById('por').style="width:78px;margin-left-0px;margin-up:0px;"
operando="por";
calculadora.operacion(operando);
}

function tmenosdown(){
document.getElementById('menos').style="width:77px;margin-left:1px;margin-up:1px;"

}

function tmenosup(){
document.getElementById('menos').style="width:78px;margin-left-0px;margin-up:0px;"
operando="menos";
calculadora.operacion(operando);
}

function tpuntodown(){
document.getElementById('punto').style="width:76px;margin-left:1px;margin-up:1px;"
}

function tpuntoup(){
document.getElementById('punto').style="width:77px;margin-left-0px;margin-up:0px;"
operando="punto";
calculadora.operacion(operando);
}

function tigualdown(){
document.getElementById('igual').style="width:76px;margin-left:1px;margin-up:1px;"

}

function tigualup(){
document.getElementById('igual').style="width:77px;margin-left-0px;margin-up:0px;"
operando="igual";
calculadora.operacion(operando);
}

function tmasdown(){
  document.getElementById('mas').style="width:78px;margin-left-1px;margin-bottom:1px;"
}

function tmasup(){
document.getElementById('mas').style="width:79px;margin-left-0px;margin-bottom:0px;"
operando="mas";
calculadora.operacion(operando);
}

function t1down(){
  document.getElementById('1').style="width:76px;margin-left:1px;margin-up:1px;"
}

function t1up(){
document.getElementById('1').style="width:77px;margin-left-0px;margin-up:0px;"
operando="1";
calculadora.operacion(operando);

}


function t2down(){
document.getElementById('2').style="width:76px;margin-left:1px;margin-up:1px;"

}

function t2up(){
document.getElementById('2').style="width:77px;margin-left-0px;margin-up:0px;"
operando="2";
calculadora.operacion(operando);
}

function t3down(){
  document.getElementById('3').style="width:76px;margin-left:1px;margin-up:1px;"
}

function t3up(){
document.getElementById('3').style="width:77px;margin-left-0px;margin-up:0px;"
operando="3";
calculadora.operacion(operando);
}

function t4down(){
  document.getElementById('4').style="width:77px;margin-left:1px;margin-up:1px;"

}

function t4up(){
document.getElementById('4').style="width:78px;margin-left-0px;margin-up:0px;"
operando="4";
calculadora.operacion(operando);
}

function t5down(){
  document.getElementById('5').style="width:77px;margin-left:1px;margin-up:1px;"

}

function t5up(){
document.getElementById('5').style="width:78px;margin-left-0px;margin-up:0px;"
operando="5";
calculadora.operacion(operando);
}

function t6down(){
  document.getElementById('6').style="width:77px;margin-left:1px;margin-up:1px;"
}

function t6up(){
document.getElementById('6').style="width:78px;margin-left-0px;margin-up:0px;"
operando="6";
calculadora.operacion(operando);

}

function t7down(){
  document.getElementById('7').style="width:77px;margin-left:1px;margin-up:1px;"
}

function t7up(){
document.getElementById('7').style="width:78px;margin-left-0px;margin-up:0px;"
operando="7";
calculadora.operacion(operando);

}

function t8down(){
  document.getElementById('8').style="width:77px;margin-left:1px;margin-up:1px;"


}

function t8up(){
document.getElementById('8').style="width:78px;margin-left-0px;margin-up:0px;"

operando="8";
calculadora.operacion(operando);

}

function t9down(){
  document.getElementById('9').style="width:77px;margin-left:1px;margin-up:1px;"
}

function t9up(){
document.getElementById('9').style="width:78px;margin-left-0px;margin-up:0px;"
operando="9";
calculadora.operacion(operando);

}

function t0down(){
  document.getElementById('0').style="width:76px;margin-left:1px;margin-up:1px;"



}

function t0up(){
document.getElementById('0').style="width:77px;margin-left-0px;margin-up:0px;"

operando="0";
calculadora.operacion(operando);

}


var cadenaacum,cadena,indice,subcadena,decimalescount,diferencia,entero;


function valida_dec(num){

  cadena=String(num);
  var indice = cadena.indexOf(".");

  if (indice == -1){
  entero=true;
  cadena=cadena+".";

  }

  return cadena;



}

function valida_dif (cadena,cerosprueba){
var indice = cadena.indexOf(".");
subcadena=cadena.substr(indice+1);
decimalescount=subcadena.length;
diferencia=cerosprueba-decimalescount;
return diferencia;
}

function modif_cadena(cadena,diferencia){
  if (diferencia==1){
    cadena=cadena+"0";}
  else if (diferencia==2){
    cadena=cadena+"00";}
  else if (diferencia==3){
      cadena=cadena+"000";}
  else if (diferencia==4){
        cadena=cadena+"0000";}
  else if (diferencia==5){
          cadena=cadena+"00000";}
  else if (diferencia==6){
        cadena=cadena+"000000";}
  else if (diferencia==7){
          cadena=cadena+"0000000";}

return cadena;
}

function convert(num,cerosprueba){
alert(modif_cadena(valida_dec(num),valida_dif(valida_dec(num,cerosprueba),cerosprueba)));
}
