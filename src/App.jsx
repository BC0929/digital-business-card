import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: ''
  })

  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatusMessage('Submitting...')

    try {
      const response = await fetch('https://xlhqk82u3j.execute-api.us-east-2.amazonaws.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setStatusMessage('Thanks. Your information was submitted.')
        setFormData({
          name: '',
          phone: '',
          email: '',
          comment: ''
        })
      } else {
        setStatusMessage(data.message || 'Submission failed.')
      }
    } catch (error) {
      console.error(error)
      setStatusMessage('Something went wrong.')
    }
  }

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Brandon Clair</p>
          <h1>Digital Business Card</h1>
          <p className="intro">
            IT support and infrastructure professional with experience across
            desktop, network, and server environments. My background includes
            MSP support, onboarding and user access management, enterprise
            troubleshooting, and hands-on work with network refreshes and data
            center solutions while I continue building toward cloud and
            cybersecurity-focused roles.
          </p>

          <div className="hero-buttons">
            <a className="button primary" href="#contact">Recruiter Contact</a>
            <a
              className="button secondary"
              href="/Brandon-Clair-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Open Resume
            </a>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="card about-card">
          <h2>About Me</h2>
          <p>
            I have worked in IT support, network operations, and enterprise
            infrastructure environments. My background includes managed service
            support, troubleshooting, customer communication, and hands-on work
            with network refreshes and data center solutions.
          </p>
        </section>

        <section className="grid-two">
          <section className="card">
            <h2>Work Experience</h2>

            <div className="item featured-item">
              <h3>Helpdesk Analyst</h3>
              <p className="job-line">Managed Service Provider | Current Role</p>
              <p>
                Provide day-to-day support across desktop, network, and server
                environments while assisting with onboarding, user account
                management, ticket handling, and general IT operations using
                common MSP tools and support platforms.
              </p>
            </div>

            <div className="item">
              <h3>Project Management / Technician</h3>
              <p className="job-line">
                Precision Deployment Solutions | Texas | Aug 2024 – Nov 2024
              </p>
              <p>
                Assisted in building enterprise network refreshes and data
                center solutions for vendors across the country, including
                hardware upgrades, infrastructure work, and deployment support.
              </p>
            </div>

            <div className="item">
              <h3>Tier 1 NOC Technician &amp; CIT</h3>
              <p className="job-line">
                Netrio | McKinney, Texas | Aug 2021 – Jul 2024
              </p>
              <p>
                Supported clients globally through troubleshooting, ticket
                handling, white-label MSP support, and technologies such as
                Wi-Fi, VoIP, remote access, carrier support, and site support.
              </p>
            </div>

            <div className="item">
              <h3>Customer Service Specialist</h3>
              <p className="job-line">
                TATA Consultancy | Plano, Texas | Mar 2018 – Aug 2021
              </p>
              <p>
                Assisted customers with insurance and financial service issues
                while managing policy changes, reports, complaint follow-up, and
                claims support.
              </p>
            </div>
          </section>

          <section className="stack">
            <section className="card">
              <h2>Education</h2>

              <div className="item featured-item">
                <h3>Bachelor of Science in Information Technology</h3>
                <p className="job-line">
                  University of North Texas | In Progress
                </p>
                <p>
                  Currently continuing my education in information technology
                  with a focus on systems, cloud technologies, networking, and
                  cybersecurity.
                </p>
              </div>

              <div className="item">
                <h3>Associate of Applied Science</h3>
                <p className="job-line">
                  Collin College Community Campus | McKinney, TX
                </p>
                <p>3.6 GPA | Honor Society</p>
              </div>
            </section>

            <section className="card">
              <h2>Skills</h2>
              <div className="skills">
                <span>Helpdesk Support</span>
                <span>Desktop Support</span>
                <span>Network Troubleshooting</span>
                <span>Server Support</span>
                <span>Onboarding</span>
                <span>User Access Management</span>
                <span>MSP Tools</span>
                <span>Ticketing Systems</span>
                <span>Microsoft 365</span>
                <span>Wi-Fi</span>
                <span>VoIP</span>
                <span>Infrastructure Support</span>
                <span>Cybersecurity</span>
                <span>AWS Cloud</span>
              </div>
            </section>

            <section className="card" id="resume">
              <h2>Resume</h2>
              <p>
                View or download my current resume below.
              </p>

              <div className="resume-actions">
                <a
                  className="button primary"
                  href="/Brandon-Clair-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Resume
                </a>

                <a
                  className="button secondary"
                  href="/Brandon-Clair-Resume.pdf"
                  download="Brandon-Clair-Resume.pdf"
                >
                  Download Resume
                </a>
              </div>
            </section>
          </section>
        </section>

        <section className="card" id="contact">
          <h2>Recruiter Contact</h2>
          <p className="contact-text">
            Leave your information below and it will be saved securely.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Phone
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Comment
              <textarea
                name="comment"
                placeholder="Add a message or recruiting note"
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
            </label>

            <button type="submit" className="button primary">
              Submit
            </button>

            {statusMessage && <p>{statusMessage}</p>}
          </form>
        </section>
      </main>
    </div>
  )
}

export default App