import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "./ui/button";
import { CircleX, ShoppingCart, Trash2 } from "lucide-react";
import { useStore } from "@/store/store";
import { useShallow } from "zustand/react/shallow";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ChangeQtyButtons } from "./ChangeQtyButtons";

export function Cart() {
    const { reset, products, removeProduct, total } = useStore(useShallow(state => ({
        reset: state.reset,
        products: state.products,
        removeProduct: state.removeProduct,
        total: state.total,
    })));
    return <Popover>
        <PopoverTrigger asChild>
            <Button variant="secondary" size="icon">
                <ShoppingCart />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="overflow-y-scroll space-y-2 w-96">
            <div className="flex gap-2 text-lg items-center">
                <h1>Cart: </h1>
                <Button onClick={reset} variant="destructive" size="icon">
                    <CircleX />
                </Button>
            </div>
            <div className="space-y-2">
                {products.map((product) => (
                    <Card key={product.id} className="flex flex-col">
                        <CardHeader className="flex flex-row items-center gap-2">
                            <CardTitle>{product.title}</CardTitle>
                            <Button
                                onClick={() => removeProduct(product.id)}
                                size="icon"
                                variant="destructive"
                            >
                                <Trash2 />
                            </Button>
                        </CardHeader>
                        <CardContent>{product.price}$</CardContent>
                        <CardFooter>
                            <ChangeQtyButtons productId={product.id} />
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <p>Total: {total}$</p>
        </PopoverContent>
    </Popover>;
};