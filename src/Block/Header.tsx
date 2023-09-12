import { styled } from "styled-components";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Upload from "../Pages/Upload";
import logo from "../Assets/book.jpg";

const Header = () => {
  return (
    <div>
      <Container>
        <Image>
          <Logo src={logo} />
          <Text>Bookstore</Text>
        </Image>

        <End>
          <Search>
            <BiSearch />
          </Search>
          <NavLink
            to="/uploads"
            style={{
              textDecoration: "none",
              padding: "9px 20px",
              backgroundColor: "#ea4c89",
              fontSize: "18px",
              color: "white",
              borderRadius: "6px",
            }}
          >
            <Button>Upload Books</Button>
          </NavLink>
        </End>
      </Container>
    </div>
  );
};

export default Header;

const Button = styled.div``;

const Search = styled.div`
  font-size: 25px;
  margin-top: 10px;
  color: gray;
`;

const End = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
`;

const Text = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-left: 10px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

const Image = styled.div`
  margin-left: 50px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 20px 0px 20px 0px;
`;
