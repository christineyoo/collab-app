import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../Organisms/Footer/Footer.js';
import './Landing.css';
import HomeNav from '../../Organisms/Nav/HomeNav.js';
import fillerPic from './monsters-university.jpg';

class Landing extends Component {
  renderPicture = () => {
    return (
      <div className='flex-1'>
        <img src={fillerPic} alt='Monsters University' class='responsive' />
      </div>
    );
  };

  render() {
    return (
      <>
        <HomeNav />
        <main>
          <header>
            <h1>Collaborate better.</h1>
            <h2>
              Collab is a social and productivity app that helps teachers
              increase their efficacy by enabling intra- and inter-collaboration
              amongst course teams. Because when we collaborate better, we teach
              better... and students learn better.
            </h2>
            <button>
              <NavLink to='dashboard'>Explore Collab</NavLink>
            </button>
          </header>

          <section>
            <h3>Benefits of Collab</h3>
            <div className='flex'>
              <div className='flex-1'>
                <h4>Easy to use</h4>
                <p>
                  Get updates from your department without the hassle of digging
                  through your inbox.
                </p>
              </div>
              <div className='flex-1'>
                <h4>Stay connected</h4>
                <p>
                  Keep tabs on your colleagues to track progress and share best
                  practices.
                </p>
              </div>

              <div className='flex-1'>
                <h4>Vertical alignment</h4>
                <p>
                  Find resources, updates in curriculum, and assessments for
                  every course in one place.
                </p>
              </div>
            </div>
          </section>
          <section id='features'>
            <h3>Features of Collab</h3>
            <div className='flex'>
              <div className='flex-1'>
                <h4>Simple interface</h4>
                <p>
                  Skip the searching and scrolling. All the info you need is
                  here. Simply click on the course you would like to view and
                  see all the relevant updates from your colleagues.
                </p>
              </div>
              {this.renderPicture()}
            </div>
            <br />
            <br />
            <br />
            <div className='flex'>
              {this.renderPicture()}
              <div className='flex-1'>
                <h4>Team view</h4>
                <p>
                  Effectively plan your lessons for vertical alignment by
                  clicking on other courses to see modifications and assessments
                  for that particular course.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Landing;
