<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehiculo extends Model
{
    use HasFactory;
    protected $table = 'vehiculos';
    protected $primaryKey = 'id';
    protected $fillable = [
        'modelo', 'foto', 'nro_placa', 'descripcion', 'id_cliente',
    ];

    public function clientes(){
        return $this->belongsTo(Cliente::class,'id_cliente');
    }
}
