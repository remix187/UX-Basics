function toggle(id) {
    var e = document.getElementById(id);
    var d = document.querySelector('.rotate');
    e.classList.toggle("hidden");
    d.classList.toggle("down");
}