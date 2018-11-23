//create class
class Namefinder{
    constructor(){
        this.client_id = 'd0b3035d96674fa0886b';
        this.client_secret = 'd33d7808153ef01d7e77af935629a7fb3e41571e';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

         

        const profile = await profileResponse.json();

        return{
            profile
        }
    }


}