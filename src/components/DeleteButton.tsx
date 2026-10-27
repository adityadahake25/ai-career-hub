"use client";

export default function DeleteButton() {
  return (
    <button
      type="submit"
      className="bg-red-500 px-3 py-1 rounded"
      onClick={(e) => {
        const confirmed = window.confirm(
          "Are you sure you want to delete this application? This action cannot be undone.",
        );

        if (!confirmed) {
          e.preventDefault();
        }
      }}
    >
      Delete
    </button>
  );
}
