$(function() {
  let nombre = $('#nbr-crd');
  let nombrePrc = $('#nbr-crd-prc');

  let numero = $('#nro-crd');
  let numeroPrc = $('#nro-crd-prc');

  let fechaMes = $('#fdx1-crd');
  let fechaAño = $('#fdx2-crd');
  let fechaPrc = $('#fdx-crd-prc');

  let cvc = $('#cvc-crd');
  let cvcPrc = $('#cvc-crd-prc');

  let submitBtn = $('#submit-btn');
  let form = $('#frml-dts-sbm');
  let completado = $('#pg-nvd');

  $prvTg = function(a,b) {
    a.text($format(b.val()));
  };

  $prvTgByFc = function(a,b,c) {
    a.text($format(b.val() + '/' + c.val()));
  };
  
  $format = function(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
  };

  nombre.keyup(n => {
    $prvTg(nombrePrc, nombre);
    $format(nombre);
  });

  numero.keyup(n => {
    $prvTg(numeroPrc, numero);
    $format(numero);
  });

  fechaMes.add(fechaAño).keyup(n => {
    $prvTgByFc(fechaPrc, fechaMes, fechaAño);
    $format(fechaPrc);
  });

  cvc.keyup(n => {
    $prvTg(cvcPrc, cvc);
    $format(cvc);
  });

  submitBtn.click(n => {
    $nvrForm();
  });

  $nvrForm = function() {
    event.preventDefault();
    if (!nombre.val()) {
      nombre.addClass("error");
      nombre.parent().addClass("error_message")
    }  else {
      nombre.removeClass("error");
      nombre.parent().removeClass("error_message");
    }
    if (!numero.val()) {
      numero.addClass('error')
      numero.parent().addClass("error_message");
    } else if (numero.val().length < 16) {
      numero.addClass("error")
    } else {
      numero.removeClass("error");
      numero.parent().removeClass("error_message");
    }
    if (!fechaMes.val()) {
      fechaMes.addClass("error")
      fechaMes.parent().addClass("error_message");
    } else {
      fechaMes.removeClass("error");
      fechaMes.parent().removeClass("error_message");
    }
    if (!fechaAño.val()) {
      fechaAño.addClass("error")
      fechaAño.parent().addClass("error_message");
    } else {
      fechaAño.removeClass("error");
      fechaAño.parent().removeClass("error_message");
    }
    if (!cvc.val()) {
      cvc.addClass("error")
      cvc.parent().addClass("error_message");
    } else {
      cvc.removeClass("error");
      cvc.parent().removeClass("error_message");
    }
    if (nombre.val() && numero.val() && fechaMes.val() && fechaAño.val() && cvc.val() && numero.val().length == 16) {
      completado.removeClass("ocultar");
      form.addClass("ocultar");
    }
  }
});
