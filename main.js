let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');

abrir.addEventListener('click' ,function(){
    modal.style.display='block';
});

cerrar.addEventListener('click' ,function(){
    modal.style.display='none';
});