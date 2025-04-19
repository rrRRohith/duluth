<?php

namespace App\Http\Controllers\Admin;

use App\Models\JobQualification;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\JobQualificationRequest;

class JobQualificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Job/Qualifications/Index', [
            'qualifications' => JobQualification::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Job/Qualifications/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(JobQualificationRequest $request)
    {
        \DB::transaction(function () use ($request) {
            JobQualification::create($request->validated());
        });
        return redirect()->route('admin.jobs.qualifications.index')->withSuccess(__('Category created successfully.'));
    }

    /**
     * Display the specified resource.
     */
    public function show(JobQualification $qualification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JobQualification $qualification)
    {
        return Inertia::render('Admin/Job/Qualifications/Form', [
            'qualification' => $qualification
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(JobQualificationRequest $request, JobQualification $qualification)
    {
        \DB::transaction(function () use ($request, $qualification) {
            $qualification->update($request->validated());
        });

        return redirect()->route('admin.jobs.qualifications.index')->withSsuccess(__('Category updated successfully.'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobQualification $qualification)
    {
        \DB::transaction(function () use ($qualification) {
            $qualification->delete();
        });
        return redirect()->route('admin.jobs.qualifications.index')->withSuccess(__('Category deleted successfully.'));
    }
}
