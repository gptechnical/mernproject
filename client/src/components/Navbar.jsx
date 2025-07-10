
import React, { useState } from "react";
import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Main = styled.div`
  padding-bottom: 0px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const MobileViewAppBar = styled.div`
  background-color: #673ab7;
  width: 100%;
  padding: 10px 20px;
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 80px;
  justify-content: space-between;
  ${(p) =>
    p.scrollAppear &&
    `
   background-color:#f1f7f5;
`};

  @media (min-width: 767px) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 150px;
`;
const SmallDeviceLinkView = styled.div`
  background-color: #fff;
  position: fixed;
  width: 210px;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 20;
  padding-top: 20px;
  padding-left: 20px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  @media (min-width: 767px) {
    display: none;
  }
`;

const Call = styled.span`
  font-size: 17px;
  line-height: 13px;
`;

const Link = styled.div`
  margin-top: 20px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25;
  cursor: pointer;
  display: flex;
`;

const Navigation = styled.div`
  background-color: #673ab7;
  width: 100%;
  margin-right: 80px;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  ${(p) =>
    p.scrollAppear &&
    `
   background-color:#f1f7f5;
`};

  @media (max-width: 768px) {
    display: none !important;
  }
`;
const Wrapper = styled.div``;
const ImageWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
cursor: pointer;
margin-left: 20px;
`;
const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 150px;
  color: #ffffff;
  font-weight: 600;
  font-family: sans-serif;
`;
const NavLink = styled.div`
  margin-left: 25px;
  font-size: 16px;
  position: relative;
  display: flex;
  cursor: pointer;
  @media (max-width: 900px) {
    margin-left: 15px;
  }
  @media (max-width: 845px) {
    margin-left: 10px;
    font-size: 14px;
  }
  @media (max-width: 768px){
    margin-left:0;
    margin-top:20px;
  }
`;

const DropDown = styled.div``;
const DropDownSection = styled.div`
  position: absolute;
  top: 30px;
  width: 200px;
  background-color: #fff;
  box-shadow: 0px 0px 13px 2px rgb(0 0 0 / 5%);
  border-radius: 4px;
  @media (max-width: 767px) {
    position: relative;
    left: 0px;
    background: none;
    box-shadow: none;
    top: 0px;
    width: 100%;
    cursor: pointer;
  }
`;
const IconWrapper = styled.span`
  margin-left: 5px;
`;

const List = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;s
  padding: 15px;
  :hover {
    background-color: #c75dfe;
    color: #ffffff;
    @media (max-width: 767px) {
      box-shadow: none;
    }
  }
`;
const Image = styled.img`
  cursor: pointer;
  width: 270px;
`;

const Navbar = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const { isLoggedIn } = useAuth();
  const navigation = useNavigate();

  console.log("login or not", isLoggedIn);

  return (
    <Main>
      <Navigation>
        <Image
          src="/logo.png"
          style={{ paddingLeft: "5rem"}}
          onClick={() => {
            navigation("/");
          }}
        />
        <NavWrapper>
          <NavLink onClick={() => navigation("/")}>Home</NavLink>
          <NavLink onClick={() => navigation("/about")}>About Us</NavLink>
          <NavLink onClick={() => navigation("/service")}>Services</NavLink>
          <NavLink onClick={() => navigation("/contact")}>Contact Us</NavLink>
          {isLoggedIn ? (
            <NavLink onClick={() => navigation("/logout")}>Logout</NavLink>
          ) : (
            <>
            <NavLink onClick={() => navigation("/register")}>Register</NavLink>
            <NavLink onClick={() => navigation("/login")}>Login</NavLink>
            </>
          )}
          
          {/* <NavLink>
            {<DropDown
              onClick={(e) => {
                e.stopPropagation();
                setShowResources(!showResources);
                setShowTools(false);
                setShowDropDown(false);
                
              }}
            >
              Resources <FaAngleDown />
            </DropDown>}
            {showResources && (
              <>
                <DropDownSection>
                  <List
                    onClick={() => {
                      setShowResources(!showResources);
                    }}
                  >
                    KYC forms
                  </List>
                  <List
                    onClick={() => {
                      setShowResources(!showResources);
                    }}
                  >
                    Downloads
                  </List>
                  <List
                    onClick={() => {
                      setShowResources(!showResources);
                    }}
                  >
                    Reports
                  </List>
                  <List
                    onClick={() => {
                      setShowResources(!showResources);
                    }}
                  >
                    Business Reports
                  </List>
                </DropDownSection>
              </>
            )}
          </NavLink> */}
    
        </NavWrapper>
      </Navigation>
      <MobileViewAppBar>
        <Logo
          src="/logo.png"
          onClick={() => {
            navigation("/");
          }}
        />
        <IoMenu style={{color:"#ffffff", fontSize: "30px"}}
          onClick={() => {
            setShowNavigation(!showNavigation);
          }}
        />
      </MobileViewAppBar>
      {showNavigation && (
        <SmallDeviceLinkView>
          <IoCloseCircle
            onClick={() => {
              setShowNavigation(!showNavigation);
            }}
          />
          <Link
            onClick={() => {
              navigation("/");
              setShowNavigation(!showNavigation);
            }}
          >
            Home
          </Link>
          <Link
            onClick={() => {
              navigation("/about");
              setShowNavigation(!showNavigation);
            }}
          >
            About Us
          </Link>
          <Link
            onClick={() => {
              navigation("/service");
              setShowNavigation(!showNavigation);
            }}
          >
            Services
          </Link>
        
         
         {/* <Link
            onClick={() => {
              setShowTools(!showTools);
              setShowResources(false);
            setShowDropDown(false);
            }}
          >
            <DropDown
              onClick={(e) => {
                e.stopPropagation();
                setShowTools(!showTools);
                setShowResources(false);
            setShowDropDown(false);
              }}
            >
              Tools
            </DropDown>
            <IconWrapper
              onClick={(e) => {
                e.stopPropagation();
                setShowTools(!showTools);
                setShowResources(false);
            setShowDropDown(false);
              }}
            >
              <FaAngleDown />
            </IconWrapper>
          </Link> */}
          {/* {showTools && (
            <>
              <DropDownSection>
                <List
                  onClick={() => {
                    navigation("/register_business");
                    setShowNavigation(!showNavigation);
                  }}
                >
                  Calculator
                </List>
                <List
                  onClick={() => {
                    navigation("/open_bank");
                    setShowNavigation(!showNavigation);
                  }}
                >
                  Utilities
                </List>
                
                
              </DropDownSection>
            </>
          )} */}
          
          <Link
            onClick={() => {
              navigation("/contact");
              setShowNavigation(!showNavigation);
            }}
          >
            Contact Us
          </Link>
          { isLoggedIn ? (
            <Link
            onClick={() => {
              navigation("/logout");
              setShowNavigation(!showNavigation);
            }}
          >
            Logout
          </Link> 
          ) : (
            <>
           <Link
            onClick={() => {
              navigation("/register");
              setShowNavigation(!showNavigation);
            }}
          >
            Register
          </Link> 
          <Link
            onClick={() => {
              navigation("/login");
              setShowNavigation(!showNavigation);
            }}
          >
            Login
          </Link>  
          </>
          )} 
         
        </SmallDeviceLinkView>
      )}
    </Main>
  );
};

export default Navbar;
