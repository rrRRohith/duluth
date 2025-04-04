<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    const USER_ROLES = [
        'admin',
        'staff',
        'supervisor',
        'manager',
    ];
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (self::USER_ROLES as $role) {
            \Spatie\Permission\Models\Role::firstOrcreate(['name' => $role], [
                'guard_name' => 'web',
            ]);
        }
    }
}
