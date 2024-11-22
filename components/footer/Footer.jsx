import classes from './footer.module.css';

import PropTypes from 'prop-types'

export default function Footer({ today, name }) {

  return (
    <footer className={classes.footer}>
      <p>
        &copy; {today} {name} 
      </p>
    </footer>
  );
}


Footer.propTypes = {
  num: PropTypes.number,
  today: PropTypes.any,
  text: PropTypes.string,
  name: PropTypes.string,
}

Footer.defaultProps = {
  num: 100,
  text: 'abc',
}