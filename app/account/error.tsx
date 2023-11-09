'use client'; // Error components must be Client Components

import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import LoginButton from '@/features/auth/LoginButton';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <Card className='m-auto max-w-lg items-center justify-center'>
            <CardHeader className='basis-1/2 flex-row justify-center'>
                <CardTitle>
                    Vous devez être connecté pour voir cette pages !
                </CardTitle>
            </CardHeader>
            <CardFooter className='mt-4 flex justify-end'>
                <LoginButton></LoginButton>
            </CardFooter>
        </Card>
    );
}
