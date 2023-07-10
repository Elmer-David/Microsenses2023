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
use App\Http\Controllers\BoletaController;
use App\Http\Controllers\HorarioparqueoController;
use App\Http\Controllers\CliBolController;
use App\Http\Controllers\BolPenController;
use App\Http\Controllers\BolAcepController;
use App\Http\Controllers\BolRechController;
use App\Http\Controllers\UserAdController;
use App\Http\Controllers\OperadorController;
use App\Http\Controllers\GuardiaController;
use App\Http\Controllers\UserComunController;
use App\Http\Controllers\MensajeController;
use App\Http\Controllers\VehiCliController;
use App\Http\Controllers\MensClienteController;
use App\Http\Controllers\MisBolCliController;
use App\Http\Controllers\BolManualController;
use App\Http\Controllers\MensOperadorController;
use App\Http\Controllers\MensGuardiaController;
use App\Http\Controllers\MensGlobalController;
use App\Http\Controllers\ArchivoController;
use App\Http\Controllers\CliBolQRController;

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
Route::resource('mensajes', MensajeController::class);

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

Route::resource('clibols', CliBolController::class);
Route::resource('bolpens', BolPenController::class);
Route::resource('bolaceps', BolAcepController::class);
Route::resource('bolrechs', BolRechController::class);
Route::resource('userads', UserAdController::class);
Route::resource('operadors', OperadorController::class);
Route::resource('guardias', GuardiaController::class);
Route::resource('usercomuns', UserComunController::class);
Route::resource('vehiclis', VehiCliController::class);
Route::resource('mensclientes', MensClienteController::class);
Route::resource('misbolclis', MisBolCliController::class);
Route::resource('bolmanuals', BolManualController::class);
Route::resource('mensoperadors', MensOperadorController::class);
Route::resource('mensguardias', MensGuardiaController::class);
Route::resource('mensglobals', MensGlobalController::class);
Route::resource('clibolqrs', CliBolQRController::class);

Route::post('upload', [ArchivoController::class, 'upload']);
Route::post('download', [ArchivoController::class, 'download']);
