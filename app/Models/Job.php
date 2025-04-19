<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    public $table = 'career_jobs';
    use \Illuminate\Database\Eloquent\SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'handle',
        'description',
        'close_date',
        'start_date',
        'location',
        'tags',
        'email',
        'link',
        'remote_position',
        'status',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        // 'start_date' => 'date',
        // 'close_date' => 'date',
        'tags'            => 'array',
        'remote_position' => 'boolean',
    ];

    public function experiences()
    {
        return $this->belongsToMany(JobExperience::class, 'experience_jobs', 'job_id', 'experience_id');
    }

    public function qualifications()
    {
        return $this->belongsToMany(JobQualification::class, 'qualification_jobs', 'job_id', 'qualification_id');
    }

    public function types()
    {
        return $this->belongsToMany(JobType::class, 'type_jobs', 'job_id', 'type_id');
    }

    public function categories()
    {
        return $this->belongsToMany(JobCategory::class, 'category_jobs', 'job_id', 'category_id');
    }
}
