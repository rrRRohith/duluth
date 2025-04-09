<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ServiceDescriptionRequest extends FormRequest
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
            'type' => 'required|in:accordion,box',
            'services' => 'sometimes|nullable|array',
            'services.*.title' => 'required|string|max:255',
            'services.*.description' => 'required|string|max:255',
        ];
    }
}
