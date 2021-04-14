<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Message;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Message::class, function (Faker $faker) {

    do {
        $senderID = rand(1, 5);
        $receiverID = rand(1, 5);
    } while ($senderID === $receiverID);

    return [
        'body' => $faker->text,
        'senderID' => $senderID,
        'receiverID' => $receiverID,
    ];
});
