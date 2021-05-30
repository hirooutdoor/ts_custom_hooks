import axios from "axios";
import { UserCard } from "./components/UserCard";
import { User } from "./types/api/user";
import "./styles.css";
import { useState } from "react";
import { UserProfile } from "./types/userProfile";

export default function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchData = () => {

    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfiles(data);
      }).catch(() => {
        setError(true);
      }).finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>Get Data</button>
      <br/>
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
