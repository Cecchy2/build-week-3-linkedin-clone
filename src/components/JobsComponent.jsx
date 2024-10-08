import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getJobs } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import JobsLeftAside from "./JobsLeftAside";
import { FcLibrary } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import Footer from "./Footer";

const JobsComponent = () => {
  const dispatch = useDispatch();
  const [selectedJob, setSelectedJob] = useState(null);
  const [sliceMore, setSliceMore] = useState(20);

  const jobs = useSelector((state) => state.jobList.jobs);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };

  const handleSliceMore = () => {
    setSliceMore(sliceMore + 20);
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
            {jobs.slice(0, sliceMore).map((job, index) => (
              <div key={job._id} onClick={() => handleCardClick(job)} className="mb-3 d-flex">
                <Row>
                  <Col xs={3}>
                    {job.image ? (
                      <img src="job.image" alt="logo azienda" className="object-fit-cover w-100" />
                    ) : (
                      <img
                        src="https://media.gettyimages.com/id/1180187740/it/foto/vista-aerea-della-folla-collegata-da-linee.jpg?s=1024x1024&w=gi&k=20&c=etJZ_jJeSSCb1yZQX61UTS5PAW_djBkhDQUbsNhtUjw="
                        alt="logo azienda"
                        className="object-fit-cover w-100"
                      />
                    )}
                  </Col>
                  <Col xs={9}>
                    <h5>{job.title}</h5>
                    <h6 className="text-muted">{job.company_name}</h6>
                    <div className="d-flex">
                      <p className="mb-1">{job.job_type}</p>
                      <p className="ms-auto mb-1">{job.candidate_required_location}</p>

                      {index < jobs.length - 1 && <hr />}
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
            <Button className="d-block ms-auto" onClick={handleSliceMore}>
              altri...
            </Button>
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
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default JobsComponent;
