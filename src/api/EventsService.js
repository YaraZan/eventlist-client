export async function getAllEvents() {
    const responce = await fetch('http://localhost/eventlist-api/api/event/read.php');

    return await responce.json();
}

/* export async function getCreatorById(uid) {
    const response = await fetch(`http://localhost/eventlist-api/api/user/creator_name.php`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: uid})
      })
    return await response.json();
} */