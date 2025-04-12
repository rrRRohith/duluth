<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', 'App\Http\Controllers\Controller@home')->name('home');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return redirect()->route('admin.index');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::name('videos.')->prefix('videos')->group(function () {
    Route::get('/', 'App\Http\Controllers\VideoController@index')->name('index');
    Route::get('/{type}', 'App\Http\Controllers\VideoController@type')->name('type');
    Route::get('/{type}/{video:handle}', 'App\Http\Controllers\VideoController@show')->name('show');
});

require __DIR__.'/admin.php';
require __DIR__.'/auth.php';
