export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] pt-20">
      {/* Hero skeleton */}
      <div className="relative w-full h-[60vh] min-h-[400px] skeleton" />

      {/* Content skeleton */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="text-center mb-16">
          <div className="h-3 w-24 skeleton mx-auto mb-4 rounded" />
          <div className="h-10 w-72 skeleton mx-auto mb-4 rounded" />
          <div className="h-4 w-96 skeleton mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white shadow-sm overflow-hidden">
              <div className="aspect-[4/3] skeleton" />
              <div className="p-6 space-y-3">
                <div className="h-3 w-16 skeleton rounded" />
                <div className="h-6 w-40 skeleton rounded" />
                <div className="h-4 w-full skeleton rounded" />
                <div className="h-4 w-3/4 skeleton rounded" />
                <div className="h-10 w-full skeleton rounded mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
