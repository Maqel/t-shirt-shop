import styles from './Product.module.scss';
// import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
// import SizesButton from '../SizesButton/SizesButton';
// import ColorsButton from '../ColorsButton/ColorsButton';
import clsx from 'clsx';
import shortid from 'shortid';



// const Product = props => {
  const Product = (props) => {
    const [currentProduct, /*setCurrentProduct*/] = useState({
      currentColor: props.data.colors[0],
      currentSize: props.data.sizes[0].name,
      currentChoise: 'false',
    })
  
    console.log(currentProduct);

    const getColorClassName = (colorName) => {
      switch (colorName) {
        case 'blue':
          return styles.colorBlue;
        case 'red':
          return styles.colorRed;
        case 'green':
          return styles.colorGreen;
        case 'white':
          return styles.colorWhite;
        case 'black':
          return styles.colorBlack;
      }
    }  
  
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.data.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.data.name}--${currentProduct.currentColor}.jpg`} />
          {/* alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-kodilla--black.jpg`} /> */}
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.data.title}</h2>
          <span className={styles.price}>Price {' ' + props.data.basePrice + '$'}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
            {props.data.sizes.map(size => <Button className={currentProduct.currentSize === size.name && styles.active} key={shortid()}>{size.name}</Button>)}
            {/* {props.data.sizes.map(size => <Button key={shortid()}>{size.name}</Button>)} */}
            {/* <SizesButton sizeData={props.data.sizes} /> */}
              {/* <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li> */}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.data.colors.map(color => <Button className={clsx(getColorClassName(color), color === currentProduct.currentColor && styles.active)} key={shortid()}>{color}</Button>)}
            {/* {props.data.colors.map(color => <Button className={getColorClassName(color)} key={shortid()}>{color}</Button>)} */}
            {/* <ColorsButton colorData={props.data.colors}/> */}
              {/* <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li> */}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};
Product.propTypes = { props: PropTypes.object };

export default Product;