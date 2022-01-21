import { Card } from 'react-bootstrap';

const GameCard = ({ data }) => {
  const handleView = () => {
    window.location.href = data.game_url;
  };

  return (
    <Card
      bg="dark"
      className="grow shadow mb-4"
      onClick={handleView}
      style={{ cursor: 'pointer' }}
    >
      <Card.Img variant="top" src={data.thumbnail} />
      <Card.Body className="text-white">
        <Card.Title>{data.title}</Card.Title>
        <Card.Text className="text-truncate text-muted ">
          {data.short_description}
        </Card.Text>
        <div className="d-flex justify-content-end">{data.platform}</div>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
