import React, { useState } from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const Job = ({ job }) => {
  const [open, setOpen] = useState(false);
  const {
    title,
    company,
    created_at,
    type,
    location,
    how_to_apply,
    company_logo,
    description,
  } = job;
  const date = new Date(created_at).toLocaleDateString();

  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {title} -{' '}
              <span className="text-muted font-weight-light">{company}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">{date}</Card.Subtitle>
            <Badge variant="secondary" className="mr-2">
              {type}
            </Badge>
            <Badge variant="secondary">{location}</Badge>
            <div style={{ wordBreak: 'break-all' }}>
              <ReactMarkdown source={how_to_apply} />
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            alt={company}
            src={company_logo}
          />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            variant="primary"
          >
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default Job;
