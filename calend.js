function pedirFecha() {
    let inicio = new Date();

        inicio = document.getElementById('fechaIngreso').valueAsDate;
        inicio.setDate(inicio.getDate()+1);

    return inicio;
} 

function vacaciones(){
    let vacaciones = [];
    let inicioVacaciones2021 = new Date('2021-12-23');
    inicioVacaciones2021.setDate(inicioVacaciones2021.getDate()+1);
    let finVacaciones2021 = new Date('2022-01-16');
    finVacaciones2021.setDate(finVacaciones2021.getDate()+1);
    





}




