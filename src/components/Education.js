import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Items from './Items'
import Outline from './Outline'
import NavBar from './Navbar.js';
import Footer from './Footer.js';

function Education() {
  const ds = ["Abstract Data Types", "Algorithm Analysis"];
  const oo = ["Java", "Object Oriented Design"]
  const al = ["C", "Creating and testing algorithms", "Makefiles"]
  const os = ["C", "Multithreading programming"];
  const ad = ["C", "HTML, CSS, JS", "MYSQL"]
  const cr = ["Cryptool", "Whole lotta math"];
  const ls = ["Fortran", "COBOL", "Pascal"]
  const se = ["React", "Node", "Firebase"]
  const da = ["C", "Python", "Java"];
  const ts = ["Typescript", "Docker", "CL/CI Pipelines"]
  const mc = ["Android Studio", "React Native"]
  const sd = ["Python", "OpenCV"]
  const ui = ["Wireframes", "User Acceptance Testing"]

  return (
    <div>
      <NavBar/>
      <Outline image='./education-image.jpg'
               header="Educaton"
               subheader="Bachelor of Computing, Honours in Software Engineering. Minor in Business. Take a look at all
                          my relavent classNameNamees I've completed."
      />
      <Accordion>
        <Items eventkey="0"
          title="Data Structures"
          description="This course covered abstract data types in the form of lists, stacks, quesues, trees, and tables"
          skills={ds}
        />
        <Items eventkey="1"
          title="Object Oriented Programming"
          description="This course introduced the OO approach to programming.
                       The course project was a mock portfolio application where
                       the user could buy and sell fake stocks."
          skills={oo}
        />
        <Items eventkey="2"
          title="Analysis and Design of Computer Algorithms"
          description="This course is a study of data organization and data 
                       management principles with the perspective of analyzing 
                       applications suitable for implementation using a DBMS"
          skills={al}
        />
        <Items eventkey="3"
          title="Operating Systems"
          description="This course covers components in a system: scheduling and resource allocation; 
                       process management, multi-programming, multi-tasking; I/O control 
                       and file systems"
          skills={os}
        />
        <Items eventkey="4"
          title="Software Systems Development and Integration"
          description="Techniques and tools used in the development of large 
                       software systems. Methods for organizing and constructing 
                       modular systems, manipulating files, an introduction to 
                       interface design, and use of databases."
          skills={ad}
        />
        <Items eventkey="5"
          title=" User Interface Design"
          description="This course covers user interface construction. Topics include 
                       user interface components and their application, best practices
                       for user interface design, approaches to prototyping, and techniques
                       for assessing interface suitability."
          skills={ui}
        />
        <Items eventkey="6"
          title="Introduction to Cryptography"
          description="This course introduced encryption methods from the caesar cipher to RSA. How they work,
                       and theoretical decryption"
          skills={cr}
        />
        <Items eventkey="7"
          title="Software for Legacy Systems"
          description="This course is an introduction to legacy software 
                       systems used in business, manufacturing, and engineering. 
                       Topics include COBOL programming, mainframe systems, and 
                       integration of legacy systems with contemporary computing systems."
          skills={ls}
        />
        <Items eventkey="8"
          title="System Analysis and Design in Applications"
          description="An introduction to the issues and techniques encountered 
                       in the design and construction of software systems. The 
                       theory and models of software evolution. Topics include 
                       requirements and specifications, prototyping, design principles,
                       object-oriented analysis and design, standards, integration, risk
                       analysis, testing and debugging."
          skills={da}
        />
        <Items eventkey="9"
          title="Software Reliability and Testing"
          description="This course teaches methods of testing and verification,
                       covering a range of static and dynamic techniques and 
                       their use within the software development process. 
                       Concepts such as defining necessary reliability, 
                       developing operational profiles, techniques to 
                       improve and predict software reliability, preparing 
                       and executing tests, black box testing, white box 
                       testing, unit testing, system testing, and integration
                       testing."
          skills={ts}
        />
        <Items eventkey="10"
          title="Software Engineering"
          description="This course is an examination of the software 
                       engineering process, the production of reliable 
                       systems and techniques for the design and development 
                       of complex software. The focus was on how to build 
                       reliable software over multiple sprints."
          skills={se}
        />
        <Items eventkey="11"
          title="Mobile Computing"
          description="Covered basics of Android Studio, I then went on
                       to create a final app in React Native which can be seen on my Portfolio"
          skills={mc}
        />
        <Items eventkey="12"
          title="Software Design V"
          description="Cornerstone project were myself and a group of 6 others used nothing but a Raspberry Pi
                       and a Pi Cam to create a complete security camera system."
          skills={sd}
        />
      </Accordion>
      <Footer/>
    </div>
  );
}

export default Education;
