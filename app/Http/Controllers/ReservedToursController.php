<?php

namespace App\Http\Controllers;

use App\Models\CustomTour;
use App\Models\Reserve;
use App\Models\Tour;
use App\Models\Transport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class ReservedToursController extends Controller
{
    public function index()
    {
        $tours=Reserve::where('user_id', Auth()->id())->with("tours.transport")->get();
        $customTours=CustomTour::where('user_id', Auth()->id())->with("transport")->get();

        return Inertia::render('ReservedTours', ["reserves" => $tours, "customReserves" => $customTours]);
    }
}
