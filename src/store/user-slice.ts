import { StateCreator } from "zustand";

type UserState = {
    userName: string;
    fullName: string;
    age: number;
    address: string;
};

type UserActions = {
    setAddress: (address: string) => void;
    fetchUser: () => Promise<void>;
}

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<UserSlice, [['zustand/immer', never]], [], UserSlice> = (
    set
) => ({
    address: '',
    age: 0,
    fullName: '',
    userName: '',
    setAddress: (address) => 
        set((state) => { // This is not a object which is returned it is an object which is returned
        state.address = address
     }),
     fetchUser: async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        set({
            address: '',
            fullName: 'John Doe',
            userName: 'John@test.com',
            age: 30,
        })
     }
});

