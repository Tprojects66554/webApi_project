//bs"d
const signIn = async() => {

    const userDetails = {

        userName: document.getElementById("userName").value,
        lastName: document.getElementById("lastName").value  , 
        firstName: document.getElementById("firstName").value,    
        password: document.getElementById("password").value,
        

    }
    const getUserDetailsPost = await fetch("Api/Users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
    });
    const userRegisterPost = await getUserDetailsPost.json();
    console.log('userRegisterPost', userRegisterPost);

}
const login = async () => {
}