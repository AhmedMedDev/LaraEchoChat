<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'body','senderID', 'receiverID','date' 
    ];

    public $timestamps = false;
}
