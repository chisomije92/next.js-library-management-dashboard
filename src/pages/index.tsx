import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div>
        <p className="text-lg">
          Welcome to the Library Dashboard. Use the sidebar to navigate.
        </p>
        <a href="/books" className="text-blue-500 underline">
          Go to Books List
        </a>
      </div>
    </Layout>
  );
}
