import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import AutomationPage from './pages/AutomationPage';
import CollectionsPage from './pages/CollectionsPage';
import AgenticAIPage from './pages/AgenticAIPage';
import APIInfrastructurePage from './pages/APIInfrastructurePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SignupPage from './pages/SignupPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/agentic-ai" element={<AgenticAIPage />} />
        <Route path="/api-infra" element={<APIInfrastructurePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
