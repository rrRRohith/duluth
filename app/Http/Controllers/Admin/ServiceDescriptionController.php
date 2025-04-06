<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ServiceDescriptionRequest;
use App\Models\ServiceDescription;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceDescriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/ServiceDescriptions/Index', [
            'services' => ServiceDescription::get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/ServiceDescriptions/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ServiceDescriptionRequest $request)
    {
        try {
            $service = ServiceDescription::create($request->only(
                'title',
                'description',
                'icon',
            ));
            return redirect()->route('admin.service-descriptions.index')->withSuccess(__('Service description created successfully.'));
        } catch (\Exception $e) {
            return $this->error($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(ServiceDescription $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ServiceDescription $service)
    {
        return Inertia::render('Admin/ServiceDescriptions/Form', [
            'service' => $service,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ServiceDescriptionRequest $request, ServiceDescription $service)
    {
        try {
            $service->update($request->only(
                'title',
                'description',
                'icon',
            ));
            return redirect()->route('admin.service-descriptions.index')->withSuccess(__('Service description updated successfully.'));
        } catch (\Exception $e) {
            return $this->error($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ServiceDescription $service)
    {
        try {
            $service->delete();
            return redirect()->back()->withSuccess(__('Service description deleted successfully.'));
        } catch (\Exception $e) {
            return $this->error($e);
        }
    }
}
