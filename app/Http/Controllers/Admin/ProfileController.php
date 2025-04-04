<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Admin\Controller;
use App\Http\Requests\Admin\PasswordRequest;
use App\Http\Requests\Admin\ProfileRequest;

class ProfileController extends Controller
{
    /**
     * Display the profile page.
     */
    public function profile()
    {
        return inertia('Admin/Profile/Index', [
            'user' => $this->user,
        ]);
    }

    /**
     * Update the user's profile.
     */
    public function updateProfile(ProfileRequest $request)
    {

        $this->user->update($request->validated());
        return redirect()->route('admin.profile')->withSuccess(__('Profile updated successfully.'));
    }

    /**
     * Update the user's profile.
     */
    public function password()
    {
        return inertia('Admin/Profile/Password');
    }

    /**
     * Update the user's password.
     */
    public function updatePassword(PasswordRequest $request)
    {
        $this->user->update($request->only('password'));
        return redirect()->route('admin.password')->withSuccess(__('Password updated successfully.'));
    }
}
