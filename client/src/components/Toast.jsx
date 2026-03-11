import { useGame } from '../context/GameContext';
import './Toast.css';

export default function Toast() {
  const { toast } = useGame();
  return (
    <div className={`toast ${toast.show ? 'show' : ''}`}>
      <div className="toast-title">{toast.title}</div>
      <div>{toast.msg}</div>
      {toast.xp > 0 && <div className="toast-xp">+{toast.xp} XP EARNED!</div>}
    </div>
  );
}
