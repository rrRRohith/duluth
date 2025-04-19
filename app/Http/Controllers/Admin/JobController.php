<?php

namespace App\Http\Controllers\Admin;

use App\Models\Job;
use Inertia\Inertia;
use App\Models\JobType;
use App\Models\JobCategory;
use Illuminate\Http\Request;
use App\Models\JobExperience;
use App\Models\JobQualification;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\JobRequest;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Job/Index', [
            'jobs' => Job::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Job/Form', [
            'experiences' => JobExperience::selectRaw("id as value, title as label")->get(),
            'qualifications' => JobQualification::selectRaw("id as value, title as label")->get(),
            'types' => JobType::selectRaw("id as value, title as label")->get(),
            'categories' => JobCategory::selectRaw("id as value, title as label")->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(JobRequest $request)
    {
        \DB::transaction(function () use ($request) {
            $job = Job::create($request->validated());
            $job->experiences()->sync($request->input('experiences', []));
            $job->qualifications()->sync($request->input('qualifications', []));
            $job->types()->sync($request->input('types', []));
            $job->categories()->sync($request->input('categories', []));
        });
        return redirect()->route('admin.jobs.index')->withSuccess(__('Job created successfully.'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Job $job)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Job $job)
    {
        return Inertia::render('Admin/Job/Form', [
            'job' => $job->load([
                'experiences',
                'qualifications',
                'types',
                'categories'
            ]),
            'experiences' => JobExperience::selectRaw("id as value, title as label")->get(),
            'qualifications' => JobQualification::selectRaw("id as value, title as label")->get(),
            'types' => JobType::selectRaw("id as value, title as label")->get(),
            'categories' => JobCategory::selectRaw("id as value, title as label")->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(JobRequest $request, Job $job)
    {
        \DB::transaction(function () use ($request, $job) {
            $job->update($request->validated());
            $job->experiences()->sync($request->input('experiences', []));
            $job->qualifications()->sync($request->input('qualifications', []));
            $job->types()->sync($request->input('types', []));
            $job->categories()->sync($request->input('categories', []));
        });

        return redirect()->route('admin.jobs.index')->withSsuccess(__('Job updated successfully.'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Job $job)
    {
        \DB::transaction(function () use ($job) {
            $job->delete();
        });
        return redirect()->route('admin.jobs.index')->withSuccess(__('Job deleted successfully.'));
    }
}
