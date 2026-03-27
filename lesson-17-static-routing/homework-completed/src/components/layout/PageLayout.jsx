// Lesson 9: PageLayout — a reusable layout component.
//
// It accepts a `header` prop (a React node) so the header can be customized
// by the consumer without PageLayout knowing what it contains.
//
// Layout concerns live here; domain components (Users, Posts) focus on data.

function PageLayout({ header, children }) {
  return (
    // Lesson 11: data-theme applies the DaisyUI theme to the entire app
    <div data-theme="lemonade" className="min-h-screen bg-base-100">
      {header}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}

export default PageLayout;
