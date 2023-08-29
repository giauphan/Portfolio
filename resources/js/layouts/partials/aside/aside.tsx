import React from 'react';
import { AsideLink } from '@/layouts/partials/aside/aside-link';
import { IconChartPie, IconSettings2, IconUserCircle } from '@tabler/icons-react';

export function Aside() {
    return (
        <div className='hidden min-h-screen shrink-0 lg:flex lg:w-80 lg:flex-col'>
            <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r bg-background px-6 py-8'>
                <nav className='flex flex-1 flex-col'>
                    <ul role='list' className='flex flex-1 flex-col gap-y-1'>
                        <AsideLink active={route().current('dashboard')} href={route('dashboard')}>
                            <IconChartPie />
                            <span>Dashboard</span>
                        </AsideLink>
                        <AsideLink active={route().current('profile.edit')} href={route('profile.edit')}>
                            <IconSettings2 />
                            <span>Settings</span>
                        </AsideLink>
                        <AsideLink active={route().current('users.*')} href={route('users.index')}>
                            <IconUserCircle />
                            <span>Users</span>
                        </AsideLink>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
