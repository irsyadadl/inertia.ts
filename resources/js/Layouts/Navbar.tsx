import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import DropdownMenu from '@/Components/DropdownMenu';
import useRoute from '@/Hooks/useRoute';
import { IconDashboard, IconLogout, IconSettings, IconUser } from '@tabler/icons';

interface User {
    user?: {
        id: string;
        name: string;
        acronym?: string;
        username?: string;
    };
}

export default function Navbar() {
    const route = useRoute();
    const { user }: User | any = usePage().props.auth;
    return (
        <nav className='hidden border-b bg-white sm:block'>
            <div className='container'>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex items-center gap-x-2'>
                        <Link href='/'>
                            <ApplicationLogo className='w-8 fill-red-600' />
                        </Link>
                        <NavLink active={route().current('home')} href='/'>
                            Home
                        </NavLink>
                    </div>
                    {user ? (
                        <DropdownMenu
                            trigger={
                                <div className='flex items-center gap-x-2 [&>img]:w-6 [&>img]:rounded-full'>
                                    <img
                                        src={`https://avatar.tobi.sh/${user?.username}.svg?text=${user?.acronym}`}
                                        alt={user?.name}
                                    />
                                    {user?.name}
                                </div>
                            }>
                            <div className='px-4 py-0.5 text-sm text-slate-500'>
                                Signed as <strong className='font-semibold text-slate-900'>{user.username}</strong>
                            </div>
                            <DropdownMenu.Divider />
                            <DropdownMenu.Link
                                isActive={route().current('dashboard')}
                                icon={IconDashboard}
                                href={route('dashboard')}>
                                Dashboard
                            </DropdownMenu.Link>
                            <DropdownMenu.Link
                                isActive={route().current('profile.edit')}
                                icon={IconSettings}
                                href={route('profile.edit')}>
                                Settings
                            </DropdownMenu.Link>
                            <DropdownMenu.Link icon={IconLogout} href={route('logout')} method='post' as='button'>
                                Log out
                            </DropdownMenu.Link>
                        </DropdownMenu>
                    ) : (
                        <div className='flex items-center gap-x-2'>
                            <NavLink href={route('login')}>Login</NavLink>
                            <NavLink href={route('register')}>Register</NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
