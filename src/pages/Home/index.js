import { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GameContext } from '../../context/GameContext';
import FilterCard from './components/FilterCard';
import GamesList from './components/GamesList';

const Home = () => {
  const { getGames } = useContext(GameContext);
  const [filter, setFilter] = useState();

  useEffect(() => {
    if (filter) {
      const params = {};
      if (filter.platform) params.platform = filter.platform;
      if (filter.category) params.category = filter.category;
      if (filter.sortBy) params['sort-by'] = filter.sortBy;

      getGames(params);
    }
  }, [filter]); // eslint-disable-line

  return (
    <Row>
      <Col xs={12} md={9}>
        <GamesList />
      </Col>
      <Col xs={12} md={3}>
        <FilterCard onSubmit={setFilter} />
      </Col>
    </Row>
  );
};

export default Home;
