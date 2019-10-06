import React, { PureComponent } from 'react';
import { getClassNames } from './NavLink.styles';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export class NavLink extends PureComponent {
  render() {
    let { root, icon, navItemText } = getClassNames(this.props.selected);
    return (
      <a 
        href={this.props.href} 
        className={root}
        onClick={this.props.onClick}
      >
        <Icon iconName={this.props.iconName} className={icon} />
        <div className={navItemText}>{this.props.name}</div>
      </a>
    );
  }
}
