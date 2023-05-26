import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL_BOLETAS ='http://localhost:8000/api/clibols'
const API_URL_BOLETAS2 ='http://localhost:8000/api/boletas'

const TablaBoleta = () => {
    const [boletas, setBoletas] = useState( [] );

    useEffect(()=>{
        getAllBoleta()
    }, [])

    const getAllBoleta=async()=>{
        const response = await axios.get(API_URL_BOLETAS)
        setBoletas(response.data)
    }
  
    const deleteBoleta=async(id)=>{
        const url=`${API_URL_BOLETAS2}/${id}`;
        await axios.delete(url)
        getAllBoleta()
    }

  return (
    <div>
    <div>
        <div className='d-grid gap-2'>
        </div>
        <h3 style={{textAlign: "center"}}>Lista de Boletas:</h3>
        <table style={{marginLeft: "10px"}} className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                <th>MENSUALIDAD</th>
                <th>MONTO</th>
                <th>NRO TRANSACCION</th>
                <th>FECHA DEPOSITO</th>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>CORREO ELECTRONICO</th>
                <th>ELIMINAR</th>
                </tr>
            </thead>
            <tbody>
                {boletas.map ((boleta)=>(
                    <tr key={boleta.id}>
                        <td>{boleta.mensualidad}</td>
                        <td>{boleta.monto}</td>
                        <td>{boleta.nro_transaccion}</td>
                        <td>{boleta.fecha_deposito}</td>
                        <td>{boleta.name}</td>
                        <td>{boleta.apellido}</td>
                        <td>{boleta.email}</td>

                        <td>
                            <button onClick={()=>deleteBoleta(boleta.id)} className='btn btn-danger'>Eliminar</button>
                        </td>

                    </tr>
                ))}

            </tbody>
        </table>
    </div>
    </div>
  )
}

export default TablaBoleta