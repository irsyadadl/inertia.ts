import React from 'react';
import { AsideLink } from '@/layouts/partials/aside/aside-link';
import { DashboardIcon, GearIcon, PersonIcon } from '@radix-ui/react-icons';

export function Aside() {
    return (
        <div className='hidden pt-2.5 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-80 lg:flex-col'>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r bg-background px-6 py-4'>
                <nav className='flex flex-1 flex-col'>
                    <ul role='list' className='flex flex-1 flex-col gap-y-1'>
                        <AsideLink active={route().current('dashboard')} href={route('dashboard')}>
                            <DashboardIcon />
                            <span>Dashboard</span>
                        </AsideLink>
                        <AsideLink active={route().current('profile.edit')} href={route('profile.edit')}>
                            <GearIcon />
                            <span>Settings</span>
                        </AsideLink>
                        <AsideLink active={route().current('users.*')} href={route('users.index')}>
                            <PersonIcon />
                            <span>Users</span>
                        </AsideLink>
                    </ul>
                </nav>
            </div>
        </div>
    );
}