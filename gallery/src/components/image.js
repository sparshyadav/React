export default function Image(props){
    let imageSrc=props.src;
    return(
        <img src={imageSrc} id="p1" alt="Image Not Found"></img>
    )
}