'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

export interface RoutterButtonProps extends ButtonProps {
    url: string;
}

const RoutterButton = React.forwardRef<HTMLButtonElement, RoutterButtonProps>(
    ({ className, children, ...props }, ref) => {
        const router = useRouter();

        const goToUrl = () => {
            router.push(props.url);
        };

        return (
            <Button
                className={className}
                {...props}
                onClick={() => goToUrl()}
            >
                {children}
            </Button>
        );
    },
);
RoutterButton.displayName = 'RoutterButton';

export default RoutterButton;
