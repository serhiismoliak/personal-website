import { fontSize } from '../store/font-size';

const FontSizeButton = () => {
  const increaseFont = () => {
    if (fontSize.value < 24) {
      fontSize.value += 2;
    }
  };

  const decreaseFont = () => {
    if (fontSize.value > 8) {
      fontSize.value -= 2;
    }
  };

  return (
    <div class="inline-flex items-center bg-gray-200 rounded-full shadow-md overflow-hidden">
      {/* Decrease Font Size Button */}
      <button
        class="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-400 to-violet-400 text-white hover:brightness-90 transition-all"
        onClick={() => decreaseFont()}
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
        onClick={() => increaseFont()}
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