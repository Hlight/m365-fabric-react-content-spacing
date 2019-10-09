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
import color from "color";
import { PanelContent } from "../Panel/PanelDefault";

export class PanelContentRow extends React.Component<{}, {}> {
  public state = {
    panels: [
        <PanelContent
          buttonText="Open Panel - Default Pane - Check box 1"
          headerText="Check box"
          panelNum="1"
        />,
        <PanelContent
          buttonText="Open Panel - Default Pane - Check box 2"
          headerText="Check box"
          panelNum="2"
        />,
        <PanelContent
          buttonText="Open Panel - Default Pane - Check box 3"
          headerText="Check box"
          panelNum="3"
        />,
        <PanelContent
          buttonText="Open Panel - Default Pane - Check box 4"
          headerText="Check box"
          panelNum="4"
        />,
        <PanelContent
          buttonText="Open Panel - Default Pane - Radio Buttons 1"
          headerText="Radio buttons"
          panelNum="5"
        />,
        <PanelContent
          buttonText="Open Panel - Default Pane - Checkbox Controls 1"
          headerText="Checkbox"
          panelNum="6"
        />
    ]
  };
  private _hoverColor = "#efefef";
  private _addPanel = () => {
    this.setState({
      panels: [
        ...this.state.panels,
        <PanelContent
          buttonText="Open Panel - Default Pane - Checkbox Controls 1"
          headerText="Random"
          panelNum="7"
        />
      ]
    });
  };
  private _getNextLink = () => {
    const id: string = getId("nextLink");
    return (
      <>
        <style>
          {`
          #${id} #addPanel { background: ${color(this._hoverColor)
            .lighten(0.05)
            .hex()};}
          #${id}:hover #addPanel { background: ${this._hoverColor};}
          `}
        </style>
        <div
          style={{
            position: "relative",
            width: "592px",
            display: "inline-block",
            margin: "15px",
            border: "1px solid #efefef",
            cursor: "pointer"
          }}
          id={id}
        >
          <LayerHost
            id={"addPanel"}
            style={{
              position: "relative",
              height: "calc(100vh - 60px)",
              overflow: "hidden",
              padding: "15px"
            }}
            onClick={this._addPanel}
          ></LayerHost>
        </div>
      </>
    );
  };
  render() {
    return (
      <>
        {this.state.panels}
        {this._getNextLink()}
      </>
    );
  }
}
