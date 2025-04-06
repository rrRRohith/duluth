<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\ContactSetting;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ContactSettingRequest;

class ContactSettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return Inertia::render('Admin/ContactSettings/Index', [
            'settings' => ContactSetting::first(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ContactSettingRequest $request)
    {
        try {
            \DB::transaction(function () use ($request) {
                ContactSetting::updateOrCreate([], $request->validated());
            });
            return redirect()->back()->withSuccess(__('Contact settings updated successfully.'));
        } catch (\Exception $e) {
            return $this->error($e);
        }
    }
}
