import HeaderHeadline from "../header_headline/HeaderHeadline";
import HeaderSubline from "../header_subline/HeaderSubline"
import HeaderText from "../header_text/HeaderText";
import Button from "../button/Button";
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <HeaderHeadline />
            <HeaderSubline />
            <HeaderText />
            <Button
                name={'resume'}
            />
        </header>
    );
}

export default Header;