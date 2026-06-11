export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center gap-4">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600" />
                <p className="text-lg font-medium text-gray-600 animate-pulse">Loading amazing content...</p>
            </div>
        </div>
    );
}
