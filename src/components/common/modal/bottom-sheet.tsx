'use client';
import { useState, useEffect, useRef } from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  height?: 'small' | 'medium' | 'large' | 'full';
}

export default function BottomSheet({ isOpen, onClose, children, height = 'medium' }: BottomSheetProps) {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // 높이 설정을 위한 클래스 결정
  const heightClass = {
    small: 'h-1/4',
    medium: 'h-1/2',
    large: 'h-3/4',
    full: 'h-full',
  }[height];

  // 바텀시트가 열리고 닫힐 때 애니메이션 처리
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden'; // 스크롤 방지
    } else {
      setTimeout(() => {
        setIsVisible(false);
      }, 300); // 애니메이션 지속 시간과 일치시킴
      document.body.style.overflow = ''; // 스크롤 허용
    }
  }, [isOpen]);

  // 배경 클릭 시 닫기
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // 바깥 영역을 클릭하거나 ESC 키를 누르면 닫기
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`bg-opacity-50 fixed inset-0 z-50 bg-black/10 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`fixed right-0 bottom-0 left-0 ${heightClass} transform rounded-t-2xl bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        ref={contentRef}
      >
        {/* 내용 */}
        <div className="overflow-y-auto p-4" style={{ maxHeight: 'calc(100% - 60px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
