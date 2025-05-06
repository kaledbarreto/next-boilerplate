import { Button } from "../components/Button";

export default function Home() {
    return (
      <>
        <main className="font-sans">
          <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Page</h1>
            <p className="text-lg md:text-xl mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <Button>Clique Aqui!</Button>
          </section>
        </main>
      </>
    )
  }