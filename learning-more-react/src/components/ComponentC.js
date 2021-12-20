import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {
          (name) => {
            return (
              <>
              <div>This is Component C</div>
              <div>
                Hello {name} - calls the props passed from the app component which is 3 level up it without prop drilling 
              </div>
              </>
            )
          }
        }
      </UserConsumer>
    );
  }
}

export default ComponentC;
