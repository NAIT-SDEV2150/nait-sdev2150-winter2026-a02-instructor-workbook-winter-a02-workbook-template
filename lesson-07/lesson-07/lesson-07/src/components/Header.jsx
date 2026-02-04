export default function Header({ tagline }) {
    return (
        <header class="mb-4 bg-blue-400 rounded-lg p-4 text-white">
            <div class="d-flex flex-wrap justify-content-between align-items-end gap-2">
                <div>
                    <h1 class="h3 mb-1">NAIT Resource Directory</h1>
                    <p class="text-body-secondary mb-0">
                        Find student support services, labs, and campus resources.
                    </p>
                </div>
            </div>
        </header>
    );
}