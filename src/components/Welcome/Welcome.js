import rene from './rene.jpg';
const Welcome = ({ nombre }) => {
    if(nombre === "Desarrollador"){
    return (
        <div>
        <h2>Bienvenido, {nombre}!</h2>
            <p>Eres un crack</p>
        </div>
    );
    } else {
        return (
            <div>
            <h2>Bienvenido, {nombre}!</h2>
            <p>Este es un componente modularizado.</p>
            </div>
        );
    }
};

export default Welcome;