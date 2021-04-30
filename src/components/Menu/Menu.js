import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavLink,
} from "reactstrap";
import React, { Component, Fragment } from "react";
import { CSSTransition as CSSTransition } from "react-transition-group";

import Classes from "./Menu.module.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false, showMenu: false };
  }

  displayShow = (status) => {
    //Status shows us to what we do depends on function which called
    //if you have to show DropMenuItems, "status==1" else you want to hide it "status == 0"
    if (status == 0) {
      this.setState(() => {
        return { dropdownOpen: false };
      });
    } else {
      this.setState(() => {
        return { dropdownOpen: true };
      });
    }
  };

  //First check status to show or not? if yes show navbar
  navMenu = () => {
    return (
      <Fragment>
        <CSSTransition in={this.state.showMenu} unmountOnExit timeout={3}>
          <Nav className={Classes.nav}>
            <Dropdown
              onMouseOver={() => this.displayShow(1)}
              onMouseLeave={() => this.displayShow(0)}
              className={Classes.nav_item}
              nav
              isOpen={this.state.dropdownOpen}
              toggle={() => this.displayShow(1)}
            >
              <DropdownToggle className={Classes.nav_link} nav>
                باشگاه شما
              </DropdownToggle>

              <DropdownMenu>
                <DropdownItem href="/searchclub">فوتبال</DropdownItem>
                <DropdownItem>تنیس</DropdownItem>
                <DropdownItem>بسکتبال</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <NavItem className={Classes.nav_item}>
              <NavLink className={Classes.nav_link} href="#">
                بخش های ثابت
              </NavLink>
            </NavItem>
            <NavItem className={Classes.nav_item}>
              <NavLink className={Classes.nav_link} href="#">
                نتایج
              </NavLink>
            </NavItem>
            <NavItem className={Classes.nav_item}>
              <NavLink className={Classes.nav_link} href="#">
                اجتماعی
              </NavLink>
            </NavItem>
            <NavItem className={Classes.nav_item}>
              <NavLink className={Classes.nav_link} href="#">
                میزها
              </NavLink>
            </NavItem>
            <NavItem className={Classes.nav_item}>
              <NavLink className={Classes.nav_link} href="#">
                بلیط ها
              </NavLink>
            </NavItem>
            <NavItem className={Classes.nav_item}>
              <NavLink className={Classes.nav_link} href="/">
                خانه
              </NavLink>
            </NavItem>
          </Nav>
        </CSSTransition>
        {/*show openMenu always for change nav visibility */}
        {this.openMenu()}
      </Fragment>
    );
  };

  //That menu which change navbar visibility through state
  openMenu = () => {
    return (
      <div
        style={{ height: "50px" }}
        onMouseEnter={() =>
          this.setState((state) => {
            return { showMenu: !state.showMenu };
          })
        }
      >
        <label style={{ float: "right", fontSize: "20px" }}>منو</label>
        <img
          alt="لوگوی سها"
          style={{ float: "left" }}
          src="https://sohagroup.org/wp-content/uploads/2020/06/aboutUs-269x300.png"
          width="50"
          height="50"
        ></img>
      </div>
    );
  };

  render() {
    return this.navMenu();
  }
}

export default Menu;
