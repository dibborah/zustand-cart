import { Card, CardHeader } from "./components/ui/card";
import { PRODUCTS_DATA } from "./lib/mockData";

export default function App() {
  return (
    <main className="space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2">
      <h1 className="text-2xl">Products:</h1>
      <div className="space-y-2">
        {PRODUCTS_DATA.map((product) => <Card key={product.id}>
          <CardHeader>{product.title}</CardHeader>
        </Card>)}
      </div>
    </main>
  );
}