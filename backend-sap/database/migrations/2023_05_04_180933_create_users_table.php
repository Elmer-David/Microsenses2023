<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            // $table->string('apellido');
            // $table->string('dni');
            // $table->string('foto_perfil')->nullable();
            // $table->string('telefono');
            // $table->string('direccion');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('password_confirmed');
            $table->integer('tipo_usuario')->default(0); //0 admi, 1 operador, 2 guardia, 3 usuario anonimo, 4 cliente

            // $table->string('cargo');
            // $table->string('departamento');
            // $table->string('sitio');

            $table->rememberToken();
            $table->timestamps();    

            $table->foreignId('id_zona')
                   ->nullable()
                   ->constrained('zonas')
                   ->cascadeOnUpdate()
                   ->nullOnDelete()
                   ;
            $table->foreignId('id_horario')
                   ->nullable()
                   ->constrained('horarios')
                   ->cascadeOnUpdate()
                   ->nullOnDelete()
                   ;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}

