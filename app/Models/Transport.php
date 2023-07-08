<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Transport extends Model
{
    use HasFactory;

    protected $table="transport";

    protected $fillable = [
        'name'
    ];

    public function tour(): HasMany
    {
        return $this->hasMany(Tour::class);
    }
}
