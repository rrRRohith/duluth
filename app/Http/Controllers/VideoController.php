<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Video;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VideoController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Web/Videos/Index', [
            'types' => Video::TYPES,
            'videos' => Video::sort($request)->get(),
        ]);
    }

    public function type($type, Request $request)
    {
        abort_if(!array_key_exists($type, Video::TYPES), 404);

        return Inertia::render('Web/Videos/Index', [
            'videos' => Video::sort($request)->whereType($type)->get(),
            'types' => Video::TYPES,
            'type' => [
                'handle' => $type,
                'title' => Video::TYPES[$type],
            ],
        ]);
    }

    public function show($type, Video $video)
    {
        return Inertia::render('Web/Videos/Video', [
            'video' => $video,
            'type' => [
                'handle' => $type,
                'title' => Video::TYPES[$type],
            ],
        ]);
    }
}
