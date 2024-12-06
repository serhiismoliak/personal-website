import { hobbies } from "../data/hobbies"
import { Link } from "wouter"

export default function Hobbies() {
  return (
    <section class="bg-white shadow-md rounded p-6">
      <h2 class="text-2xl font-semibold mb-4">Мої захоплення</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hobbies.map((hobby) => (
          <Link href='/hobbies'>
            <div
              key={hobby.id}
              class="relative group w-full h-48 rounded overflow-hidden shadow hover:shadow-lg transform hover:scale-105 transition"
            >
              {/* Background Image */}
              <img
                src={hobby.image}
                alt={hobby.title}
                class="absolute inset-0 w-full h-full object-cover object blur-3xs"
              />

              {/* Overlay with text */}
              <div class="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center p-4 text-outline-black">
                <h3 class="text-3xl font-bold text-white mb-2">
                  {hobby.title}
                </h3>
                <p class="text-md text-gray-200 text-outline-black">
                  {hobby.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
export function HobbiesFull() {
  return (
    <section class="flex flex-col gap-4 bg-white rounded h-full p-0 sm:p-1 lg:p-0">
        {hobbies.map((hobby) => (
          <div
            key={hobby.title}
            class="relative group w-full h-full min-h-40 sm:min-h-67 grow rounded overflow-hidden shadow hover:shadow-lg transform hover:scale-105 transition"
          >
            {/* Background Image */}
            <img
              src={hobby.image}
              alt={hobby.title}
              class="absolute inset-0 w-full h-full object-cover object-center blur-3xs rounded-t-md shadow-md"
            />

            {/* Overlay with text */}
            <div class="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center p-4 text-outline-black">
              <h3 class="text-3xl font-bold text-white mb-2">{hobby.title}</h3>
              <p class="text-md text-gray-200 text-outline-black">
                {hobby.description}
              </p>
            </div>
          </div>
        ))}
    </section>
  )
}
