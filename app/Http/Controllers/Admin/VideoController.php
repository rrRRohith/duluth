<?php

namespace App\Http\Controllers\Admin;

use DB;
use Storage;
use App\Models\Video;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\VideoRequest;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Admin/Videos/Index', [
            'videos' => Video::get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Videos/Form', [
            'types' => Video::TYPES,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(VideoRequest $request)
    {
        try {
            DB::transaction(function () use ($request) {
                $request->merge([
                    'file' => ($request->file('video')->store('videos', 'public')),
                ]);

                Video::create($request->only(['title', 'type', 'file']));
            });

            return redirect()
                ->route('admin.videos.index')
                ->withSuccess(__('Video created successfully.'));
        } catch (\Exception $e) {
            return $this->error($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Video $video)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Video $video)
    {
        return inertia('Admin/Videos/Form', [
            'video' => $video,
            'types' => Video::TYPES,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(VideoRequest $request, Video $video)
    {
        try {
            DB::transaction(function () use ($request, $video) {

                $request->merge([
                    'file' => ($request->file('video')->store('videos', 'public')),
                ]);

                if ($video->file && Storage::disk('public')->exists($video->file)) {
                    Storage::disk('public')->delete($video->file);
                }
                $video->update($request->only(['title', 'type', 'file']));
            });

            return redirect()
                ->route('admin.videos.index')
                ->withSuccess(__('Video updated successfully.'));
        } catch (\Exception $e) {
            return $this->error($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Video $video)
    {
        try {
            \DB::transaction(function () use ($video) {
                $video->delete();
            });

            return redirect()
                ->route('admin.videos.index')
                ->withSuccess(__('Video deleted successfully.'));
        } catch (\Exception $e) {
            return $this->error($e);
        }
    }
}
