"use client";

import { useEffect, useState } from "react";

export default function GitJournaling({ username }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(`/api/repos?username=${username}`);
        if (!response.ok) {
          throw new Error("Failed to fetch repos");
        }
        const data = await response.json();
        setRepos(data.slice(0, 5)); // Limitar a los 5 repos más recientes
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="h-100 position-relative">
      <ul className="ps-3 d-flex flex-column justify-content-around h-100 position-relative">
        {repos.map((repo) => (
          <li key={repo.id} className="position-relative z-1">
            <div className="d-flex align-items-center gap-2">
              <p className="text-300 text-nowrap">
                {new Date(repo.updated_at).toLocaleDateString()}: <span className="text-dark">{repo.name}</span>
              </p>
            
            </div>
          </li>
        ))}
      </ul>
      <div className="line-left position-absolute border-start z-0" />
    </div>
  );
}
