interface CardTwoProps {
  paragraphs: string[];
}

export default function CardTwo({ paragraphs }: CardTwoProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow">
      <ul>
        {paragraphs.map((paragraph, index) => (
          <li key={index} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow my-3 text-gray-700 dark:text-gray-300">
            {paragraph}
          </li>
        ))}
      </ul>
    </div>
  );
}
