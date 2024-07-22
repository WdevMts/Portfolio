document.addEventListener('DOMContentLoaded', function() {
    let Mensagem = document.getElementById('mob');

    if (window.innerWidth < 750) {
        Mensagem.style.display = 'block';
    } else {
        Mensagem.style.display = 'none';
    }
})
checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);