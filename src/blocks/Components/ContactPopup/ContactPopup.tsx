// ContactPopup.tsx
import React from 'react';
import './ContactPopup.css';

interface ContactPopupProps {
  visible: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-900 text-black dark:text-white rounded-2xl p-6 shadow-2xl w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <div className="space-y-2">
          <p><strong>Email:</strong> salah@example.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>GitHub:</strong> <a className="text-blue-500" href="https://github.com/salastro" target="_blank" rel="noopener noreferrer">salastro</a></p>
          <p><strong>Twitter:</strong> <a className="text-blue-400" href="https://twitter.com/salastro" target="_blank" rel="noopener noreferrer">@salastro</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;

