import { useContext } from 'react';
import { Card } from "./components/Card"
import { AdminFlagContext } from './components/providers/AdminFlagProvider';

export const App = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext)

  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? <span>You're Admin</span> : <span>You're User</span>}
      <button onClick={onClickSwitch}>Switch Role</button>
      <Card name="conao3" isAdmin={isAdmin} />
    </div>
  );
};
