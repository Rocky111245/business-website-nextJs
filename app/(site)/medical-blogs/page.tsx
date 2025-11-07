// app/medical-blogs/page.tsx
import type { Metadata } from "next";

// Import the existing client component you already have at project root
// (no need to move files; keep components library-agnostic).
import MedicalBlogs from "./_components/MedicalBlogs";

export const metadata: Metadata = {
    title: "Medical Insights | Evolution Medical Technologies",
    description:
        "Stay informed about the latest verified medical innovations and breakthrough technologies shaping modern healthcare.",
};

export default function Page() {
    return <MedicalBlogs />;
}