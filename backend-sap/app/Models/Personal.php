<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personal extends Model
{
    use HasFactory;
    protected $table = 'personals';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nombre', 'apellido', 'dni', 'foto_perfil', 'direccion', 'telefono', 'email', 'contraseña', 
        'contraseña_confirmed', 'tipo_usuario', 
        //'id_horario',
    ];

    // public function horarios(){
    //     return $this->belongsTo(Horario::class,'id_horario');
    // }
}
