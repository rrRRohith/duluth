<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceDescription extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'icon',
        'parent_id',
    ];
    
    
    public function childs(){
        return $this->hasMany(ServiceDescription::class, 'parent_id');
    }
}
