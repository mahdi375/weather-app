import '../styles/nav.scss';

class Navbar
{
    constructor(nav){
        this.nav = nav;
    }
    init(){
        let i = 0;

        this.nav.addEventListener('click', () => {
            i++;
            console.log('Click On Nav', i);
        })
    }
}

export { Navbar as default };