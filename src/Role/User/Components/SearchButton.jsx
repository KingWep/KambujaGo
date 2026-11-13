import { useState } from "react";
import { Search, X } from "lucide-react";
import styles from "./SearchButton.module.css";

/**
 * Reusable search box (CSS module).
 *
 * Props
 *  - value / onChange(text)   controlled mode (optional – works uncontrolled too)
 *  - onSubmit(text)           called on Enter or when the Search button is clicked
 *  - showButton               show the "Search" button next to the input
 *  - buttonLabel              text of that button
 *  - placeholder, width, disabled, autoFocus, className, ...rest (passed to <input>)
 */
function SearchButton({
  value,
  onChange,
  onSubmit,
  placeholder = "Search...",
  width = "100%",
  disabled = false,
  autoFocus = false,
  showButton = false,
  buttonLabel = "Search",
  className = "",
  ...rest
}) {
  const [inner, setInner] = useState("");

  const isControlled = value !== undefined;
  const text = isControlled ? value : inner;

  const update = (v) => {
    if (!isControlled) setInner(v);
    onChange?.(v);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) return;
    onSubmit?.(text.trim());
  };

  return (
    <form
      role="search"
      className={`${styles.form} ${className}`.trim()}
      style={{ "--sb-width": width }}
      onSubmit={handleSubmit}
    >
      <div className={styles.field}>
        <Search size={18} className={styles.icon} aria-hidden="true" />

        <input
          type="search"
          className={styles.input}
          value={text}
          disabled={disabled}
          placeholder={placeholder}
          autoFocus={autoFocus}
          aria-label={placeholder}
          autoComplete="off"
          onChange={(e) => update(e.target.value)}
          {...rest}
        />

        {text && !disabled && (
          <button
            type="button"
            className={styles.clear}
            aria-label="Clear search"
            onClick={() => update("")}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {showButton && (
        <button type="submit" className={styles.submit} disabled={disabled}>
          {buttonLabel}
        </button>
      )}
    </form>
  );
}

export default SearchButton;
