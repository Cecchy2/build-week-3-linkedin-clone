import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getJobs } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import JobsLeftAside from "./JobsLeftAside";
import { FcLibrary } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import Footer from './Footer'

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
            <h4>Esplora le offerte di lavoro</h4>
            <Button variant="link" className="bigger-icon me-5">
              <FcLibrary />
            </Button>
            <Button variant="link" className="bigger-icon me-5">
              <FcGlobe />
            </Button>
            <Button variant="link" className="bigger-icon me-5">
              <FcShop />
            </Button>
            <Button variant="link" className="bigger-icon me-5">
              <FcVoicePresentation />
            </Button>
            <hr />
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
        <Col xs={12} md={2} className="px-0 ms-3"> 
        <Footer/>
        </Col>
      </Row>

    </Container>
    
  );
};

export default JobsComponent;
