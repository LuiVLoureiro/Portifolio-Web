import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPytorch } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import { FaReact } from "react-icons/fa";


export const NAVIGATION_LINKS = [
  { label: "Projetos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Experiência", href: "#work" },
  { label: "Educação", href: "#education" },
  { label: "Contato", href: "#contact" },
];

export const HERO = {
  name: "LUI LOUREIRO",
  greet: "Olá, Tudo bem? 👋🏻",
  description: (
    <>
    Sou Lui Loureiro, desenvolvedor com experiência avançada em Python e Machine Learning, complementada por um forte domínio de ferramentas full-stack e automação.
    Se procura um profissional comprometido e sempre em busca de resultados, vamos conversar! 🚀
  </>
  )
};

export const PROJECTS = [
  {
    id: 1,
    name: "PokéMatch",
    description:
      "O PokéMatch é uma aplicação web que compara Pokémons usando modelos fuzzy para recomendações personalizadas e a correlação de Pearson para analisar relações entre atributos.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "CineHumor",
    description:
      "CineHumor é uma plataforma inteligente de recomendação de filmes que utiliza análise de sentimento para personalizar sugestões de acordo com o humor e as preferências de cada usuário.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "GeraSom AI",
    description:
      "GeraSom AI é um projeto de inteligência artificial para criar playlists musicais personalizadas, oferecendo uma experiência sonora única e adaptada ao perfil do usuário.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "VigiaValor",
    description:
      "VigiaValor é uma aplicação de monitoramento de preços em tempo real, que utiliza web scraping para identificar mudanças e enviar alertas sobre as melhores ofertas disponíveis.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "GameStorePro",
    description:
      "GameStorePro é uma plataforma de e-commerce para venda de jogos, desenvolvida com Django + React + Stripe, oferecendo uma experiência segura e fluida com integração de sistemas de pagamento confiáveis e protegidos.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Almanaque Ninja",
    description:
      "Almanaque Ninja é uma aplicação desktop sofisticada e elegante desenvolvida com Electron e Python, destinada a fãs de Naruto que desejam explorar e conhecer mais sobre os jutsus (técnicas) do universo ninja",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
  "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <SiPython className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "Python",
    experience: "3+ Anos",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Javascript",
    experience: "2+ Anos",
  },
  {
    icon: <SiDjango className="text-4xl text-green-400 lg:text-5xl" />,
    name: "Django",
    experience: "2+ Anos",
  },
  {
    icon: <SiPytorch className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Pytorch",
    experience: "1+ Ano",
  },
 
  {
    icon: <FaReact className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "React.js",
    experience: "2+ Anos",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "2+ Anos",
  },
  {
    icon: <SiArduino className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Arduino",
    experience: "3+ Anos",
  },
];

