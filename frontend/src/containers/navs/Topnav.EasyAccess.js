import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { NavLink } from "react-router-dom";
import IntlMessages from "../../helpers/IntlMessages";

const TopnavEasyAccess = () => {
  return (
    <div className="position-relative d-none d-sm-inline-block">
      <UncontrolledDropdown className="dropdown-menu-right">
        <DropdownToggle className="header-icon" color="empty">
          <i className="simple-icon-grid" />
        </DropdownToggle>
        <DropdownMenu
          className="position-absolute mt-3"
          right
          id="iconMenuDropdown"
        >
          <NavLink to="/app/dashboards/default" className="icon-menu-item">
            <i className="iconsminds-profile d-block" />{" "}
            <IntlMessages id="menu.account" />
          </NavLink>

          <NavLink to="/app/ui/charts" className="icon-menu-item">
            <i className="iconsminds-support d-block" />{" "}
            <IntlMessages id="menu.help" />
          </NavLink>
          <NavLink to="/app/applications/chat" className="icon-menu-item">
            <i className="iconsminds-newspaper d-block" />{" "}
            <IntlMessages id="menu.news" />
          </NavLink>
          <NavLink to="/app/applications/survey" className="icon-menu-item">
            <i className="simple-icon-logout d-block" />{" "}
            <IntlMessages id="menu.logout" />
          </NavLink>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default TopnavEasyAccess;
