<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\HomePageSetting;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\HomePageSettingsRequest;

class HomePageSettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return Inertia::render('Admin/HomePageSettings/Index', [
            'settings' => HomePageSetting::first(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(HomePageSettingsRequest $request)
    {
        try {
            \DB::transaction(function () use ($request) {
                HomePageSetting::firstOrCreate([])->forceFill($request->validated())->save();
            });
            return redirect()->back()->withSuccess(__('Home page settings updated successfully.'));
        } catch (\Exception $e) {
            return $this->error($e);
        }
    }
}
