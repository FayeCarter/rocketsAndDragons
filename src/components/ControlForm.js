import React from "react";
import { Icon } from "@mrshmllw/smores-react";

function ControlForm({titles, currentPage, setCurrentPage}) {

  const changePage = (direction) => {
    if (direction === "up" && currentPage < titles.length - 1) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "down" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="control-form">
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
              <li key={index}>
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
    </div>
  );
}

export default ControlForm;