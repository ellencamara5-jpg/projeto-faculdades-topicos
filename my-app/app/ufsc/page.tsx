import Image from 'next/image';

export default function UfscPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Sobre a UFSC</h1>
      
      {}
      <Image 
        src="/ufsc.jpg" 
        alt="Campus da UFSC Blumenau" 
        width={600} 
        height={400} 
        style={{ marginBottom: '1.5rem', borderRadius: '8px' }}
      />

      <p>O campus da UFSC em Blumenau iniciou suas atividades em 2014. São mais de mil alunos e cerca de 200 servidores, que formam uma comunidade que tem muito a ensinar e a aprender com você, e vão te acompanhar nessa incrível jornada que é a vida acadêmica.</p>
      
      <p>
        O aluno da UFSC Blumenau tem a possibilidade de participar de projetos de pesquisa e de extensão nas mais diversas áreas do conhecimento. Você aprende a matéria, discute ética, cidadania, coletividade e tem muita aula prática. O objetivo é formar profissionais com o perfil adequado para as exigências do mercado de trabalho, além de preparar os alunos para serem cidadãos conscientes do seu papel na sociedade.
        <br /><br />
        
        <b>Sobre os Cursos</b><br />
        No campus Blumenau são ofertados seis cursos de graduação: Engenharia Têxtil, Engenharia de Controle e Automação, Engenharia de Materiais, Licenciatura em Matemática, Licenciatura em Química e Bacharelado em Química. Também são oferecidos dois mestrados profissionais – Ensino de Física e Matemática; e dois mestrados acadêmicos – Engenharia Têxtil e Nanociência, Processos e Materiais Avançados.
        <br /><br />
      </p>
    </main>
  );
}