import { UserCard } from "./components/UserCard";
import "./styles.css";

const user = {
  id: 1,
  name: "Armin",
  email: "thisis@aaaaaaa.aaaa",
  address: "hometowm, japan"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
