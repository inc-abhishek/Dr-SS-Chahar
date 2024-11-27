import React from "react";

function Services() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[25vh] bg-green-800 flex flex-col justify-center items-center text-center text-white px-4 pb-6"> {/* Reduced height */}
        <h1 className="text-3xl md:text-4xl font-extrabold">
          हमारी सेवाएँ
        </h1>
        <p className="mt-2 text-base md:text-lg">
          हम सशस्त्र बलों के उम्मीदवारों के लिए सर्वोत्तम प्री-मेडिकल देखभाल प्रदान करने के लिए समर्पित हैं
        </p>
      </div>

      {/* Services Section */}
      <div className="py-12 px-6 md:px-20">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">
              पूर्ण शरीर चेकअप
            </h3>
            <p className="text-gray-600 mt-4">
              मेडिकल परीक्षा की तैयारी के लिए पूर्ण डायग्नोस्टिक्स और परामर्श।
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">
              दृष्टि और श्रवण परीक्षण
            </h3>
            <p className="text-gray-600 mt-4">
              प्रमाणित पेशेवरों द्वारा विशेष नेत्र और श्रवण परीक्षण।
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">
              प्रयोगशाला सेवाएँ
            </h3>
            <p className="text-gray-600 mt-4">
              रक्त परीक्षण, मूत्र विश्लेषण और अन्य प्रयोगशाला सुविधाएँ।
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">
              विशेषज्ञ परामर्श
            </h3>
            <p className="text-gray-600 mt-4">
              व्यक्तिगत सलाह के लिए शीर्ष चिकित्सा विशेषज्ञों से संपर्क करें।
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">
              फिटनेस मूल्यांकन
            </h3>
            <p className="text-gray-600 mt-4">
              हमारे विशेषज्ञों के साथ अपनी शारीरिक फिटनेस स्तर को मापें।
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">
              कस्टमाइज्ड हेल्थ प्लान
            </h3>
            <p className="text-gray-600 mt-4">
              आपके स्वास्थ्य और कल्याण यात्रा के लिए व्यक्तिगत योजना प्राप्त करें।
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
    </div>
  );
}

export default Services;
