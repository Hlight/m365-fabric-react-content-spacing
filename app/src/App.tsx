import React, { ReactNode } from "react";
import "./App.css";
import "office-ui-fabric-core/dist/css/fabric.min.css";
import { getClassNames } from "./App.styles";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

import { Fabric, Link } from "office-ui-fabric-react";
import { ShellHeader } from "./components/ShellHeader/ShellHeader";
import { Nav } from "./components/Nav/Nav";

import { DefaultContent } from "./components/DefaultContent/DefaultContent";

import { Content } from "./components/Panel/PanelDefault";

// Icons must be initialized in order to load their styles
initializeIcons(/* optional base url */);

const PageContent: React.FC = (props: { children?: ReactNode }) => {
  return (
    <div
      className="content-wrapper"
      style={{ margin: "-48px", width: "1000%" }}
    >
      {/* <DefaultContent /> */}
      {/* <LayerCustomizedExample /> */}
      <Content />
    </div>
  );
};

interface IAppState {
  isFrameEnabled: boolean;
}
class App extends React.Component<{}, IAppState> {
  public state = {
    isFrameEnabled: true
  };
  constructor(props: any) {
    super(props);
    const urlParams = new URLSearchParams(window.location.search);
    const isFrameEnabled = urlParams.has("frame");
    this.state = {
      isFrameEnabled
    };
  }
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
    const isFrameEnabled = this.state.isFrameEnabled;
    return (
      <Fabric>
        <div className={root}>
          {isFrameEnabled ? <ShellHeader /> : ""}
          <section className={mainWrapper}>
            <main className={content} data-is-scrollable={true}>
              <PageContent />
            </main>
            {isFrameEnabled ? <Nav isNavCollapsed={true} /> : ""}
          </section>
          {isFrameEnabled ? <footer className={footer} /> : ""}
        </div>
      </Fabric>
    );
  }
}

export default App;
