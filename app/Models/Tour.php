<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Tour extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'description',
        'startDate',
        'endDate',
        'days',
        'transport_id'
    ];

    public function transport(): BelongsTo
    {
        return $this->belongsTo(Transport::class);
    }

    public function reserves(): hasMany
    {
        return $this->hasMany(Reserve::class);
    }
}
