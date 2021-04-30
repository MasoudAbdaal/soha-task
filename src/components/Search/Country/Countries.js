import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import React, { Component } from "react";

import { connect } from "react-redux";
import axios from "axios";

import * as actionTypes from "../../../store/actions/actionTypes";
import "./Countries.css";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false, FinalCountries: [] };
  }

  selectAndClose = (event) => {
    //Check Does dropDownItem Called? if so Dispacher call and change TITLE of Store trough reducer
    event.target.className == "dropdown-item"
      ? this.props.setSelected(event)
      : false;

    this.setState(() => {
      return { dropdownOpen: !this.state.dropdownOpen };
    });
  };

  componentDidMount() {
    //GET request to country API
    axios.get("https://restcountries.eu/rest/v2/all").then((responce) => {
      //For temporary store
      const items = [];

      for (let i = 0; i < responce.data.length; i++) {
        items.push({ Id: i, Name: responce.data[i].translations["fa"] });
      }
      //Call Dispacher for store country items in Store
      this.props.addCountries(items);
    });
  }

  render() {
    //Map every country to a DropdownItem component
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
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.selectAndClose}>
          <DropdownToggle
            className={
              this.state.dropdownOpen ? "DropdownToggle" : "DropdownToggleClose"
            }
          >
            {/*Diplay Selected country from state which mapped to props */}
            {this.props.dropdownItem.Title}
          </DropdownToggle>

          <DropdownMenu
            modifiers={{
              setMaxHeight: {
                enabled: true,
                order: 890,

                //Function for manage list overflow and scroll and windows size
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
            {/*Render Mapped Countries to dropdownItem element*/}
            {countryNames}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

//Map our redux state to props and use it as a props
const mapStateToProps = (state) => {
  return { dropdownItem: state };
};

//Map action dispacher to props and use it trough component
const mapDispachToProps = (dispatch) => {
  return {
    //Dispacher for change dropdownText regarding selected item
    setSelected: (event) => {
      dispatch({
        type: actionTypes.CHANGE_TITLE,
        value: event.target.innerText,
      });
    },
    //Dispacher for add our Countries to redux store
    addCountries: (input) => {
      dispatch({ type: actionTypes.ADD_COUNTRIES, value: input });
    },
  };
};
//connect our component to redux
export default connect(mapStateToProps, mapDispachToProps)(Countries);
