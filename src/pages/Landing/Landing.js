import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Organisms/Footer/Footer.js';
import './Landing.css';
import featurePicture1 from '../../images/collab-groups.png';
import featurePicture2 from '../../images/collab-edit.png';
import featurePicture3 from '../../images/collab-comment.png';

class Landing extends Component {
  renderPicture = (isFeaturePicture1) => {
    if (isFeaturePicture1) {
      return (
        <div className='flex-1'>
          <img src={featurePicture1} alt='groups' className='responsive' />
        </div>
      );
    } else {
      return (
        <div className='flex-1'>
          <img
            src={featurePicture2}
            alt='edit'
            className='responsive'
          />
        </div>
      );
    }
  };

  render() {
    return (
      <>
        <header id='landing-header' className='landing'>
          <h1 id='landing-h1'>Collaborate better.</h1>
          <h2 id='landing-h2'>
            Collab is a productivity app that helps teachers increase their
            efficacy by enabling intra- and inter-collaboration amongst course
            teams.
          </h2>
          <Link to='all-posts'>
            <button id='landing-button'>Explore Collab</button>
          </Link>
        </header>

        <section id='benefits' className='landing-section'>
          <h3 id='landing-h3'>
            <i>Benefits of Collab</i>
          </h3>
          <div className='flex'>
            <div id='landing-card' className='flex-1'>
              <i className='far fa-comments fa-7x'></i>
              <h4>Easy to use</h4>
              <p>
                Get updates from your department without the hassle of digging
                through your inbox (no offense, email).
              </p>
            </div>
            <div id='landing-card' className='flex-1'>
              <i className='fas fa-users fa-7x'></i>
              <h4>Stay connected</h4>
              <p>
                Keep tabs on your colleagues to provide feedback, track
                progress, share best practices.
              </p>
            </div>

            <div id='landing-card' className='flex-1'>
              <i className='fas fa-arrows-alt-v fa-7x'></i>
              <h4>Vertical alignment</h4>
              <p>
                Find resources, updates in curriculum, and assessments for every
                course in one place.
              </p>
            </div>
          </div>
        </section>
        <section id='features' className='landing-section'>
          <h3>
            <i>Features of Collab</i>
          </h3>
          <div className='flex'>
            <div id='landing-card' className='flex-1'>
              <h4>Simple interface</h4>
              <p>
                Skip the searching and scrolling through that inbox. All the
                info you need is here. Simply click on the course you would like
                to view and see all the relevant updates from your colleagues.
              </p>
            </div>
            <div className='flex-1'>
          <img src={featurePicture1} alt='groups' className='responsive' />
        </div>
          </div>
          <br />
          <br />
          <br />
          <div className='flex'>
          <div className='flex-1'>
          <img src={featurePicture2} alt='groups' className='responsive' />
        </div>
            <div id='landing-card' className='flex-1'>
              <h4>Edit your posts</h4>
              <p>
                Made a typo in your message? Sent a message to the wrong group?
                No worries. Edit your posts with ease and update them just like
                that.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className='flex'>
            <div id='landing-card' className='flex-1'>
              <h4>Keep track of conversations</h4>
              <p>
                All relevant comments regarding a post are kept in their
                respective posts so that you can respond in an easy, streamlined
                format. No more wondering if you clicked 'Reply All' or just
                'Reply'!
              </p>
            </div>
            <div className='flex-1'>
          <img src={featurePicture3} alt='groups' className='responsive' />
        </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Landing;
