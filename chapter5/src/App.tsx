import {useState } from 'react';
import { Card } from "./components/Card"

export const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const onClickSwitch = () => {
    setIsAdmin(!isAdmin);
  }

  return (
    <div>
      {isAdmin ? <span>You're Admin</span> : <span>You're User</span>}
      <button onClick={onClickSwitch}>Switch Role</button>
      <Card name="conao3" isAdmin={isAdmin} />
    </div>
  );
};
