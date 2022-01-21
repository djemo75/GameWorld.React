import { Col, Row } from 'react-bootstrap';
import ViewButtons from './ViewButtons';

const ListHeader = ({ setViewType }) => {
  return (
    <Row>
      <Col xs={9}>
        <h4>Games</h4>
      </Col>
      <Col xs={3} style={{ textAlign: 'right' }}>
        <ViewButtons setViewType={setViewType} />
      </Col>
      <Col xs={12} className="mt-2 mb-2">
        <hr />
      </Col>
    </Row>
  );
};

export default ListHeader;
