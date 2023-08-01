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
