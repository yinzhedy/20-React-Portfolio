import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'



const Portfolio = () => (
<Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Shadow Chaser</Accordion.Header>
    <Accordion.Body>
      A full MERN stack playable game. Created with:
      -Javascript
      -Express
      -Apollo
      -Heroku
      <ButtonGroup aria-label="Basic example" size="sm">

      <DropdownButton as={ButtonGroup} title="Links" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Repository</Dropdown.Item>
    <Dropdown.Item eventKey="2">Deployment</Dropdown.Item>
  </DropdownButton>

</ButtonGroup>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Date Night</Accordion.Header>
    <Accordion.Body>
      A simple web application created with just CSS, Javascript, and HTML5.
      <DropdownButton as={ButtonGroup} title="Links" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Repository</Dropdown.Item>
    <Dropdown.Item eventKey="2">Deployment</Dropdown.Item>
  </DropdownButton>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Budget Tracker</Accordion.Header>
    <Accordion.Body>
      A simple application deployed with Heroku, allows the user to track income and expenses to view budget trends.
      <DropdownButton as={ButtonGroup} title="Links" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Repository</Dropdown.Item>
    <Dropdown.Item eventKey="2">Deployment</Dropdown.Item>
  </DropdownButton>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Fitness Tracker</Accordion.Header>
    <Accordion.Body>
      A simple application deployed with Heroku. Allows the user to add new workouts, complete workouts, and track their fitness accomplishments via their dashboard.
      <DropdownButton as={ButtonGroup} title="Links" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Repository</Dropdown.Item>
    <Dropdown.Item eventKey="2">Deployment</Dropdown.Item>
  </DropdownButton>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
);

export default Portfolio;