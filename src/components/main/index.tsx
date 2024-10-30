const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e TailwindCSS'
}: {
  title: string
  description: string
}) => (
  <main className="bg-[#06092b] text-white text-lg h-full font-sans p-12 flex items-center justify-center text-center flex-col">
    <img
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
      className="w-80 mb-8"
    />

    <h1>{title}</h1>
    <p>{description}</p>

    <img
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
      className="w-full max-w-[30rem] mt-12"
    />
  </main>
)

export default Main
