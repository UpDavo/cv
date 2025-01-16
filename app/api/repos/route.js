// app/api/repos/route.js
import { NextResponse } from "next/server";

async function fetchUserRepos(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  if (!response.ok) {
    throw new Error("Error fetching data from GitHub");
  }
  return response.json();
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  try {
    const repos = await fetchUserRepos(username);
    const sortedRepos = repos.sort(
      (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
    );
    return NextResponse.json(sortedRepos);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
