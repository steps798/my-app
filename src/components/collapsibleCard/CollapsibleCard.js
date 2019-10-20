import React from 'react';

import { Card } from 'react-bootstrap';
import Collapsible from '../collapsible/Collapsible';

class CollapsibleCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <Card>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>Package title</Card.Title>
          <Card.Text>
            Velit qui amet dolore cupidatat dolor aute laborum ipsum nulla proident sint qPariatur  eaaliqua mollit adipisicing exercitation culpa. Cupidatat aliquip qlaboris est qui   pariatur.Incididunt nisi laboris nisi labore culpa dolore anim alaboris ut enim.{' '}
          </Card.Text>
          <Collapsible header="Click click...">
            <p>HELLO EARTH :)</p>
          </Collapsible>
          <Collapsible header="Click click2...">
            <p>HELLO MOON :)</p>
          </Collapsible>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      )

    }
  }
  
  export default CollapsibleCard;