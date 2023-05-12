<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'update']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Usuario no encontrado'], 401);
        }

        //return $this->respondWithToken($token);
        // $user = auth()->user();
        // return response()->json([
        //     'token' => $token,
        //     'user' => $user 
        // ], 201);
        return response()->json(auth()->user());
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'apellido' => 'required',
            'dni' => 'nullable',
            'foto_perfil' => 'nullable',
            'telefono' => 'required',
            'direccion' => 'nullable',
            'email' => 'required',
            'password' => 'required',
            'password_confirmed' => 'nullable',
            'tipo_usuario'=>'required',
            'cargo'=>'nullable',
            'departamento'=>'nullable', 
            'sitio'=>'nullable',
            'primer_ini_sesion'=>'nullable',
            'solicitud_parqueo'=>'nullable',
            'id_zona'=>'nullable',
            'id_horario'=>'nullable',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(),400);
        }

        $user = User::create(array_merge(
            $validator->validate(),
            ['password' => bcrypt($request->password)]
        ));

        return response()->json([
            'messaje' => 'Usuario registrado exitosamente',
            'user' => $user 
        ], 201);
    }

    // public function update(Request $request, $id)
    // {
    //     $user = User::find($id);
    //     if(!is_null($user)){

    //     $u = new User;
    //     $u->name = $request->name;
    //     $u->email = $request->email;
    //     $u->password = $request->password;
    //     $u->password_comfirmed = $request->password_confirmed;
        
    //     $user->update($u->all());
    //     return $user;
    //    } 

    //     // $validator = Validator::make($request->all(), [
    //     //     'name' => 'required',
    //     //     'email' => 'required',
    //     //     'password' => 'required',
    //     //     'password_confirmed' => 'nullable'
    //     // ]);
    //     // if($validator->fails()){
    //     //     return response()->json($validator->errors()->toJson(),400);
    //     // }

    //     // $user = User::create(array_merge(
    //     //     $validator->validate(),
    //     //     ['password' => bcrypt($request->password)]
    //     // ));

    //     // return response()->json([
    //     //     'messaje' => 'Usuario registrado exitosamente',
    //     //     'user' => $user 
    //     // ], 201);
    // }


    // public function update(Request $request, $id)
    // {
    //     $user = User::find($id);
    //     if(!is_null($user)){
    //     $user->update($request->all());
    //     return $user;
    //    } 
    // }
    
    // public function update(Request $request, $id)
    // {
    //     //Validación de datos
    //     $data = $request->only('name', 'email', 'password', 'password_confirmed');
    //     $validator = Validator::make($data, [
    //         'name' => 'required',
    //         'email' => 'required',
    //         'password' => 'required',
    //         'password_confirmed' => 'required',
    //     ]);
    //     //Si falla la validación error.
    //     if ($validator->fails()) {
    //         return response()->json(['error' => $validator->messages()], 400);
    //     }
    //     //Buscamos el producto
    //     $user = User::findOrfail($id);
    //     //Actualizamos el producto.
    //     $user->update([
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'password' => $request->password,
    //         'password_confirmed' => $request->password_confirmed,
    //     ]);
    //     //Devolvemos los datos actualizados.
    //     return response()->json([
    //         'message' => 'Product updated successfully',
    //         'data' => $user
    //     ], Response::HTTP_OK);
    // }

}