const slide=['boutik4.jpg', 'boutik7.jpg','boutik8.jpg'];
let numero = 0;
numero=0;
function changerslider(sens) {
    numero=numero+sens;
    if(numero>2)
        numero=0;
    if(numero<0)
        numero=2;
    document.getElementById('slide').src= slide[numero] ;
}
setInterval('changerslider(1)' , 1000);