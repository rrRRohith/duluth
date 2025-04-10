<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\BannerSetting;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BannerSettingsRequest;

class BannerSettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return Inertia::render('Admin/BannerSettings/Index', [
            'settings' => BannerSetting::first(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BannerSettingsRequest $request)
    {
        try {
            \DB::transaction(function () use ($request) {
                $request->merge([
                    'image' => $request->hasFile('file') ? ($request->file('file')->store('images', 'public')) : $request->image,
                ]);

                $settings = BannerSetting::updateOrCreate([], $request->only([
                    'title',
                    'description',
                    'button1_text',
                    'button1_link',
                    'button2_text',
                    'button2_link',
                    'image',
                    'descriptions',
                ]));
            });
            return redirect()->back()->withSuccess(__('Banner Settings updated successfully.'));
        } catch (\Exception $e) {
            return $this->error($e);
        }
    }
}
