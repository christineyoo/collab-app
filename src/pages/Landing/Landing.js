import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <>
        <nav>Collab | Sign Up | Demo </nav>
        <main>
          <header>
            <h1>Collaborate better.</h1>
            <h2>
              Collab is a social and productivity app that helps your company
              increase its efficacy by enabling intra- and inter-collaboration
              amongst teams.
            </h2>
            <button>Explore Collab</button>
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
            <h4>Simple interface</h4>
            <p>
              This is some text about how can see all the announcements from the
              department in one place.
            </p>
            <h4>Team view</h4>
            <p>
              This is some text about how can view the most recent changes to
              curriculum in other courses for vertical alignment purposes.
            </p>
          </section>
        </main>
        <footer>Footer</footer>
      </>
    );
  }
}

export default Landing;