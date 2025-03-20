
export function loadNav() {

    const nav = document.createElement('nav');
    
    nav.innerHTML = `
        <nav>   
            <div>
                <header>
                    <div>A</div>
                    <button><img src="images/arrow_back.png"></button>
                </header>
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
        </nav>
    `;  

    document.body.insertBefore(nav, document.getElementById('app'));
}