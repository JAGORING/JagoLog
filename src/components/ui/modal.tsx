'use client';

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

interface ModalCompound extends React.FC<ModalProps> {
  Header: React.FC<ModalHeaderProps>;
  Body: React.FC<ModalBodyProps>;
  Footer: React.FC<ModalFooterProps>;
}

interface ModalHeaderProps {
  children: React.ReactNode;
  onClose?: () => void;
}

interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface ModalFooterProps {
  children: React.ReactNode;
}

const Modal: ModalCompound = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      document.body.style.overflow = '';
      if (dialog.open) {
        dialog.close();
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <dialog
        ref={dialogRef}
        className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg p-0 m-0 border-0 shadow-xl max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
        onCancel={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        {children}
      </dialog>
    </>,
    document.body
  );
};

const ModalHeader: React.FC<ModalHeaderProps> = ({ children, onClose }) => (
  <div className="flex justify-between items-center border-b border-subcolor p-4">
    <div className="text-lg font-semibold">{children}</div>
    {onClose && (
      <button onClick={onClose} className="text-2xl text-subcolor focus:outline-none">
        &times;
      </button>
    )}
  </div>
);

const ModalBody: React.FC<ModalBodyProps> = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => (
  <div className="border-t border-subcolor p-4">{children}</div>
);

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
