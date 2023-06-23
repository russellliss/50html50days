const APIURL = 'https://api.github.com/users/';


const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
    try {
        const { data } = await axios.get(APIURL + username)

        createUserCard(data)
        getRepos(username)
        //console.log(data)
    } catch (error) {
        if (error.response.status == 404) {
            createErrorCard('No profile with username : ' + username);
        } else {
            console.log(error);
        }
        
    }
    
}

async function getRepos(username) {
    try {
        const { data } = await axios.get(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
        //console.log(data)
    } catch (error) {
        createErrorCard('Problem fetching repos' + error);
        
    }


}

function createUserCard(user) {
    console.log(user);
    const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" class="avatar" alt="${user.name}"/>

        </div>
        <div class="user-info">
            <h2>${user.login}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>

            <div id="repos">
            </div>

        </div>
    </div>`;

    main.innerHTML = cardHTML;
}

function createErrorCard(message) {
    const cardHTML = `
        <div class="card"><h1>${message}</h1></div>`;
    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    repos
        .slice(0, 10)
        .forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = '_blank';
        repoEl.innerText = repo.name;

        //console.log(repoEl)
        reposEl.appendChild(repoEl);
    })


}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user)

        search.value = '';
    }

});