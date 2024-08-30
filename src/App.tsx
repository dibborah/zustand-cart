import { create } from "zustand";
import { Button } from "./components/ui/button"

const useStore = create<{
  count: number,
  decQty: () => void,
  incQty: () => void,
}>((set) => ({
  count: 0,
  decQty: () => set((state) => ({ count: state.count - 1 })),
  incQty: () => set((state) => ({ count: state.count + 1 })),
}))

const App = () => {
  const { count, incQty, decQty } = useStore((store) => store);
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Button onClick={decQty}> - </Button>
      {count}
      <Button onClick={incQty}> + </Button>
    </div>
  )
}

export default App