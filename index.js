function submitData(name, email){
    return fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'name': `${name}`,
                'email': `${email}`
            })
            })
            .then(res => res.json())
            .then(user => {
                const body = document.querySelector('body');
                const paragraph = document.createElement('p');
                paragraph.textContent = `${user.id}`;
                body.appendChild(paragraph);
            })
            .catch(error => {
                const body = document.querySelector('body');
                const errorMessage = document.createElement('p');
                errorMessage.textContent = `${error.message}`;
                body.appendChild(errorMessage);
            })
}
