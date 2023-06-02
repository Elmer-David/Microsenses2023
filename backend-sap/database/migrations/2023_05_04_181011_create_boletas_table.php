<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBoletasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('boletas', function (Blueprint $table) {
            $table->id();
            $table->integer('mensualidad');
            $table->decimal('monto');
            $table->string('nro_transaccion')->nullable();
            $table->date('fecha_deposito')->nullable();
            $table->string('foto_comprobante')->nullable();
            $table->integer('estado')->default(0); //0 pendiente, 1 aceptado, 2 rechazado, 3 manual
            $table->integer('nro_factura')->nullable();
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
        Schema::dropIfExists('boletas');
    }
}
