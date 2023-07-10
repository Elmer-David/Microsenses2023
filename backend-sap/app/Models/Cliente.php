<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;
    protected $table = 'clientes';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nombre', 'apellido', 'telefono', 'email', 'contraseña', 'contraseña_confirmed', 
        'foto_perfil', 'direccion', 'dni', 'cargo', 'departamento' , 'estado', 'sitio',// 'id_parqueo',
    ];

    // public function vehiculos(){
    //     return $this->hasMany(Vehiculo::class,'id');
    // }
    // public function parqueos() {
    //     return $this->belongsTo(Parqueo::class,'id_parqueo');
    // }
}//Prueba
 