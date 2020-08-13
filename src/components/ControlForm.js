import React from "react";
import { Icon } from "@mrshmllw/smores-react";
import { StyledControls } from '../styles/ControlForm.styles';

function ControlForm({titles, currentPage, setCurrentPage}) {

  const changePage = (direction) => {
    if (direction === "up" && currentPage < titles.length - 1) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "down" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClick = (page) => {
    setCurrentPage(titles.indexOf(page))
  };

  return (
    <StyledControls className="control-form">
      <div 
        className="left-arrow"
        onClick={() => changePage("down")}
      >
        <Icon 
          color="pink6"
          render="arrow"
          size={38}
        />
      </div>
      <ul className="pages">
        { titles.map((page, index) => {
            return (
              <li 
                key={index}
                onClick={() => handleClick(page)}
                className={ page === titles[currentPage] ? "clicked" : "not-clicked" }
              >
                {page}
              </li>
            )
          })
        }
      </ul>
      <div 
        className="right-arrow"
        onClick={() => changePage("up")}
      >
        <Icon 
          color="pink6"
          render="arrow"
          rotate={180}
          size={38}
        />
      </div>
    </StyledControls>
  );
}

export default ControlForm;