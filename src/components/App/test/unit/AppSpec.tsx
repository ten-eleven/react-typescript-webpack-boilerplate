import * as React from "react/addons";
const testUtils:any = React.addons.TestUtils;
import App from "./../../src/App.tsx";

// Check here what's avaiable in TestUtils: https://facebook.github.io/react/docs/test-utils.html
describe("ContentPage tests", () => {
  beforeEach(() => {
    this.component = testUtils.renderIntoDocument(
        <App name="test"/>
    );
  });

  describe("render tests", () => {
    it("renders logo", () => {
      const logoElement: Element = testUtils.findRenderedDOMComponentWithTag(this.component, "h1");
      expect(logoElement.textContent).toBe("testing fvdf, test!");
    });

  });
});
