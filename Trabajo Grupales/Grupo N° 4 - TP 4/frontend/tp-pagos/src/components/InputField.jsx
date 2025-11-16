export default function InputField({ label, ...props }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input {...props} />
    </div>
  );
}
