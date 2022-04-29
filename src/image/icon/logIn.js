import './icon.css';

function LogInIcon(props){
    let ret = <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6666 27.6037C13.4402 28.6276 15.452 29.1667 17.5 29.1667C19.5479 29.1667 21.5597 28.6276 23.3333 27.6037C25.1069 26.5797 26.5796 25.1069 27.6036 23.3334C28.6276 21.5598 29.1666 19.548 29.1666 17.5C29.1666 15.4521 28.6276 13.4403 27.6036 11.6667C26.5796 9.89315 25.1069 8.42038 23.3333 7.39641C21.5597 6.37245 19.5479 5.83337 17.5 5.83337C15.452 5.83337 13.4402 6.37245 11.6666 7.39641" stroke="white" stroke-width="2"/>
    <path d="M2.91663 17.5L2.13576 16.8753L1.636 17.5L2.13576 18.1247L2.91663 17.5ZM16.0416 18.5C16.5939 18.5 17.0416 18.0523 17.0416 17.5C17.0416 16.9478 16.5939 16.5 16.0416 16.5V18.5ZM7.96909 9.58368L2.13576 16.8753L3.69749 18.1247L9.53083 10.8331L7.96909 9.58368ZM2.13576 18.1247L7.96909 25.4164L9.53083 24.167L3.69749 16.8753L2.13576 18.1247ZM2.91663 18.5H16.0416V16.5H2.91663V18.5Z" fill="white"/>
    </svg>
    
    
    if(props.diKlik === "true"){
        ret = <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2964 15H15.7475L20.7071 10.0404L19.2929 8.62619L12.6262 15.2929L11.9191 16L12.6262 16.7071L19.2929 23.3737L20.7071 21.9595L15.7475 17H29.2964C28.785 23.8967 23.0274 29.3333 16 29.3333C8.63616 29.3333 2.66663 23.3638 2.66663 16C2.66663 8.63616 8.63616 2.66663 16 2.66663C23.0274 2.66663 28.785 8.10323 29.2964 15Z" fill="white"/>
        </svg>
        
    }
    return(
        <>{ret}</>
    );
}

export default LogInIcon; 