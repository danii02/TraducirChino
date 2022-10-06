const dato = document.getElementById("dato");
const footer = document.getElementsByTagName("footer")[0];

dato.onkeydown = ev => {
    if (ev.key === ' ' || ev.key.length !== 1) return;
    ev.preventDefault();
    
    let upperCase = ev.key.toUpperCase();
    if (/[^A-Z0-9]/g.test(upperCase)) return;

    let value = String.fromCharCode(parseInt(upperCase.charCodeAt(0) + "e8",16));
    ev.target.value += value;
    footer.innerHTML += "<p>tipo=" + ev.type + " key=" + ev.key + " fromCharCode="+value+"</p>";
}

function reiniciar() {
    dato.value = "";
    footer.innerHTML = "";
}
