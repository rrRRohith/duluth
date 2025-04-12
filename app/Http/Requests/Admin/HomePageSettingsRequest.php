<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class HomePageSettingsRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'settings' => 'required|array',

            'settings.equipments' => 'required|array',
            'settings.equipments.title' => 'required|string|max:255',
            'settings.equipments.description' => 'required|string|max:255',

            'settings.services' => 'required|array',
            'settings.services.title' => 'required|string|max:255',
            'settings.services.description' => 'required|string|max:255',

            'settings.video' => 'required|array',
            'settings.video.title' => 'required|string|max:255',
            'settings.video.description' => 'required|string|max:255',

            'settings.contact' => 'required|array',
            'settings.contact.title' => 'required|string|max:255',
            'settings.contact.description' => 'required|string|max:255',
        ];
    }
}
