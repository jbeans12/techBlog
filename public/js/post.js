const newBlog = async (event) => {
    event.preventDefault();

    const submitPost = document.querySelector('#posted');
    const postTitle = document.querySelector('#title');

    if(submit) {
        fetch('/api/post', {
            method: 'POST',
            body: JSON.stringigy({ postTitle, submitPost }),
            headers: {'Content-Type': 'application/json'},
        })
        .then(response =>
            response.json())
        .then(response => {
            if (response.ok) {
                document.location.replace('/dashboard')
            } else {
                console.log('I Do Not Work!')
            }
        }) 
        }
    }


document.addEventListener('submit');