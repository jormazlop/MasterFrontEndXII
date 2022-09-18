import { render } from "@testing-library/react";
import React from "react";
import * as spinner from "./spinner.component";

describe('common/SpinnerComponent', () => {

  it('should not render anything by default', () => {

    // Arrange

    // Act
    const { container } = render(<spinner.SpinnerComponent/>);
    // Assert
    expect(container.firstChild).toBeNull();

  });

});
