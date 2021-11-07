import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton = () => {
        console.log('Button clicked');
    };

    return (
      <>
        <h1 style={{ color: "red" }}>Hello World</h1>
        <ColoredMessage color="blue" message="Hi React!" />
        <button onClick={onClickButton}> Click me!</button>
      </>
    );
  };
