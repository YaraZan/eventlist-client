export async function getUserById(id) {
    const responce = await fetch(`http://localhost/eventlist-api/api/user/read_single.php?id=${id}`);

    return await responce.json();
}