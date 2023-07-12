<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Reserve extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'tour_id',
        'customTour_id'
    ];

    public function tours(): BelongsTo
    {
        return $this->belongsTo(Tour::class, 'tour_id', 'id');
    }
}
