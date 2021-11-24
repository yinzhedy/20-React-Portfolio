import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Figure from 'react-bootstrap/Figure'
import Card from 'react-bootstrap/Card'



const Portfolio = () => (
<Accordion id="portfolio">
<h1> Portfolio </h1>
  <Accordion.Item eventKey="0" width={300}>
    <Accordion.Header> Shadow Chaser
        <Card id="shadow-chaser-card"className="bg-dark text-white">
            <Card.ImgOverlay> Click for more info
            </Card.ImgOverlay>
        </Card>
    </Accordion.Header>
    <Accordion.Body> A full MERN stack playable game. Created with:
      -Javascript
      -Express
      -React
      -Heroku
      <ButtonGroup aria-label="Basic example" size="sm">

      <DropdownButton as={ButtonGroup} title="Links" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1" href="https://github.com/yinzhedy/Myro-the-explorer-Final-Project">Repository</Dropdown.Item>
    <Dropdown.Item eventKey="2" href="https://shadow-chaser-an-arcade-game.herokuapp.com/">Deployment</Dropdown.Item>
  </DropdownButton>

</ButtonGroup>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header> Date Night
    <Card id="date-night-card"className="bg-dark text-white">
            <Card.ImgOverlay> Click for more info
            </Card.ImgOverlay>
        </Card>
    </Accordion.Header>
    <Accordion.Body>
  A simple web application created with just CSS, Javascript, and HTML5.
      <DropdownButton as={ButtonGroup} title="Links" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1" href="https://github.com/yinzhedy/Date-Night">Repository</Dropdown.Item>
    <Dropdown.Item eventKey="2" href="https://yinzhedy.github.io/Date-Night/">Deployment</Dropdown.Item>
  </DropdownButton>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Budget Tracker
    <Card id="budget-tracker-card"className="bg-dark text-black">
            <Card.ImgOverlay> Click for more info
            </Card.ImgOverlay>
        </Card>
    </Accordion.Header>
    <Accordion.Body>
  A simple application deployed with Heroku, allows the user to track income and expenses to view budget trends.
      <DropdownButton as={ButtonGroup} title="Links" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1" href="https://github.com/yinzhedy/19-Homework-Budget-Tracker">Repository</Dropdown.Item>
    <Dropdown.Item eventKey="2" href="https://limitless-fjord-00031.herokuapp.com/">Deployment</Dropdown.Item>
  </DropdownButton>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Fitness Tracker
    <Card id="fitness-tracker-card"className="bg-dark text-black">
            <Card.ImgOverlay> Click for more info
            </Card.ImgOverlay>
        </Card>
    </Accordion.Header>
    <Accordion.Body>
  A simple application deployed with Heroku. Allows the user to add new workouts, complete workouts, and track their fitness accomplishments via their dashboard.
      <DropdownButton as={ButtonGroup} title="Links" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1" href="https://github.com/yinzhedy/18-Homework-Fitness-Tracker">Repository</Dropdown.Item>
    <Dropdown.Item eventKey="2" href="https://serene-meadow-79906.herokuapp.com/">Deployment</Dropdown.Item>
  </DropdownButton>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
);

export default Portfolio;