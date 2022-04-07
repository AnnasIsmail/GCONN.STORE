import './icon.css';

function LogInIcon(props){
    let ret = <svg className='icon logIn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>ionicons-v5-o</title><path d="M392,80H232a56.06,56.06,0,0,0-56,56V240H329.37l-52.68-52.69a16,16,0,0,1,22.62-22.62l80,80a16,16,0,0,1,0,22.62l-80,80a16,16,0,0,1-22.62-22.62L329.37,272H176V376c0,32.05,33.79,56,64,56H392a56.06,56.06,0,0,0,56-56V136A56.06,56.06,0,0,0,392,80Z"/><path d="M80,240a16,16,0,0,0,0,32h96V240Z"/></svg>
    if(props.diKlik == "true"){
        ret = <svg className='icon logIn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>ionicons-v5-o</title><path d="M192,176V136a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V376a40,40,0,0,1-40,40H240c-22.09,0-48-17.91-48-40V336" /><polyline points="288 336 368 256 288 176" /><line x1="80" y1="256" x2="352" y2="256" /></svg>
    }
    return(
        <>{ret}</>
    );
}

export default LogInIcon; 