class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }
    
    //Display profile in UI
    showProfile(user){
        this.profile.innerHTML = `
        <li class="collection-item avatar center">
          <img src="${user.avatar_url}" alt="" class="circle">
         <span class="title">${user.login}</span>
        <p>Name: ${user.name}<br>
           Company: ${user.company}<br><hr>
           <a class="waves-effect light-blue waves-light btn" href='${user.html_url}'>view profile</a>
        </p>
        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
      </li>
        `;
    }

    //Display profile in UI
    showAlert(message){
        //clear any remaining alerts
        this.clearAlert();
        //create span
        const span = document.createElement('span');
        //add class name
        span.className ="new badge left red";
        //add text
        span.appendChild(document.createTextNode(message));
        //get parent to insert span
        const under = document.querySelector('.collection');
        //get child to insert span
        const before = document.querySelector('.before');
        //insert alert
        under.insertBefore(span, before);
        //Timeout after 3sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
       
    }

    //clear alert message
    clearAlert(){
        const currentAlert = document.querySelector("span");

        if(currentAlert){
            currentAlert.remove();
        }
            
        
    }

    //Clear UI
    clearProfile(){
        this.profile.innerHTML = '';
    }
};