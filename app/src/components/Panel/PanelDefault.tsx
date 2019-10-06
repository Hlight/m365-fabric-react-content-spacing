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

const panelStyles: any = (): any => {
  return {
    headerText: {
      color: "rgb(50, 49, 48)",
      fontSize: "32px",
      fontWeight: "700"
    },
    root: {
      // background: "green", // root style (example)
      selectors: {
        // "&": { background: "red"},// root style (example selector)
        ".ms-Panel-content p": {
          fontSize: "14px",
          lineHeight: "20px",
          textAlign: "justify"
        },
        ".ms-Panel-header": { margin: "0" },
        ".ms-Panel-content > p:first-child": {
          marginTop: "27px",
          marginBottom: "40px"
        },
        ".ms-Panel-content > div:first-child": { marginTop: "48px" },
        ".ms-ChoiceFieldGroup": { color: "purple" }
      }
    }
  };
};
const checkboxStyles: any = (): any => {
  return {
    root: {
      marginTop: "10px",
      lineHeight: "1.46",
      fontWeight: "bold"
    },
    selectors: {
      "& + p": ""
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
      <div style={{position: "relative"}}>
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
            height: "660px",
            overflow: "hidden",
            //  borderLeft: "1px dashed #ccc",
            //  borderRight: "1px dashed #ccc"
            padding: "15px",
          }}
        >
        <DefaultButton
          secondaryText="Opens the Sample Panel"
          onClick={this._showPanel}
          text={this.state.buttonText}
        />
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

const getPanelContent = (num: any) => {
  num = parseInt(num);
  switch (num) {
    case 1:
      return panel01();
    case 2:
      return panel02();
    case 3:
      return panel03();
  }
  function panel01() {
    return (
      <React.Fragment>
        <p>
          Ask why until it becomes painful, until you’re sick of the word. And
          give it character — there’s enough ‘nice’ design in the world. Whether
          sublime, exuberant, minimal or maximal, give your work personality.
          Don’t be afraid to be awkward — what feels comfortable today, will be
          boring tomorrow.
        </p>
        <div className="ms-ChoiceFieldGroup">
          <Checkbox
            label="Design can be art."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Design can be aesthetics."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Design is so simple, that’s why it is so complicated."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Practice safe design: Use a concept."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Good design is obvious. Great design is transparent."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Design is thinking made visual."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Design can be art."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Design can be aesthetics."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Design is so simple, that’s why it is so complicated."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Practice safe design: Use a concept."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Good design is obvious. Great design is transparent."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Design is thinking made visual."
            defaultChecked={true}
            styles={checkboxStyles}
          />
        </div>
      </React.Fragment>
    );
  }
  function panel02() {
    return (
      <React.Fragment>
        <p>
          Ask why until it becomes painful, until you’re sick of the word. And
          give it character — there’s enough ‘nice’ design in the world. Whether
          sublime, exuberant, minimal or maximal, give your work personality.
          Don’t be afraid to be awkward — what feels comfortable today, will be
          boring tomorrow.
        </p>
        <div className="ms-ChoiceFieldGroup">
          <p>If you can design one thing, you can design everything.</p>

          <Checkbox
            label="Design can be art."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Design can be aesthetics."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Design is so simple, that’s why it is so complicated."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Practice safe design: Use a concept."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Good design is obvious. Great design is transparent."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Design is thinking made visual."
            defaultChecked={true}
            styles={checkboxStyles}
          />
        </div>
        <div className="ms-ChoiceFieldGroup">
          <p>If you can design one thing, you can design everything.</p>

          <Checkbox
            label="Design can be art."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Design can be aesthetics."
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <Checkbox
            label="Design is so simple, that’s why it is so complicated."
            defaultChecked={true}
            styles={checkboxStyles}
          />
        </div>
      </React.Fragment>
    );
  }
  function panel03() {
    return (
      <React.Fragment>
        <p>
          Ask why until it becomes painful, until you’re sick of the word. And
          give it character — there’s enough ‘nice’ design in the world. Whether
          sublime, exuberant, minimal or maximal, give your work personality.
          Don’t be afraid to be awkward — what feels comfortable today, will be
          boring tomorrow.
        </p>
        <div className="ms-ChoiceFieldGroup">
          <p>If you can design one thing, you can design everything. </p>
          <Checkbox
            label="El Lissitzky"
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <p>Good design is obvious. Great design is transparent.</p>
          <Checkbox
            label="Joseph müller brockmann"
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <p>Design is so simple, that’s why it is so complicated.</p>
          <Checkbox
            label="Emil ruder"
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <p>
            Styles come and go. Good design is a language, not a style. Good
            design is obvious. Great design is transparent.
          </p>
          <Checkbox
            label="Wolfgang weingart"
            defaultChecked={true}
            styles={checkboxStyles}
          />
          <p>Design is so simple, that’s why it is so complicated.</p>
        </div>
      </React.Fragment>
    );
  }
  function panel04() {}
  function panel05() {}
  function panel06() {}
};

export const Content = () => {
  return (
    <React.Fragment>
      <PanelContent
        buttonText="Open Panel - Default Pane - Check box 1"
        headerText="Check box"
        panelNum="1"
        styles={{ root: { background: "red" } }}
      />
      <PanelContent
        buttonText="Open Panel - Default Pane - Check box 2"
        headerText="Check box"
        panelNum="2"
      />
      <PanelContent
        buttonText="Open Panel - Default Pane - Check box 3"
        headerText="Check box"
        panelNum="3"
      />
    </React.Fragment>
  );
};
