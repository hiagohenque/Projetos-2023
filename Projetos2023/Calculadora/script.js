function visor(num){
    var number = document.getElementById("visor").innerHTML;
    document.getElementById("visor").innerHTML = number+num;

}
function clean(){
    document.getElementById("visor").innerHTML = '';
}
function del(){
    var visor = document.getElementById("visor").innerHTML;
    document.getElementById("visor").innerHTML = visor.substring(0, visor.length -1);
}
function soma(){
    var visor = document.getElementById("visor").innerHTML 
    if(visor){
        document.getElementById("visor").innerHTML = eval(visor)
    }
}