window.onload = function() {
    fetch('resources.json')
    .then(response => response.json())
    .then(data => {
        let resourceList = document.getElementById('resource-list');

        for (let resource of data) {
            let resourceDiv = document.createElement('div');
            resourceDiv.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');

            let card = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${resource.name}</h5>
                    <p class="card-text">${resource.description}</p>
                    <a href="${resource.url}" class="btn btn-primary" target="_blank">Visit Site</a>
                </div>
            </div>
            `;

            resourceDiv.innerHTML = card;
            resourceList.appendChild(resourceDiv);
        }
    })
    .catch(error => console.error(error));
}
