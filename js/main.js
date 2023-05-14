var imagenes = ['imgcollection/img1.jpg', 'imgcollection/img2.jpg', 'imgcollection/img3.jpg', 'imgcollection/img4.jpg', 'imgcollection/img5.jpg', 'imgcollection/img6.jpg', 'imgcollection/img7.jpg', 'imgcollection/img8.jpg', 'imgcollection/img9.jpg', 'imgcollection/img10.jpg', 'imgcollection/img11.jpg', 'imgcollection/img12.jpg', 'imgcollection/img13.jpg', 'imgcollection/img14.jpg', 'imgcollection/img15.jpg', 'imgcollection/img16.jpg', 'imgcollection/img17.jpg', 'imgcollection/img18.jpg', 'imgcollection/img19.jpg', 'imgcollection/img20.jpg', 'imgcollection/img21.jpg', 'imgcollection/img22.jpg', 'imgcollection/img23.jpg', 'imgcollection/img24.jpg', 'imgcollection/img25.jpg', 'imgcollection/img]26', 'imgcollection/img27.jpg', 'imgcollection/img28.jpg']
cont = 0;

function carrusel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

        if (tgt == atras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        } else if (tgt == adelante) {
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    let contenedor = document.querySelector('.contenedor');
    carrusel(contenedor);
});