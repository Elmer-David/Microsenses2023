<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parqueo extends Model
{
    use HasFactory;
    protected $table = 'parqueos';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nombre', 'descripcion', 'imagen', 'fecha_ini_solicitud', 'fecha_fin_solicitud', 
        'fecha_ini_pago', 'fecha_fin_pago', 'precio_mensual', 'descuento3meses', 
        'descuento6meses', 'descuento12meses' , 'multa', 'cuenta_banco', 'nombre_banco',
    ];

    public function zonas(){
        return $this->hasMany(Zona::class,'id');
    }

    public function horarioparqueos(){
        return $this->hasMany(Horarioparqueo::class,'id');
    }

    // public function clientes() {
    //     return $this->hasMany(Cliente::class,'id');
    // }  
}
