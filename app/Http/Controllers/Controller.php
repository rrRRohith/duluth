<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    public function home(Request $request) : Response
    {
        return Inertia::render("Web/Home");
    }

    /**
     * Return error response.
     */
    public function error(\Exception $e)
    {
        return request()->expectsJson()
            ? response()->json([
                'error' => config('app.debug') ? $e->getMessage() : __("Something went wrong, please try again later."),
            ], 500)
            : redirect()->back()->withError(config('app.debug') ? $e->getMessage() : __("Something went wrong, please try again later."));
    }
}
