import Button from './Button';
import './Container.css';

export default function Container() {
    return (
        <div className='container'>
            <Button colorName={"Blue"} />
            <Button colorName={"Green"} />
            <Button colorName={"Yellow"} />
            <Button colorName={"Red"} />
            <Button colorName={"Black"} />
            <Button colorName={"White"} />
        </div>
    )
}

