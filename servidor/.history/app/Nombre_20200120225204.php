<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Nombre extends Model
{
    protected $fillable = [
        'nombre', 'email', 'password',
    ];
}
