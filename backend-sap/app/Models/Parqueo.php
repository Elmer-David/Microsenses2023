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
        'nombre', 'tarifa_anual', 'tarifa_mensual', 'descripcion', 
    ];

    // public function clientes() {
    //     return $this->hasMany(Cliente::class,'id');
    // }  
}
