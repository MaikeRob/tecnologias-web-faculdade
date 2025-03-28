import '../../css/nav.css';

export function loadNav() {
    const template = document.createElement('template');

    template.innerHTML = `
        <nav>
            <header>
                <div id="avatar">A</div>
                <button><img src="images/arrow_back.png"></button>
            </header>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    `;

    // Clona o conteúdo do template e retorna o <nav>
    const nav = template.content.querySelector('nav').cloneNode(true);

    // Adiciona o <nav> ao body
    document.body.appendChild(nav);
}