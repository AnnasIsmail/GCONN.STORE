import './icon.css';

function StarIcon(props){
    let ret = <svg className='icon star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M480,208H308L256,48,204,208H32l140,96L118,464,256,364,394,464,340,304Z" /></svg>
    if(props.diKlik == "true"){
        ret = <svg  viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M394,480a16,16,0,0,1-9.39-3L256,383.76,127.39,477a16,16,0,0,1-24.55-18.08L153,310.35,23,221.2A16,16,0,0,1,32,192H192.38l48.4-148.95a16,16,0,0,1,30.44,0l48.4,149H480a16,16,0,0,1,9.05,29.2L359,310.35l50.13,148.53A16,16,0,0,1,394,480Z"/></svg>
    }
    return(
        <>{ret}</>
    );
}

export default StarIcon; 