// app/data/product-api.ts
// Single source of truth for products: one value export, minimal validation.

import { z } from "zod";
import raw from "./products.json";

const ApiProductSchema = z
    .object({
        productLink: z.string(),
        name: z.string(),
        description: z.string(),
        company: z.string(),
        brochure: z.string().optional(),
        equipmentType: z.string()
    })
    .loose();

const ApiProductsSchema = z.array(ApiProductSchema);

// Validate once at module load; original objects preserved.
const products = ApiProductsSchema.parse(raw);

// Single value export (default).
export default products as ReadonlyArray<z.infer<typeof ApiProductSchema>>;
