var Calculadora (function (num1, num2){
  var resultado = 0

  function actualizarResultado (nuevoresultado){
    resultado=nuevoresultado  }

  return {
    sumar: function(){
      var resultado = num1+num2
      actualizarResultado(resultado)

    },
    restar: function(){
      var resultado=num1-num2
      actualizarResultado (resultado)

    },
    multipilicar: function(){

      var resultado = num1*num2
      actualizarResultado (resultado)
    },

    resultado:function(){
      return resultado

    }

  }



});


Calculadora(3,5)
