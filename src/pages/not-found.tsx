import ExtLink from "../components/ext-link"
export default function NotFound() {
    return (
        <section class="bg-white shadow-md rounded p-6">
            <h2 class="text-2xl font-semibold mb-4">404 - Сторінка не знайдена</h2>
            <p>Ви знаходитесь на неіснуючій сторінці. Перейдіть на <ExtLink href="/">головну</ExtLink> сторінку.</p>
        </section>
    )
}