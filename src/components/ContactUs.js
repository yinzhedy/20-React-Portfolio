import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h1 className="lead">
              Feel free to contact me via email or through any channels listed below
              </h1>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  <a href="https://www.linkedin.com/in/yinzhe-dong-ydeen-7a116121b/">{resumeData.linkedinId}</a>
                </h4>
                <h4>Email :
                  <a href="yinzhe.dy@gmail.com">{resumeData.email}</a>
                </h4>
                <h4>Github :
                  <a href="https://github.com/yinzhedy">yinzhedy</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}