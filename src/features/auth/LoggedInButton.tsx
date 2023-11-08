"use client"

import Loader from "@/components/ui/Loader";
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export 
type LoggedInButtonProps = {
    user: Session["user"],
}

const LoggedInButton = (props: LoggedInButtonProps) => {

    const mutation = useMutation({
        mutationFn: async() => signOut()
    })

    
    return (
        <DropdownMenu>
            <AlertDialog>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                        <Avatar className="mr-2 h-4 w-4">
                            <AvatarFallback>{props.user?.name?.[0]} </AvatarFallback>
                            {props.user.image && (
                                <AvatarImage
                                    src={props.user.image} 
                                    alt={props.user.image ?? "user image"} />
                            )}
                        </Avatar>
                        {props.user.name}
                    </Button>    
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <AlertDialogTrigger asChild>
                        <DropdownMenuItem>
                        <Button 
                            variant="outline" 
                            size="sm">
                                <LogOut className="mr-2" size={12}></LogOut> Se déconnecter
                        </Button>
                        </DropdownMenuItem>
                    </AlertDialogTrigger>
                </DropdownMenuContent>
                <AlertDialogContent>
                    <AlertDialogTitle>
                        Voulez vou vraiment vous déconnecter ?
                    </AlertDialogTitle>
                    <AlertDialogFooter>
                        <Button variant="outline" size="sm"> Annuler </Button>
                        <Button 
                            variant="destructive" 
                            size="sm" 
                            disabled={mutation.isPending}
                            onClick={() => mutation.mutate()}
                        >
                            {mutation.isPending ? 
                                <Loader className="mr-2" size={12}></Loader>
                                : <LogOut className="mr-2" size={12}></LogOut> 
                            }
                        Se déconnecter
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </DropdownMenu>
    );  
}

export default LoggedInButton;