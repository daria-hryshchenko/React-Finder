import PropTypes from 'prop-types';
import { BtnLoadMore } from './Button.module';

export default function Button({ onClick }) {
  return (
    <BtnLoadMore type="button" onClick={onClick}>
      Load More
    </BtnLoadMore>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
