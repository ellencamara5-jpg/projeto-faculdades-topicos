import Image from 'next/image';

export default function IfcPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Sobre o Ensino Superior no IFC Blumenau</h1>
      
      {}
      <Image 
        src="/ifc.jpg" 
        alt="Campus do IFC Blumenau" 
        width={600} 
        height={400} 
        style={{ marginBottom: '1.5rem', borderRadius: '8px' }}
      />

      <p>  
        <b>Curso de Bacharelado em Ciência da Computação</b><br />
        Forma de ensino: superior<br />
        Escolaridade exigida: ensino médio completo<br />
        Duração: 4 anos<br />
        Período: integral (tarde e noite)<br />
        Modalidade: presencial<br />
        Formas de ingresso: Enem/Sisu; cadastro de reserva, vestibular unificado e editais de transferência.
        <br /><br />
        
        <b>Bacharel em Engenharia Elétrica ou Engenheiro Eletricista</b><br />
        Forma de ensino: superior<br />
        Escolaridade exigida: ensino médio completo<br />
        Duração: 5 anos<br />
        Período: noturno<br />
        Modalidade: presencial<br />
        Formas de ingresso: Enem/Sisu; cadastro de reserva, vestibular unificado e editais de transferência.
        <br /><br />
        
        <b>Curso de Licenciatura em Pedagogia</b><br />
        Modalidade: superior<br />
        Duração: 4 anos<br />
        Período: noturno<br />
        Perfil do Egresso: forma o/a professor/a para atuar na Educação Infantil e nos Anos Iniciais do Ensino Fundamental, nas atividades de gestão e de apoio pedagógico.<br />
        Formas de ingresso: Enem/Sisu; cadastro de reserva, vestibular unificado e editais de transferência.
        <br /><br />
        
        <b>Curso superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)</b><br />
        Forma de ensino: superior<br />
        Escolaridade exigida: ensino médio completo<br />
        Duração: 3 anos<br />
        Período: noturno<br />
        Modalidade: presencial<br />
        Formas de ingresso: Enem/Sisu e/ou editais de transferência.
        <br /><br />
      </p>
    </main>
  );
}