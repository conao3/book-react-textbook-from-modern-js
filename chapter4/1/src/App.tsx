export const App = () => {
    const onClickButton = () => {
        console.log('Button clicked');
    };
    return (
      <div>
        <h1>Hello World</h1>
        <p>Hi React!</p>
        <button onClick={onClickButton}> Click me!</button>
      </div>
    );
  };
