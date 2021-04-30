/* eslint-disable no-unused-vars */
import * as actionTypes from "../../store/actions/actionTypes";
import { connect } from "react-redux";
import "./Countries.css";
import axios from "axios";
import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
} from "reactstrap";
import { ReactReduxContext } from "react-redux";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false, FinalCountries: [] };
  }
  selectAndClose = (event) => {
    event !== undefined ? this.props.setSelected(event) : false;
    this.setState((state) => {
      return { dropdownOpen: !state.dropdownOpen };
    });
  };

  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then((responce) => {
      const items = [];

      for (let i = 0; i < responce.data.length; i++) {
        items.push({ Id: i, Name: responce.data[i].translations["fa"] });
      }
      this.props.addCountries(items);
    });
  }

  render() {
    const countryNames = Object.values(this.props.dropdownItem.Country).map(
      (item) => (
        <DropdownItem
          onClick={(event) => this.selectAndClose(event)}
          key={item.Id}
        >
          {item.Name}
        </DropdownItem>
      )
    );

    return (
      <div>
        <h1 className="title">باشگاه خود را انتخاب کنید</h1>
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={() => {
            this.setState((state) => {
              return { dropdownOpen: !this.state.dropdownOpen };
            });
          }}
        >
          <DropdownToggle
            dir="rtl"
            className={
              this.state.dropdownOpen ? "DropdownToggle" : "DropdownToggleClose"
            }
          >
            {/*Selected Country*/}
            {this.props.dropdownItem.Title}
          </DropdownToggle>
          <DropdownMenu
            modifiers={{
              setMaxHeight: {
                enabled: true,
                order: 890,

                fn: (data) => {
                  return {
                    ...data,
                    styles: {
                      ...data.styles,
                      overflow: "auto",
                      maxHeight: "300px",
                    },
                  };
                },
              },
            }}
          >
            {countryNames}
            {/*<DropdownItem>Name</DropdownItem>*/}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { dropdownItem: state };
};
const mapDispachToProps = (dispatch) => {
  return {
    setSelected: (event) => {
      dispatch({
        type: actionTypes.CHANGE_TITLE,
        value: event.target.innerText,
      });
    },

    addCountries: (input) => {
      dispatch({ type: actionTypes.ADD_COUNTRIES, value: input });
    },
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Countries);
