const newBlog = async (submit) => {
    submit.preventDefault();

    const submitPost = document.querySelector('#post').value;
    const postTitle = document.querySelector('#title').value;

    if(submit) {
        let obj= {title:postTitle, content:submitPost}
       const newPost = await fetch('/post', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {'Content-Type': 'application/json'},
        });

        if (response =>
            response.json ());
            (response => {
            if (response.ok) {
                document.location.replace('/dashboard')
            } else {
                console.log('I Do Not Work!')
            }
        }) 
        }
    }


document.addEventListener('submit', newBlog);