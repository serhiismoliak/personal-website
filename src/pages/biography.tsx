import { useState } from "preact/hooks"
import { biographyTexts } from "../data/biography-texts"

export default function Biography() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const changeBiography = (direction: number) => {
    if (isButtonDisabled) return
    setIsButtonDisabled(true)

    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction

      if (newIndex < 0) return 0
      if (newIndex >= biographyTexts.length) return biographyTexts.length - 1 // Don't go after the last item
      return newIndex
    })

    setTimeout(() => {
      setIsButtonDisabled(false)
    }, 650)
  }

  return (
    <div class="relative h-min">
      {/* Biography Text Cards */}
      <div class="bg-white overflow-hidden rounded shadow-md w-full">
        <div
          class="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {biographyTexts.map((text, index) => (
            <div
              key={index}
              class="flex-shrink-0 w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md"
            >
              <h2 class="text-xl font-semibold">{text.title}</h2>
              <p class="mt-4">{text.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chevron buttons Left*/}
      <button
        onClick={() => changeBiography(-1)}
        class={`absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-800 p-2 rounded-full hover:bg-gray-300/50 ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isButtonDisabled || currentIndex === 0}
      >
        <span class="text-3xl">&#10094;</span>
      </button>
      {/* Chevron buttons Right*/}
      <button
        onClick={() => changeBiography(1)}
        class={`absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-800 p-2 rounded-full hover:bg-gray-300/50 ${
          currentIndex === biographyTexts.length - 1
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        disabled={
          isButtonDisabled || currentIndex === biographyTexts.length - 1
        }
      >
        <span class="text-3xl">&#10095;</span>
      </button>
    </div>
  )
}
export function BiographyFull() {
  return (
    <div class="rounded w-full flex flex-col gap-8">
      {biographyTexts.map((text, index) => (
        <div
          key={index}
          class="flex-shrink-0 w-full min-h-min p-6 bg-white border border-gray-200 rounded-lg shadow-md"
        >
          <h2 class="text-xl font-semibold">{text.title}</h2>
          <p class="mt-4">{text.content}</p>
        </div>
      ))}
    </div>
  )
}
