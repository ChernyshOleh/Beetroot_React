import React from "react";
import styles from "./Search.module.css";

interface SearchProps {
  value: string;
  checkChange: (value: string) => unknown;
}

export default function Search({ value, checkChange }: SearchProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    checkChange(e.target.value);
  }
  return (
    <div className={styles.div}>
      <input
        placeholder="Search by name..."
        className={styles.search}
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
