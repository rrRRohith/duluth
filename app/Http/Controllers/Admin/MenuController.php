<?php

namespace App\Http\Controllers\Admin;

use App\Models\Menu;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\MenuRequest;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Menus/Index', [
            'menus' => Menu::main()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Menus/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MenuRequest $request)
    {
        \DB::transaction(function () use ($request) {
            $menu = Menu::create($request->only([
                'title',
                'handle',
                'link',
            ]));
        });

        return redirect()
            ->route('admin.menus.index')
            ->withSuccess(__('Menu created successfully.'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Menu $menu) {}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        return Inertia::render('Admin/Menus/Form', [
            'menu' => $menu,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MenuRequest $request, Menu $menu)
    {
        \DB::transaction(function () use ($request, $menu) {
            $menu->update($request->only([
                'title',
                'handle',
                'link',
            ]));
        });

        return redirect()
            ->route('admin.menus.index')
            ->withSuccess(__('Menu updated successfully.'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        $menu->delete();

        return redirect()
            ->route('admin.menus.index')
            ->withSuccess(__('Menu deleted successfully.'));
    }
}
