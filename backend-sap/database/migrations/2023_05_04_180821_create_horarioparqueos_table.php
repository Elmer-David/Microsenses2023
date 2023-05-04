<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHorarioparqueosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('horarioparqueos', function (Blueprint $table) {
            $table->id();
            $table->time('hora_ini')->nullable();
            $table->time('hora_fin')->nullable();
            $table->string('dia_ini');
            $table->string('dia_fin');
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
        Schema::dropIfExists('horarioparqueos');
    }
}
