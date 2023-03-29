// HomePage.js

import React, { useState } from 'react';
import { connect } from 'react-redux';

function HomePage(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('DS1234');

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };


  const courseInfo = () => {
    if (selectedOption === 'DS1234') {
        return 'Data Scientist Program';
    } else {
        return 'Invalid Program Code';
    }
  };
  return (
    <div>
      <div className="header">
        <h1>{
            courseInfo()
        }</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/modules">Modules</a></li>
                <li><a href="/instructors">Instructors</a></li>
            </ul>
        </nav>

        <div className="dropdown">
          <button onClick={handleDropdownToggle}>
            {selectedOption} <i className="fa fa-chevron-down"></i>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={() => handleOptionSelect('DS1234')}>
                DS1234
              </button>
              <button onClick={() => handleOptionSelect('DA1234')}>
                DA1234
              </button>
              <button onClick={() => handleOptionSelect('SWE1234')}>
                SWE1234
              </button>
            </div>
          )}
        </div>
      </div>
      {(selectedOption === 'DA1234' || selectedOption === 'SWE1234') && (
        <div className="content">
          <p>404 - Page Not Found</p>
          <p>{courseInfo()}</p>
        </div>
      )}
      {selectedOption === 'DS1234' && (
        <div className="content">
            <h3>
                Welcome to {courseInfo()} Program
            </h3>
          
            <p>{props.modules.length} modules avilable for learning DS1234</p>
            <p>Mr.X is your instructor for the DS1234 course</p>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis ullamcorper purus, non vehicula lacus consectetur non. Sed quis facilisis ipsum. Integer eu est a dolor ullamcorper rutrum. Nunc dictum, nisl vel euismod malesuada, tortor risus rutrum velit, eu sodales elit risus vel risus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis ullamcorper purus, non vehicula lacus consectetur non. Sed quis facilisis ipsum. Integer eu est a dolor ullamcorper rutrum. Nunc dictum, nisl vel euismod malesuada, tortor risus rutrum velit, eu sodales elit risus vel risus.</p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
    modules: state.modules,

});

export default connect(mapStateToProps)(HomePage);