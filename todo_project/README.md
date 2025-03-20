Done é um site de tarefas simples em vanilla


todo/
│-- public/               # Arquivos estáticos
│   ├── favicon.ico       # Ícone do site
│   ├── imagens/          # Imagens do projeto
│   ├── fonts/            # Fontes personalizadas
│-- src/                  # Código-fonte principal
│   ├── css/              # Estilos CSS
│   │   ├── style.css     # Estilos globais
│   │   ├── login.css     # Estilos específicos para login
│   ├── js/               # Scripts JavaScript
│   │   ├── main.js       # Código principal
│   │   ├── router.js     # Gerencia as páginas na SPA
│   │   ├── auth.js       # Gerencia login e autenticação
│   │   ├── storage.js    # Gerencia o armazenamento das tarefas
│   │   ├── components/   # Componentes reutilizáveis
│   │   │   ├── header.js  # Cabeçalho do site
│   │   │   ├── todoList.js # Lógica da lista de tarefas
│   ├── pages/            # Páginas individuais
│   │   ├── home.html     # Página principal da To-Do List
│   │   ├── login.html    # Página de login
│   │   ├── about.html    # Página "Sobre"
│   │   ├── notfound.html # Página 404
│   ├── index.html        # Entrada principal do site (SPA)
│-- .gitignore            # Arquivos ignorados pelo Git
│-- package.json          # Dependências (caso use npm)
│-- README.md             # Documentação do projeto
