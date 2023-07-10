<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Zona extends Model
{
    use HasFactory;
    protected $table = 'zonas';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nombre', 'nro_sitios', 'sitios', 'direccion', 'imagen', 'descripcion',
        'id_parqueo',
    ];

    public function parqueos(){
        return $this->belongsTo(Parqueo::class,'id_parqueo');
    }

    public function users(){
        return $this->hasMany(User::class,'id');
    }

}
//cesar//