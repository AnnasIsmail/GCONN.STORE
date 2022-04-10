import './icon.css';

function LogInIcon(props){
    let ret = <svg viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="14.5833" cy="11.3333" rx="5.83333" ry="5.66667" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <path d="M23.0352 28.9667C22.5367 27.1593 21.4382 25.5622 19.91 24.4231C18.3819 23.284 16.5096 22.6666 14.5834 22.6666C12.6572 22.6666 10.7849 23.284 9.25671 24.4231C7.72858 25.5622 6.63005 27.1593 6.13152 28.9667" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <path d="M27.7084 14.1666L27.7084 22.6666" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <path d="M32.0834 18.4166L23.3334 18.4166" stroke="white" stroke-width="2" stroke-linecap="round"/>
    </svg>
    
    if(props.diKlik == "true"){
        ret = <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2964 15H15.7475L20.7071 10.0404L19.2929 8.62619L12.6262 15.2929L11.9191 16L12.6262 16.7071L19.2929 23.3737L20.7071 21.9595L15.7475 17H29.2964C28.785 23.8967 23.0274 29.3333 16 29.3333C8.63616 29.3333 2.66663 23.3638 2.66663 16C2.66663 8.63616 8.63616 2.66663 16 2.66663C23.0274 2.66663 28.785 8.10323 29.2964 15Z" fill="white"/>
        </svg>
        
    }
    return(
        <>{ret}</>
    );
}

export default LogInIcon; 