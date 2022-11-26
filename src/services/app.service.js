export async function getPostsData() {
    let data = await  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        return json
    });
    return data
}

export async function doDeletePost(postId) {
    await  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
      })
    return postId
}

export async function doChangePost(newBody, id) {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          body: newBody,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
            return json
        });
        return data
}