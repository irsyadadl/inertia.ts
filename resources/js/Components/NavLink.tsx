import React from 'react';
import { InertiaLinkProps, Link, usePage } from '@inertiajs/inertia-react';
import cx from 'clsx';

interface NavLinkProps extends InertiaLinkProps {
    active?: boolean;
}

export default function NavLink(args: NavLinkProps) {
    const { active, href, children, ...props } = args;
    return (
        <Link
            {...props}
            href={href}
            className={cx(
                active ? 'font-medium text-slate-900' : 'text-slate-500 ',
                'px-2 py-4 transition hover:text-slate-800'
            )}>
            {children}
        </Link>
    );
}
