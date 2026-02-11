export default function PageLayout({ header, children }) {
    return (
        <div>
            <header>
                {header}
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}