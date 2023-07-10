<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('apellido');
            $table->string('telefono');
            $table->string('email');
            $table->string('contraseña');
            $table->string('contraseña_confirmed');
            $table->string('foto_perfil')->nullable();
            $table->string('direccion');
            $table->string('dni');
            $table->string('cargo');
            $table->string('departamento');
            $table->integer('estado')->default(0); //0 usuario anonimo 1 cliente
            $table->string('sitio');
            $table->timestamps();

            // $table->foreignId('id_parqueo')
            //        ->nullable()
            //        ->constrained('parqueos')
            //        ->cascadeOnUpdate()
            //        ->nullOnDelete()
            //        ;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clientes');
    }
}

