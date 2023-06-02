<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mensaje extends Model
{
    use HasFactory;
    protected $table = 'mensajes';
    protected $primaryKey = 'id';
    protected $fillable = [
        'asunto', 'mensaje', 'id_receptor', 'global', 'estado', 
        'id_user',
    ];

    public function users(){
        return $this->belongsTo(User::class,'id_user');
    }

}
