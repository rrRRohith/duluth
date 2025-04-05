<?php

namespace App\Http\Controllers\Admin;

use App\Models\Page;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PageRequest;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Pages/Index', [
            'pages' => Page::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Pages/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PageRequest $request)
    {
        \DB::transaction(function () use ($request) {
            Page::create($request->validated());
        });
        return redirect()->route('admin.pages.index')->withSuccess(__('Page created successfully.'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Page $page)
    {
        return Inertia::render('Admin/Pages/Form', [
            'page' => $page
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PageRequest $request, Page $page)
    {
        \DB::transaction(function () use ($request, $page) {
            $page->update($request->validated());
        });

        return redirect()->route('admin.pages.index')->withSsuccess(__('Page updated successfully.'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Page $page)
    {
        \DB::transaction(function () use ($page) {
            $page->delete();
        });
        return redirect()->route('admin.pages.index')->withSuccess(__('Page deleted successfully.'));
    }
}
