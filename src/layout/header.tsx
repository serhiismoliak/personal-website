import { Link } from "wouter"
import { useState } from "preact/hooks"
import FontSizeButton from "../components/font-size-button"

export default function Header({ pagename }: { pagename: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }
  return (
    <header class="bg-gradient-to-tl from-cyan-500 to-blue-500 text-white p-3">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">{pagename}</h1>
        <FontSizeButton />
        <nav class="relative">
          <button
            onClick={toggleMenu}
            class="px-4 py-2 rounded-md focus:outline-none bg-gradient-to-br from-cyan-500 to-blue-400 shadow-lg font-semibold hover:inset-ring-1 inset-ring-cyan-400"
          >
            Меню
          </button>
          <div
            class={
              (isMenuOpen ? "block" : "hidden") +
              " absolute top-full -left-8 z-3 mt-2 "
            }
          >
            <ul class="absolute mt-2 bg-white text-black rounded shadow-lg group-hover:block">
              <li class="px-4 py-2 hover:bg-gray-200/50">
                <Link href="/">Головна</Link>
              </li>
              <li class="px-4 py-2 hover:bg-gray-200/50">
                <Link href="/biography">Біографія</Link>
              </li>
              <li class="px-4 py-2 hover:bg-gray-200/50">
                <Link href="/my-group">Моя група</Link>
              </li>
              <li class="px-4 py-2 hover:bg-gray-200/50">
                <Link href="/hobbies">Мої Захоплення</Link>
              </li>
              <li class="px-4 py-2 hover:bg-gray-200/50">
                <Link href="/interesting-stuff">Цікаві речі</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
