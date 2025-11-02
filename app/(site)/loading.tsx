// app/(site)/loading.tsx
export default function Loading() {
    return (
        <div className="section-container py-16">
            <div className="animate-pulse h-6 w-40 bg-gray-200 rounded mb-4" />
            <div className="animate-pulse h-4 w-80 bg-gray-200 rounded mb-2" />
            <div className="animate-pulse h-64 bg-gray-200 rounded" />
        </div>
    );
}
