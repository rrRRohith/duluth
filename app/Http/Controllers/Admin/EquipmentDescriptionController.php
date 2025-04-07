<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\EquipmentDescriptionRequest;
use App\Models\EquipmentDescription;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EquipmentDescriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/EquipmentDescriptions/Index', [
            'equipments' => EquipmentDescription::equipment()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/EquipmentDescriptions/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EquipmentDescriptionRequest $request)
    {
        try {
            $equipment = EquipmentDescription::create($request->only(
                'title',
                'description',
                'icon',
            ));
            if ($request->has('equipments')) {
                foreach ($request->equipments as $equipmentData) {
                    $equipment->equipments()->create($equipmentData);
                }
            }
            return redirect()->route('admin.equipment-descriptions.index')->withSuccess(__('Equipment description created successfully.'));
        } catch (\Exception $e) {
            return $this->error($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(EquipmentDescription $equipment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EquipmentDescription $equipment)
    {
        return Inertia::render('Admin/EquipmentDescriptions/Form', [
            'equipment' => $equipment->load(['equipments:id,title,description,parent_id']),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EquipmentDescriptionRequest $request, EquipmentDescription $equipment)
    {
        try {
            $equipment->update($request->only(
                'title',
                'description',
                'icon',
            ));
            if ($request->has('equipments')) {
                $equipment->equipments()->delete();
                foreach ($request->equipments as $child) {
                    $equipment->equipments()->create($child);
                }
            }
            return redirect()->route('admin.equipment-descriptions.index')->withSuccess(__('Equipment description updated successfully.'));
        } catch (\Exception $e) {
            return $this->error($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EquipmentDescription $equipment)
    {
        try {
            $equipment->delete();
            return redirect()->back()->withSuccess(__('Equipment description deleted successfully.'));
        } catch (\Exception $e) {
            return $this->error($e);
        }
    }
}
