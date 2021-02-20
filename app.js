let page = 1;

const users = (page) => {
    const randomUser = 'https://randomuser.me/api/?'
    const url = `${randomUser}page=${page}&results=12`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayUsers(data.results))        
}
users()
const displayUsers = (data) => {
    data.forEach(user => {
        const usersContainer = document.getElementById('user-Container');
        const usersDetails = document.createElement('div');
        usersDetails.className = 'col'
        const userList = `
        <div class='card p-3 h-100'>
           <div class='d-flex justify-content-center'>
               <img class="rounded-circle w-50" src="${user.picture.large}">
           </div>
           <div class='p-3'>
              <h3> ${user.name.first} ${user.name.last}</h3>
              <p ><i class="far fa-envelope"></i>  ${user.email}</p>
              <p><i class="fas fa-map-marked-alt"></i>  ${user.location.state}, ${user.location.city}, ${user.location.country}</p>
              <p><i class="fas fa-phone"></i>  ${user.phone}</p>
           </div>
        </div>`
        usersDetails.innerHTML = userList;
        usersContainer.appendChild(usersDetails)
    });
}  

document.getElementById('more-users').addEventListener('click', () => {
    page++;
    users(page)
})

