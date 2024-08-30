import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "./ui/button";
import { UserIcon } from "lucide-react";
import { useStore } from "@/store/store";
import { useShallow } from "zustand/react/shallow";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect } from "react";

export function User() {
    const { fullName, userName, address, setAddress, fetchUser } = useStore(useShallow(state => ({
        fullName: state.fullName,
        userName: state.userName,
        address: state.address,
        setAddress: state.setAddress,
        fetchUser: state.fetchUser,
    })));
    useEffect(() => {
        async function fetchData() {
            fetchUser();
        }
        fetchData();
    }, [fetchUser]);
    return <Popover>
        <PopoverTrigger asChild>
            <Button variant="secondary" size="icon">
                <UserIcon />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="overflow-y-scroll space-y-2 w-96">
            <div className="flex items-center gap-2">
                <p>{fullName}</p>
                <p className="text-sm">{userName}</p>
            </div>
            <Label htmlFor="address">Your Address:</Label>
                <Input
                  id="address"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
        </PopoverContent>
    </Popover>;
};