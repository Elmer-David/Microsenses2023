<?php

namespace App\Http\Controllers;

use App\Models\Parqueo;
use Illuminate\Http\Request;

class ParqueoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Parqueo::all();
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
        $parqueo = new Parqueo($request->all());
        $parqueo->save();
        return $parqueo;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Parqueo  $parqueo
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Parqueo::find($id);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Parqueo  $parqueo
     * @return \Illuminate\Http\Response
     */
    public function edit(Parqueo $parqueo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Parqueo  $parqueo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $parqueo = Parqueo::find($id);
        if(!is_null($parqueo)){
        $parqueo->update($request->all());
        return $parqueo;
       }  
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Parqueo  $parqueo
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $parqueo=Parqueo::find($id);
        $parqueo->delete();
    }
}
