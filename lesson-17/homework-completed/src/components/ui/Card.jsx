// Lesson 9: Card — a reusable presentational component.
//
// Accepts `title`, `actions` (React node), and `children`.
// Using `children` for flexible content makes this component highly composable
// (e.g., Users and Posts both render inside a Card without Card knowing about them).

function Card({ title, actions, children }) {
  return (
    // Lesson 11: DaisyUI card classes replace verbose Tailwind markup
    <div className="card bg-base-100 shadow border border-base-200">
      <div className="card-body p-4">
        {(title || actions) && (
          <div className="flex items-center justify-between mb-2">
            {title && <h2 className="card-title text-base">{title}</h2>}
            {actions && <div className="card-actions">{actions}</div>}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default Card;
