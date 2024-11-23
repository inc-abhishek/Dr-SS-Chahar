import React from "react";

function Services() {
  return (
    <div className="bg-gray-100 min-h-screen">
          {/* Hero Section */}
    <div className="relative h-[40vh] bg-green-800 flex flex-col justify-center items-center text-center text-white px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold">
        Our Services
      </h1>
      <p className="mt-2 text-base md:text-lg">
        Dedicated to providing the best pre-medical care for Armed Forces candidates.
      </p>
    </div>

      {/* Services Section */}
      <div className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800">
          What We Offer
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Comprehensive medical services to ensure you are always at your best.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">
              Full Body Checkup
            </h3>
            <p className="text-gray-600 mt-4">
              Complete diagnostics and consultation to prepare for medical exams.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">
              Vision & Hearing Tests
            </h3>
            <p className="text-gray-600 mt-4">
              Specialized eye and ear testing with certified professionals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">
              Lab Services
            </h3>
            <p className="text-gray-600 mt-4">
              Blood tests, urine analysis, and other lab facilities at your convenience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">
              Specialist Consultation
            </h3>
            <p className="text-gray-600 mt-4">
              Access top medical experts for tailored advice.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">
              Fitness Assessment
            </h3>
            <p className="text-gray-600 mt-4">
              Measure your physical fitness level with our experts.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">
              Customized Health Plans
            </h3>
            <p className="text-gray-600 mt-4">
              Receive personalized plans for your health and wellness journey.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      
    </div>
  );
}

export default Services;
