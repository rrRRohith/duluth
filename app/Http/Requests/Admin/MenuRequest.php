<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class MenuRequest extends FormRequest
{
    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'handle' => Str::slug($this->input('handle', $this->input('title'))),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => [
                'required',
                'string',
                'max:255',
                \Illuminate\Validation\Rule::unique('menus', 'title')->ignore($this->route('menu')),
            ],
            'handle' => [
                'required',
                'string',
                'max:255',
                \Illuminate\Validation\Rule::unique('menus', 'handle')->ignore($this->route('menu')),
            ],
        ];
    }
}
