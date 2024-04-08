import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>
      Thank you for joining us at Xperienced Tekie.{" "}
      <span className="font-bold">
        Below are the things you need to do to get started:
      </span>{" "}
    </p>
    <ol>
      <li>
        Take your 10 minutes assessment now through your{" "}
        <a href="https://dash.xperiencedtekie.pro"> dashboard </a>{" "}
      </li>
      <li>
        Make your payment of $6 to reserve your seat for the program in your
        dashboard
      </li>
      <li>
        Once you make your payment and finish your assessment, we will send you
        an email congratulating you for reserving your seat
      </li>
      <li>
        The software development mentorship program starts by April 15, 2024 and
        seats are getting filled quickly so take action now.
      </li>
    </ol>

    <p>
      Once again, I congratulate you for starting this journey! Feel free to
      reach out to me if you have any issues or queries!
    </p>
    <p>
      <b>Tomiwa Philip</b>
    </p>
    <span>
      <em>CEO, Xperienced Tekie</em>
    </span>
  </div>
);

export const EmailTemplate2: React.FC<Readonly<EmailTemplateProps>> = () => (
  <div>
    <h1>Congratulations!</h1>
    <p>
      You have successfully secured your seat for the next cohort of Software
      Development Mentorship Programme starting by April 15, 2024{" "}
      <span className="font-bold">
        Below are the things you need to do to prepare yourself:
      </span>{" "}
    </p>
    <ol>
      <li>Setup your dev tools (laptop and IDE) </li>
      <li>
        Join our discord <a href="https://dash.xperiencedtekie.pro"> here</a>.
        This would be your official workspace
      </li>
      <li>
        Share this email on your X (fomerly twitter) and tag us, also give us a
        follow <a href="https://dash.xperiencedtekie.pro"> here</a>
      </li>
      <li>Reply this email telling us how happy you are to get started</li>
    </ol>

    <p>
      Once again, I congratulate you for starting this journey! Feel free to
      reach out to us if you have any issues or queries!
    </p>
    <p>
      <b>Xperienced Tekie</b>
    </p>
    <span>
      <em>With Love!</em>
    </span>
  </div>
);
