<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Horario extends Model
{
    use HasFactory;
    protected $table = 'horarios';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nombre', 'inicio_turno', 'salida_turno', 
    ];

    // public function personals(){
    //     return $this->hasMany(Personal::class,'id');
    // }

    public function users(){
        return $this->hasMany(User::class,'id');
    }

}
