import '../../css/home.css';

export function loadHome() {
    const home = document.createElement('main');

    home.innerHTML = `
        <div class="main_tasks_container">
            <div class="header_tasks_container">
                <div class="header_tasks_container_label">
                    <p class="header_tasks_container_label_text">To-do</p>
                </div>
            </div>
            <div class="tasks_container_add_task_button">
                <button class="add_task_button">+</button>
            </div>
        </div>
        <div class="main_tasks_container">
            <div class="header_tasks_container">
                <div class="header_tasks_container_label">
                    <p>In progress</p>
                </div>
            </div>
            <div class="tasks_container_add_task_button">
                <button class="add_task_button">+</button>
            </div>
        </div>
        <div class="main_tasks_container">
            <div class="header_tasks_container">
                <div class="header_tasks_container_label">
                    <p>Done</p>
                </div>
            </div>
            <div class="tasks_container_add_task_button">
                <button class="add_task_button">+</button>
            </div>
        </div>
    `;

    document.body.appendChild(home);
}
