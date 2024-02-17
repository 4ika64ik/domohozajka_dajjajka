import { FC } from "react";
import { Cards } from 'components/Sections/Courses/Cards.tsx';

const courses = ['Top Rated', 'Development', 'Design', 'Music', 'Marketing', 'Business', 'Photography']

export const OurCourses: FC = () => {
  return (
    <div>
      <h2 className="px-20 text-6xl font-bold py-7 sm:text-5xl sm:text-center md:py-2 sm:px-2">
        Our Courses
      </h2>
      <div className="grid grid-cols-7 text-gray100 mx-14 text-xl mb-20 cursor-pointer mr-96 md:grid-cols-1 sm:w-5 sm:grid-cols-1 sm:px-0">
        {courses.map((courses, index) => (
          <p key={index} className={index === 0 ? "text-purple-500 font-bold" : "" }>
            {courses}
          </p>
        ))}
      </div>
      <Cards />
    </div>
  )
}