// app/(site)/products/page.tsx
import React from 'react';

import data from 'app/data/products.json'
import ProductsClient from "@/app/(site)/products/_components/ProductsClient";


const products = data;

export default function ProductsPage() {
    return (
        <main>
            <ProductsClient initialProducts={products} />
        </main>
    );
}

export const metadata = {
    title: 'Products - Medical Equipment',
    description: 'Browse our comprehensive range of medical equipment and solutions.',
};