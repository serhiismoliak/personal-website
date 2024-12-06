import ExtLink from "../components/ext-link"
const text = (
  <>
    Наша група СБ-32 — це дружня спільнота студентів{" "}
    <ExtLink href="https://fis.tntu.edu.ua/">факультету ФІС</ExtLink>, які
    навчаються на кафедрі кібербезпеки Тернопільського національного технічного
    університету імені Івана Пулюя. Ми разом вивчаємо основи кібербезпеки,
    аналіз даних, інформаційні системи, програмування та інші важливі
    дисципліни, що допомагають нам підготуватися до успішної кар’єри в
    ІТ-галузі. Наша мета — не лише здобути глибокі знання та практичні навички,
    але й підтримувати один одного на цьому шляху, щоб стати справжніми
    професіоналами у світі інформаційних технологій. А ще ми іноді дуріємо, адже
    без веселощів навчання було б не таким цікавим!
  </>
)

export default function MyGroup() {
  return (
    <section class="bg-white shadow-md rounded p-6">
      <h2 class="text-2xl font-semibold mb-4">Про мою групу</h2>
      {text}
    </section>
  )
}

export function MyGroupFull() {
  return (
    <section class="bg-white shadow-md rounded p-6">
      <h2 class="text-2xl font-semibold mb-4">Про мою групу</h2>
      <p>{text}</p>
    </section>
  )
}
