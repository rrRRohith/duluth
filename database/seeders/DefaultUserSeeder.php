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
            'first_name'     => 'Admin',
            'last_name'      => 'User',
            'password' => 'secret',
        ]);

        $staff = User::firstOrCreate([
            'email' => 'staff@example.com',
        ], [
            'first_name'     => 'Staff',
            'last_name'      => 'User',
            'password' => 'secret',
        ]);

        $admin->assignRole($adminRole);
        $staff->assignRole($staffRole);
    }
}
