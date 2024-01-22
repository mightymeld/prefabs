/* eslint-disable @next/next/no-img-element */

export function Accordion() {
  return (
    <div>
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
      <details className="list-none bg-white ">
        <summary className="flex justify-between items-center list-none cursor-pointer p-3">
          <h4>Why Mightymeld</h4>
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
    </div>
  );
}

export function Accordion_2() {
  return (
    <div className="m-2 space-y-2">
      <h1 className="font-bold text-3xl my-4 text-center text-slate-700">
        FAQ
      </h1>
      <div
        className="group flex flex-col gap-2 rounded bg-sky-600 px-4 py-2 text-white"
        tabIndex={1}
      >
        <div className="flex cursor-pointer items-center justify-between">
          <span> What is Prefabs </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
          />
        </div>
        <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>

      <div
        className="group flex flex-col gap-2 rounded bg-sky-600 px-4 py-2 text-white"
        tabIndex={2}
      >
        <div className="flex cursor-pointer items-center justify-between">
          <span> How can Prefabs Help </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
          />
        </div>
        <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>

      <div
        className="group flex flex-col gap-2 rounded bg-sky-600 px-4 py-2 text-white"
        tabIndex={3}
      >
        <div className="flex cursor-pointer items-center justify-between">
          <span> Why use Prefabs </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
          />
        </div>
        <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  );
}

export function Alert_Error() {
  return (
    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 flex items-center justify-between" role="alert">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          width="16" height="16"
        >
          <path
            fill-rule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span >Sorry, something went wrong please try again.</span>
      </div>
      <button type="button" className="text-red-800 rounded-lg inline-flex items-center justify-center h-8 w-8 " aria-label="Close">
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
  );
}

