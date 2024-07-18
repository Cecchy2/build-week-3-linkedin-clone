import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { getJobs } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const JobsComponent = () => {
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobList.jobs);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={6}>
          <Container>
            {[...jobs].reverse().map((job) => {
              return (
                <Card className="mt-3" key={job._id}>
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
                    <div className="d-flex ">
                      <Card.Text>{job.job_type}</Card.Text>{" "}
                      <Card.Text className="ms-auto">{job.candidate_required_location}</Card.Text>
                    </div>
                    <Card.Link href={job.url}>Link azienda</Card.Link>
                  </Card.Body>
                </Card>
              );
            })}
          </Container>
        </Col>
        <Col xs={12} md={3}></Col>
      </Row>
    </Container>
  );
};

export default JobsComponent;
