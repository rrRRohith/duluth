<?php

namespace App\Http\Controllers\Admin;

use App\Models\JobCategory;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\JobCategoryRequest;

class JobCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Job/Categories/Index', [
            'categories' => JobCategory::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Job/Categories/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(JobCategoryRequest $request)
    {
        \DB::transaction(function () use ($request) {
            JobCategory::create($request->validated());
        });
        return redirect()->route('admin.jobs.categories.index')->withSuccess(__('Category created successfully.'));
    }

    /**
     * Display the specified resource.
     */
    public function show(JobCategory $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JobCategory $category)
    {
        return Inertia::render('Admin/Job/Categories/Form', [
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(JobCategoryRequest $request, JobCategory $category)
    {
        \DB::transaction(function () use ($request, $category) {
            $category->update($request->validated());
        });

        return redirect()->route('admin.jobs.categories.index')->withSsuccess(__('Category updated successfully.'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobCategory $category)
    {
        \DB::transaction(function () use ($category) {
            $category->delete();
        });
        return redirect()->route('admin.jobs.categories.index')->withSuccess(__('Category deleted successfully.'));
    }
}
