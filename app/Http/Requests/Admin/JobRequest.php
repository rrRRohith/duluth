<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class JobRequest extends FormRequest
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
            'handle' => 'nullable|string|max:255',
            'description' => 'required|string',
            'close_date' => 'nullable|date',
            'start_date' => 'nullable|date',
            'location' => 'nullable|string|max:255',
            'tags' => 'nullable|array',
            'tags.*' => 'string|max:255',
            'email' => 'nullable|email|max:255',
            'link' => 'nullable|url|max:255',
            'remote_position' => 'boolean',
            'status' => 'required|in:published,draft',
            'experiences' => 'nullable|array',
            'experiences.*' => 'exists:job_experiences,id',
            'qualifications' => 'nullable|array',
            'qualifications.*' => 'exists:job_qualifications,id',
            'types' => 'nullable|array',
            'types.*' => 'exists:job_types,id',
            'categories' => 'nullable|array',
            'categories.*' => 'exists:job_categories,id',
        ];
    }
}
