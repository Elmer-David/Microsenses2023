import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL_USERS ='http://localhost:8000/api/users'

const TablaUser = () => {
    const [users, setUsers] = useState( [] );

    useEffect(()=>{
        getAllUser()
    }, [])

    const getAllUser=async()=>{
        const response = await axios.get(API_URL_USERS)
        setUsers(response.data)
    }
  
    const deleteUser=async(id)=>{
        const url=`${API_URL_USERS}/${id}`;
        await axios.delete(url)
        getAllUser()
    }

  return (
    <div>
    <div>
        <div className='d-grid gap-2'>
        </div>
        <h3 style={{textAlign: "center"}}>Lista de Usuarios:</h3>
        <table style={{marginLeft: "10px"}} className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>DNI</th>
                <th>TELEFONO</th>
                <th>CORREO ELECTRONICO</th>
                <th>TIPO USUARIO</th>
                <th>ELIMINAR</th>
                </tr>
            </thead>
            <tbody>
                {users.map ((user)=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.apellido}</td>
                        <td>{user.dni}</td>
                        <td>{user.telefono}</td>
                        <td>{user.email}</td>
                        <td>{user.tipo_usuario}</td>

                        <td>
                            <button onClick={()=>deleteUser(user.id)} className='btn btn-danger'>Eliminar</button>
                        </td>

                    </tr>
                ))}

            </tbody>
        </table>
    </div>
    </div>
  )
}

export default TablaUser