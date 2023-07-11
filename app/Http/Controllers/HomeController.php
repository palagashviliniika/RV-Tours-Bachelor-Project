<?php

namespace App\Http\Controllers;

use App\Models\Tour;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
        $tours=Tour::with("transport")->get();

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'tours' => $tours
        ]);
    }
}
