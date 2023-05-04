<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateParqueosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parqueos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('descripcion');
            $table->string('imagen');
            $table->date('fecha_ini_solicitud')->nullable();
            $table->date('fecha_fin_solicitud')->nullable();
            $table->date('fecha_ini_pago')->nullable();
            $table->date('fecha_fin_pago')->nullable();
            $table->decimal('precio_mensual')->nullable();
            $table->integer('descuento3meses');
            $table->integer('descuento6meses');
            $table->integer('descuento12meses');
            $table->decimal('multa')->nullable();
            $table->string('cuenta_banco');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('parqueos');
    }
}
