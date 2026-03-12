import Link from "next/link";

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center  font-sans bg-white text-gray-900'>
      <div>
        <h1 className='text-4xl font-bold'>
          Welcome to Hubsell Frontend Challenge!
        </h1>
        <br />
        <h2 className='text-center'>
          For Workflow Click here Navigate
          <Link
            href={"/workflow"}
            className='underline ml-2 text-blue-600 hover:text-blue-800 visited:text-purple-600'
          >
            Workflow
          </Link>
        </h2>
      </div>
    </div>
  );
}
