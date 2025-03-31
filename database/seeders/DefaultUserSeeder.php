<?php
namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DefaultUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::firstOrCreate([
            'name' => 'admin',
            'guard_name' => 'web',
        ]);

        $staffRole = Role::firstOrCreate([
            'name' => 'staff',
            'guard_name' => 'web',
        ]);

        $admin = User::firstOrCreate([
            'email' => 'admin@example.com',
        ], [
            'name'     => 'Admin User',
            'password' => \Illuminate\Support\Facades\Hash::make('secret'),
        ]);

        $staff = User::firstOrCreate([
            'email' => 'staff@example.com',
        ], [
            'name'     => 'Staff User',
            'password' => \Illuminate\Support\Facades\Hash::make('secret'),
        ]);

        $admin->assignRole($adminRole);
        $admin->assignRole($staffRole);
    }
}
