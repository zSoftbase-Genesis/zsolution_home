import React, { Component, useState } from "react";
import { Fade, Slide } from "react-reveal";
import axios from 'axios'

const Contact = () => {
  const [status, setStatus] = useState('')
    const [data, setData] = useState({
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    setIsLoading(true)
    axios.post('http://localhost:8080/send-mail', data).then(() => {
      setIsLoading(false)
      setStatus('success')
    }).catch(() => {
      setStatus('false')
      setIsLoading(false)
    })
  }

  console.log(status)

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">Leave a message to get in touch with us</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={(e) => setData({ ...data, contactName: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={(e) => setData({ ...data, contactEmail: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={(e) => setData({ ...data, contactSubject: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    onChange={(e) => setData({ ...data, contactMessage: e.target.value })}
                  ></textarea>
                </div>

                <div>
                  {
                    isLoading
                      ? (
                        <span id="image-loader">
                          <img alt="" src="images/loader.gif" />
                        </span>
                      )
                      : status === 'error'
                      ? (
                        <div id="message-warning"> Error boy</div>
                      )
                      : status === 'success' ?  (
                        <div id="message-success">
                          <i className="fa fa-check"></i>Your message was sent, thank you!
                          <br />
                        </div>
                      ) : <button className="submit" onClick={handleSubmit}>Submit</button>
                  }
                </div>
              </fieldset>
            </form>
            {status === 'error'
              ? (
                <div id="message-warning"> Error boy</div>
              )
              : status === 'success' ?  (
                <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!
                  <br />
                </div>
              ) : ''
            }
          </div>
        </Slide>

        <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                zSolutions Services
                <br />
                68 Association road, Orange Estate <br />
                Arepo, Ogun state 110115
                <br />
                <span>08029313116</span>
              </p>
            </div>

            {/* <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Tweets</h4>
              <ul id="twitter">
                <li>
                  <span>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum
                    <a href="./">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="./">2 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi
                    <a href="./">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="./">3 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div> */}
          </aside>
        </Slide>
      </div>
    </section>
  );
}

export default Contact;
