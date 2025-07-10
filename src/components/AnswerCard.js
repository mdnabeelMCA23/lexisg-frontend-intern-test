import React, { useState } from 'react';
import CitationPopup from './CitationPopup';

const AnswerCard = ({ answer, citations }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [pdfLink, setPdfLink] = useState("");

  const handleCitationClick = (link) => {
    setPdfLink(link);
    setPopupOpen(true);
  };

  return (
    <div className="mt-6 p-4 border rounded shadow">
      <p>{answer}</p>
      <div className="mt-4">
        <h4 className="font-semibold">Citation:</h4>
        {citations.map((c, i) => (
          <p
            key={i}
            onClick={() => handleCitationClick(c.link)}
            className="text-blue-600 underline cursor-pointer mt-2"
          >
            {c.text}
          </p>
        ))}
      </div>
      {popupOpen && <CitationPopup link={pdfLink} onClose={() => setPopupOpen(false)} />}
    </div>
  );
};

export default AnswerCard;
