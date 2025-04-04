<?php

namespace App\Http\Controllers\Admin;

use App\Models\Menu;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Admin\Controller;
use App\Http\Resources\MenuResource;
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
            // Process the items
            $this->updateMenuItems($menu, $request->input('items'));
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
            'menu' => new MenuResource($menu),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MenuRequest $request, Menu $menu)
    {
        \DB::transaction(function () use ($request, $menu) {
            // Update the menu
            $menu->update($request->only([
                'title',
                'handle',
            ]));

            // Process the items
            $this->updateMenuItems($menu, $request->input('items'));
        });

        return redirect()
            ->route('admin.menus.index')
            ->withSuccess(__('Menu updated successfully.'));
    }

    /**
     * Update menu items recursively.
     */
    private function updateMenuItems(Menu $menu, array $items)
    {
        // Delete items that are not in the request
        $menu->children()->whereNotIn('id', array_column($items, 'id'))->delete();
        // Create or update items
        foreach ($items ?? [] as $item) {
            $menuItem = $menu->children()->updateOrCreate(
                ['id' => $item['id'] ?? null],
                [
                    'title' => $item['title'] ?? null,
                    'link' => $item['link'] ?? null,
                    'icon' => $item['icon'] ?? null,
                ]
            );

            if (!empty($item['children'])) {
                $this->updateMenuItems($menuItem, $item['children']);
            }else{
                $menuItem->children()->delete();
            }
        }
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
