<?php

namespace App\Http\Controllers\Admin;

use App\Models\JobType;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\JobTypeRequest;

class JobTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Job/Types/Index', [
            'types' => JobType::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Job/Types/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(JobTypeRequest $request)
    {
        \DB::transaction(function () use ($request) {
            JobType::create($request->validated());
        });
        return redirect()->route('admin.jobs.types.index')->withSuccess(__('Type created successfully.'));
    }

    /**
     * Display the specified resource.
     */
    public function show(JobType $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JobType $category)
    {
        return Inertia::render('Admin/Job/Types/Form', [
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(JobTypeRequest $request, JobType $category)
    {
        \DB::transaction(function () use ($request, $category) {
            $category->update($request->validated());
        });

        return redirect()->route('admin.jobs.types.index')->withSsuccess(__('Type updated successfully.'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobType $category)
    {
        \DB::transaction(function () use ($category) {
            $category->delete();
        });
        return redirect()->route('admin.jobs.types.index')->withSuccess(__('Type deleted successfully.'));
    }
}
