import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import '../assets/sass/index.scss';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            A multi skilled professional with over 8 years experience in
            software/web development.
            <br />
            <br /> A highly-motivated individual, who has worked on multi range
            of products in developing and maintaining software products in Agile
            environment. Demonstrates strong analytical thinking skill, with
            ability to communicate to different internal and external customers,
            and able to successfully satisfy the needs from stakeholders.
          </p>
          <div className="social-icons">
            {config.socialLinks.map((social) => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} className="social" target="_blank" rel="noreferrer">
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">Bidenergy</div>
              <div>
                <ul>
                  <li>
                    Maintain and develop bill validation framework, budget,
                    buyer report framework, bill tracking tool and framework,
                    manual bill entry tool(cyborg) and framework, and accrual
                    method using .NET
                  </li>
                  <li>BAU support</li>
                  <li>
                    Generate report to stakeholders in CSV or excel format
                  </li>
                  <li>Involved in writing sql query for Power BI usage</li>
                  <li>
                    Involved in setting up SFTP user login using AWS API Gateway
                    and AWS Lambda
                  </li>
                  <li>
                    Involved in developing quote system using .net core, web api
                    and reactjs
                  </li>
                  <li>
                    Involved in developing meter data connector for transferring
                    file from AWS S3 to SFTP server
                  </li>
                  <li>
                    Involved in developing data warehouse site daily database
                    table from actual bill-metadata usage and spend components
                  </li>
                  <li>
                    Involved in replicating contract framework for meter data
                    contract
                  </li>
                </ul>
                <span>
                  Tools: Html, Css, Javascript (AngularJs, VueJs, ReactJs,
                  jQuery), C# Asp.Net Mvc, WebApi, Mysql, Sql Server, Mongodb,
                  Wordpress, Nhibernate, Jenkins, GitHub, AWS, Jira, Trello,
                  Hangfire
                  <br /> Platform: Windows and Ubuntu
                </span>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2016 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">Potentiality</div>
              <div>
                <ul>
                  <li>
                    Maintain and Develop web pages using Jquery, CSS and HTML
                  </li>
                </ul>
                <span>Tools: Html, Css, Javascript, Jquery, C#, Wordpress</span>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2015 - May 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Junior .NET Programmer</h3>
              <div className="subheading mb-3">Axima</div>
              <div>
                <ul>
                  <li>Maintain and develop e-quote system using .NET</li>
                </ul>
                <span>
                  Tools: Html, Css, Javascript, Jquery, C# Asp.Net Mvc, Sql,
                  Linq, Entity Framework
                </span>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2013 - Feb 2015</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Graduate Software Developer</h3>
              <div className="subheading mb-3">Adslot</div>
              <div>
                <ul>
                  <li>
                    Maintain and Develop car sales front end auction system
                    using .NET
                  </li>
                </ul>
                <span>
                  Tools: Html, Css, Javascript, Jquery, C# Asp.Net Mvc, Sql
                </span>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2012 - Feb 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Student Intern</h3>
              <div className="subheading mb-3">Thales</div>
              <div>
                <ul>
                  <li>Metric KPI report delivery</li>
                  <li>
                    GISEL project developed in Perl; synchronisation tool
                    between GAIA and external party software
                  </li>
                </ul>
                <span>
                  Tools: HTML, CSS, Javascript (jQuery), Perl, Linux Shell
                  Scripting
                  <br />
                  Platform: Windows and Linux
                </span>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2009 - Feb 2011</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="voluntarywork"
      >
        <div className="w-100">
          <h2 className="mb-5">Voluntary Work</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
                    <div class="resume-content mr-auto">
                        <div class="typewriter">
                            <h3 class="mb-0">Web Application Developer</h3>
                        </div>
                        <div class="subheading mb-3">Self Employed</div>
                        <div>
                            <ul>
                                <li>Developed a website for advertising and selling columbarium.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary period-range">Jan 2019 - Jan 2020</span>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row mb-5">
                    <div class="resume-content mr-auto">
                        <div class="typewriter">
                            <h3 class="mb-0">Web Developer</h3>
                        </div>
                        <div class="subheading mb-3">Self Employed</div>
                        <div>
                            <ul>
                                <li>To assist in improving and developing personal carer record system.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary period-range">Apr 2012 - Dec 2012</span>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row mb-5">
                    <div class="resume-content mr-auto">
                        <div class="typewriter">
                            <h3 class="mb-0">Web Developer</h3>
                        </div>
                        <div class="subheading mb-3">Freelance</div>
                        <div>
                            <ul>
                                <li>Website maintenance for a client.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary period-range">Apr 2012 - Dec 2017</span>
                    </div>
                </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <div class="typewriter">
                <h3 class="mb-0">RMIT University</h3>
              </div>

              <div class="subheading mb-3">
                Bachelor of Software Engineering
              </div>
              <div></div>
              <p></p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary period-range">2007 - 2011</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <div class="typewriter">
                <h3 class="mb-0">Trinity College, University of Melbourne</h3>
              </div>

              <div class="subheading mb-3">Foundation Studies</div>
              <p></p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary period-range">2006 - 2006</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="skills"
      >
        <div class="my-auto">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul>
            <li>Requirement gathering, estimation and design</li>
            <li>Unit Testing</li>
            <li>Reporting</li>
            <li>Automation</li>
            <li>Prioritizing tasks</li>
            <li>
              Proficient in C#, Asp.Net Framework, .Net Core, WebApi, Sql,
              Mysql, Mongo (Nosql), Typescript, ReactJs, AngularJs, Vuejs,
              Javascript, Html, Css
            </li>
            <li>Web, digital, cloud platform</li>
            <li>Windows and Linux environment</li>
            <li>GitHub and BitBucket</li>
            <li>Jira and Trello</li>
            <li>IT support</li>
          </ul>

          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-check"></i> Mobile-First, Responsive Design
            </li>
            <li>
              <i class="fa-li fa fa-check"></i> Cross Browser Testing &amp;
              Debugging
            </li>
            <li>
              <i class="fa-li fa fa-check"></i> Cross Functional Teams
            </li>
            <li>
              <i class="fa-li fa fa-check"></i> Agile Development &amp; Scrum
            </li>
          </ul>

          <br />
          <br />
          <div id="table_div"></div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a sofware developer, I enjoy most of my time doing
            online courses to upskill and playing computer games for relaxation.
          </p>
          <p class="mb-0">
            I also enjoy going to the gym and spending time with my partner.
            Travelling and looking for great food are also part of my interests.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      
    </div>
  </Layout>
);

export default IndexPage;
