<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::query()
            ->select('id', 'name', 'email', 'email_verified_at', 'created_at')
            ->whereNot('id', $request->user()->id)
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return inertia('users/index', [
            'users' => fn () => UserResource::collection($users)->additional([
                'meta' => ['has_pages' => $users->hasPages()],
            ]),
        ]);
    }

    public function show(User $user)
    {
        return inertia('users/show', [
            'user' => fn () => UserResource::make($user),
        ]);
    }

    public function edit(User $user)
    {
        return inertia('users/form', [
            'user' => $user,
        ]);
    }

    public function update(Request $request, User $user)
    {
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        return to_route('users.index');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return to_route('users.index');
    }
}
