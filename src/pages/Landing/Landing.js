import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../Organisms/Footer/Footer.js';
import './Landing.css';
import HomeNav from '../../Organisms/Nav/HomeNav.js';

class Landing extends Component {
  render() {
    return (
      <>
        <HomeNav />
        <main>
          <header>
            <h1>Collaborate better.</h1>
            <h2>
              Collab is a social and productivity app that helps your company
              increase its efficacy by enabling intra- and inter-collaboration
              amongst teams.
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
          <section>
            <h3>Features of Collab</h3>
            <div className='flex'>
              <div className='flex-1'>
                <h4>Simple interface</h4>
                <p>
                  This is some text about how can see all the announcements from
                  the department in one place.
                </p>
              </div>
              <div className='flex-1 img'>Image</div>
            </div>
            <br />
            <br />
            <br />
            <div className='flex'>
              <div className='flex-1 img'>Image</div>
              <div className='flex-1'>
                <h4>Team view</h4>
                <p>
                  This is some text about how can view the most recent changes
                  to curriculum in other courses for vertical alignment
                  purposes.
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
