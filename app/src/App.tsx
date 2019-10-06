import React from 'react';
import './App.css';
import "office-ui-fabric-core/dist/css/fabric.min.css";
import { getClassNames } from "./App.styles";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

import { Fabric, Link } from "office-ui-fabric-react";
import { ShellHeader } from "./components/ShellHeader/ShellHeader";
import { Nav } from "./components/Nav/Nav";

import { DefaultContent } from "./components/DefaultContent/DefaultContent";

import { Content } from "./components/Panel/PanelDefault";

import { LayerCustomizedExample } from "./components/Panel/PanelLayer";

// Icons must be initialized in order to load their styles
initializeIcons(/* optional base url */);



class App extends React.Component {
  render() {
    const {
      root,
      header,
      mainWrapper,
      content,
      pivotsAndSearch,
      pivotContainer,
      footer,
      searchBar
    } = getClassNames();
    return (
      <Fabric>
        <div className={root}>
          <ShellHeader />
          <section className={mainWrapper}>
            <main className={content} data-is-scrollable={true}>
              {/* <DefaultContent /> */}
              {/* <LayerCustomizedExample /> */}
              <div className="content-wrapper" style={{ margin: "-48px" }}>
                <Content />
              </div>
            </main>
            <Nav isNavCollapsed={true} />
          </section>
          <footer className={footer} />
        </div>
      </Fabric>
    );
  }
}

export default App;
