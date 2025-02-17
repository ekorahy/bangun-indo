import Link from 'next/link';

export default function page() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <section className='w-3/4 h-max rounded-2xl overflow-hidden shadow-xl'>
        <div className='bg-orange-50 p-8'>
          <h2 className='text-xl text-orange-400 font-bold'>Welcome</h2>
          <p>Bangunindo Teknusa Jaya</p>
        </div>
        <form action='#' className='grid grid-cols-1 gap-2 p-8'>
          <input
            className='border rounded-lg p-2'
            type='text'
            placeholder='Username'
            required
          />
          <input
            className='border rounded-lg p-2'
            type='password'
            placeholder='Password'
            required
          />
          <div className='flex gap-2 items-center mb-2'>
            <input
              className='border-none'
              type='checkbox'
              id='rememberMe'
            />
            <label htmlFor='rememberMe'>remember me</label>
          </div>
          <button className='bg-orange-400 p-2 rounded-lg mb-2'>Sign In</button>
          <Link className='text-center underline' href='/'>
            Forgot your password?
          </Link>
          <div className='flex justify-between mt-4'>
            <p>
              Don&apos;t have an account yeet?{' '}
              <Link className='text-orange-400 underline' href='/'>
                Create now!
              </Link>
            </p>
            <button className='p-2 border border-orange-400 rounded-lg text-orange-400'>
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
