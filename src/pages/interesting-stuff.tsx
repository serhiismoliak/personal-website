import ExtLink from "../components/ext-link"

export default function InterestingStuff() {
  return (
    <section class="bg-white shadow-md rounded p-6">
      <h2 class="text-2xl font-semibold mb-4 ">
        Декілька цікавих речей в інтернеті
      </h2>
      <ul class="list-disc list-inside space-y-2">
        <li>
          <ExtLink href="https://archive.org/">Інтернет Архів</ExtLink> - Моя
          мрія про доступ інформації в інтернеті.
        </li>
        <li>
          <ExtLink href="https://steamdb.info/">База даних Steam</ExtLink> -
          Таблиці, графіки та інші дані для аналітика даних
        </li>
        <li>
          <ExtLink href="https://www.thefactsite.com/1000-interesting-facts/">
            Випадковий факт
          </ExtLink>
        </li>
      </ul>
    </section>
  )
}
export function InterestingStuffFull() {
  return (
    <section class="bg-white shadow-md rounded p-6">
      <h2 class="text-2xl font-semibold mb-4 ">
        Декілька цікавих речей в інтернеті
      </h2>
      <ul class="list-disc list-inside space-y-2">
        <li>
          <ExtLink href="https://archive.org/">Інтернет Архів</ExtLink> - Моя
          мрія про доступ інформації в інтернеті.
        </li>
        <li>
          <ExtLink href="https://steamdb.info/">База даних Steam</ExtLink> -
          Таблиці, графіки та аналітика ігор Steam
        </li>
        <li>
          <ExtLink href="https://www.thefactsite.com/1000-interesting-facts/">
            Випадковий факт
          </ExtLink>
        </li>
      </ul>
    </section>
  )
}
<section class="bg-white shadow-md rounded p-6">
  <h2 class="text-2xl font-semibold mb-4 ">
    Декілька цікавих речей в інтернеті
  </h2>
  <ul class="list-disc list-inside space-y-2">
    <li>
      <ExtLink href="https://archive.org/">Інтернет Архів</ExtLink> - Моя
      мрія про доступ інформації в інтернеті.
    </li>
    <li>
      <ExtLink href="https://steamdb.info/">База даних Steam</ExtLink> -
      Таблиці, графіки та аналітика ігор Steam
    </li>
    <li>
      <ExtLink href="https://www.thefactsite.com/1000-interesting-facts/">
        Випадковий факт
      </ExtLink>
    </li>
  </ul>
</section>