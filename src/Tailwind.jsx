/* eslint-disable @next/next/no-img-element */

export function Button_Outlined() {
  return (
    <button
      className='h-12 border border-slate-200 px-6 font-semibold tracking-wider text-slate-900 hover:bg-slate-100'
      onClick={() => alert('Button clicked')}
    >
      Click me
    </button>
  );
}

export function Button_Rounded() {
  return (
    <button
      className='h-12 rounded-full bg-slate-900 px-6 font-semibold tracking-wider text-white hover:bg-slate-600'
      onClick={() => alert('Button clicked')}
    >
      Click me
    </button>
  );
}

export function Heading1() {
  return <h1 className='mt-6'>Heading 1</h1>;
}

export function Heading2() {
  return <h2 className='mt-4'>Heading 2</h2>;
}

export function Heading3() {
  return <h3 className='mt-2'>Heading 3</h3>;
}

export function Paragraph() {
  return (
    <p className='mt-2 text-sm text-gray-800'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
  );
}

export function Horizontal_Stack() {
  return <div className='flex space-x-4' />;
}

export function Image() {
  return (
    <div className='w-200 h-200 overflow-hidden rounded-lg border border-gray-500'>
      <img
        src='https://source.unsplash.com/random/200x200'
        alt='Random'
        className='h-full w-full object-cover'
      />
    </div>
  );
}

export function Vertical_Stack() {
  return <div className='flex flex-col space-y-4' />;
}

export function Card() {
  const planList = ["Create Contact", "Chat Support", "Email Alert"];

  return (
    <div className="bg-white rounded w-96 p-4 flex flex-col justify-between border shadow">
      <div className="w-full h-56 rounded">
        <img src="https://source.unsplash.com/random/200x200" alt="image" className="w-full h-full rounded" />
      </div>

      <div className="py-4">
        <h2 className="font-bold text-xl">Card Tiltle</h2>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est
          commodi neque officia nobis enim nesciunt optio exercitationem
          blanditiis error.
        </p>
      </div>
    </div>
  );
}

export function Accordion() {
  return (
    <details className="list-none bg-white ">
      <summary className="flex justify-between items-center list-none cursor-pointer p-3">
        <h4>What is Mightymeld</h4>
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </summary>
      <p className=" p-3 rounded">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est
        commodi neque officia dolorem veritatis quas voluptas repellat nisi
        porro ipsa nulla, unde, nobis enim nesciunt optio exercitationem
        blanditiis error.
      </p>
    </details>
  );
}

export function Avatar() {
  return (
    <div className="rounded-full w-16 h-16">
      <img src="https://source.unsplash.com/random/200x200" alt="image" className="rounded-full" />
    </div>
  )
}

export function Profile_Card() {
  return (
    <div className="bg-white rounded flex flex-col items-center justify-center p-4 w-72 shadow">
      <div className="bg-green-700 rounded-full w-16 h-16 flex items-center justify-center">
        <img src="https://source.unsplash.com/random/200x200" alt="image" className="rounded-full" />
      </div>
      <p className="font-semibold text-2xl">Anika Howard</p>
      <div className="font-light">Los Angeles</div>
      <div className="bg-green-100 text-xs py-1 px-3 rounded-full my-2"> Tag  </div>
    </div>
  );
}

export function Floating_Label() {
  return (
    <div className="relative">
      <input
        type="text"
        id="floating_label"
        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white border appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
        placeholder=" "
      />
      <label
        htmlFor="floating_label"
        className="absolute text-sm text-slate-600 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        Label
      </label>
    </div>
  );
}

export function Search() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:border-0 "
        placeholder="Search "
      />
    </div>
  );
}

export function Toggle() {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 ">Toggle me</span>
    </label>
  );
}

export function TextArea() {
  return (
    <textarea
      id="message"
      rows={4}
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
      placeholder="Write your thoughts here..."
    ></textarea>
  );
}
