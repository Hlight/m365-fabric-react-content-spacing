import React, { PureComponent } from 'react';
import { getClassNames } from './ShellHeader.styles';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import {
  Persona,
  PersonaSize,
  PersonaPresence
} from 'office-ui-fabric-react/lib/Persona';
import { TestImages } from 'office-ui-fabric-react/lib/common/TestImages';

export class ShellHeader extends PureComponent {
  render() {
    let { root, logo, waffleWrapper, waffle, search, user } = getClassNames();
    return (
      <div className={root}>
        <div className={waffleWrapper}>
          <div className={waffle}>
            <IconButton iconProps={{ iconName: 'WaffleOffice365' }} title="WaffleOffice365" ariaLabel="WaffleOffice365" />
          </div>
          <div className={logo}>Microsoft 365 admin center</div>
        </div>
        <div className={search}>
          <SearchBox
          />
        </div>
        <div className={user}>
          <Persona
            imageUrl={TestImages.personaMale}
            size={PersonaSize.size28}
            presence={PersonaPresence.online}
            hidePersonaDetails={true}
          />
          <IconButton
            menuIconProps={{iconName: 'Help'}}
            title="Help"
            ariaLabel="Help"
          />
          <IconButton
            menuIconProps={{iconName: 'Settings'}}
            title="Settings"
            ariaLabel="Settings"
          />
          <IconButton
            menuIconProps={{iconName: 'Ringer'}}
            title="Notification"
            ariaLabel="Notification"
          />
          <IconButton
            menuIconProps={{iconName: 'Message'}}
            title="Messages"
            ariaLabel="Messages"
          />
        </div>
      </div>
    );
  }
}
