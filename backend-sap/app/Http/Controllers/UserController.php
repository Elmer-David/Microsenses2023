<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User($request->all());
        $user->save();
        return $user; 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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
    // //     $user = User::find($id);
    // //     if(!is_null($user)){

    // //     $u = new User;
    // //     $u->name = $request->name;
    // //     $u->email = $request->email;
    // //     $u->password = $request->password;
    // //     $u->password_confirmed = $request->password_confirmed;
        
    // //     $user->update($u);
    // //     return $user;
    // //    } 
    // $user = User::find($id);
    //     if(!is_null($user)){
    //             $user->update($request->all());
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
    public function update(Request $request, $id)
    {
        //Validación de datos
        $data = $request->only('name', 'apellido', 'dni', 'foto_perfil', 
        'telefono', 'direccion', 'email', 'password',
        'password_confirmed', 'tipo_usuario', 'cargo', 'departamento',
        'sitio', 'primer_ini_sesion', 'solicitud_parqueo', 'id_zona', 'id_horario'
    );
        $validator = Validator::make($data, [
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
        //Si falla la validación error.
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 400);
        }
        //Buscamos el producto
        $user = User::findOrfail($id);
        //Actualizamos el producto.
        $user->update([
            'name' => $request->name,
            'apellido' => $request->apellido,
            'dni' => $request->dni,
            'foto_perfil' => $request->foto_perfil,
            'telefono' => $request->telefono,
            'direccion' => $request->direccion,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'password_confirmed' => $request->password_confirmed,
            'tipo_usuario'=>$request->tipo_usuario,
            'cargo'=>$request->cargo,
            'departamento'=>$request->departamento, 
            'sitio'=>$request->sitio,
            'primer_ini_sesion'=>$request->primer_ini_sesion,
            'solicitud_parqueo'=>$request->solicitud_parqueo,
            'id_zona'=>$request->id_zona,
            'id_horario'=>$request->id_horario,
        ]);
        //Devolvemos los datos actualizados.
        return response()->json([
            'message' => 'Product updated successfully',
            'data' => $user
        ], Response::HTTP_OK);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user=User::find($id);
        $user->delete();
    }
}
