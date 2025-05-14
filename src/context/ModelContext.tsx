// context/ModalContext.tsx
'use client'
import { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const showModal = (content: React.ReactNode) => setModalContent(content);
  const hideModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={hideModal}
        >
          <div
            className="bg-white rounded-xl shadow-xl max-w-xl w-full p-6 text-sm relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={hideModal} className="absolute top-3 right-3">✕</button>
            {modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
