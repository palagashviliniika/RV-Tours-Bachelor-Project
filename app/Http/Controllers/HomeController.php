<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAdminTourRequest;
use App\Http\Requests\CreateTourRequest;
use App\Models\CustomTour;
use App\Models\Tour;
use App\Models\Transport;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
        $tours=Tour::with("transport")->get();
        $transports = Transport::all();

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'tours' => $tours,
            'transports' => $transports
        ]);
    }

    public function tourPageIndex() {
        $tours=Tour::with("transport")->get();

        return Inertia::render('ToursPage', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'tours' => $tours
        ]);
    }

    /**
     * @param CreateAdminTourRequest $request
     */
    public function reserveCustomTour(CreateTourRequest $request) {
        $customTour = new CustomTour();

        $customTour->name = $request->name;
        $customTour->price = $request->price;
        $customTour->startDate = $request->startDate;
        $customTour->endDate = $request->endDate;
        $customTour->days = $request->days;
        $customTour->user_id = Auth::id();
        $customTour->transport_id = $request->transport_id;

        $customTour->save();


//        dd($request->all());
    }
}
