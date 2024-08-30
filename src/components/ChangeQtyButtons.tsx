import { useStore } from "@/store/store";
import { useShallow } from "zustand/react/shallow";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { useEffect } from "react";

type Props = { productId: string };

export function ChangeQtyButtons({ productId }: Props) {
    const { decQty, incQty, getProductById, setTotal } = useStore(useShallow((state) => ({
        getProductById: state.getProductById,
        decQty: state.decQty,
        incQty: state.incQty,
        setTotal: state.setTotal,
    })));

    const product = getProductById(productId);

    useEffect(() => {
        const unSubscribe = useStore.subscribe((state) => state.products,
         (products) => {
            setTotal(products.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.price * currentItem.qty;
            }, 0));
        },
        { fireImmediately : true },// This line is just to make things work more smoothly // That's only for now
    ); 
    return unSubscribe;
    }, [setTotal]);

    return <>
        { 
            product && (
                <div className="flex  gap-2 items-center">
                    <Button onClick={() => decQty(product.id)} size="icon">
                        <Minus />
                    </Button>
                    <p>{product.qty}</p>
                    <Button onClick={() => incQty(product.id)} size="icon">
                        <Plus />
                    </Button>
                </div>
            )
        }
    </>;
};
