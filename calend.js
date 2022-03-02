function ingresarFecha() {
    let inicio = new Date();
    //se toma la fecha del front y se corrige 1 día
    inicio = document.getElementById('fechaIngreso').valueAsDate;
    inicio.setDate(inicio.getDate() + 1);
    calcular(inicio);
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
        x.setDate(x.getDate() + 1);
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

function calcular(inicio) {

    let finCurso = inicio;

    let clases = 0;

    while (clases < 178) {
        if (diaDeCursado(finCurso)) {
            if (!feriados().includes(finCurso)) {
                if (!vacaciones().includes(finCurso)) {

                    informe(clases, finCurso);
                    clases++;
                }
            }
        }
        finCurso.setDate(finCurso.getDate() + 1);
    }

}

function crearFila(tabla, clases, fecha, contenido) {
    var row = tabla.insertRow(-1);
    var celda1 = row.insertCell(0);
    var celda2 = row.insertCell(1);
    var celda3 = row.insertCell(2);
    celda1.innerHTML = clases + 1;
    celda2.innerHTML = fecha.getDate()+'/'+fecha.getMonth()+'/'+fecha.getFullYear();
    celda3.innerHTML = contenido;
}

function informe(clases, fecha) {
    var tabla = document.getElementById("informe");
    switch (clases) {
        case 0:
            crearFila(tabla, clases, fecha, "OnBoarding");
            break;
        case 3:
            crearFila(tabla, clases, fecha, "Repaso Guía 1");
            break;
        case 11:
            crearFila(tabla, clases, fecha, "Repaso Guía 2");
            break;
        case 17:
            crearFila(tabla, clases, fecha, "Repaso Guía 3");
            break;
        case 26:
            crearFila(tabla, clases, fecha, "Repaso PseInt");
            break;
        case 27:
            crearFila(tabla, clases, fecha, "Integrador PseInt");
            break;
        case 38:
            crearFila(tabla, clases, fecha, "Repaso Java Intro");
            break;
        case 47:
            crearFila(tabla, clases, fecha, "Repaso POO 1º Parte");
            break;
        case 58:
            crearFila(tabla, clases, fecha, "Repaso POO 2ºParte");
            break;
        case 59:
            crearFila(tabla, clases, fecha, "Git primera parte");
            break;
        case 60:
            crearFila(tabla, clases, fecha, "Git primera parte");
            break;
        case 69:
            crearFila(tabla, clases, fecha, "Repaso Colecciones");
            break;
        case 78:
            crearFila(tabla, clases, fecha, "Repaso Relaciones");
            break;
        case 87:
            crearFila(tabla, clases, fecha, "Repaso Herencia");
            break;
        case 90:
            crearFila(tabla, clases, fecha, "Repaso Excepciones");
            break;
        case 99:
            crearFila(tabla, clases, fecha, "Repaso MySQL");
            break;
        case 100:
            crearFila(tabla, clases, fecha, "Integrador Java + MySQL");
            break;
        case 108:
            crearFila(tabla, clases, fecha, "Repaso JDBC");
            break;
        case 116:
            crearFila(tabla, clases, fecha, "Repaso JPA");
            break;
        case 117:
            crearFila(tabla, clases, fecha, "Git segunda parte");
            break;
        case 126:
            crearFila(tabla, clases, fecha, "Repaso HTML");
            break;
        case 134:
            crearFila(tabla, clases, fecha, "Repaso JavaScript");
            break;
        case 141:
            crearFila(tabla, clases, fecha, "Repaso 1 de Spring");
            break;
        case 148:
            crearFila(tabla, clases, fecha, "Repaso 2 de Spring");
            break;
        case 155:
            crearFila(tabla, clases, fecha, "Repaso 3 de Spring");
            break;
        case 173:
            crearFila(tabla, clases, fecha, "Repaso React");
            break;
        case 174:
            crearFila(tabla, clases, fecha, "Inicio Repaso de Curso");
            break;
        case 178:
            crearFila(tabla, clases, fecha, "Fin Del Curso");
            break;
        default:
            break;
    }

}




