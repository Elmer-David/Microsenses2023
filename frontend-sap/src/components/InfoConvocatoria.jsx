import { useState, useEffect } from 'react';
import axios from 'axios';

function InfoConvocatoria() {

    const [boletas, setBoletas] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/parqueos")
      .then((response) => {
        setBoletas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

    return(
        <div className="container">

        <div className="text-container">
      <h2>Convocatoria :</h2>
      {boletas.map((boleta) => (
        <p key={boleta.id}>
         
         <strong>
          ¡Bienvenidos al parqueo {boleta.nombre} de la Facultad de Ciencias y <br></br>
           Tecnología de la Universidad Mayor de San Simón! <br></br>
        Estamos muy emocionados de anunciar la apertura del parqueo. <br></br>
         La convocatoria para el uso de nuestro parqueo está abierta 
         y estamos recibiendo solicitudes <br></br> desde "{boleta.fecha_ini_solicitud}"  al "{boleta.fecha_fin_solicitud}"
          impostergable.<br></br>
        El precio mensual del parqueo es de "{boleta.precio_mensual}" mensual  además, <br></br>
        de descuentos por pagos adelantados a largo plazo , 	por el pago de 3 meses o mas<br></br>
         tendrá un descuento de "{boleta.descuento3meses}", asi mismo si<br></br>
          paga el año completo por adelantado tendrán un descuento de "{boleta.descuento12meses}" , <br></br>
          los pagos se harán en la "{boleta.cuenta_banco}" en el banco "{boleta.nombre_banco}"donde<br></br>
           podrá realizar los pago un vez confirmado su sitio. <br></br>
      Estamos dispuestos a ayudarle en todo momento, si tiene alguna duda, no dude en contactarnos.<br></br>
      </strong>

        </p>
      ))}
    </div> 
    </div> 
    );
}
export default InfoConvocatoria