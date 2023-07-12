<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [Controllers\HomeController::class, "index"])->name('home');


Route::get('/tours', [Controllers\HomeController::class, "tourPageIndex"])->name("toursPage");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/test', function () {
    return Inertia::render('Test');
})->name('test');

Route::group(['middleware' => ['auth', 'admin']], function () {
    Route::resource("tour", Controllers\TourController::class);
    Route::resource("transport", Controllers\TransportController::class);
    Route::post('/reserve', [Controllers\TourController::class, 'reserve'])->name('tour.reserve');
    Route::post('/reserveCustomTour', [Controllers\HomeController::class, "reserveCustomTour"])->name('reserveCustomTour');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/reservedTours', [Controllers\ReservedToursController::class, "index"])->name('reservedTours');
//    Route::get('/reservedTours', [Controllers\ReservedToursController::class, "customToursIndex"])->name('reservedCustomTours');
});


require __DIR__.'/auth.php';
