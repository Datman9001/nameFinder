//initalize class
const nameFinder = new Namefinder;
const ui = new UI;


//search input
const searchUser = document.getElementById('searchUser');

//search input event listner
searchUser.addEventListener('keyup', (e) =>{
    //get input text
    const userText = e.target.value;
    if(userText !== ''){
        //make http call
        nameFinder.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                     
                    //show alert
                    ui.showAlert('user not found');
                    

                }else{
                    //show profile
                    ui.showProfile(data.profile);
                }
            })
    }else{
        //Clear profile
        ui.clearProfile();
    }

     
});