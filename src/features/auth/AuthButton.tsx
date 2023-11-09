import { getAuthSession } from '@/lib/auth';
import LoggedInButton from './LoggedInButton';
import LoginButton from './LoginButton';

export type AuthButtonProps = {};

const AuthButton = async (props: AuthButtonProps) => {
    const session = await getAuthSession();

    const user = session?.user;

    if (!user) {
        return <LoginButton></LoginButton>;
    } else {
        return <LoggedInButton user={user}></LoggedInButton>;
    }
};

export default AuthButton;
