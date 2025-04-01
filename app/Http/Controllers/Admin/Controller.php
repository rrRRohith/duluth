<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    
    /**
     * Display the admin dashboard.
     *
     * @param Request $request
     * @return \Inertia\Response
     */
    public function dashboard(Request $request)
    {
        return inertia('Admin/Dashboard', [
            'title' => 'Dashboard',
        ]);
    }
}
