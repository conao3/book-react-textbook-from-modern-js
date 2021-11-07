export const App = () => {
    const onClickButton = () => {
        console.log('Button clicked');
    };

    const contentStyle = {
        color: "blue",
        fontSize: "20px",
    }

    return (
      <div>
        <h1 style={{ color: "red" }}>Hello World</h1>
        <p style={contentStyle}>Hi React!</p>
        <button onClick={onClickButton}> Click me!</button>
      </div>
    );
  };
