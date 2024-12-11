import { useState } from 'preact/hooks';

const isValidPhoneNumber = (phone: string) =>
  /^(?:\+380)?(50|66|67|68|91|92|93|94|95|96|97|98|99)\d{7}$|^(0)(50|66|67|68|91|92|93|94|95|96|97|98|99)\d{7}$/.test(phone);

const isValidlvivPostalCode = (code: string) => /79\d{3}/.test(code);

const isValidYear = (year: string) => /^(19|20)\d{2}$/.test(year);

const removeComments = (text: string) => text.replace(/<!--[\s\S]*?-->/g, "");

const removeTags = (text: string) => text.replace(/<\/?[^>]+(?:\s*\/?)?>/gi, "");

const trimText = (text: string) => text.trim();

function Forms() {
  const [values, setValues] = useState({
    phone: '',
    lvivPostaCode: '',
    year: '',
    text: '',
  });

  const [validations, setValidations] = useState({
    phone: true,
    lvivPostaCode: true,
    year: true,
    text: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const isPhoneValid = isValidPhoneNumber(values.phone);
    const islvivPostalCodeValid = isValidlvivPostalCode(values.lvivPostaCode);
    const isYearValid = isValidYear(values.year);
    const isTextValid = values.text && trimText(values.text) !== '';
    setCleanedText(cleaned);

    setValidations({
      phone: isPhoneValid,
      lvivPostalCode: islvivPostalCodeValid,
      year: isYearValid,
      text: isTextValid,
    });
  };

  const [cleanedText, setCleanedText] = useState('');
  const cleaned = removeTags(removeComments(values.text));

  return (
    <div class="max-w-lg p-6 bg-white rounded-lg shadow-md">
      {/* Phone Number Input */}
      <div class="mb-4">
        <label htmlFor="phone" class="block text-gray-700 font-medium mb-2">
          Номер телефону
        </label>
        <input
          id="phone"
          name="phone"
          type="text"
          value={values.phone}
          onInput={handleChange}
          placeholder="Введіть номер телефону"
          class={`w-full p-3 border-2 rounded-lg transition-all focus:outline-none ${
            validations.phone
              ? 'border-gray-300 focus:border-blue-500'
              : 'border-red-500 focus:border-red-500 text-red-500'
          }`}
        />
        {!validations.phone && (
          <p class="mt-1 text-sm text-red-500">Невірний формат номера телефону.</p>
        )}
      </div>

      {/* Lviv Postal Code Input */}
      <div class="mb-4">
        <label htmlFor="lvivPostaCode" class="block text-gray-700 font-medium mb-2">
          Поштовий індекс Львова (79xxx)
        </label>
        <input
          id="lvivPostaCode"
          name="lvivPostaCode"
          type="text"
          value={values.lvivPostaCode}
          onInput={handleChange}
          placeholder="Введіть поштовий індекс Львова"
          class={`w-full p-3 border-2 rounded-lg transition-all focus:outline-none ${
            validations.lvivPostaCode
              ? 'border-gray-300 focus:border-blue-500'
              : 'border-red-500 focus:border-red-500 text-red-500'
          }`}
        />
        {!validations.lvivPostaCode && (
          <p class="mt-1 text-sm text-red-500">Невірний поштовий індекс Львова.</p>
        )}
      </div>

      {/* Year Input */}
      <div class="mb-4">
        <label htmlFor="year" class="block text-gray-700 font-medium mb-2">
          Рік (наприклад, 2024)
        </label>
        <input
          id="year"
          name="year"
          type="text"
          value={values.year}
          onInput={handleChange}
          placeholder="Введіть рік"
          class={`w-full p-3 border-2 rounded-lg transition-all focus:outline-none ${
            validations.year
              ? 'border-gray-300 focus:border-blue-500'
              : 'border-red-500 focus:border-red-500 text-red-500'
          }`}
        />
        {!validations.year && (
          <p class="mt-1 text-sm text-red-500">Невірний формат року (повинен бути 19xx або 20xx).</p>
        )}
      </div>

      {/* Text Input */}
      <div class="mb-4">
        <label htmlFor="text" class="block text-gray-700 font-medium mb-2">
          Текстовий ввід (без тегів)
        </label>
        <textarea
          id="text"
          name="text"
          value={values.text}
          onInput={handleChange}
          placeholder="Введіть деякий текст"
          class={`w-full p-3 border-2 rounded-lg transition-all focus:outline-none ${
            validations.text
              ? 'border-gray-300 focus:border-blue-500'
              : 'border-red-500 focus:border-red-500 text-red-500'
          }`}
        />
        {!validations.text && (
          <p class="mt-1 text-sm text-red-500">Текст не може бути порожнім.</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        class="w-full mt-4 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Перевірити
      </button>

      {/* Cleaned Text Display */}
      {cleanedText && (
        <div class="mt-6 p-4 bg-gray-100 border-2 border-gray-300 rounded-lg">
          <h3 class="font-medium mb-2">Очищений текст:</h3>
          <p>{cleanedText}</p>
        </div>
      )}
    </div>
  );
}

export default Forms;
