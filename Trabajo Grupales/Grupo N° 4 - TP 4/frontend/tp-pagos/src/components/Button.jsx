import { Link } from "react-router-dom";

export default function Button({ to, children, ...props }) {
  if (to) {
    return (
      <Link to={to} className="btn" {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
}
