import Loading from "./loading";
import axios from "axios";
import React, { lazy, Component, Suspense } from "react";


const Users = lazy(() => import("./Users"));

class App extends Component {
  state = { users: [] };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users/").then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }
  render() {
    return (
      <div>
        <Suspense fallback={<Loading />}>
          <Users users={this.state.users} />
        </Suspense>
      </div>
    );
  }
}

export default App;