export const EXPERIENCES = [
  {
    title: "Desenvolvedor Full-Stack - Freelancer",
    company: "Workana",
    duration: "Junho 2023 - Até o momento",
    description:<>
    Nesta posição como freelancer na plataforma Workana, tenho o privilégio de trabalhar em uma variedade de projetos desafiadores que expandem continuamente meu conhecimento e habilidades como Analista e Desenvolvedor de Software. Especializado na criação de sites e plataformas complexas, como e-commerces robustos, entrego soluções personalizadas e eficientes que atendem às necessidades específicas de cada cliente.
    <br /><br />
    Atividades Realizadas:
    <br /><br />
    - Desenvolvimento de Sites e Plataformas Complexas:
    <br /><br />
    Criação de e-commerces completos com funcionalidades personalizadas, integrando sistemas de pagamento e gerenciamento de estoque.<br />
    Desenvolvimento de sistemas de gestão de conteúdo (CMS) customizados para facilitar a administração de sites pelos clientes.<br /><br />
    - Soluções de Automação:<br /><br />

    Implementação de sistemas de automação utilizando tecnologias como Arduino e Raspberry Pi.<br />
    Integração entre hardware e software para otimizar processos e aumentar a produtividade dos clientes.<br /><br />
    - Web Scraping Avançado:<br /><br />

    Desenvolvimento de scripts para extração de dados de diferentes fontes web.<br />
    Tratamento e limpeza dos dados extraídos para garantir a qualidade e a integridade das informações, permitindo análises estratégicas.<br /><br />
    - Boas Práticas de Desenvolvimento:<br /><br />

    Aplicação de testes unitários rigorosos para assegurar a funcionalidade e a confiabilidade das aplicações.<br />
    Implementação de princípios sólidos de segurança da informação, protegendo os dados dos clientes e usuários finais.<br />
    </>
  },
  {
    title: "Desenvolvedor Full-Stack - Estágio",
    company: "Centrão Digital - Parceiro Vivo",
    duration: "Março 2024 - Maio 2024",
    description:<>
      Nesta posição como estagiário de desenvolvimento no Centrão Digital, fui responsável por atuar como desenvolvedor full-stack em aplicações utilizando Python, React.js e SQL, garantindo a entrega de tarefas com excelência e dentro dos prazos estabelecidos.
      <br /><br />
      Atividades Realizadas:
      <br /><br />
      - Web Scraping: <br /><br />
      
      Desenvolvimento de scripts para extração de dados de diferentes fontes web. <br />
      Tratamento e limpeza dos dados extraídos para garantir a qualidade e a integridade das informações.
      <br /><br />

      - Análise de Dados:<br /><br />
      Aplicação de técnicas de análise de dados para identificar padrões e insights relevantes.<br />
      Criação de relatórios e visualizações para suportar a tomada de decisões.<br /> <br />

      - Manipulação de Banco de Dados:<br /><br />
      Gerenciamento de bancos de dados relacionais.<br />
      Execução de consultas SQL complexas para manipulação e extração de dados.<br />
      Otimização de desempenho de consultas e manutenção de integridade dos dados.<br />
    </>
  },
  {
    title: "Trilha de BackEnd - Bolsista",
    company: "Compass UOL",
    duration: "Fevereiro 2021 - Junho 2021",
    description: <>
    Fui selecionado para o Programa de Bolsas da Compass.uol, onde tive a oportunidade de aprimorar minhas habilidades em desenvolvimento de software por meio de cursos oferecidos pela Alura. 
    <br /><br />Treinamento:
    <br /><br />
    - Git e GitHub
    <br />
    - Banco de Dados Relacionais e Não Relacionais
    <br />
    - Introdução ao JavaScript
    <br />
    - Node.js
    <br />
    - API Rest Full com Express.js
    <br />
    - Lógica de Programação

    <br /><br />
    Projetos Práticos:

    <br /><br />
    
    Aplicação dos conhecimentos adquiridos em projetos práticos.
    <br />
    Implementação de APIs utilizando Node.js e Express.js.
    <br />
    Desenvolvimento de sistemas utilizando banco de dados relacionais e não relacionais.

    <br /><br />
    
    Metodologias Ágeis:
    <br /><br />

    Participação em sprints e uso de Scrum para gerenciamento de projetos.
    <br />
    Colaboração em equipe para desenvolvimento e entrega de tarefas.
    </>
  },
];

export const EDUCATION = [
  {
    degree: "Curso Superior (CTS) em Análise e Desenvolvimento de Sistemas",
    institution: "Universidade da Amazônia",
    duration: "Fevereiro 2022 - Dezembro 2023",
    description:
      "Sou graduado em Análise e Desenvolvimento de Sistemas pela UNAMA, com sólida formação em programação, arquitetura de sistemas e Machine Learning. Tenho experiência prática em desenvolvimento full-stack, desde a modelagem de banco de dados e frameworks back-end até a criação de interfaces front-end. Minha atuação é focada em aplicar soluções tecnológicas inovadoras que agreguem valor aos negócios, com uma abordagem voltada para a eficiência e escalabilidade, seja desenvolvendo aplicações robustas ou integrando inteligência artificial de maneira estratégica em diversos projetos.",
  },
  {
    degree: "Pós-graduação Lato Sensu - Inteligência Artificial e Machine Learning",
    institution: "Anhanguera Educacional",
    duration: "Maio 2024 - Março 2025",
    description:
      "Atualmente cursando uma pós-graduação em Inteligência Artificial e Machine Learning pela Anhanguera Educacional, onde aprofundo meus conhecimentos em técnicas avançadas de análise e modelagem preditiva, deep learning e processamento de linguagem natural. Com uma abordagem prática e teórica, aplico linguagens de programação voltadas para ciência de dados, como Python com Spark e R, para desenvolver soluções robustas em IA, incluindo aplicações em robótica e visão computacional. Meu objetivo é utilizar essa expertise para criar tecnologias que transformem dados complexos em insights valiosos, otimizando processos e trazendo inovação para os negócios.",
  },
  {
    degree: "Bacharelado em Física",
    institution: "Uninter",
    duration: "Fevereiro 2023 - Dezembro 2027",
    description:
      "Atualmente cursando Bacharelado em Física na UNINTER, com previsão de conclusão em 2027. Possuo experiência sólida em áreas fundamentais da física, como mecânica, eletromagnetismo, óptica, termodinâmica, além de habilidades em cálculo diferencial e equações diferenciais. Com foco em sistemas físicos complexos e análise matemática avançada, estou preparado para aplicar esses conhecimentos em soluções práticas e inovadoras.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/lui-loureiro-892845233/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/loureirodev/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/LuiVLoureiro",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },

];
