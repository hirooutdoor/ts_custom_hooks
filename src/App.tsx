import axios from "axios";
import { UserCard } from "./components/UserCard";
import { User } from "./types/api/user";
import "./styles.css";

const user = {
  id: 1,
  name: "Armin",
  email: "thisis@aaaaaaa.aaaa",
  address: "hometowm, japan"
};

export default function App() {
  const onClickFetchData = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>Get Data</button>
      <UserCard user={user} />
    </div>
  );
}
