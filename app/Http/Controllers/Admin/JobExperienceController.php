<?php

namespace App\Http\Controllers\Admin;

use App\Models\JobExperience;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\JobExperienceRequest;

class JobExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Job/Experiences/Index', [
            'experiences' => JobExperience::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Job/Experiences/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(JobExperienceRequest $request)
    {
        \DB::transaction(function () use ($request) {
            JobExperience::create($request->validated());
        });
        return redirect()->route('admin.jobs.experiences.index')->withSuccess(__('Experience created successfully.'));
    }

    /**
     * Display the specified resource.
     */
    public function show(JobExperience $experience)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JobExperience $experience)
    {
        return Inertia::render('Admin/Job/Experiences/Form', [
            'experience' => $experience
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(JobExperienceRequest $request, JobExperience $experience)
    {
        \DB::transaction(function () use ($request, $experience) {
            $experience->update($request->validated());
        });

        return redirect()->route('admin.jobs.experiences.index')->withSsuccess(__('Experience updated successfully.'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobExperience $experience)
    {
        \DB::transaction(function () use ($experience) {
            $experience->delete();
        });
        return redirect()->route('admin.jobs.experiences.index')->withSuccess(__('Experience deleted successfully.'));
    }
}
