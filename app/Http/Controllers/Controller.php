<?php

namespace App\Http\Controllers;

use App\Models\BannerSetting;
use App\Models\EquipmentDescription;
use App\Models\HomePageSetting;
use App\Models\ServiceDescription;
use App\Models\Video;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    public function home(Request $request): Response
    {
        return Inertia::render("Web/Home", [
            'videos' => Video::whereShowOnHome(true)->get(),
            'home_page_settings' => HomePageSetting::first()?->settings,
            'banner_settings' => BannerSetting::first()?->only([
                'title',
                'description',
                'button1_text',
                'button1_link',
                'button2_text',
                'button2_link',
                'image',
                'descriptions',
            ]),
            'service_accordions' => ServiceDescription::service()->whereType('accordion')->with(['services'])->get(),
            'service_cards' => ServiceDescription::service()->whereType('box')->get(),
            'equipment_accordions' => EquipmentDescription::equipment()->with(['equipments'])->get(),
        ]);
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
