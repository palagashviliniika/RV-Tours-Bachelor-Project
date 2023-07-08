<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
}
