<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'handle',
        'parent_id',
        'link',
        'position',
    ];

    /**
     * The parent menu item.
     */
    public function parent()
    {
        return $this->belongsTo(Menu::class, 'parent_id');
    }

    /**
     * The child menu items.
     */
    public function children()
    {
        return $this->hasMany(Menu::class, 'parent_id');
    }

    /**
     * The main menu items (those without a parent).
     */
    public function scopeMain($q)
    {
        return $q->whereNull('parent_id');
    }
}
