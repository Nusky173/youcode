import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import LogoutButton from '@/features/auth/LogoutButton';
import RoutterButton from '@/features/navigation/RouterButton';
import { getAuthSession } from '@/lib/auth';

export type AccountProps = {};

const AccountPage = async (props: AccountProps) => {
    const session = await getAuthSession().then((res) => res);

    const user = session?.user;

    if (!user) {
        throw new Error('No session');
    } else
        return (
            <Card className='m-auto h-auto w-1/3 max-w-lg items-center justify-center'>
                <CardHeader className='basis-1/2 flex-row justify-center gap-4 space-y-0'>
                    <Avatar>
                        <AvatarFallback>{user.name?.[0]}</AvatarFallback>
                        {user.image && (
                            <AvatarImage
                                src={user.image}
                                alt='user image'
                            ></AvatarImage>
                        )}
                    </Avatar>
                    <div className='flex flex-col gap-1'>
                        <CardTitle>{user.email}</CardTitle>
                        <CardDescription className='flex justify-end'>
                            {user.name}
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className='flex flex-col items-center justify-center gap-2'>
                    <RoutterButton
                        className='w-1/2'
                        variant='outline'
                        size='default'
                        url='account/settings'
                        disabled
                    >
                        Modifier le profil
                    </RoutterButton>
                    <RoutterButton
                        className='w-1/2'
                        variant='outline'
                        size='default'
                        url='/admin'
                    >
                        Admin
                    </RoutterButton>
                </CardContent>
                <CardFooter className='mt-4 flex justify-end'>
                    <LogoutButton></LogoutButton>
                </CardFooter>
            </Card>
        );
};

export default AccountPage;
