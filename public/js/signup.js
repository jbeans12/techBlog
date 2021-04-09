const signupForm = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
    const verifyPassword = document.querySelector('#verifyPassword').value.trim(); //we will use this to verify password
    const name = document.querySelector('#nameSignup').value.trim();

    if (email && password && name){
        console.log("you done did it!!");
        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password, name}),
            headers: {'Content-Type': 'application/json'},

        }).then(response => {
               return response.json();

        }).then(data => {
            fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({ title, post, user_id: data.id}),
                headers: {'Content-Type': 'application/json'},

        }).then(response => {
            if (response.ok) {
                document.location.replace('/'); 
            } else {
                alert('Failed to sign-up :(');
                } 
            })
        })
    }
            if (password !== verifyPassword) {
                alert("Your passwords do not match!")
            }
};

document
    .querySelector('.signupForm')
    .addEventListener('submit', signupForm);