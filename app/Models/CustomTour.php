<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomTour extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'startDate',
        'endDate',
        'user_id'
    ];
}
