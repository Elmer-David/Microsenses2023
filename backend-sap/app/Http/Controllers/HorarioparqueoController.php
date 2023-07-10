<?php

namespace App\Http\Controllers;

use App\Models\Horarioparqueo;
use Illuminate\Http\Request;

class HorarioparqueoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Horarioparqueo::all();
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
        $horarioparqueo = new Horarioparqueo($request->all());
        $horarioparqueo->save();
        return $horarioparqueo; 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Horarioparqueo  $horarioparqueo
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Horarioparqueo::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Horarioparqueo  $horarioparqueo
     * @return \Illuminate\Http\Response
     */
    public function edit(Horarioparqueo $horarioparqueo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Horarioparqueo  $horarioparqueo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $horarioparqueo = Horarioparqueo::find($id);
        if(!is_null($horarioparqueo)){
        $horarioparqueo->update($request->all());
        return $horarioparqueo;
       }  
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Horarioparqueo  $horarioparqueo
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $horarioparqueo=Horarioparqueo::find($id);
        $horarioparqueo->delete();
    }
}
