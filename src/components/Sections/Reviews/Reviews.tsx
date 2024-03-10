const reviews = [
  {
    id: 1,
    author: "Алена",
    text: "Приветствую, отработала первый месяц. Условия отличные, семья очень приятная и понимающая. Вам отдельное спасибо",
    rating: 5
  },
  {
    id: 2,
    author: "Лидия",
    text: "Отличные условия, вам отдельно спасибо. Уже получила первый аванс",
    rating: 4
  },
  {
    id: 3,
    author: "Лилия",
    text: "Здравствуйте, приехала уже к дому. Поселили меня в отличные условия, не соврали спасибо.",
    rating: 5
  },
  {
    id: 4,
    author: "Сабрина",
    text: "Отличная команда. Честно мои ожидания совпали с реальностью, и я безусловно рекомендую эту компанию всем.",
    rating: 5
  }
];

interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white mx-auto m-4 transition delay-75 duration-300 transform hover:scale-110 cursor-pointer">
      <div className="px-6 py-4">
        <div className="font-bold text-blue-400 text-xl mb-2">{review.author}</div>
        <p className="text-gray-700 text-base">{review.text}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Rating: {review.rating}</span>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div>
      <h1 className="px-24 text-6xl sm:text-center sm:text-5xl font-bold  ">
        Отзывы
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>

  );
};

export default Reviews;
