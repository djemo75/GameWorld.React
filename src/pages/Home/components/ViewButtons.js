import { faTh, faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

export const VIEW_TYPES = {
  threeColumns: 'three-columns',
  twoColumns: 'two-columns',
  list: 'list',
};

const VIEW_LABELS = {
  threeColumns: faTh,
  twoColumns: faThLarge,
  list: faThList,
};

const activeClass = 'secondary';
const inActiveClass = 'outline-secondary';

const ViewButtons = ({ setViewType }) => {
  const [selected, setSelected] = useState(VIEW_TYPES.threeColumns);

  useEffect(() => {
    setViewType(selected);
  }, [selected]); // eslint-disable-line

  const getButtons = () => {
    return Object.keys(VIEW_TYPES).map((type) => {
      const value = VIEW_TYPES[type];
      const variant = selected === value ? activeClass : inActiveClass;

      return (
        <Button
          key={type}
          variant={variant}
          onClick={() => setSelected(value)}
          style={{ marginLeft: '5px', marginBottom: '5px' }}
        >
          <FontAwesomeIcon icon={VIEW_LABELS[type]} />
        </Button>
      );
    });
  };

  return getButtons();
};

export default ViewButtons;
