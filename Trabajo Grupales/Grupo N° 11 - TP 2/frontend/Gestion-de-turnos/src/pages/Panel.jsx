import { useAuthStore } from '../store/useAuthStore';
import PanelMain from '../components/PanelMain';

const Panel = () => {
  const { user } = useAuthStore();
  const userName = user?.nombre || user?.email;

  return <PanelMain userName={userName} />;
};

export default Panel;