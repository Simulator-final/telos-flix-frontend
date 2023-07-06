TelosFlix



📑 Sobre o Projeto

Este projeto consiste em uma plataforma de streaming desenvolvida durante o Bootcamp da Telos Conecta. A TelosFlix foi o desafio final do Bootcamp, desenvolvido por 5 pessoas(front e back-end) e, posteriormente, aprensentado para empresas e recrutadores. 

O objetivo principal do projeto é construir uma aplicação CRUD com as principais funcionalidades das plataformas de streaming de vídeo, como categorias por gênero de filme, busca por filmes e avaliação. Além disso, também há funcionalidades como a criação de novos usuários e login.



💼 Regras de Negócio

1. Player de vídeo:
   A reprodução dos títulos só será permitida, caso o usuário esteja logado. Caso o usuário tenha acesso ao URL do filme, mas não esteja logado ele será redirecionado ao modal de login. 
2. Avaliação:
   A feature de avaliação com estrelas e comentários no filme só será habilitada para usuários logados.



✨ Decisões Tomadas

Durante o desenvolvimento do projeto, foram tomadas algumas decisões importantes para garantir a qualidade, organização e eficiência do código. Abaixo estão as decisões tomadas e o motivo pelo qual foram escolhidas.

1. Material UI:
   O Material UI é uma biblioteca de componentes UI para React baseada no design do Material Design. Ela oferece uma ampla variedade de componentes estilizados prontos para uso, como botões, caixas de diálogo, barras de navegação, entre outros. No projeto, o Material UI foi utilizado para criar a aparência visual e estilização de alguns componentes da interface.
2. Context API:
   A Context API é uma funcionalidade do React que permite o compartilhamento de estado entre componentes sem a necessidade de passar props manualmente através da árvore de componentes. Ela cria um contexto que pode ser acessado por componentes filhos que estão dentro desse contexto. No projeto, a Context API foi utilizada para criar contexto de filmes, avaliação e autenticação. No caso do último, por exemplo, o contexto permite que as informações do usuário que está logado sejam compartilhadas entre os componentes sem a necessidade de passá-las explicitamente como props.
3. React Router Dom:
   O React Router Dom é uma biblioteca de roteamento para o React. Ela permite a criação de rotas e o gerenciamento da navegação dentro da aplicação. Com o React Router Dom, é possível definir rotas para diferentes componentes e controlar a renderização desses componentes com base na URL atual. No projeto, o React Router Dom foi utilizado para definir as rotas da aplicação, como a rota inicial, a rota de detalhes do filme, a rota de pesquisa, entre outras.



📚 Organização do Código

A estrutura de pastas do projeto é organizada da seguinte forma:

├── public

│   └── ...

│

└── src

   ├── components

   │   

   │   

   ├── contexts

   │

   |

   ├── pages

Na pasta public, encontramos os arquivos estáticos relacionados à aplicação. Todos esses arquivos são acessíveis publicamente.

Dentro da pasta src, encontramos a pasta que contém os componentes da aplicação, outra com os contextos e mais uma para comportar as páginas.



🎯 Funcionalidades

As funcionalidades principais do projeto incluem:

Filtragem de Vídeos: Os usuários podem aplicar filtros na área "Ainda não sabe o que assistir" e clicar em um gênero específico para exibir a listagem de filmes. 

Avaliação de filmes: Os usuários podem avaliar os filmes com estrelas num intervalo de 1 a 5 e escrever comentários sobre os filmes. 

Busca: Dentro da barra de pesquisa é possível pesquisar por filmes pelo título. 

Player: Clicando no botão de assistir, o usuário logado é redirecionado para o player de vídeo. 



💻 Instruções de Instalação e de Uso

Para instalar e usar o projeto "telos-flix-frontend", siga as instruções abaixo:

Faça um fork do projeto no GitHub: Acesse o link https://github.com/Simulator-final/telos-flix-frontend/fork e clique no botão "Fork" no canto superior direito da página. Isso criará uma cópia do projeto em seu próprio repositório do GitHub.

Clone o repositório: No seu terminal, navegue até o diretório onde deseja clonar o projeto e execute o seguinte comando:

git clone https://github.com/Simulator-final/telos-flix-frontend.git

Acesse o diretório do projeto: Execute o seguinte comando no terminal para entrar no diretório do projeto:

cd telos-flix-frontend

Instale as dependências: Execute o comando a seguir para instalar as dependências do projeto usando o npm:

npm install

Inicie o servidor de desenvolvimento: Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

npm start

Acesse o projeto: Abra o seu navegador e digite o seguinte endereço:

http://localhost:3000

Agora você poderá visualizar e interagir com o projeto "telos-flix-frontend" localmente em seu ambiente de desenvolvimento.

É possível acessar o deploy do projeto no seguinte link: https://telos-flix.vercel.app/



🤴🏾 Autor

Nome: Lucas Souza

E-mail: lucassouzafranco1@gmail.com

Perfil no GitHub: https://github.com/lucassouzafranco

Perfil no LinkedIn: https://www.linkedin.com/in/lucas-souza-franco/
