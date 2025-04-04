<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    const ADMIN_ROLE = 'admin';
    const STAFF_ROLES = [
        'staff',
        'supervisor',
        'manager',
    ];

    use HasRoles;
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    protected $appends = [
        'name',
        'role_names',
        //'role_ids',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'phone',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function getNameAttribute(): string
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    public function setPasswordAttribute(string $value): void
    {
        $this->attributes['password'] = \Illuminate\Support\Facades\Hash::make($value);
    }
    
    public function scopeStaffs($q)
    {
        return $q->whereHas('roles', function ($q) {
            $q->whereIn('name', self::STAFF_ROLES);
        });
    }

    public function getRoleNamesAttribute(): string
    {
        return $this->roles->pluck('name')->join(', ');
    }

    public function getRoleIdsAttribute(): array
    {
        return $this->roles->pluck('id')->toArray();
    }
}
