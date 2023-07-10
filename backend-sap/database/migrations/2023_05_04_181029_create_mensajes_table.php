<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMensajesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mensajes', function (Blueprint $table) {
            $table->id();
            $table->string('asunto');
            $table->string('mensaje');
            $table->integer('id_receptor')->nullable();
            $table->integer('global')->nullable(); //0 no global, 1 global, 2 operador, 3 guardia, 4 cliente
            $table->integer('estado')->nullable(); //1 leido, 0 no leido
            $table->timestamps();

            $table->foreignId('id_user')
            ->nullable()
            ->constrained('users')
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
        Schema::dropIfExists('mensajes');
    }
}
