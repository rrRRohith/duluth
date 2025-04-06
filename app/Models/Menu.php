<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Menu extends Model
{
    use SoftDeletes;
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
     * The child menu items.
     */
    public function children()
    {
        return $this->hasMany(Menu::class, 'parent_id');
    }

    /**
     * The main menu items (those without a parent).
     */
    public function scopeMenu($q)
    {
        return $q->whereNull('parent_id');
    }
}
