<?php
namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DefaultUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::firstOrCreate([
            'email' => 'admin@example.com',
        ], [
            'name'     => 'Admin User',
            'password' => \Illuminate\Support\Facades\Hash::make('secret'),
        ]);

        $staff = User::create([
            'email' => 'staff@example.com',
        ], [
            'name'     => 'Staff User',
            'password' => \Illuminate\Support\Facades\Hash::make('secret'),
        ]);
    }
}
