import React from 'react';

export default function Input({ placeholderText, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholderText}
      value={value}
      onChange={(e) => onChange(placeholderText, e.target.value)}
    />
  );
}
