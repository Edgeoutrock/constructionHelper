import React from "react";
import styles from "./style.css";
import { Link } from "react-router-dom";
// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="listoverflowcontainer">
      <ul className="listgroup">{children}</ul>
    </div>
  );
}

export function ListItem({ author, title, id, children }) {
  return (
    <li>
<div className={styles.link}>
      {/* <div
        className={styles.votingContainer}
      >
        <div
          className={styles.votingCount}
        >
          {link.voteCount}
        </div>
      </div>  great idea to see name of person wanting to purchase something*/}
      <div
        className={styles.detailsContainer}
      >
        <div>
          
           
            <Link to={"/posts/" + id}>
            {children}
              </Link>
          
        </div>
        <div
          className={styles.description}
        >
         
        </div>
      </div>
    </div>
    </li>
  );
}
