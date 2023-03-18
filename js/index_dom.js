import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { alarm, digitalClock } from "./dom/reloj.js";
import { shortcuts } from "./dom/teclado.js";
let d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
    alarm("../assets/alarma.mp3.mp3", "#activar-alarma", "#desactivar-alarma")
    
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    
})
