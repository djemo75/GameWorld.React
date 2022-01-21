import { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import CustomRadioGroup from '../../../components/CustomRadioGroup';
import CustomSelect from '../../../components/CustomSelect';
import { GameContext } from '../../../context/GameContext';

const categoryOptions = [
  { label: 'All', value: '' },
  { label: 'Mmorpg', value: 'mmorpg' },
  { label: 'Shooter', value: 'shooter' },
  { label: 'Strategy', value: 'strategy' },
  { label: 'Moba', value: 'moba' },
  { label: 'Racing', value: 'racing' },
  { label: 'Sports', value: 'sports' },
];

const sortByOptions = [
  { label: 'Release date', value: 'release-date' },
  { label: 'Popularity', value: 'popularity' },
  { label: 'Alphabetical', value: 'alphabetical' },
  { label: 'Relevance', value: 'relevance' },
];

const platformOptions = [
  { label: 'All', value: '' },
  { label: 'Pc', value: 'pc' },
  { label: 'Browser', value: 'browser' },
];

const DEFAULT_STATE = {
  category: '',
  sortBy: 'release-date',
  platform: '',
};

const FilterCard = ({ onSubmit }) => {
  const { gamesLoading } = useContext(GameContext);
  const [state, setState] = useState(DEFAULT_STATE);

  // Submit form when render
  useEffect(() => {
    onSubmit(state);
  }, []); // eslint-disable-line

  const handleChange = (name, value) => {
    setState((state) => ({ ...state, [name]: value }));
  };

  const handleReset = () => {
    setState(DEFAULT_STATE);
    onSubmit(DEFAULT_STATE);
  };

  const handleSearch = () => onSubmit(state);

  return (
    <Card>
      <Card.Header>Filters</Card.Header>
      <Card.Body>
        <CustomSelect
          name="category"
          label="Category"
          onChange={handleChange}
          options={categoryOptions}
          value={state.category}
          disabled={gamesLoading}
        />

        <CustomSelect
          name="sortBy"
          label="Sort by"
          onChange={handleChange}
          options={sortByOptions}
          value={state.sortBy}
          disabled={gamesLoading}
        />

        <CustomRadioGroup
          name="platform"
          label="Choose platform"
          onChange={handleChange}
          options={platformOptions}
          value={state.platform}
          disabled={gamesLoading}
        />

        <Button
          variant="primary"
          onClick={handleSearch}
          disabled={gamesLoading}
        >
          Search
        </Button>
        <Button
          variant="outline-dark"
          onClick={handleReset}
          disabled={gamesLoading}
          style={{ marginLeft: '8px' }}
        >
          Reset
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FilterCard;
