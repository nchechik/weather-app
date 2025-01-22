import React, { useState, useRef, useEffect } from 'react';
import './MultiSelectDropdown.css';

interface MultiSelectDropdownProps {
  label: string;
  items: string[];
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

export const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  items,
  setSelectedItems,
  selectedItems,
  label,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalPosition, setModalPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((option) => option !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [isModalOpen]);

  return (
    <div className="multi-select-container">
      <label htmlFor="multi-select">{label}</label>
      <input
        type="text"
        id="multi-select"
        ref={inputRef}
        placeholder="Click to select options"
        onFocus={toggleModal}
        readOnly
        className="multi-select-input"
        value={selectedItems.join(', ')}
      />
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={toggleModal}
          style={{
            top: `${modalPosition.top}px`,
            left: `${modalPosition.left}px`,
          }}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleModal}>
              ×
            </button>
            <div className="options">
              {items.map((option) => (
                <label key={option}>
                  <input
                    type="checkbox"
                    value={option}
                    checked={selectedItems.includes(option)}
                    onChange={handleSelectChange}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
