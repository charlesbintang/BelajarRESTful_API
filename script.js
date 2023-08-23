const userList = document.getElementById('user-list');

async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:8000/users'); // Ganti dengan URL API yang sesuai
        const Users = await response.json();

        userList.innerHTML = '';

        Users.forEach(data => {
            const listItem = document.createElement('li');
            listItem.textContent = `${data.name} - ${data.email}`;
            userList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching Users:', error);
    }
}

fetchUsers();