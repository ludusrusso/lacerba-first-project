function greeting(name: string, lang: 'en' | 'it' | 'es' = 'it'): string {
  const greetMap = {
    en: 'Hello',
    it: 'Ciao',
    es: 'Hola',
  };

  const greetingWord = greetMap[lang];

  return `${greetingWord} ${name}!`;
}

const random = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

const numbers: number[] = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((n) => n * n);
const oddNumbers = numbers.filter((n) => n % 2 !== 0).map((n) => n + 10);

console.log(numbers);
console.log(squaredNumbers);
console.log(oddNumbers);
