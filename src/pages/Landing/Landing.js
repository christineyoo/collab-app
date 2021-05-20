import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Organisms/Footer/Footer.js';
import './Landing.css';
import HomeNav from '../../Organisms/Nav/HomeNav.js';
// import featurePicture1 from './algebra-course.png';
// import featurePicture2 from './ids-course.png';

class Landing extends Component {
  renderPicture = (isFeaturePicture1) => {
    if (isFeaturePicture1) {
      return (
        <div className='flex-1'>
          {/* <img src={featurePicture1} alt='Algebra 1' className='responsive' /> */}
        </div>
      );
    } else {
      return (
        <div className='flex-1'>
          {/* <img
            src={featurePicture2}
            alt='Intro to Data Science'
            className='responsive'
          /> */}
        </div>
      );
    }
  };

  render() {
    return (
      <>
        {/* <HomeNav /> */}
        <header id='landing-header' className='landing'>
          <h1 id='landing-h1'>Collaborate better.</h1>
          <h2 id='landing-h2'>
            Collab is a productivity app that helps teachers increase their
            efficacy by enabling intra- and inter-collaboration amongst course
            teams.
          </h2>
          <button id='landing-button'>
            <Link to='all-posts'>Explore Collab</Link>
          </button>
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
            {this.renderPicture(true)}
          </div>
          <br />
          <br />
          <br />
          <div className='flex'>
            {this.renderPicture()}
            <div id='landing-card' className='flex-1'>
              <h4>Know what's behind and ahead</h4>
              <p>
                Effectively plan your lessons for vertical alignment by clicking
                on other courses to see updates. When teachers collaborate
                better, we teach better... and students learn better.
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
            {this.renderPicture(true)}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Landing;
