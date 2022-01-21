import { useContext, useState } from 'react';
import { Alert, Col, Row, Spinner, Button } from 'react-bootstrap';
import { GameContext } from '../../../context/GameContext';
import GameCard from './GameCard';
import ListHeader from './ListHeader';
import { VIEW_TYPES } from './ViewButtons';

const PER_PAGE = 30;

const GamesList = () => {
  const { games, gamesLoading, gamesError } = useContext(GameContext);
  const [viewType, setViewType] = useState(VIEW_TYPES.threeColumns);
  const [visibleGamesCount, setVisibleGamesCount] = useState(PER_PAGE);

  const handleShowMore = () => {
    setVisibleGamesCount(visibleGamesCount + PER_PAGE);
  };

  const hasMore = games.length > visibleGamesCount;

  if (gamesError) {
    return <Alert variant="danger">{gamesError}</Alert>;
  }

  return (
    <>
      <ListHeader setViewType={setViewType} />
      <Row>
        {gamesLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="info" />
          </div>
        )}
        {!gamesLoading && (
          <>
            {games.slice(0, visibleGamesCount).map((game, index) => (
              <Col
                key={index}
                xs={12}
                md={
                  viewType === VIEW_TYPES.threeColumns
                    ? 4
                    : viewType === VIEW_TYPES.twoColumns
                    ? 6
                    : viewType === VIEW_TYPES.list
                    ? 12
                    : 12
                }
              >
                <GameCard data={game} />
              </Col>
            ))}
            {hasMore && (
              <div className="mt-2 mb-5 text-center">
                <Button variant="primary" onClick={handleShowMore}>
                  Show more
                </Button>
              </div>
            )}
          </>
        )}
      </Row>
    </>
  );
};

export default GamesList;
