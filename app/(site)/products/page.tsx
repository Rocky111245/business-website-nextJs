import ProductsClient from "./ProductsClient";
import products from "@/app/data/products.json";

export const metadata = {
    title: "ProductsClient – Evolution Medical Technologies",
    description:
        "Explore our comprehensive range of world-class medical equipment from leading global manufacturers.",
};

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
                <div className="section-container">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Explore our comprehensive range of world-class medical equipment from
                        leading global manufacturers.
                    </p>
                </div>
            </div>
            <ProductsClient initialProducts={products} />
        </div>
    );
}
