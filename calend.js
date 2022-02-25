function pedirFecha() {
    let inicio = new Date();
    //se toma la fecha del front y se corrige 1 día
    inicio = document.getElementById('fechaIngreso').valueAsDate;
    inicio.setDate(inicio.getDate() + 1);

    return inicio;
}

function vacaciones() {
    //lista donde se van a guardar los días de vacaciones
    let vacaciones = [];
    //vacaciones de 2021
    let inicioVacaciones2021 = new Date('2021-12-23');
    inicioVacaciones2021.setDate(inicioVacaciones2021.getDate() + 1);
    let finVacaciones2021 = new Date('2022-01-16');
    finVacaciones2021.setDate(finVacaciones2021.getDate() + 1);
    //vacaciones de 2022
    let inicioVacaciones2022 = new Date('2022-12-24');
    inicioVacaciones2022.setDate(inicioVacaciones2022.getDate() + 1);
    let finVacaciones2022 = new Date('2023-01-15');
    finVacaciones2022.setDate(finVacaciones2022.getDate() + 1);
    //creamos unas fechas auxiliares para poder cambiarlas sin cambiar las originales
    aux1 = inicioVacaciones2021;
    aux2 = inicioVacaciones2022;
    //agregamos al conjunto las vacaciones 2021
    while (aux1 != finVacaciones2021) {
        vacaciones.push(aux1);
        aux1.setDate(aux1.getDate() + 1);
    }
    //agregamos al conjunto las vacaciones 2022
    while (aux2 != finVacaciones2022) {
        vacaciones.push(aux2);
        aux2.setDate(aux2.getDate() + 1);
    }

    //devolvemos el conjunto de vacaciones
    return vacaciones;

}




