import React from "react";

const OurSuccessStories = () => {
  const reviews = [
    {
      name: "रवि कुमार",
      image: "https://media.istockphoto.com/id/1454633520/photo/republic-day-india-gantantra-diwas-army-day-and-26-january-abstraction.jpg?s=612x612&w=0&k=20&c=lX01lwLs29DmqH0dufBn5vuSjRnc9LhbtcbFQNmWJPA=",
      review:
        "SS Chahar Pre-Medical Centre की वजह से मैं आर्मी में फिट हुआ! यहां की सेवाएं और डॉक्टरों की सलाह बेहतरीन है।",
      date: "20 नवम्बर 2024",
    },
    {
      name: "प्रीति शर्मा",
      image: "https://media.istockphoto.com/id/1454633520/photo/republic-day-india-gantantra-diwas-army-day-and-26-january-abstraction.jpg?s=612x612&w=0&k=20&c=lX01lwLs29DmqH0dufBn5vuSjRnc9LhbtcbFQNmWJPA=",
      review:
        "यहां का अनुभव शानदार था। उन्होंने मुझे फिटनेस और डाइट प्लान में बहुत मदद की। अब मैं आर्मी में फिट हूँ।",
      date: "15 नवम्बर 2024",
    },
    {
      name: "अंकित वर्मा",
      image: "https://media.istockphoto.com/id/1454633520/photo/republic-day-india-gantantra-diwas-army-day-and-26-january-abstraction.jpg?s=612x612&w=0&k=20&c=lX01lwLs29DmqH0dufBn5vuSjRnc9LhbtcbFQNmWJPA=",
      review:
        "यहां के प्रशिक्षकों ने मुझे बेहतरीन फिटनेस ट्रेनिंग दी। अब मैं भारतीय सेना में हूँ। धन्यवाद!",
      date: "10 नवम्बर 2024",
    },
    {
      name: "स्नेहा जोशी",
      image: "https://media.istockphoto.com/id/1454633520/photo/republic-day-india-gantantra-diwas-army-day-and-26-january-abstraction.jpg?s=612x612&w=0&k=20&c=lX01lwLs29DmqH0dufBn5vuSjRnc9LhbtcbFQNmWJPA=",
      review:
        "डॉक्टरों और टीम ने मुझे फिट रहने के लिए सही गाइड किया। मैं SS Chahar Pre-Medical Centre की शुक्रगुजार हूँ।",
      date: "5 नवम्बर 2024",
    },
    {
      name: "अजय तिवारी",
      image: "https://media.istockphoto.com/id/1454633520/photo/republic-day-india-gantantra-diwas-army-day-and-26-january-abstraction.jpg?s=612x612&w=0&k=20&c=lX01lwLs29DmqH0dufBn5vuSjRnc9LhbtcbFQNmWJPA=",
      review:
        "यहां के कार्यक्रम ने मुझे आत्मविश्वास और शारीरिक फिटनेस दोनों में सुधार दिया। अब मैं आर्मी में फिट हूँ।",
      date: "1 नवम्बर 2024",
    },
    {
      name: "कविता मिश्रा",
      image: "https://media.istockphoto.com/id/1454633520/photo/republic-day-india-gantantra-diwas-army-day-and-26-january-abstraction.jpg?s=612x612&w=0&k=20&c=lX01lwLs29DmqH0dufBn5vuSjRnc9LhbtcbFQNmWJPA=",
      review:
        "मैंने यहां के डाइट प्लान और ट्रेनिंग को फॉलो किया। अब मैं आर्मी में चुनी गई हूँ। यह मेरे लिए बहुत खास है।",
      date: "18 नवम्बर 2024",
    },
    {
      name: "अमन राठौड़",
      image: "https://media.istockphoto.com/id/1454633520/photo/republic-day-india-gantantra-diwas-army-day-and-26-january-abstraction.jpg?s=612x612&w=0&k=20&c=lX01lwLs29DmqH0dufBn5vuSjRnc9LhbtcbFQNmWJPA=",
      review:
        "यहां का फिटनेस ट्रेनिंग प्रोग्राम बहुत ही बढ़िया है। इसके बिना मेरा सपना पूरा नहीं हो पाता।",
      date: "12 नवम्बर 2024",
    },
    {
      name: "रचना पांडे",
      image: "https://media.istockphoto.com/id/1454633520/photo/republic-day-india-gantantra-diwas-army-day-and-26-january-abstraction.jpg?s=612x612&w=0&k=20&c=lX01lwLs29DmqH0dufBn5vuSjRnc9LhbtcbFQNmWJPA=",
      review:
        "मुझे SS Chahar Pre-Medical Centre में आकर अपनी शारीरिक क्षमता को बढ़ाने का मौका मिला। मैं आर्मी में फिट हूँ।",
      date: "8 नवम्बर 2024",
    },
    {
      name: "दीपक चौधरी",
      image: "https://media.istockphoto.com/id/1454633520/photo/republic-day-india-gantantra-diwas-army-day-and-26-january-abstraction.jpg?s=612x612&w=0&k=20&c=lX01lwLs29DmqH0dufBn5vuSjRnc9LhbtcbFQNmWJPA=",
      review:
        "यहां के प्रशिक्षकों ने मेरी फिटनेस और आत्मविश्वास को नया आयाम दिया। धन्यवाद!",
      date: "3 नवम्बर 2024",
    },
    {
      name: "सुरभि सिंह",
      image: "https://media.istockphoto.com/id/1454633520/photo/republic-day-india-gantantra-diwas-army-day-and-26-january-abstraction.jpg?s=612x612&w=0&k=20&c=lX01lwLs29DmqH0dufBn5vuSjRnc9LhbtcbFQNmWJPA=",
      review:
        "मैंने यहां पर फिटनेस और हेल्थ पर नई चीजें सीखी। अब मैं आर्मी में फिट हूँ।",
      date: "30 अक्टूबर 2024",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 overflow-hidden">
      <h1 className="bg-green-800 text-white font-extrabold text-4xl text-center py-3">
        हमारी सफलता की कहानियां
      </h1>
      <div className="relative overflow-hidden">
        {/* Scrolling container */}
        <div className="flex space-x-6 animate-scroll">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={review.image}
                alt={review.name}
                className="h-20 w-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-center text-xl font-bold text-green-600">
                {review.name}
              </h3>
              <p className="text-gray-700 text-center italic my-2">
                "{review.review}"
              </p>
              <p className="text-right text-sm text-gray-500">{review.date}</p>
            </div>
          ))}
          {/* Duplicate for seamless scrolling */}
          {reviews.map((review, index) => (
            <div
              key={`duplicate-${index}`}
              className="min-w-[300px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={review.image}
                alt={review.name}
                className="h-20 w-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-center text-xl font-bold text-green-600">
                {review.name}
              </h3>
              <p className="text-gray-700 text-center italic my-2">
                "{review.review}"
              </p>
              <p className="text-right text-sm text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSuccessStories
