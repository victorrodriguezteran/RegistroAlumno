let estudiantes=[];
//crear constructor
let contador= 0;
function Estudiante(nombre, correo, genero, campus, califA,califB,califC){
this.nombre=nombre;
this.correo=correo;
this.genero=genero;
this.campus=campus;
this.califA=califA;
this.califB=califB;
this.califC=califC;
this.id=contador++;
}

    function registrar(){
            //obtener los valores de los inputs document.getelementByID()

     console.log("Registrando Estudiante");
    let inputNombre=document.getElementById("txtNombre").value;
    let inputCorreo=document.getElementById("txtCorreo").value;
    let inputGenero=document.getElementById("selGenero").value;
     let inputCampus=document.getElementById("SelCampus").value;
     
     let inputcalificacionA=document.getElementById("txtCalifA").value;
     let inputcalificacionB=document.getElementById("txtCalifB").value;
     let inputcalificacionC=document.getElementById("txtCalifC").value;
     
    //crea el objeto nuevoAlumno
    let newAlumno = new Estudiante(inputNombre,inputCorreo,inputGenero,inputCampus,inputcalificacionA,inputcalificacionB,inputcalificacionC);
    //agregar al alumno al arreglo
estudiantes.push(newAlumno);
imprimirAlumnos();
limpiar();
//P.S. *** agregar el evento on click en el boton
    }
//p.s. agergar onclick en el boton
function imprimirAlumnos(){
   let row="";
    for(let i=0; i<estudiantes.length;i++){
        let estudiante = estudiantes[i];
       
        //console.log(estudiante);
        row +=`
        <tr>
        <tr id="${estudiante.id}">
            <td>${estudiante.nombre}</td>
            <td>${estudiante.correo}</td>
            <td>${estudiante.genero}</td>
            <td>${estudiante.campus}</td>
            <td>${estudiante.califA}</td>
            <td>${estudiante.califB}</td>
            <td>${estudiante.califC}</td>
            <td>${((Number(estudiante.califA)+Number (estudiante.califB)+Number (estudiante.califC))/3)}</td>
           
            <td><button class="btn btn-danger btn-sm" onclick="borrarAlumno(${estudiante.id});">Borrar</button></td>
        </tr>
        `;
    }
document.getElementById("alumnosTabla").innerHTML = row;
    }
function limpiar(){
    inputNombre.value="";
    inputCorreo.value="";
    inputGenero.value="";
    inputCampus.value="";
    inputcalificacionA.value="";
    inputcalificacionB.value="";
    inputcalificacionC.value="";

}
function borrarAlumno(identificador){
    document.getElementById(identificador).remove();//borra html
    estudiantes.splice(identificador,1); //borra del arreglo
    
}
//crear funcion INIT

function init(){   
console.log("Register");
let alumno = new Estudiante ("Victor Hugo Rodríguez","vicks@gmail.com","Masculino","Mexicali",89,91,100); //constructor Estudiante
let alumno2 = new Estudiante ("Ana Gabriela López","any@gmail.com","Femenino","Tijuana",98,100,100); //constructor Estudiante
console.log(alumno,alumno2);
estudiantes.push(alumno,alumno2);
imprimirAlumnos();
}
//ejecutar funcion init
window.onload =init; //ejecuta cuando renderiza HTML


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}