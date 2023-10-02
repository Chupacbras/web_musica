import React from "react";
import './Estilos/Media.css';
import ImageSlider from "./Image_slider";


function Media() {
    const images = [
        'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/08/ACDC-Large.jpg',
        'https://ams3.digitaloceanspaces.com/graffica/2022/11/ACDC-1000x650-1-1000x570.jpeg',
        'https://static.eldiario.es/clip/a395e85b-0354-4bdb-b57b-4b8e3f527125_16-9-aspect-ratio_default_0.jpg',
        'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/08/ACDC-Large.jpg',
        'https://ams3.digitaloceanspaces.com/graffica/2022/11/ACDC-1000x650-1-1000x570.jpeg',
        'https://static.eldiario.es/clip/a395e85b-0354-4bdb-b57b-4b8e3f527125_16-9-aspect-ratio_default_0.jpg',
        'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/08/ACDC-Large.jpg',
        'https://ams3.digitaloceanspaces.com/graffica/2022/11/ACDC-1000x650-1-1000x570.jpeg',
        'https://static.eldiario.es/clip/a395e85b-0354-4bdb-b57b-4b8e3f527125_16-9-aspect-ratio_default_0.jpg',
        'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2023/08/ACDC-Large.jpg',
        'https://ams3.digitaloceanspaces.com/graffica/2022/11/ACDC-1000x650-1-1000x570.jpeg',
        'https://static.eldiario.es/clip/a395e85b-0354-4bdb-b57b-4b8e3f527125_16-9-aspect-ratio_default_0.jpg',
        // // Agrega más URLs de imágenes según sea necesario
    ];

    return (
        <div className='Media' >
            <div>
                <ImageSlider images={images} />
            </div>

            <div>
                Me inicie en el mundo de la música a los 12 años, cuando le regalaron a mi hermana una guitarra. Al poco tiempo
                me la iba dejando y así es como empeze a aprender por mi cuenta. Fue en aquel entonces cuando mis padres
                me iniciaron en el mundo de la música blues y rock, compartiendo sus gustos musicales conmigo. Aprendí tocando
                piezas de las grandes leyendas de la guitarra como Angus young, Ritchie Blackmore, Slah, David guilmour,
                Eric Clapton, BB King, Hendrix y un largo listado dificil de resumir.
                A los dos años de chapurrear y aprender lo poco que cazaba de youtube, al ver que no se me daba mal, me apunté
                a clases de guitarra dónde recibí, durante 4 años, media hora semanal de consejos y información de grandes
                profesores. A los
            </div>
        </div >
    );
}

export default Media;
