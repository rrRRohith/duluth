<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Video extends Model
{
    const TYPES = [
        'services' => 'Client Services',
        'equipments' => 'Equipment Showcase',
        'partnerships' => 'Partnership Opportunities',
    ];
    use \Illuminate\Database\Eloquent\SoftDeletes;

    protected $fillable = [
        'title',
        'video',
        'type',
        'handle',
        'description',
        'show_on_home',
    ];

    protected $appends = [
        'type_label',
        'video_url',
    ];

    public function getTypeLabelAttribute()
    {
        return self::TYPES[$this->type] ?? null;
    }

    public function getVideoUrlAttribute()
    {
        return asset(Storage::url($this->video));
    }

    public function scopeSort($query, $request)
    {
        return $query->when($request->input('sort') == 'latest', function ($query, $sort) {
            $query->orderBy('id', 'desc');
        })->when($request->input('sort') == 'oldest', function ($query, $sort) {
            $query->orderBy('id', 'asc');
        });
    }
}
