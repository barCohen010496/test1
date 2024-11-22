import classes from './parg.module.css';
/**
 * the function shows two parg one with inline style css and the two in clasess css
 * @returns Parg
 */
export default function Parg() {

  const style = {
    textColor: 'navy',
    backgroundColor: 'lightgray',
    padding: '1rem',
  };

  return (
    <div>
      <p style={style}>i am p element </p>
      <p className={classes.special}>i am p element</p>
    </div>
  );
}
