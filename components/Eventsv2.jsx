import Image from 'next/image';

export default function EventDetails() {
  const programs = [
    'Book & Lesson Reviews',
    'Reading Contest',
    'Profession & Drama Performance',
    'Dance Show',
    'Prize Distribution (2081/82)',
    'Book Exhibition',
    'Poem Writing & Recitation Competition',
    'Inter-House Cultural Show Contest',
    'HSC Wall Magazine Vol.53 (Release Programme)',
    'Drawing & Science Exhibition',
    'Teacher/Staff Dance Show'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-5xl mx-auto">
        {/* Event Poster Section */}
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-b-3xl shadow-2xl">
          <Image
            src="/Upload2.jpg" // Replace with your actual poster image path
            alt="OPA Educational Fair 2082 Poster"
            fill
             className="object-cover object-top md:object-[center_20%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              OPA Educational Fair - 2082
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Celebrating Excellence in Education
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 py-12 md:px-12">
          {/* Programs Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-8 bg-indigo-600 mr-4 rounded-full"></span>
              Our Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-2">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 text-lg">{program}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Event Details Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Schedule */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg
                  className="w-7 h-7 text-indigo-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Event Schedule
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-600 pl-4 py-2">
                  <p className="text-lg font-semibold text-gray-800">Day 1</p>
                  <p className="text-gray-600">2082/11/05 (Magh 5, 2082)</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4 py-2">
                  <p className="text-lg font-semibold text-gray-800">Day 2</p>
                  <p className="text-gray-600">2082/11/06 (Magh 6, 2082)</p>
                </div>
              </div>
            </div>

            {/* Venue & Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg
                  className="w-7 h-7 text-indigo-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Venue & Contact
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                    Location
                  </p>
                  <p className="text-lg text-gray-800 font-medium">
                    Our Peaceland Academy
                  </p>
                  <p className="text-gray-600">
                    Shivanagar, Butwal-7
                    <br />
                    Rupandehi, Nepal
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                    Contact Numbers
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:9847033788"
                      className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      9847033788
                    </a>
                    <a
                      href="tel:9857026788"
                      className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      9857026788
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Join Us for Two Days of Learning & Celebration!
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Experience the best of educational excellence and cultural performances
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Get Directions
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}