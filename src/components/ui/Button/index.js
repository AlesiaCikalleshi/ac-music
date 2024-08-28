import PropTypes from "prop-types";
import { StyledButton } from "./styled";

function Button(props) {
  // {...props} Ai shpërndan të gjitha props të kaluara në komponentin aktual dhe i kalon ato në komponentin StyledButton.
  // {props.children} i referohet çdo elementi kur vendoset brenda komponentit kur përdoret.
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
