import routes from './routes';
import MainLayout from './layout/MainLayout';
import { useRoutes } from 'react-router-dom';
import './App.css';

function App() {
  const elements = useRoutes(routes);
  return (
      <MainLayout>
        {elements}
      </MainLayout>
  );
}

export default App;
