import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
          <Col xs={12} md={2}>
            <JobsLeftAside />
          </Col>
        )}

        <Col xs={12} md={6} className="px-1">
          <Container className="bg-white p-3 rounded">
            {jobs
              .slice()
              .reverse()
              .map((job, index) => (
                <div key={job._id} onClick={() => handleCardClick(job)} className="mb-3">
                  <h5>{job.title}</h5>
                  <h6 className="text-muted">{job.company_name}</h6>
                  <div className="d-flex">
                    <p className="mb-1">{job.job_type}</p>
                    <p className="ms-auto mb-1">{job.candidate_required_location}</p>
                  </div>
                  {index < jobs.length - 1 && <hr />}
                </div>
              ))}
          </Container>
        </Col>

        {selectedJob && (
          <Col xs={12} md={6} className="px-0">
            <div className="p-3 bg-white">
              <h5>{selectedJob.title}</h5>
              <h6 className="text-muted">{selectedJob.company_name}</h6>
              <div dangerouslySetInnerHTML={{ __html: selectedJob.description }}></div>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default JobsComponent;
