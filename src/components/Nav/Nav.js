import React, { PureComponent } from 'react';
import { getClassNames } from './Nav.styles';
import { NavLink } from './NavLink';

// Has expanded/collapsed state
// Passes that to navLink
// 

const navData = [
  {
    Name: "Home",
    Icon: "Home"
  },
  {
    Name: "Users",
    Icon: "Contact"
  },
  {
    Name: "Groups",
    Icon: "Group"
  },
  {
    Name: "Roles",
    Icon: "RecruitmentManagement",
    // Selected: true
  },
  {
    Name: "Billing",
    Icon: "PaymentCard"
  },
  {
    Name: "Support",
    Icon: "Headset"
  },
  {
    Name: "Settings",
    Icon: "Settings"
  },
  {
    Name: "Setup",
    Icon: "Repair"
  },
  {
    Name: "Reports",
    Icon: "Chart"
  },
  {
    Name: "Health",
    Icon: "Health"
  },
  {
    Name: "Groups",
    Icon: "Group"
  }
];

export class Nav extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isNavCollapsed: this.props.isNavCollapsed ? this.props.isNavCollapsed : false
    };
  }

  render() {
    let { root, navList } = getClassNames(this.state.isNavCollapsed);

    return (
      <nav className={root}>
        <ul className={navList}>
          <NavLink
            href={'#'}
            iconName={'GlobalNavButton'}
            onClick={this._onNavCollapseClicked}
          />
          {navData.map((navLink, navLinkIndex) => {
            return this._renderNavLink(navLink, navLinkIndex);
          })}
        </ul>
      </nav>
    );
  }

  _renderNavLink(navLink, navLinkIndex) {
    if (!navLink) {
      return null;
    }

    return (
      <li key={navLinkIndex}>
        <NavLink
          href={'#'}
          iconName={navLink.Icon}
          name={navLink.Name}
          selected={navLink.Selected}
        />
      </li>
    )
  }

  _onNavCollapseClicked = () => {
    this.setState({
      isNavCollapsed: !this.state.isNavCollapsed
    });
  };
}
