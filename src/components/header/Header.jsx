import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/UserSelectors";
import { selectCartHidden } from "../../redux/cart/CartSelectors";
import { createStructuredSelector } from "reselect";
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "./Header.styled";
import blackDiamond from '../../assets/black-diamond.jpeg';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img
          id="logo"
          src={blackDiamond}
          style={{
            width: "4rem",
            height: "4rem",
            objectFit: "cover",
            marginTop: "-1rem",
          }}
        />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          Shop
        </OptionLink>
        {/* <OptionLink to="/contact">
          Contact
        </OptionLink> */}
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            Sign In
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
