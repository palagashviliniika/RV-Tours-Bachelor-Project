<?php

namespace App\Http\Controllers;

use App\Models\Tour;
use App\Models\Transport;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TourController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $tours=Tour::with("transport")->get();
        return Inertia::render('Tour', ["tours" => $tours]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $transports = Transport::all();

        return Inertia::render('AddTour', ["transports" => $transports]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(Request $request)
    {
        $tour = new Tour;
        $tour->name = $request->name;
        $tour->price = $request->price;
        $tour->description = $request->description;
        $tour->startDate = $request->startDate;
        $tour->endDate = $request->endDate;
        $tour->days = $request->days;
        $tour->transport_id = $request->transport_id;

        $tour->save();

        return redirect('/tour');
//        dd($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tour  $tour
     * @return \Inertia\Response
     */
    public function show(Tour $tour)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tour  $tour
     * @return \Inertia\Response
     */
    public function edit(Tour $tour)
    {
        $transports = Transport::all();

        return Inertia::render('EditTour', ["tour" => $tour, "transports" => $transports]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tour  $tour
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request, Tour $tour)
    {
        $tour->update([
            "name" => $request->name,
            "price" => $request->price,
            "description" => $request->description,
            "startDate" => $request->startDate,
            "endDate" => $request->endDate,
            "days" => $request->days,
            "transport_id" => $request->transport_id
        ]);

        return redirect('/tour');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tour  $tour
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy(Tour $tour)
    {
        $tour->delete();

        return redirect('/tour')->with('success', 'Tour Deleted');
    }
}
