// 1. Seleccionamos el formulario usando su ID
const formReserva = document.getElementById('form-reserva');

// 2. Escuchamos el evento cuando la persona hace click en enviar (Submit)
formReserva.addEventListener('submit', (e) => {
    // Frenamos la recarga automática de la página y que los datos vayan a la URL
    e.preventDefault();

    // Capturamos los valores de cada campo
    const fecha = document.getElementById('fecha').value;
    const nombreCliente = document.getElementById('nombre-cliente').value;
    const telefono = document.getElementById('telefono').value;
    const montoSena = document.getElementById('monto-sena').value;
    const estado = document.getElementById('estado').value;

    // Armamos un objeto con todos los datos de la reserva
    const nuevaReserva = {
        fecha: fecha,
        nombre_cliente: nombreCliente,
        telefono: telefono,
        monto_sena: montoSena,
        estado: estado
    };

    // Mostramos los datos en la consola del navegador para verificar
    console.log("¡Datos capturados listos para enviar al backend!", nuevaReserva);

    alert(`¡Reserva para ${nombreCliente} registrada en el front! Revisá la consola.`);
});