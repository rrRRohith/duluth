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
        'type',
    ];
    
    
    public function services(){
        return $this->hasMany(self::class, 'parent_id');
    }

    public function scopeService($q){
        return $q->where('parent_id', null);
    }
}
