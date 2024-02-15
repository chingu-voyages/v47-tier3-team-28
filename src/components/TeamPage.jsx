import "../index.css";

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

function TeamPage() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl mx-auto ">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
            <p className="text-center mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto grid grid-cols-2">

              <div className="flex items-center  border-b pb-10 mb-10  mr-3 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="sm:w-16 sm:h-16 w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                   Teja
                  </h2>
                  <a className=" text-indigo-500 inline-flex items-center">
                    Frontend Developer
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                    taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  
                </div>
              </div>
              <div className="flex items-center  border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="sm:w-16 sm:h-16 w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                   S13
                  </h2>
                  <a className=" text-indigo-500 inline-flex items-center">
                   BAckend Developer
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                    taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  
                </div>
              </div>
              {/* Domnique */}
              <div className="flex items-center  border-b pb-10 mb-10 mr-3 border-gray-200 sm:flex-row flex-col">
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Domnique
                  </h2>
                  <a className=" text-indigo-500 inline-flex items-center">
                    Product Owner
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                    taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  
                </div>
                <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 mr-8">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="sm:w-16 sm:h-16 w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={6} cy={6} r={3} />
                    <circle cx={6} cy={18} r={3} />
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                  </svg>
                </div>
              </div>
              {/* Sarita */}
              <div className="flex items-center  border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Sarita
                  </h2>
                  <a className=" text-indigo-500 inline-flex items-center">
                    Product Owner
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                    taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  
                </div>
                <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 mr-8">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="sm:w-16 sm:h-16 w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={6} cy={6} r={3} />
                    <circle cx={6} cy={18} r={3} />
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                  </svg>
                </div>
              </div>
            </div>
            {/* George */}
            <div className="max-w-2xl mx-auto  flex justify-center items-center  border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="sm:w-16 sm:h-16 w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                   George Heavenson
                  </h2>
                  <a className=" text-indigo-500 inline-flex items-center">
                    Full Stack Developer
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                    taxidermy. Gastropub indxgo juice poutine.
                  </p>
                 
                </div>
              </div>
            {/* button */}
            {/* <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button> */}
          </section>

          {/* <ul role="list" className=" grid mx-64 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  )
}

export default TeamPage;
