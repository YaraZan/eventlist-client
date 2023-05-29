
export async function getUserById(id) {
    const responce = await fetch(`http://localhost/eventlist-api/api/user/read_single.php?id=${id}`);

    return await responce.json();
}

/* export async function createUser(name, email, password) {
    try {
        const response = await fetch(`http://localhost/eventlist-api/api/user/create_user.php`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    name: name,
                    email: email,
                    password: password
                }
            )
          })

        return await response.json();
    } catch (error) {
        console.error(error); // Обрабатываем ошибку, если возникает
        throw error;
    }
}

export async function loginUser(email, password) {
    try {
        const response = await fetch(`http://localhost/eventlist-api/api/user/login.php`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    email: email,
                    password: password
                }
            )
          })

        return await response.json();
    } catch (error) {
        console.log(error)
    }
} */