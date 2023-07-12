<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateTransportRequest;
use App\Models\Transport;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $transports=Transport::all();

        return Inertia::render('Transport', ["transports" => $transports]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('AddTransport');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(CreateTransportRequest $request)
    {
        $transport = new Transport;
//        dd($request->all());
        $transport->name = $request->name;

        $transport->save();

        return redirect('/transport');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transport  $transport
     * @return \Illuminate\Http\Response
     */
    public function show(Transport $transport)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Transport  $transport
     * @return \Inertia\Response
     */
    public function edit(Transport $transport)
    {
        return Inertia::render('EditTransport', ["transport" => $transport]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Transport  $transport
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request, Transport $transport)
    {
        $transport->update([
            "name" => $request->name
        ]);

        return redirect('transport');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Transport  $transport
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy(Transport $transport)
    {
        $transport->delete();

        return redirect('/transport')->with('success', 'Transport Type Deleted');
    }
}
