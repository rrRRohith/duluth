<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobQualification extends Model
{
    use \Illuminate\Database\Eloquent\SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
    ];
}
