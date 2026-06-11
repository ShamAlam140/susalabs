export default function BlogDetailLoading() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
            {/* Back Button Skeleton */}
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 pt-6 xs:pt-8">
                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
            </div>

            <div className="container mx-auto px-3 xs:px-4 sm:px-6 py-6 xs:py-8 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
                    {/* Sidebar Skeleton */}
                    <div className="hidden lg:flex flex-col items-center gap-6">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
                        ))}
                    </div>

                    {/* Blog Content Skeleton */}
                    <div className="flex-1">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            {/* Featured Image Skeleton */}
                            <div className="aspect-video w-full bg-gray-200 animate-pulse" />

                            {/* Content Skeleton */}
                            <div className="p-4 xs:p-6 sm:p-8 md:p-10">
                                {/* Category and Date */}
                                <div className="flex flex-wrap items-center gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-5 sm:mb-6">
                                    <div className="h-6 w-24 bg-indigo-100 rounded-full animate-pulse" />
                                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                                </div>

                                {/* Title */}
                                <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse mb-4 xs:mb-5 sm:mb-6" />

                                {/* Author */}
                                <div className="flex items-center mb-6 xs:mb-8 sm:mb-10">
                                    <div className="h-10 w-10 xs:h-12 xs:w-12 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 animate-pulse mr-3 xs:mr-4" />
                                    <div>
                                        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-1" />
                                        <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                                    </div>
                                </div>

                                {/* Content Lines */}
                                <div className="space-y-4">
                                    {[...Array(8)].map((_, i) => (
                                        <div key={i} className={`h-4 bg-gray-200 rounded animate-pulse ${i % 3 === 0 ? 'w-full' : i % 3 === 1 ? 'w-5/6' : 'w-4/5'}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
