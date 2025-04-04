<?php

namespace App\Http\Controllers\Admin;


use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Requests\Admin\UserRequest;
use App\Http\Controllers\Admin\Controller;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return inertia('Admin/Users/Index', [
            'users' => User::staffs()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Users/Form', [
            'roles' => Role::whereIn('name', User::STAFF_ROLES)->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        \DB::transaction(function () use ($request) {
            $user = User::create($request->only([
                'first_name',
                'last_name',
                'phone',
                'email',
                'password',
            ]));

            $user->syncRoles($request->input('role'));
        });

        return redirect()
            ->route('admin.users.index')
            ->withSuccess(__('User created successfully.'));
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        abort_if($this->user->id == $user->id || $user->hasRole(User::ADMIN_ROLE), 403);

        return inertia('Admin/Users/Form', [
            'user' => $user,
            'roles' => Role::whereIn('name', User::STAFF_ROLES)->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserRequest $request, User $user)
    {
        abort_if($this->user->id == $user->id || $user->hasRole(User::ADMIN_ROLE), 403);

        \DB::transaction(function () use ($request, $user) {
            $user->update($request->only([
                'first_name',
                'last_name',
                'phone',
                'email',
                //'password',
            ]));

            // Only update the password if it is present in the request
            if ($request->filled('password')) {
                $user->update($request->only('password'));
            }

            $user->syncRoles($request->input('role'));
        });

        return redirect()
            ->route('admin.users.index')
            ->withSuccess(__('User updated successfully.'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        abort_if($this->user->id == $user->id || $user->hasRole(User::ADMIN_ROLE), 403);

        $user->delete();

        return redirect()
            ->route('admin.users.index')
            ->withSuccess(__('User deleted successfully.'));
    }
}
