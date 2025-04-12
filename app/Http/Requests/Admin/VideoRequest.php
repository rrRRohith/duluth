<?php

namespace App\Http\Requests\Admin;

use Illuminate\Support\Str;
use Illuminate\Foundation\Http\FormRequest;

class VideoRequest extends FormRequest
{
    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'handle' => $this->handle ? : Str::slug($this->input('title') . '-' . Str::random(4)),
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
            'title' => 'required|string|max:255',
            'handle' => [
                'required',
                'string',
                'max:255',
                \Illuminate\Validation\Rule::unique('videos', 'handle')->ignore($this->route('video')),
            ],
            'file' => 'sometimes|nullable|mimes:mp4,mov,avi,wmv|max:20480', // 20MB
            'type' => 'required|in:services,equipments,partnerships',
            'description' => 'required|string',
            'show_on_home' => 'sometimes|nullable|boolean',
        ];
    }
}
