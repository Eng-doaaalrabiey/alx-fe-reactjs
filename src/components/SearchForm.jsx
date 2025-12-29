import { useState } from "react";
import { searchUsers } from "../services/githubService";
import UserCard from "./UserCard";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchUsers(query);
    setUsers(results);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
