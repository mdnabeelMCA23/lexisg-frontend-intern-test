import React, { useState } from 'react';
import QueryInput from './components/QueryInput';
import AnswerCard from './components/AnswerCard';
// import CitationPopup from './components/CitationPopup'; // If you're using the separate popup component

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);

  const handleQuerySubmit = (query) => {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const response = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal...",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link: "/Dani_Devi_v_Pritam_Singh.pdf" // from public folder
          },
        ],
      };

      setResponse(response);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Lexi Legal Assistant</h1>

        <QueryInput onSubmit={handleQuerySubmit} loading={loading} />

        {response && (
          <AnswerCard
            answer={response.answer}
            citations={response.citations}
            onCitationClick={(link) => setSelectedPDF(link)}
          />
        )}
      </div>

      {/* PDF Modal */}
      {selectedPDF && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-11/12 md:w-3/4 h-5/6 rounded-lg shadow-xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">Citation PDF Preview</h2>
              <button
                onClick={() => setSelectedPDF(null)}
                className="text-gray-500 hover:text-red-600 text-xl font-bold"
              >
                ✕
              </button>
            </div>
            <iframe
              src={selectedPDF}
              title="Citation PDF"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
