<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EquipmentDescription extends Model
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
    
    
    public function equipments(){
        return $this->hasMany(self::class, 'parent_id');
    }

    public function scopeEquipment($q){
        return $q->where('parent_id', null);
    }
}
