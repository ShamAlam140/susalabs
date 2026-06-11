export default function PublicBlogLoading() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
                {/* Header Skeleton */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <div className="h-12 w-64 bg-gray-200 rounded-lg animate-pulse mx-auto mb-4" />
                    <div className="h-6 w-96 max-w-full bg-gray-200 rounded-lg animate-pulse mx-auto" />
                </div>

                {/* Blog Cards Grid Skeleton */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
                            <div className="h-48 sm:h-56 bg-gray-200" />
                            <div className="p-4 sm:p-6">
                                <div className="h-4 bg-gray-200 rounded w-1/4 mb-3 sm:mb-4" />
                                <div className="h-5 sm:h-6 bg-gray-200 rounded w-3/4 mb-3 sm:mb-4" />
                                <div className="h-3 sm:h-4 bg-gray-200 rounded w-full mb-2" />
                                <div className="h-3 sm:h-4 bg-gray-200 rounded w-5/6" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
