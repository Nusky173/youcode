'use client';

import Loader from '@/components/ui/Loader';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

const LogoutButton = () => {
    const mutation = useMutation({
        mutationFn: async () => signOut({ callbackUrl: '/' }),
    });

    return (
        <Button
            variant='destructive'
            size='sm'
            onClick={() => mutation.mutate()}
            disabled={mutation.isPending}
        >
            {mutation.isPending ? (
                <Loader size={12} />
            ) : (
                <LogOut
                    className='mr-2'
                    size={12}
                ></LogOut>
            )}
            Se déconnecter
        </Button>
    );
};

export default LogoutButton;
