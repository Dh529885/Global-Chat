import { Avatar, Button, IconButton } from "@material-ui/core";
import { Chat, MoreVertRounded, SearchOutlined } from "@mui/icons-material";
import styled from "styled-components";
import * as EmailValidator from "email-validator";

function Sidebar() {
  const createChat = () => {
    const input = prompt(
      "Please enter an email address for the user you wish to chat with"
    );

    if (!input) return null;

    if (EmailValidator.validate(input)) {
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconContanier>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVertRounded />
          </IconButton>
        </IconContanier>
      </Header>
      <Search>
        <SearchOutlined />
        <SearchInput placeholder="Search in chats" />
      </Search>
      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>
    </Container>
  );
}

export default Sidebar;

const SidebarButton = styled(Button)`
  width: 100%;

  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 2px;
`;
const SearchInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
`;
const Container = styled.div``;
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const IconContanier = styled.div``;
