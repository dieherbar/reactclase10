//const fullData = ["elemento 0 del array","elemento 1","elemento 2"];
const prueba01 = {
    titulo: "El titulo",
    autor: "El autor",
    genero: "El genero",
    //imagen: "https://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg"
    resumen:"Maecenas hendrerit nibh elit, nec imperdiet tortor porttitor et. Quisque dignissim sapien quam, lobortis vulputate libero auctor non. In sed orci vitae leo semper vulputate nec eu justo. Praesent ultricies purus sed nisi molestie accumsan. Cras auctor condimentum nibh, vitae varius mi convallis ac. Donec porta, velit eget euismod aliquet, orci elit posuere leo, quis tempor lorem eros in mauris. Proin orci velit, imperdiet et iaculis mollis, lobortis fermentum tortor. Praesent auctor quam et felis fringilla tristique. Vestibulum laoreet massa a urna aliquam, a viverra neque imperdiet. In leo est, efficitur eget accumsan sed, placerat id sem. Nulla interdum finibus lectus, congue lobortis augue venenatis et. Aenean arcu mi, volutpat nec lacus vel, aliquam auctor nunc. Nulla molestie suscipit ultricies. Aliquam viverra augue vitae posuere tristique. Praesent faucibus risus purus, tincidunt mattis urna auctor et. Mauris ut enim mollis, ullamcorper mauris vitae, porta elit. Nunc at ante porta, iaculis nisl et, gravida ex. Cras tristique nunc eget nibh elementum, ut auctor mi volutpat. Nam leo nulla, cursus nec orci a, mollis feugiat nisl. Pellentesque fringilla ipsum eget fringilla fermentum. Nullam nec commodo tellus."
}

const prueba02 = {
    titulo: "titulo 02",
    autor: "el autor 02",
    genero: "el genero 02"
}

const prueba03 = {
    titulo: "el titulo 03",
    autor: "el autor 03",
    genero: "el genero 03"
}

const losDatos = [prueba01,prueba02,prueba03];

const {titulo,autor} = prueba01;
console.log("titulo de prueba01= " + titulo);
console.log("elemento 2 del array de obj es " + losDatos[1].autor);
export default prueba01;