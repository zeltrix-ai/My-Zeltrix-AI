import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CalendlyBadge from './components/CalendlyBadge';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import AIConsulting from './pages/services/AIConsulting';
import ChatbotDevelopment from './pages/services/ChatbotDevelopment';
import ContentGeneration from './pages/services/ContentGeneration';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <div className="min-h-screen bg-secondary text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/services/ai-consulting" element={<AIConsulting />} />
          <Route path="/services/chatbot-development" element={<ChatbotDevelopment />} />
          <Route path="/services/content-generation" element={<ContentGeneration />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
      <CalendlyBadge />
    </div>
  );
}

export default App;
