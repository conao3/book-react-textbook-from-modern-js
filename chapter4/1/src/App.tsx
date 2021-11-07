import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num + 1);
    };

    return (
      <>
        <h1 style={{ color: "red" }}>Hello World</h1>
        <ColoredMessage color="blue">Hi React!</ColoredMessage>
        <button onClick={onClickButton}> Click me!</button>
        <p>{num}</p>
      </>
    );
  };
