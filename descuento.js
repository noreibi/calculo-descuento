function calculoDescuento(precio, descuento) {
  return (precio * (100 - descuento)) / 100;
}

function descuentoProducto() {
  //recuperando los datos
  const precio = document.getElementById("precio-producto").value || 1;
  const descuento = document.getElementById("descuento-producto").value || 1;
  console.log(descuento);
  // Validar datos del producto
  const resultadoValidacion = validarDatosProducto(precio, descuento);
  if (resultadoValidacion.error) {
    // alert(resultadoValidacion.mensaje);
    return;
  }
  //calculando
  const descuentocalculado = calculoDescuento(precio, descuento);
  //imprimir
  document.getElementById("resultado").innerHTML = descuentocalculado;
}
function validarDatosProducto(precio, descuento) {
  if (!precio) return { error: true, mensaje: "El precio no esta definido" };
  if (!descuento)
    return { error: true, mensaje: "Necesitas escribir el porcentaje" };
  if (precio < 1)
    return { error: true, mensaje: "El precio debe ser mayor a cero" };
  if (descuento < 1)
    return { error: true, mensaje: "El descuento debe ser mayor a cero" };

  return { error: false, mensaje: "no hubo errores" };
}

function reiniciarBoton() {
  document.getElementById("precio-producto").value = "";
  document.getElementById("descuento-producto").value = "";
  document.getElementById("resultado").innerHTML = "0,00";
}
