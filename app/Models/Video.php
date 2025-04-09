<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Video extends Model
{
    const TYPES = [
        'services' => 'Services',
        'equipments' => 'Equipments',
        'works' => 'Works',
    ];
    use \Illuminate\Database\Eloquent\SoftDeletes;

    protected $fillable = [
        'title',
        'file',
        'type',
    ];

    protected $appends = [
        'type_label',
        'file_url',
    ];

    public function getTypeLabelAttribute()
    {
        return self::TYPES[$this->type] ?? null;
    }

    public function getFileUrlAttribute()
    {
        return asset(Storage::url($this->file));
    }
}