export function Alert_Notification() {
  return (
    <div aria-live="assertive" className="pointer-events-none inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
      <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="flex items-start p-4">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-slate-900">Successful</p>
            <p className="mt-1 text-sm text-slate-500">Your request has been updated.</p>
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button type="button" className="inline-flex rounded-md bg-white text-slate-400 hover:text-slate-500 focus:outline-none">
              <span className="sr-only">Close</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Alert_Success() {
  return (
    <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 flex items-center justify-between" role="alert">
      <div className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#166534" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z" /></svg>
        <span >Successful, your request has been updated</span>
      </div>
      <button type="button" className="text-green-800 rounded-lg inline-flex items-center justify-center h-8 w-8 " aria-label="Close">
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
  );
}

export function Alert_Warning() {
  return (
    <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 flex items-center justify-between" role="alert">
      <div className="flex items-center gap-2">
        <svg fill="#854d0e" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          width="16" height="16" viewBox="0 0 478.125 478.125"
          xmlSpace="preserve">
          <g>
            <g>
              <g>
                <circle cx="239.904" cy="314.721" r="35.878" />
                <path d="M256.657,127.525h-31.9c-10.557,0-19.125,8.645-19.125,19.125v101.975c0,10.48,8.645,19.125,19.125,19.125h31.9
    c10.48,0,19.125-8.645,19.125-19.125V146.65C275.782,136.17,267.138,127.525,256.657,127.525z"/>
                <path d="M239.062,0C106.947,0,0,106.947,0,239.062s106.947,239.062,239.062,239.062c132.115,0,239.062-106.947,239.062-239.062
    S371.178,0,239.062,0z M239.292,409.734c-94.171,0-170.595-76.348-170.595-170.596c0-94.248,76.347-170.595,170.595-170.595
    s170.595,76.347,170.595,170.595C409.887,333.387,333.464,409.734,239.292,409.734z"/>
              </g>
            </g>
          </g>
        </svg>
        <span>Warning alert! You have been warned</span>
      </div>
      <button type="button" className="text-yello-800 rounded-lg inline-flex items-center justify-center h-8 w-8 " aria-label="Close">
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
  );
}

export function Avatar() {
  return (
    <div className="rounded-full w-16 h-16">
      <img src="https://i.pravatar.cc/100?img=5" alt="avatar" className="rounded-full" />
    </div>
  )
}

export function Button() {
  return (
    <button className="py-2 px-4  bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out  text-white text-sm rounded shadow">
      Button
    </button>
  );
}

export function Button_Large() {
  return (
    <button className="bg-sky-600 transition duration-150 ease-in-out hover:bg-sky-700 lg:text-xl rounded text-white px-10 py-4 text-sm">Button</button>
  );
}

export function Button_Outlined() {
  return (
    <button
      className="py-2 px-4 rounded border border-sky-700 hover:border-sky-600 transition duration-300 ease-in-out  text-sky-800 text-sm"
    >
      Button
    </button>
  );
}

export function Button_Rounded() {
  return (
    <button
      className="py-2 px-4 rounded-full bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out  text-white shadow text-sm"
    >
      Button
    </button>
  );
}

export function Button_Icon_Left() {
  return (
    <button
      className="h-12 px-4 py-2 flex rounded items-center gap-2 bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out text-white text-sm"
    >
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24" fill="white" ><path d="M18.302,7.121c-1.349-3.121-4.38-5.121-7.802-5.121C5.813,2,2,5.813,2,10.5c0,.591,.061,1.18,.181,1.754-1.354,.871-2.181,2.369-2.181,3.996,0,2.619,2.131,4.75,4.75,4.75h12.25c3.86,0,7-3.141,7-7,0-3.355-2.43-6.263-5.698-6.879Zm-1.302,12.879H4.75c-2.068,0-3.75-1.683-3.75-3.75,0-1.387,.761-2.656,1.987-3.311l.346-.186-.098-.38c-.157-.609-.236-1.239-.236-1.874,0-4.136,3.364-7.5,7.5-7.5,3.103,0,5.843,1.865,6.98,4.752l.106,.27,.287,.042c2.923,.426,5.126,2.978,5.126,5.937,0,3.309-2.691,6-6,6Zm-1.854-7.439l.707,.707-3.293,3.293c-.292,.292-.676,.438-1.061,.438s-.768-.146-1.061-.438l-3.293-3.293,.707-.707,3.146,3.146v-7.707h1v7.707l3.146-3.146Z" /></svg>
      <span >Download</span>
    </button>
  );
}

export function Button_Icon_Right() {
  return (
    <button
      className="h-12 px-4 py-2 rounded flex items-center gap-2 bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out text-white text-sm"
    >
      <span >Download</span>
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24" fill="white" ><path d="M18.302,7.121c-1.349-3.121-4.38-5.121-7.802-5.121C5.813,2,2,5.813,2,10.5c0,.591,.061,1.18,.181,1.754-1.354,.871-2.181,2.369-2.181,3.996,0,2.619,2.131,4.75,4.75,4.75h12.25c3.86,0,7-3.141,7-7,0-3.355-2.43-6.263-5.698-6.879Zm-1.302,12.879H4.75c-2.068,0-3.75-1.683-3.75-3.75,0-1.387,.761-2.656,1.987-3.311l.346-.186-.098-.38c-.157-.609-.236-1.239-.236-1.874,0-4.136,3.364-7.5,7.5-7.5,3.103,0,5.843,1.865,6.98,4.752l.106,.27,.287,.042c2.923,.426,5.126,2.978,5.126,5.937,0,3.309-2.691,6-6,6Zm-1.854-7.439l.707,.707-3.293,3.293c-.292,.292-.676,.438-1.061,.438s-.768-.146-1.061-.438l-3.293-3.293,.707-.707,3.146,3.146v-7.707h1v7.707l3.146-3.146Z" /></svg>
    </button>
  );
}

export function Button_Loading() {
  return (
    <button
      className="h-12 px-4 py-2 rounded flex items-center gap-2 bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out text-white text-sm"
    >
      <div className="ml-2 animate-spin inline-block w-5 h-5 rounded-full border-t " ></div>
      Loading
    </button>
  );
}

export function Card() {
  return (
    <div className="bg-white rounded w-80 p-4 flex flex-col justify-between border shadow">
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

export function Checkbox() {
  return (
    <input type="checkbox" />
  );
}

export function Dialog() {
  return (
    <div className="relative flex flex-col gap-4 m-4 max-w-[450px] rounded-lg bg-white text-base leading-relaxed text-sky-slate-500 antialiased shadow-2xl p-4">
      <div className="flex shrink-0 items-center text-2xl font-semibold leading-snug text-sky-slate-900 antialiased">
        Dialog Title
      </div>
      <div className="relative text-base leading-relaxed text-sky-slate-500 antialiased">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        voluptas ducimus eaque commodi nam voluptates tenetur minima.
      </div>
      <div className="flex gap-2 shrink-0 flex-wrap items-center justify-end text-sky-slate-500">
        <button
          className="py-2 rounded transition duration-300 ease-in-out px-6 font-semibold text-sm  text-red-800"
        >
          Cancel
        </button>
        <button className="py-2 bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out px-6 font-semibold  text-white text-sm rounded shadow">
          Confirm
        </button>
      </div>
    </div>
  );
}

export function Divider_With_Text() {
  return (
    <div className="flex items-center">
      <span className="h-px flex-1 bg-black"></span>
      <span className="shrink-0 px-6">Divider with text</span>
      <span className="h-px flex-1 bg-black"></span>
    </div>
  );
}

export function Feature_Card() {
  return (
    <div className="bg-sky-100 py-14">
      <h1 className="text-sky-800 text-4xl text-center font-bold">
        Features
      </h1>
      <div className="md:flex md:justify-center md:space-x-8 md:px-14">
        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <img
              className="w-64"
              src="https://source.unsplash.com/random/200x200"
              alt=""
            />
            <div className="py-4 text-sky-600 text-center flex flex-col gap-4">
              <h1 className="text-xl font-bold">Easy Integration</h1>
              <p className=" text-slate-600">
                Integrate our prefab components effortlessly into your existing projects, enhancing functionality without the hassle.
              </p>
              <button
                className="py-2 rounded-full bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out px-8 font-semibold  text-white shadow"
              >
                MORE
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <img
              className="w-64"
              src="https://source.unsplash.com/random/200x200"
              alt=""
            />
            <div className="py-4 text-sky-600 text-center flex flex-col gap-4">
              <h1 className="text-xl font-bold">Diverse Selection</h1>
              <p className=" text-slate-600">
                Integrate our prefab components effortlessly into your existing projects, enhancing functionality without the hassle.
              </p>
              <button
                className="py-2 rounded-full bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out px-8 font-semibold  text-white shadow"
              >
                MORE
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <img
              className="w-64"
              src="https://source.unsplash.com/random/200x200"
              alt=""
            />
            <div className="py-4 text-sky-600 text-center flex flex-col gap-4">
              <h1 className="text-xl font-bold">Optimized Performance</h1>
              <p className=" text-slate-600">
                Maintain high performance standards with components that are optimized for speed and efficiency
              </p>
              <button
                className="py-2 rounded-full bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out px-6 inline font-semibold  text-white shadow"
              >
                MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Floating_Header() {
  return (
    <header className="flex flex-col rounded-3xl">
      <nav className="backdrop-blur-3xl text-sm border bg-black/5 rounded-2xl text-neutral-500 px-6 py-4 left-1/2 transform -translate-x-1/2 w-11/12">
        <div className="flex justify-between items-center">
          <h1 className="uppercase font-bold text-black">Logo</h1>
          <div className=" gap-6 font-semibold text-black hidden lg:flex">
            <button className="border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out">
              Services
            </button>
            <button className="border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out">
              About
            </button>
            <button className="border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out">
              Career
            </button>
          </div>
          <div >
            <button className="border py-2 px-4 bg-slate-600 hover:bg-slate-700 text-white rounded hidden lg:block">
              Join Community
            </button>
            <button className="lg:hidden">
              <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path fill="#000000" fill-rule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm-4 4a1 1 0 100-2H6a1 1 0 100 2h8zm5 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-5 5a1 1 0 100-2H6a1 1 0 100 2h8z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="p-20">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <button>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-600">
              LOGO
            </span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3">
          <div>
            <h3 className="mb-6 text-sm font-semibold text-slate-900 uppercase "> Resources </h3>
            <ul>
              <li className="mb-4">Blog</li>
              <li>Prefabs</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-slate-900 uppercase "> Socials </h3>
            <ul>
              <li className="mb-4">Github</li>
              <li>Discord</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-slate-900 uppercase ">Company </h3>
            <ul>
              <li className="mb-4">Privacy Policy</li>
              <li >Terms &amp; Conditions</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-slate-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-slate-600 sm:text-center">
          © 2024 LOGO. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <button
            className="text-slate-600 hover:text-slate-800 "
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            className="text-slate-600 hover:text-slate-800"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            className="text-slate-600 hover:text-slate-800"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </button>
          <button
            className="text-slate-600 hover:text-slate-800"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export function Floating_Label() {
  return (
    <div className="relative">
      <input
        type="text"
        id="floating_label"
        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-slate-900 bg-white border appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
        placeholder=" "
      />
      <label
        htmlFor="floating_label"
        className="absolute text-sm text-slate-600 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        User Name
      </label>
    </div>
  );
}

export function Header() {
  return (
    <header className="p-4 bg-sky-700">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-50">LOGO</h1>
        <div className=" gap-10 text-slate-50 hidden lg:flex">
          <button className="flex items-center space-x-2"> Service </button>
          <button className="flex items-center space-x-2"> About</button>
          <button className="flex items-center space-x-2"> Career </button>
        </div>
        <div className="relative rounded-full hidden lg:flex">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-slate-500"
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
            id="search"
            className="block w-full py-2 px-4 pl-10 text-sm text-slate-900 border border-slate-300 box-border outline-none rounded-full bg-slate-50 "
            placeholder="Search "
          />
        </div>
        <button className="lg:hidden">
          <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path fill="#fff" fill-rule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm-4 4a1 1 0 100-2H6a1 1 0 100 2h8zm5 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-5 5a1 1 0 100-2H6a1 1 0 100 2h8z" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export function Heading1() {
  return <h1 className="text-6xl font-bold font-serif" >Heading 1</h1>;
}

export function Heading2() {
  return <h2 className="text-5xl font-bold font-serif" >Heading 2</h2>;
}

export function Heading3() {
  return <h3 className="text-4xl font-bold font-serif" >Heading 3</h3>;
}

export function Heading4() {
  return <h4 className="text-3xl font-bold font-serif" >Heading 4</h4>;
}

export function Heading5() {
  return <h5 className="text-2xl font-semibold font-serif" >Heading 5</h5>;
}

export function Heading6() {
  return <h6 className="text-xl font-medium font-serif" >Heading 6</h6>;
}

export function Hero() {
  return (
    <section className="bg-slate-100">
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-slate-800 font-extrabold leading-7 md:leading-10">
            Elevate your web development experience with Tailwind Prefabs
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-slate-500 font-normal text-center text-sm sm:text-lg">The seamless component building blocks for effortlessly crafting your perfect web application </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <button className="px-10 py-4 rounded border bg-sky-600 transition duration-150 ease-in-out hover:bg-sky-700 text-white test-sm lg:text-xl">Get Started</button>
          <button className="px-10 py-4 rounded border border-sky-700 hover:border-sky-600 transition duration-150 ease-in-out text-sky-800 test-sm lg:text-xl">Book Demo</button>
        </div>
      </div>
    </section>
  );
}

export function Icon_Facebook() {
  return (
    <button className="text-slate-600 hover:text-slate-800">
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
}

export function Icon_Instagram() {
  return (
    <button className="text-slate-600 hover:text-slate-800">
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
}

export function Icon_X() {
  return (
    <button className="text-slate-600 hover:text-slate-800">
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
      </svg>
    </button>
  );
}

export function Icon_Github() {
  return (
    <button className="text-slate-600 hover:text-slate-800">
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
}

export function Image() {
  return (
    <div className='w-200 h-200 overflow-hidden rounded-lg border border-slate-500'>
      <img
        src='https://source.unsplash.com/random/200x200'
        alt='Random'
        className='h-full w-full object-cover'
      />
    </div>
  );
}

export function Input() {
  return (
    <input type="text" id="input" className="block w-full px-3 py-2 text-slate-900 border border-slate-300 rounded outline-sky-600" />
  );
}

export function Notice_Modal() {
  return (
    <div className="pointer-events-none inset-x-0 px-6 pb-6">
      <div className="pointer-events-auto mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-900/10">
        <p className="text-sm leading-6 text-slate-900">This site uses Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat excepturi veniam, eligendi inventore quis maxime quas totam. Atque delectus facilis nisi ea optio. Et nemo, nostrum quasi mollitia est minus?</p>
        <div className="mt-4 flex items-center">
          <button className="py-2 bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out px-6 font-semibold  text-white text-sm rounded shadow">
            Accept
          </button>
          <button
            className="py-2 rounded transition duration-300 ease-in-out px-6 font-semibold  text-slate-800 text-sm"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export function Paragraph() {
  return (
    <p className='mt-2 text-sm text-slate-800'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
  );
}

export function Pricing_Card() {
  return (
    <div className="bg-slate-100 min-h-screen py-12 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 w-72">
          <div className="p-1 bg-sky-200" />
          <div className="p-8">
            <h2 className="text-3xl font-bold text-slate-800">Pro</h2>
            <p className="text-slate-600 my-2">Ideal For Large Businesses</p>
            <p className="text-4xl font-bold text-slate-800 my-6">$20</p>
            <ul className="text-sm text-slate-600 mb-6">
              <li className="mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Unlimited Users
              </li>
              <li className="mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Premiun Features
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                24/7 Support
              </li>
            </ul>
          </div>
          <div className="p-4">
            <button
              className="py-2 rounded-full bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out px-8 font-semibold  text-white shadow w-full"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Profile_Card() {
  return (
    <div className="relative p-4 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-slate-700 shadow-md">
      <div className="relative h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-slate-700 shadow-lg">
        <img src="https://source.unsplash.com/random/200x200" className="w-full h-full" alt="profile-picture" />
      </div>
      <div className="p-6 text-center">
        <h4 className="mb-2 block  text-2xl font-semibold leading-snug tracking-normal text-sky-slate-900">
          ELizabeth Holmes
        </h4>
        <p className="block bg-clip-text  text-base font-medium leading-relaxed ">
          Detective
        </p>
      </div>
      <div className="flex gap-4 sm:justify-center">
        <button
          className="text-slate-500 hover:text-slate-900 "
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          className="text-slate-500 hover:text-slate-900"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          className="text-slate-500 hover:text-slate-900"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
          </svg>
        </button>
        <button
          className="text-slate-500 hover:text-slate-900"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export function Progress_Bar() {
  return (
    <div>
      <span id="ProgressLabel" className="sr-only">Loading</span>
      <span
        role="progressbar"
        aria-labelledby="ProgressLabel"
        aria-valuenow={80}
        className="block rounded-full bg-slate-200"
      >
        <span className="block h-4 rounded-full bg-sky-600 text-center text-[10px]/4" style={{ width: "80%" }}>
          <span className="font-bold text-white"> 80% </span>
        </span>
      </span>
    </div>
  );
}

export function Search() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-slate-500"
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
        id="search"
        className="block w-full px-4 py-3 pl-10 text-sm text-slate-900 border border-slate-300 rounded bg-slate-50 outline-none box-border "
        placeholder="Search "
      />
    </div>
  );
}

export function Search_Rounded() {
  return (
    <div className="relative rounded-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-slate-500"
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
        id="search"
        className="block w-full px-4 py-3 pl-10 text-sm text-slate-900 border border-slate-300 rounded-full bg-slate-50 outline-none box-border "
        placeholder="Search "
      />
    </div>
  );
}

export function Select() {
  return (
    <div className="relative z-20 bg-slate-50">
      <select className="relative z-20 w-full appearance-none rounded border border-slate-300 bg-slate-50 py-3 px-5 outline-none transition text-sm">
        <option value="">Select your country</option>
        <option value="">USA</option>
        <option value="">UK</option>
        <option value="">Canada</option>
      </select>
      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
        <svg
          className="fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
              fill=""
            ></path>
          </g>
        </svg>
      </span>
    </div>
  );
}

export function TextArea() {
  return (
    <textarea
      id="message"
      rows={4}
      className="block p-3 w-full text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-300 outline-sky-600 "
      placeholder="Write your thoughts here..."
    ></textarea>
  );
}

export function Subscription_Section() {
  return (
    <section className="bg-sky-600 py-10 w-full px-4 flex flex-col items-center justify-center relative ">
      <h1 className="text-4xl font-semibold leading-9 text-white text-center">
        Stay Updated!
      </h1>
      <p className="text-base leading-normal text-center text-white mt-6">
        Subscribe to your newsletter to get the latest update on your
        favourite product
      </p>
      <div className="border border-white flex flex-col sm:flex-row items-center w-full lg:w-5/12 mt-12 ">
        <input
          className="text-base w-full outline-none leading-none text-white px-3 py-2 lg:py-3 bg-transparent"
          placeholder="Email Address"
        />
        <button className="focus:outline-none w-full bg-white px-3 py-2 lg:py-3 hover:bg-opacity-75">
          Subscribe
        </button>
      </div>
    </section>
  );
}

export function Success() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mt-8 h-16 w-16 text-sky-600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
      <h1 className="mt-2 text-2xl font-bold text-slate-500">
        Success
      </h1>
      <p className="my-4 text-sm text-slate-500">
        Congratulations! Your request is successful
      </p>
      <button className="py-2 bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out px-6 font-semibold  text-white text-sm text-center my-4 rounded shadow">
        Close
      </button>
    </div>
  );
}

export function Testimonial_Card() {
  return (
    <div className="px-3 border shadow rounded w-96">
      <div className="w-full p-5 text-slate-800  mb-6">
        <div className="w-full flex mb-4 items-center">
          <div className="overflow-hidden rounded-full w-10 h-10 bg-slate-50 border border-slate-200">
            <img src="https://i.pravatar.cc/100?img=5" alt="profile image" />
          </div>
          <div className="flex-grow pl-3">
            <h6 className="font-bold text-sm uppercase text-slate-600">Elizabeth Holmes.</h6>
            <p className="text-sm text-slate-600">Customer Representative.</p>
          </div>
        </div>
        <div className="w-full">
          <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-slate-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-slate-400 ml-1">"</span></p>
        </div>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <div className="bg-white p-6 w-full">
      <div className="space-y-6 border-l-2 border-dashed">
        <div className="relative w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-sky-600">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
          </svg>
          <div className="ml-6">
            <h4 className="font-bold text-sky-600">Step 1</h4>
            <p className="mt-2 max-w-screen-sm text-sm text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet accusantium cum et numquam expedita repellendus a, animi exercitationem totam nulla enim quia, molestias ab tenetur, temporibus doloremque praesentium hic.</p>
          </div>
        </div>
        <div className="relative w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-sky-600">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
          </svg>
          <div className="ml-6">
            <h4 className="font-bold text-sky-600">Step 2</h4>
            <p className="mt-2 max-w-screen-sm text-sm text-slate-500">Sapiente amet accusantium cum et numquam expedita repellendus a, animi exercitationem totam nulla enim quia, molestias ab tenetur, temporibus doloremque praesentium hic.</p>
          </div>
        </div>
        <div className="relative w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="grey" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-sky-600">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
          </svg>
          <div className="ml-6">
            <h4 className="font-bold text-slate-600">Step 3</h4>
            <p className="mt-2 max-w-screen-sm text-sm text-slate-500">Sapiente amet accusantium cum et numquam expedita repellendus a, animi exercitationem totam nulla enim quia, molestias ab tenetur, temporibus doloremque praesentium hic.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Toggle() {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
      <span className="ml-3 text-sm font-medium text-slate-900 ">Toggle me</span>
    </label>
  );
}

export function Upload_File() {
  return (
    <div className="flex items-center justify-center w-full">
      <label htmlFor="upload-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-10 h-10 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          <p className=" text-sm text-slate-500 ">Click to upload</p>
          <p className="text-sm text-slate-500 ">or drag and drop file here</p>
        </div>
        <input id="upload-file" type="file" className="hidden" />
      </label>
    </div>
  );
}