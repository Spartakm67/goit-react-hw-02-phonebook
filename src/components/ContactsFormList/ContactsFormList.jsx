import PropTypes from 'prop-types';
import {ContactsList} from './ContactsFormList.styled'

export const ContactsFormList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <ContactsList key={item.id} style={{ paddingBottom: '10px' }}>
          <span style={{ width: '220px' }}>
            {' '}
            {item.name} : {item.number}{' '}
          </span>
          <button
            onClick={() => {
              onDelete(item.id);
            }}
          >
            Delete
          </button>
        </ContactsList>
      ))}
    </ul>
  );
};

ContactsFormList.propTypes={
  items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired})).isRequired,
  onDelete:PropTypes.func.isRequired,
}