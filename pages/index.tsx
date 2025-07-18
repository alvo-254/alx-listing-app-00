import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  const handleClick = () => alert('Button clicked!');

  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <main className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Welcome to ALX Listing App</h1>

        <Card
          title="Luxury Apartment"
          description="A cozy 2-bedroom apartment in Nairobi"
          image="/assets/house1.jpg"
        />

        <div className="mt-4">
          <Button label="Book Now" onClick={handleClick} />
        </div>
      </main>
    </>
  );
}
