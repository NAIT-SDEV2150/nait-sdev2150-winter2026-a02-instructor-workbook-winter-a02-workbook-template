export default function Results() {
    return (
        <section className="h-full mb-4">
            <div className="h-full rounded border-2 border-gray-300 bg-gray shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 bg-gray-100 rounded-t">
                    <strong className="text-sm text-gray-900">Results</strong>
                    <span className="rounded-md bg-gray-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                        4
                    </span>
                </div>

                <ul className="p-4 divide-y divide-gray-200 text-left">
                    No results found.
                </ul>
            </div>
        </section>
    );
}