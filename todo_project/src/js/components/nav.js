import '../../css/nav.css';

export function loadNav() {
    const template = document.createElement('template');

    template.innerHTML = `
        <nav>
            <header contenteditable="false">
                <div id="avatar" contenteditable="false">A</div>
                <button type="button" onclick="alert('Button clicked!')" contenteditable="false">
                    <img src="images/close_icon.svg" alt="close_icon">
                </button>
            </header>
            <ul>
                <li>
                    Lista
                    <i class="material-icons">chevron_right</i>
                </li>
                <li>
                    Calendário
                    <i class="material-icons">chevron_right</i>
                </li>
                <li>   
                    Configs
                    <i class="material-icons">chevron_right</i>
                </li>
            </ul>
        </nav>
    `;

    // Clona o conteúdo do template e retorna o <nav>
    const nav = template.content.querySelector('nav').cloneNode(true);

    // Adiciona o <nav> ao body
    document.body.appendChild(nav);
}