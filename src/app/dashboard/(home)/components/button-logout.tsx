import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { logout } from '../actions';

const ButtonLogout = () => {
    // Wrap the `logout` function to match the expected signature
    const handleLogout = async (formData: FormData): Promise<void> => {
        await logout(); // Call the original `logout` function
    };
    return (
        <div className="space-y-2">
            <form action={handleLogout}>
                <Button variant={"destructive"} className="w-full justify-start">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </form>
        </div>
    )
}

export default ButtonLogout;