import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Head, usePage } from '@inertiajs/inertia-react';

interface User {
    user?: {
        id: string;
        name: string;
    };
}

export default function Dashboard() {
    const { user }: User | any = usePage().props.auth;
    return (
        <>
            <Head title='Dashboard' />

            <div className='container'>
                <div className='overflow-hidden rounded-lg shadow'>
                    <p className='bg-white p-4'>Hi {user.name}, you are now logged in.</p>
                    <div className='bg-slate-900 p-4 font-mono text-sm text-slate-200'>
                        <div>
                            <div className='mb-2 text-slate-400'>// The page you are currently visiting is</div>
                            <div className='text-lime-400'>"resources/js/Pages/Dashboard.tsx"</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page: any) => <AppLayout children={page} />;
