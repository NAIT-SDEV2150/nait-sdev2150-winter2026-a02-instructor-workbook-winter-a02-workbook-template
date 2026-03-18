// Lesson 7: Header — a simple, stateless presentational component.
//
// Receives `title` and `subtitle` as props.
// This is the "Hello World" of composition: a small focused component
// with a clear, single responsibility.

function Header({ title, subtitle }) {
  return (
    <header className="bg-primary text-primary-content shadow">
      <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-sm mt-1 opacity-80">{subtitle}</p>
        )}
      </div>
    </header>
  );
}

export default Header;
