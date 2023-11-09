'use client';

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useMutation } from '@tanstack/react-query';
import { LogOut } from 'lucide-react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LogoutButton from './LogoutButton';

export type LoggedInButtonProps = {
    user: Session['user'];
};

const LoggedInButton = (props: LoggedInButtonProps) => {
    const mutation = useMutation({
        mutationFn: async () => signOut(),
    });

    const router = useRouter();

    const goToAccount = () => {
        router.push('/account');
    };

    return (
        <DropdownMenu>
            <AlertDialog>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='outline'
                        size='sm'
                    >
                        <Avatar className='mr-2 h-4 w-4'>
                            <AvatarFallback>
                                {props.user?.name?.[0]}
                            </AvatarFallback>
                            {props.user.image && (
                                <AvatarImage
                                    src={props.user.image}
                                    alt={props.user.image ?? 'user image'}
                                />
                            )}
                        </Avatar>
                        {props.user.name}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className='w-full'>
                        <Button
                            className='w-full'
                            variant='outline'
                            size='sm'
                            onClick={() => goToAccount()}
                        >
                            Mon compte
                        </Button>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <AlertDialogTrigger asChild>
                        <DropdownMenuItem>
                            <Button
                                variant='outline'
                                size='sm'
                            >
                                <LogOut
                                    className='mr-2'
                                    size={12}
                                ></LogOut>
                                Se déconnecter
                            </Button>
                        </DropdownMenuItem>
                    </AlertDialogTrigger>
                </DropdownMenuContent>
                <AlertDialogContent>
                    <AlertDialogTitle>
                        Voulez vou vraiment vous déconnecter ?
                    </AlertDialogTitle>
                    <AlertDialogFooter>
                        <Button
                            variant='outline'
                            size='sm'
                        >
                            Annuler
                        </Button>
                        <LogoutButton></LogoutButton>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </DropdownMenu>
    );
};

export default LoggedInButton;
