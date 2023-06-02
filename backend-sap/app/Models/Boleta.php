<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Boleta extends Model
{
    use HasFactory;
    protected $table = 'boletas';
    protected $primaryKey = 'id';
    protected $fillable = [
        'mensualidad', 'monto', 'nro_transaccion', 'fecha_deposito', 'foto_comprobante',
        'estado', 'nro_factura', 
        'id_user',
    ];

    public function users(){
        return $this->belongsTo(User::class,'id_user');
    }

}
