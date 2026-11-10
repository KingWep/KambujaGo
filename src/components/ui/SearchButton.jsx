import { useState } from "react";
import React from 'react';

const SearchBuuton = ({
  value,
  onChange,
  placeholder = "Search...",
  width = "100%",
  disabled = false,
  className = "",
  style = {},
  ...rest
}) => {
  const [inner, setInner] = useState("");
  const [isFocused, setIsFocused] = useState(false); //for focuse style

  const isControlled = value !== undefined;
  const text = isControlled ? value : inner;

  const update = (v) => {
    if (!isControlled) setInner(v);
    onChange?.(v);
  };

  return (
    <div 
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        width,
        ...style,
      }}
    >
      {/* Search Icon */}
      <svg
        width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke={isFocused ? "#3b82f6" : "#6b7280"} 
        strokeWidth="2" strokeLinecap="round"
        style={{ 
          position: "absolute", 
          left: 12, 
          top: "50%", 
          transform: "translateY(-50%)",
          transition: "stroke 0.2s ease" 
        }}
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      {/* Input Field */}
      <input
        type="text" 
        value={text}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => update(e.target.value)}
        onFocus={() => setIsFocused(true)}   // click for focuse style
        onBlur={() => setIsFocused(false)}    
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "10px 36px 10px 38px",
          fontSize: 16,
          outline: "none",
          borderRadius: 8,
          
          border: isFocused ? "1px solid #3b82f6" : "1px solid #d1d5db",
          boxShadow: isFocused ? "0 0 0 3px rgba(59, 130, 246, 0.15)" : "none",
          transition: "all 0.2s ease", 
        }}
        {...rest}
      />

      {/* Clear Button (×) */}
      {text && !disabled && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => update("")}
          style={{
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "transparent",
            fontSize: 18,
            cursor: "pointer",
            color: "#6b7280",
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBuuton;