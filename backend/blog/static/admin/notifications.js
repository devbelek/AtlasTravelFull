import { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle, Info, X } from 'lucide-react';

const NotificationToast = ({ message, type, onClose }) => {
  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <AlertTriangle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />
  };

  const colors = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800'
  };

  return (
    <div className={`flex items-center p-4 mb-4 rounded-lg ${colors[type]}`}>
      <div className="mr-2">{icons[type]}</div>
      <div className="flex-grow">{message}</div>
      <button
        onClick={onClose}
        className="ml-4 hover:opacity-75 transition-opacity"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Слушаем Django messages
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const messages = Array.from(mutation.addedNodes)
            .filter(node => node.classList?.contains('message'))
            .map(node => ({
              id: Date.now(),
              message: node.textContent,
              type: node.classList.contains('error') ? 'error' :
                    node.classList.contains('success') ? 'success' : 'info'
            }));

          setNotifications(prev => [...prev, ...messages]);
        }
      });
    });

    const messagesContainer = document.querySelector('.messages');
    if (messagesContainer) {
      observer.observe(messagesContainer, { childList: true });
    }

    return () => observer.disconnect();
  }, []);

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(note => note.id !== id));
  };

  return (
    <div className="fixed top-4 right-4 z-50 w-96 max-w-full">
      {notifications.map(note => (
        <NotificationToast
          key={note.id}
          message={note.message}
          type={note.type}
          onClose={() => removeNotification(note.id)}
        />
      ))}
    </div>
  );
};

export default AdminNotifications;