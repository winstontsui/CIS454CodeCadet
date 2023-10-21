import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
    <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
			<h1>Catalog Page</h1>
            <p>Welcome to the Code Cadet Catalog!</p>
            <h2>
            <Link href="/">Back to home</Link>
            </h2>
        </div>
    </>
  );
}