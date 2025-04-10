<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class BannerSetting extends Model
{
    protected $fillable = [
        'title',
        'description',
        'button1_text',
        'button1_link',
        'button2_text',
        'button2_link',
        'image',
        'descriptions',
    ];

    protected $appends = [
        'image_url',
    ];

    protected $casts = [
        'descriptions' => 'object',
    ];

    public function getImageUrlAttribute()
    {
        return asset(Storage::url($this->image));
    }
}
