let enlacesNav = document.getElementById("enlacesNav");
let navbar = `<div class="container-fluid">
<a class="navbar-brand linknav" href="./index.html">Inicio</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarScroll">
  <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
    <li class="nav-item">
      <a class="nav-link linknav" href="./contacto.html">Contacto</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle linknav" href="./proyectos.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Proyectos
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item linknav1" href="#">Proyecto Integrador</a></li>
        <li><a class="dropdown-item linknav1" href="https://github.com/mckeyangel" target="_blank">GitHub</a></li>
        <li><a class="dropdown-item linknav1" href="https://www.linkedin.com/in/miguel-alvarez-b92298269/" target="_blank">LinkedIn</a></li>            
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item linknav1" href="./proyectos.html">Todos los proyectos</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Miguel Angel Alvarez Montes de Oca</a>
    </li>
  </ul>
</div>
</div>`;

window.addEventListener("load", function (event) {
    event.preventDefault;
    enlacesNav.insertAdjacentHTML("beforeend", navbar);    
}); 