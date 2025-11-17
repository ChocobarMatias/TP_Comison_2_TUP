// src/components/Button.jsx
export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={
        "px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
