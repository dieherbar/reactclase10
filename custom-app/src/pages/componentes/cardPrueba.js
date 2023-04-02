import prueba01 from "../data/data02.js";

export default function Tarjeta() {
    return (
        <div className="card">
        <h2>
            {prueba01.titulo}
        </h2>
        <h3>
            {prueba01.autor}
        </h3>
        <p>
            {prueba01.resumen}
        </p>
        </div>
    );
}