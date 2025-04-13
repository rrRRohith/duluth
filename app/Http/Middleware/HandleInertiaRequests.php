<?php

namespace App\Http\Middleware;

use App\Models\Menu;
use Inertia\Middleware;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use App\Models\ContactSetting;
use App\Http\Resources\MenuResource;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'routeName' => $request->route() ? $request->route()->getName() : null,
            'auth'  => [
                'user'        => $request->user() ?? null,
                //'role'        => $request->user() ? $request->user()->getRole->only('name') ?? null : null,
                //'permissions' => $request->user() ? $request->user()->getRole->permissions->pluck('name') ?? null : null,
            ],
            'flash' => [
                'success' => fn() => $request->session()->get('success'),
                'error'   => fn()   => $this->errors(),
            ],
            'site_settings' => SiteSetting::first()?->only([
                'name',
                'logo',
                'footer_description',
                'copyright_description',
            ]),
            'contact_info' => ContactSetting::first()?->only([
                'phone',
                'email',
                'address',
            ]),
            'main_menu' => new MenuResource(Menu::whereHandle('main-menu')->menu()->with('children')->first()),
            'footer_menus' => [
                new MenuResource(Menu::whereHandle('admin-portal')->menu()->with('children')->first()),
                new MenuResource(Menu::whereHandle('resources')->menu()->with('children')->first()),
            ]
        ];
    }

    /**
     * Get the error messages from the session.
     */
    private function errors()
    {
        if (request()->session()->get('error')) {
            return request()->session()->get('error');
        } else if (request()->session()->get('errors')) {
            return "Oops! There are issues with the form submission. Please ensure all fields are correctly filled.";
        }

        return null;
    }
}
