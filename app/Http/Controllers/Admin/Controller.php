<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller as BaseController;
use Exception;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    public $user;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware(function (Request $request, $next) {
            $this->user = $request->user();
            return $next($request);
        });
    }
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
