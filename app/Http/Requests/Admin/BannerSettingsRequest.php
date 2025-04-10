<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class BannerSettingsRequest extends FormRequest
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
            'button1_text' => 'required|string|max:255',
            'button1_link' => 'required|string|max:255',
            'button2_text' => 'nullable|string|max:255',
            'button2_link' => 'nullable|string|max:255',
            'file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'descriptions' => 'nullable|array',
            'descriptions.*.title' => 'required|string|max:255',
            'descriptions.*.description' => 'required|string|max:255',
            'descriptions.*.icon' => 'required|string|max:255',
        ];
    }
}
