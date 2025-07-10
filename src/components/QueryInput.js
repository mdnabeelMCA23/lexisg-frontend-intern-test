import React, { useState } from 'react';

const QueryInput = ({ onSubmit, loading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <textarea
        className="border p-2 rounded"
        rows={4}
        placeholder="Ask a legal question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={loading}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default QueryInput;
