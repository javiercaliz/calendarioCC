function ingresarFecha() {
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
    let finVacaciones2021 = new Date('2022-01-17');
    finVacaciones2021.setDate(finVacaciones2021.getDate() + 1);

    //vacaciones de 2022
    let inicioVacaciones2022 = new Date('2022-12-24');
    inicioVacaciones2022.setDate(inicioVacaciones2022.getDate() + 1);
    let finVacaciones2022 = new Date('2023-01-16');
    finVacaciones2022.setDate(finVacaciones2022.getDate() + 1);

    //creamos unas fechas auxiliares para poder cambiarlas sin cambiar las originales
    let aux1 = new Date(inicioVacaciones2021);
    let aux2 = new Date(inicioVacaciones2022);
  

    //agregamos al conjunto las vacaciones 2021
    while (aux1.getDate() != finVacaciones2021.getDate()) {
        vacaciones.push(new Date(aux1));
        aux1.setDate(aux1.getDate() + 1);
    }
    //agregamos al conjunto las vacaciones 2022
    while (aux2.getDate() != finVacaciones2022.getDate()) {
        vacaciones.push(new Date(aux2));
        aux2.setDate(aux2.getDate() + 1);
    }

    //devolvemos el conjunto de vacaciones
    return vacaciones;

}

function feriados() {
    //conjunto de feriados
    let feriados = [];
    //carga manual de feriados
    //*****FERIADOS 2021*****
    feriados.push(new Date('2021-10-08'));//Puente
    feriados.push(new Date('2021-10-11'));//Día del respeto a la diversidad cultural
    feriados.push(new Date('2021-11-22'));//Puente
    feriados.push(new Date('2021-12-08'));//Inmaculada concepción de María
    //*****FERIADOS 2022*****
    feriados.push(new Date('2022-02-28'));//Carnaval
    feriados.push(new Date('2022-03-01'));//Carnaval
    feriados.push(new Date('2022-03-24'));//Día Nacional de la Memoria por la Verdad y la Justicia
    feriados.push(new Date('2022-04-14'));//Jueves Santo
    feriados.push(new Date('2022-04-15'));//Viernes Santo
    feriados.push(new Date('2022-05-18'));//Censo Nacional
    feriados.push(new Date('2022-05-25'));//Día de la Revolución de Mayo
    feriados.push(new Date('2022-06-20'));//Día de la Bandera
    feriados.push(new Date('2022-08-15'));//Paso a la Inmortalidad del General José de San Martín
    feriados.push(new Date('2022-10-10'));//Día del Respeto a la Diversidad Cultural
    feriados.push(new Date('2022-11-21'));//Puente
    feriados.push(new Date('2022-12-08'));//Inmaculada concepción de María
    //*****FERIADOS 2023*****
    feriados.push(new Date('2023-02-20'));//Carnaval
    feriados.push(new Date('2023-02-21'));//Carnaval
    feriados.push(new Date('2023-03-24'));//Día Nacional de la Memoria por la Verdad y la Justicia
    feriados.push(new Date('2023-04-06'));//Jueves Santo
    feriados.push(new Date('2023-04-07'));//Viernes Santo
    feriados.push(new Date('2023-05-01'));//Día del Trabajador
    feriados.push(new Date('2023-05-25'));//Día de la Revolución de Mayo
    feriados.push(new Date('2023-06-20'));//Paso a la Inmortalidad del General Manuel Belgrano
    feriados.push(new Date('2023-08-21'));//Paso a la Inmortalidad del General José de San Martín
    feriados.push(new Date('2023-10-16'));//Día del Respeto a la Diversidad Cultural
    feriados.push(new Date('2023-11-20'));//Día de la Soberanía Nacional
    feriados.push(new Date('2023-12-08'));//Inmaculada concepción de María

    feriados.forEach(x => {
        x.setDate(x.getDate()+1);
    });

    return feriados;

}

function diaDeCursado(fecha) {
    if (fecha.getDay == 6 || fecha.getDay == 5 || fecha.getDay == 4) {
        return false;
    } else {
        return true;
    }
}





