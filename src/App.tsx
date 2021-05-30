import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";
import "./styles.css";

export default function App() {
  const { getusers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchData = () => getusers();

  return (
    <div className="App">
      <button onClick={onClickFetchData}>Get Data</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>Failed. Try it again.</p>
      ) : loading ? (
        <p>Loading.....</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
