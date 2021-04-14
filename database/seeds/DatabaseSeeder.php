<?php

use App\Models\Message;
use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //factory(User::class, 15)->create();
        factory(Message::class, 15)->create();
    }
}
