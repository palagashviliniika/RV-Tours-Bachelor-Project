<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data=[
            [
                'id' => 1,
                'name' => "Admin",
                'email' => "admin@gmail.com",
                'password' => Hash::make('nika2001'),
                'role_id' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];

        User::insert($data);
    }
}
