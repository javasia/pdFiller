import React from "react";
import UserControlBar from "./components/UserControlBar";
import UserItem from "./components/UserItem";
import { getUserData } from "./operations/App/request";
import Preloader from './components/Preloader'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchName: "",
      displayUsers: false,
    }
  };

  setDisplayUsers = displayUsers => {
    this.setState({ displayUsers });
  };

  mountFetchedUsers = users => {
    this.setState({ users });
  };

  httpRequestCBs = {
    mountFetchedUsers: this.mountFetchedUsers,
    setDisplayUsers: this.setDisplayUsers,
  };

  componentDidMount() {
    getUserData(this.httpRequestCBs);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleClick = () => getUserData(this.httpRequestCBs);

  handleBlur = event => document.querySelector('button[type=reset]').click();

  handleChange = event => {
    const searchName = event.target.value;
    const users = this.state.users.filter(user => user.userName.toUpperCase().includes(searchName.toUpperCase()))
    this.setState({ users, searchName });
  };

  handleDeleteItem = id => {
    const users = this.state.users.filter(user => user.id !== id);
    this.setState({ users });
  }

  handleAdd = () => {
    const newUser = {
      userName: this.state.searchName,
      id: (this.state.users.length + 1) * Math.random(),
    }
    const users = [...this.state.users, newUser];
    this.setState({ users });
  }

  render() {
    const { users, searchName, displayUsers } = this.state;
    return (
      <div>
        <UserControlBar
          clicked={this.handleClick}
          changed={this.handleChange}
          addUser={this.handleAdd}
          lostFocus={this.handleBlur}
          searchName={searchName}
        />
        <div>
          {
            (displayUsers &&
              users.map(user => (
                <UserItem
                  key={user.id}
                  userName={user.userName}
                  clicked={() => this.handleDeleteItem(user.id)}
                />
              ))
            ) 
            || <Preloader/>
          }
        </div>
      </div>
    );
  }
}

export default App;
