import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import SystemsPage from './components/SystemsPage';
import RoomDashboard from './components/RoomDashboard';
import InfoModal from './components/InfoModal';
import ContactPage from './components/ContactPage';
import { INFO_CONTENT } from './constants/infoContent';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' | 'support' | 'contact' | null }>({
    isOpen: false,
    type: null
  });

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    setSelectedRoom(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRoom = (room: number) => {
    setSelectedRoom(room);
    setCurrentView('room');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInfo = (type: 'privacy' | 'terms' | 'support' | 'contact') => {
    if (type === 'contact') {
      handleNavigate('contact');
      return;
    }
    setModalState({ isOpen: true, type });
  };

  const handleCloseInfo = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 font-body selection:bg-primary/10 selection:text-primary">
      <Navbar onNavigate={handleNavigate} currentView={currentView} />
      
      <main>
        <AnimatePresence mode="wait">
          {currentView === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LandingPage />
            </motion.div>
          )}

          {currentView === 'systems' && (
            <motion.div
              key="systems"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SystemsPage onSelectRoom={handleSelectRoom} />
            </motion.div>
          )}

          {currentView === 'room' && selectedRoom !== null && (
            <motion.div
              key={`room-${selectedRoom}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <RoomDashboard roomNumber={selectedRoom} />
            </motion.div>
          )}

          {currentView === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer 
        variant={currentView === 'systems' ? 'dark' : 'light'} 
        onOpenInfo={handleOpenInfo}
      />

      <InfoModal 
        isOpen={modalState.isOpen}
        onClose={handleCloseInfo}
        title={modalState.type ? INFO_CONTENT[modalState.type].title : ''}
        content={modalState.type ? INFO_CONTENT[modalState.type].content : ''}
      />
    </div>
  );
}

export default App;
