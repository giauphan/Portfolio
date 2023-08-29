import { PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/components/application-logo';
import { Link } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card';
import { ThemeToggle } from '@/components/theme-toggle';

interface GuestLayoutProps {
    header?: string | null;
    description?: string | ReactNode | null;
}

export function GuestLayout({ description = null, header = null, children }: PropsWithChildren<GuestLayoutProps>) {
    return (
        <div className='flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0'>
            <Link href={route('home')}>
                <ApplicationLogo className='mx-auto h-16 w-16 fill-current text-red-500' />
            </Link>

            <div className='mt-10 w-full max-w-lg'>
                <Card className='rounded-none border-l-transparent border-r-transparent shadow-none sm:rounded-lg sm:border-l-border sm:border-r-border sm:shadow-sm lg:rounded-xl '>
                    <CardHeader className='flex-row justify-between'>
                        <div>
                            <CardTitle>{header}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </div>
                        <ThemeToggle />
                    </CardHeader>
                    <CardContent>{children}</CardContent>
                </Card>
            </div>
        </div>
    );
}
