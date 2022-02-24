function pedirFecha() {
    let inicio = new Date();

        inicio = document.getElementById('fechaIngreso').valueAsDate;
        inicio.setDate(inicio.getDate()+1);

    return inicio;
} 





