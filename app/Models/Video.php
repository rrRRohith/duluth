<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
    ];

    public function getTypeLabelAttribute()
    {
        return self::TYPES[$this->type] ?? null;
    }
}
