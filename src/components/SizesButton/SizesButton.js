import styles from '../Button/Button.module.scss'
import clsx from 'clsx';
import shortid from 'shortid';


const SizesButton = (props) => {
    console.log('is props an array?: ', props.sizeData);
    return (
        <li>
            {props.sizeData.map(SizeButton =>

                <button className={clsx(styles.button)} key={shortid()}>{SizeButton.name}</button>)
            }
        </li>
    )
};

export default SizesButton;