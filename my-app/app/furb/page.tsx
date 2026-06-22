import Image from 'next/image';

export default function FurbPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Sobre a FURB</h1>
      
      <Image 
        src="/furb.jpg" 
        alt="Campus da FURB" 
        width={600} 
        height={400} 
      />

      <p>
        A FURB Concursos, desde 1986, conduz processos seletivos e concursos públicos. São mais de 500 concursos já realizados, 400 mil candidatos... Os concursos são realizados com transparência, sigilo, segurança e qualidade, contando com uma equipe altamente especializada e a credibilidade.
        <br /><br />
        
        <b>Cursos</b><br />
        <b>Graduação</b><br />
        Mais de 40 cursos de graduação, abrangendo todas as áreas do conhecimento
        <br /><br />
        
        <b>Doutorado e Mestrado</b><br />
        Cursos presenciais que desenvolvem pesquisas e o aprimoramento profissional
        <br /><br />
        
        <b>Especialização</b><br />
        Formação avançada para qualificação, atualização e destaque no mercado
        <br /><br />
        
        <b>Curta Duração</b><br />
        Ideais para rápido desenvolvimento profissional, de recém-formados a líderes
        <br /><br />
        
        <b>Ensino Médio Etevi</b><br />
        Aprendizado dinâmico com vivência real dentro da Universidade
        <br /><br />
        
        <b>Cursos Técnicos Catec</b><br />
        Cursos técnicos gratuitos voltados a estudantes do ensino médio
        <br /><br />
        
        <b>FURB Idiomas</b><br />
        Cursos práticos e dinâmicos, focados em comunicação, trabalho e viagens
        <br /><br />
        
        <b>Idiomas sem Fronteiras</b><br />
        Curso gratuito com foco em proficiência linguística e internacionalização
      </p>
    </main>
  );
}