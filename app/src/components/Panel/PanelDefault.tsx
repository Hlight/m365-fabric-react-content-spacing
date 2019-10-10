import React from "react";
import {
  DefaultButton,
  PrimaryButton,
  Panel,
  PanelType,
  Checkbox,
  IStyle,
  LayerHost,
  getId
} from "office-ui-fabric-react";
import { getPanelContent } from "./Panel.content";
import color from "color";
// declare module 'color';

const panelStyles: any = (): any => {
  return {
    headerText: {
      color: "rgb(50, 49, 48)",
      fontSize: "32px",
      fontWeight: "700"
    },
    root: {
      // background: "green", // root style (example)
      selectors: {}
    }
  };
};

// Panel Class
interface IPanelContentState {
  showPanel: boolean;
  buttonText: string;
  headerText: string;
}
export class PanelContent extends React.Component<
  {
    buttonText: string;
    headerText: string;
    panelNum: string;
    styles?: any;
  },
  IPanelContentState
> {
  public state = {
    showPanel: true,
    buttonText: "Open Panel",
    headerText: "Check box"
  };
  private panelNum: number = 1;
  private _layerHostId: string = "";
  constructor(props: any) {
    super(props);
    if (props.buttonText) this.state.buttonText = props.buttonText;
    if (props.headerText) this.state.headerText = props.headerText;
    this._layerHostId = getId("PanelHost");
  }

  public render() {
    return (
      <div
        style={{
          position: "relative",
          width: "592px",
          display: "inline-block",
          margin: "15px",
          border: "1px solid #efefef",
          whiteSpace: "normal"
        }}
      >
        <Panel
          isOpen={this.state.showPanel}
          type={PanelType.custom}
          onDismiss={this._hidePanel}
          headerText={this.state.headerText}
          closeButtonAriaLabel="Close"
          onRenderFooterContent={this._onRenderFooterContent}
          isFooterAtBottom={true}
          customWidth="592px"
          styles={panelStyles}
          layerProps={{ hostId: this._layerHostId }}
          isBlocking={false}
        >
          {getPanelContent(this.props.panelNum)}
        </Panel>
        <LayerHost
          id={this._layerHostId}
          style={{
            position: "relative",
            height: "calc(100vh - 60px)",
            overflow: "hidden",
            padding: "15px"
          }}
          onClick={this._showPanel}
        >
          {/* <DefaultButton
            secondaryText="Opens the Sample Panel"
            onClick={this._showPanel}
            text={this.state.buttonText}
          /> */}
        </LayerHost>
      </div>
    );
  }

  private _onRenderFooterContent = (): JSX.Element => {
    return (
      <div>
        <PrimaryButton onClick={this._hidePanel} style={{ marginRight: "8px" }}>
          Save
        </PrimaryButton>
        <DefaultButton onClick={this._hidePanel}>Cancel</DefaultButton>
      </div>
    );
  };

  private _showPanel = () => {
    this.setState({ showPanel: true });
  };

  private _hidePanel = () => {
    this.setState({ showPanel: false });
  };
}


