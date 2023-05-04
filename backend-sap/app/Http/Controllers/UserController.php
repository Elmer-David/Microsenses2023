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
        //
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
        $data = $request->only('name', 'email', 'password', 'password_confirmed');
        $validator = Validator::make($data, [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'password_confirmed' => 'required',
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
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'password_confirmed' => $request->password_confirmed,
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
        //
    }
}
