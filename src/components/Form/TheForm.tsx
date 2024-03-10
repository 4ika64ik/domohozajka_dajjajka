import {FC, useState} from 'react';
import { TheFooter } from "components/Footer/Footer.tsx";
import {Form} from "components/Form/Form.tsx";
import axios from 'axios';

export const TheForm: FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nick, setNick] = useState('');

  const handleSubmit = async () => {
    try {
      const formData = {
        name: name,
        password: nick // Используем значение ника для поля password
      };

      const response = await axios.post('http://185.230.64.242:5000/api/posts/', formData);
      console.log(response.data);

      // Очистка состояния после успешной отправки
      setName('');
      setPhone('');
      setNick('');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <nav className="bg-blue-400 py-5 fixed w-full">
        <h1 className="text-white mx-28 sm:mx-3 text-6xl font-bold lg:text-6xl md:text-sm sm:text-sm ">
          DomRabotaEU
        </h1>
      </nav>
      <div>
        <p className="text-white">
          Заполните форму и мы свяжеся с Вами в ближайшее время
        </p>
        <Form />
      </div>
      <div className="flex justify-center  mt-44 sm:mt-20 mb-72">

        <div className="bg-white p-8 rounded-lg shadow-md lg:w-96 w-full md:w-96">
          <div>
            <label>
              <p className="text-gray-700 font-semibold">Имя</p>
            </label>
            <input
              type="text"
              placeholder="Имя"
              className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 transition delay-75 duration-300 focus:outline-none focus:ring-2 ocus:ring-blue-400  focus:border-none md:w-80 "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>
              <p className="text-gray-700 font-semibold mt-3">Ник телеграма</p>
            </label>
            <input
              type="text"
              placeholder="Ник телеграма"
              className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 transition delay-75 duration-300 focus:outline-none focus:ring-2 ocus:ring-blue-400  focus:border-none md:w-80 "
              value={nick}
              onChange={(e) => setNick(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <label>
              <p className="text-gray-700 font-semibold">Телефон</p>
            </label>
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 transition delay-75 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-none md:w-80 "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mt-6 flex justify-center">
            <button onClick={handleSubmit} className="text-blue-400 border border-blue-400 w-full py-2 hover:bg-blue-50 rounded">
              Отправить
            </button>
          </div>
        </div>
      </div>
      <TheFooter />
    </div>

  );
};
