<?php

use Illuminate\Support\Facades\Route;


Route::middleware('auth')->name('admin.')->prefix('admin')->group(function () {
    Route::get('/',  'App\Http\Controllers\Admin\Controller@dashboard')->name('index');

    Route::get('/profile',  'App\Http\Controllers\Admin\ProfileController@profile')->name('profile');
    Route::put('/profile',  'App\Http\Controllers\Admin\ProfileController@updateProfile')->name('profile.update');

    Route::get('/password',  'App\Http\Controllers\Admin\ProfileController@password')->name('password');
    Route::put('/password',  'App\Http\Controllers\Admin\ProfileController@updatePassword')->name('password.update');

    Route::resource('/menus',  App\Http\Controllers\Admin\MenuController::class)
        ->except(['show']);

    Route::resource('/users',  App\Http\Controllers\Admin\UserController::class)
        ->except(['show']);

    Route::resource('/pages',  App\Http\Controllers\Admin\PageController::class)
        ->except(['show']);

    Route::resource('/contact-settings',  App\Http\Controllers\Admin\ContactSettingsController::class)
        ->only(['index', 'store']);

    Route::resource('/service-descriptions',  App\Http\Controllers\Admin\ServiceDescriptionController::class)
        ->except(['show'])->parameters(['service-descriptions' => 'service']);

        Route::resource('/equipment-descriptions',  App\Http\Controllers\Admin\EquipmentDescriptionController::class)
        ->except(['show'])->parameters(['equipment-descriptions' => 'equipment']);

    Route::resource('/videos',  App\Http\Controllers\Admin\VideoController::class)
        ->except(['show'])->parameters(['videos' => 'video']);

    Route::resource('/banner-settings',  App\Http\Controllers\Admin\BannerSettingsController::class)
        ->only(['index', 'store']);
});
