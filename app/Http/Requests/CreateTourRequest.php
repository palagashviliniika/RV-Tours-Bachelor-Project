<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateTourRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'price' => ['required', 'integer'],
            'startDate' => ['required', 'max:255'],
            'endDate' => ['required', 'max:255'],
            'days' => ['required', 'integer', 'max:255'],
            'transport_id' => ['required', 'integer', 'max:255'],
        ];
    }

    public function messages()
    {
        return [
            'transport_id.required' => 'Please choose the transport type.',
            'startDate.required' => 'Please choose the trip range.'
        ];
    }
}
