const dato = document.getElementById("dato");
const info = document.getElementById("info");

dato.onkeydown = ev => {
    if (ev.key === ' ' || ev.key.length !== 1) return;
    ev.preventDefault();
    
    let upperCase = ev.key.toUpperCase();
    if (/[^A-Z0-9]/g.test(upperCase)) return;

    let value = String.fromCharCode(parseInt(upperCase.charCodeAt(0) + "e8",16));
    ev.target.value += value;
    info.innerHTML = "<p>TIPO=" + ev.type + " TECLA=" + ev.key + " LETRA="+value+"</p>" + info.innerHTML;
}

function reiniciar() {
    dato.value = "";
    info.innerHTML = "";
}
