import { useState } from 'preact/hooks';

const FontSizeButton = () => {
  const [fontSize, setFontSize] = useState(16);

  const changeFontSize = (newSize: number) => {
    if (newSize < 8 || newSize > 24) {
        return
    }
    document.documentElement.style.fontSize = `${newSize}px`;
    setFontSize(newSize);
  };

  return (
    <div class="inline-flex items-center bg-gray-200 rounded-full shadow-md overflow-hidden">
      {/* Decrease Font Size Button */}
      <button
        class="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-400 to-violet-400 text-white hover:brightness-90 transition-all"
        onClick={() => changeFontSize(fontSize - 2)}
      >
       <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 12h12"
          />
        </svg>
      </button>

      <div class="w-px bg-gray-200 h-full"></div>

      {/* Increase Font Size Button */}
      <button
        class="flex items-center justify-center px-4 py-2 bg-gradient-to-l from-rose-400 to-violet-400 text-white hover:brightness-90 transition-all"
        onClick={() => changeFontSize(fontSize + 2)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v12M6 12h12"
          />
        </svg>
      </button>
    </div>
  );
};

export default FontSizeButton;