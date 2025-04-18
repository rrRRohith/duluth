<?php

namespace App\Http\Controllers\Admin;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PostRequest;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Posts/Index', [
            'posts' => Post::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Posts/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PostRequest $request)
    {
        \DB::transaction(function () use ($request) {
            Post::create($request->validated());
        });
        return redirect()->route('admin.posts.index')->withSuccess(__('Post created successfully.'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return Inertia::render('Admin/Posts/Form', [
            'post' => $post
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PostRequest $request, Post $post)
    {
        \DB::transaction(function () use ($request, $post) {
            $post->update($request->validated());
        });

        return redirect()->route('admin.posts.index')->withSsuccess(__('Post updated successfully.'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        \DB::transaction(function () use ($post) {
            $post->delete();
        });
        return redirect()->route('admin.posts.index')->withSuccess(__('Post deleted successfully.'));
    }
}
