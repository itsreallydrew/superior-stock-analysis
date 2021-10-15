import React from "react";
import "./About.css";

function About(props) {
  return (
    <div className="about-content">
      <div className="about">
        <p>
          This app was inspired by the Youtube channel of Chris Sain. He has
          built up a large following by helping retail traders to gain more
          knowledge on the basics of trading stocks. He gained popularity by
          starting his '100K Challenge' where he started a brand new portfolio
          and grew it to $100,000 in one year. He formats his videos by talking
          about the investments he makes, which he refers to as "plays." He
          follows this by describing his thought process and decision-making on
          his choice to invest in this play. He then encourages viewers to do
          their own research and not just blindly follow his advice. He
          concludes his videos with two final remarks. He will have a 'word of
          the day' where he explains common stock terminology to help the viewer
          become more familiar with stock lingo. He then concludes with
          'question of the day' where he will choose a question from the
          comments on his previous video and provide feedback or an answer.
          Chris Sain has been a great asset to me as well as many others. If you
          want to learn more or check out some of his videos, a link to his
          channel can be found below. <br />
          <br />
          <a href="https://www.youtube.com/channel/UCrTFPf6rq5OUSWb7ILW9trg">
            Chris Sain's Youtube Channel
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
