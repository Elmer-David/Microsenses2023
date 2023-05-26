<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use Tymon\JWTAuth\Contracts\JWTSubject;


class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'apellido', 'dni', 'foto_perfil', 'telefono', 'direccion', 'email', 
        'password', 'password_confirmed', 'tipo_usuario', 'cargo', 'departamento', 
        'sitio', 'primer_ini_sesion', 'solicitud_parqueo', 
        'id_zona', 'id_horario',
    ];

    public function zonas(){
        return $this->belongsTo(Zona::class,'id_zona');
    }

    public function horarios(){
        return $this->belongsTo(Horario::class,'id_horario');
    }

    public function vehiculos(){
        return $this->hasMany(Vehiculo::class,'id');
    }

    public function boletas(){
        return $this->hasMany(Boleta::class,'id');
    }

    public function mensajes(){
        return $this->hasMany(Mensaje::class,'id');
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier(){
        return $this->getKey();
    }

    public function getJWTCustomClaims(){
        return [];
    }
}
