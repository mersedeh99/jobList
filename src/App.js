import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmitForm from './components/Form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container>
      <Row lg={1} className="justify-content-center">
        <Col><SubmitForm /></Col>
      </Row>
    </Container>
  );
}

export default App;
