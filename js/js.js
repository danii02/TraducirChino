const dato = document.getElementById("dato");

dato.onkeydown = ev => {
    if (ev.key === ' ' || ev.key.length !== 1) return;
    ev.preventDefault();
    ev.target.value += String.fromCharCode(parseInt(ev.key.toUpperCase().charCodeAt(0) + "e8",16));
}
