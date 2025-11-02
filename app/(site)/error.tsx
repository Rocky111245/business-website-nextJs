// app/(site)/error.tsx
"use client";
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="section-container py-16 text-center">
            <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-6">{error.message}</p>
            <button onClick={reset} className="btn-primary">Try again</button>
        </div>
    );
}
