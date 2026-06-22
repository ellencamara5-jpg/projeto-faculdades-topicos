import Image from 'next/image';

export default function AboutPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Sobre Nós</h1>
      
      {}
      <Image 
        src="/blumenau.jpg" 
        alt="Guia Universitário de Blumenau" 
        width={600} 
        height={400} 
        style={{ marginBottom: '1.5rem', borderRadius: '8px' }}
      />

      <p>Aqui está o seu guia universitário em Blumenau-SC! Aqui você encontra as melhores indicações de cursos superiores na cidade.</p>
    </main>
  );
}