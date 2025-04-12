<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\SiteSetting;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SiteSettingsRequest;

class SiteSettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return Inertia::render('Admin/SiteSettings/Index', [
            'settings' => SiteSetting::first(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SiteSettingsRequest $request)
    {
        try {
            \DB::transaction(function () use ($request) {
                $request->merge([
                    'logo' => $request->hasFile('file') ? ($request->file('file')->store('images', 'public')) : $request->logo,
                ]);

                SiteSetting::updateOrCreate([], $request->validated());
            });
            return redirect()->back()->withSuccess(__('Site settings updated successfully.'));
        } catch (\Exception $e) {
            return $this->error($e);
        }
    }
}
