import './Button.css';

export default function Button({ colorName }) {
    let bgColor = {
        backgroundColor: colorName
    }

    let body = document.querySelector('body');
    let button = document.querySelector('.btn');

    const handleClick = () => {
        body.style.backgroundColor = colorName;
    }

    return (
        <button className='btn' style={bgColor} onClick={handleClick}>{colorName}</button>
    )
}