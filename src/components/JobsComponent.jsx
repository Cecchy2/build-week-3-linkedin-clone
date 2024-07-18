import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { getJobs } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import JobsLeftAside from "./JobsLeftAside";

const JobsComponent = () => {
  const dispatch = useDispatch();
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = useSelector((state) => state.jobList.jobs);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <Container className="mt-4">
      <Row>
        {!selectedJob && (
          <Col xs={12} md={4}>
            <JobsLeftAside />
          </Col>
        )}
        {/* INSERIRE QUA I COMPONENTI */}

        <Col xs={12} md={5} className="px-0">
          <Container>
            {[...jobs].reverse().map((job) => {
              return (
                <Card key={job._id} onClick={() => handleCardClick(job)}>
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
                    <div className="d-flex ">
                      <Card.Text>{job.job_type}</Card.Text>
                      <Card.Text className="ms-auto">{job.candidate_required_location}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </Container>
        </Col>
        {selectedJob && (
          <Col xs={12} md={7} className="px-0">
            <Card>
              <Card.Body>
                <Card.Title>{selectedJob.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{selectedJob.company_name}</Card.Subtitle>
                <Card.Text dangerouslySetInnerHTML={{ __html: selectedJob.description }}></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default JobsComponent;
