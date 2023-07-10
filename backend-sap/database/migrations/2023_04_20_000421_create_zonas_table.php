<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateZonasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('zonas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->integer('nro_sitios');
            $table->string('sitios')->nullable();
            $table->string('direccion');
            $table->string('imagen')->nullable();
            $table->string('descripcion');
            $table->timestamps();

            $table->foreignId('id_parqueo')
                   ->nullable()
                   ->constrained('parqueos')
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
        Schema::dropIfExists('zonas');
    }
}
