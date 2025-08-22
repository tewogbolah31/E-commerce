import classes from "./Input.module.css";

export default function Input({ placeholder, type, name, label }) {
  return (
    <div className={classes.box}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={classes.input}
        name={name}
      />
    </div>
  );
}
