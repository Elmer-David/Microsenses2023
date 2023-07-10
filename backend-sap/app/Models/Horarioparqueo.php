<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Horarioparqueo extends Model
{
    use HasFactory;
    protected $table = 'horarioparqueos';
    protected $primaryKey = 'id';
    protected $fillable = [
        'hora_ini', 'hora_fin', 'dia_ini', 'dia_fin',
        'id_parqueo',
    ];

    public function parqueos(){
        return $this->belongsTo(Parqueo::class,'id_parqueo');
    }

}
