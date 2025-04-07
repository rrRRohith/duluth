<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class EquipmentDescriptionRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'icon' => 'sometimes|nullable|string|max:255',
            'equipments' => 'sometimes|nullable|array',
            'equipments.*.title' => 'required|string|max:255',
            'equipments.*.description' => 'required|string|max:255',
        ];
    }
}
