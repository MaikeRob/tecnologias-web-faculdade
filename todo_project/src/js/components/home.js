import '../../css/home.css';

export function loadHome() {
    const template = document.createElement('template');

    template.innerHTML = `
        <main>
            <div class="tasks-category-container">
                <div class="tasks-header-container">
                    <p class="header_tasks_container_label_text">To-do</p>
                </div>
                <div class="tasks_container_add_task_button">
                    <button class="add_task_button">+</button>
                </div>
            </div>
            <div class="tasks-category-container">
                <div class="tasks-header-container">
                    <div class="header_tasks_container_label">
                        <p>In progress</p>
                    </div>
                </div>
                <div class="tasks_container_add_task_button">
                    <button class="add_task_button">+</button>
                </div>
            </div>
            <div class="tasks-category-container">
                <div class="tasks-header-container">
                    <div class="header_tasks_container_label">
                        <p>Done</p>
                    </div>
                </div>
                <div class="tasks_container_add_task_button">
                    <button class="add_task_button">+</button>
                </div>
            </div>
        </main>
    `;


    const main = template.content.querySelector('main').cloneNode(true);

    // Adiciona o <nav> ao body
    document.body.appendChild(main);
}
