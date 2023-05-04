<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\PersonalController;
use App\Http\Controllers\VehiculoController;
use App\Http\Controllers\ZonaController;
use App\Http\Controllers\ParqueoController;
use App\Http\Controllers\HorarioController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthClienteController;
use App\Http\Controllers\BoletaController;
use App\Http\Controllers\HorarioparqueoController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('clientes', ClienteController::class);
Route::resource('personals', PersonalController::class);
Route::resource('vehiculos', VehiculoController::class);
Route::resource('zonas', ZonaController::class);
Route::resource('parqueos', ParqueoController::class);
Route::resource('horarios', HorarioController::class);
Route::resource('users', UserController::class);
Route::resource('horarioparqueos', HorarioparqueoController::class);
Route::resource('boletas', BoletaController::class);

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::post('me', 'App\Http\Controllers\AuthController@me');
    Route::post('register', 'App\Http\Controllers\AuthController@register');
    //Route::put('update', 'App\Http\Controllers\AuthController@update');
});