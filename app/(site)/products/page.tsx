// app/(site)/products/page.tsx
import ProductsClient from "./ProductsClient";

export default function ProductsPage() {
    // Server wrapper; client-side logic is inside ProductsClient.
    return <ProductsClient />;
}
