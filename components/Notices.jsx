'use client'
import React,{useState,useEffect} from 'react'

  // const hashtags = ['#react', '#tailwindcss', '#materialui'];
  const Notices = () => {
    const [noticeData, setNoticeData]=useState([]);
    // const hashtags = noticeData[0].selectedClasses;
    const hashtags = ['#react', '#tailwindcss', '#materialui'];
  const fetchNotice = async () => {
    // alert("Notice added successfully");
    try {
        const res = await fetch('http://localhost:5000/api/get-notice', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({title: title,description: description,selectedClasses:selectedClasses})
        });
        const result = await res.json();
      // setNoticeData(result)
      // const firstFilteredNotices = result.filteredNotices;
      setNoticeData(result);
      console.log("After set result",result);
        // setResponse(result);
        // console.log(result[0].filteredNotices[6].selectedClasses);
    } catch (error) {
        console.error('Error submitting data:', error);
    }
};
  useEffect(() => {
    // console.log('Use Effect')
     fetchNotice();
  }, [])
  // useEffect(() => {
  //   console.log("Updated noticeData:", noticeData[0].filteredNotices);
  // }, [noticeData]);

  // const lists=noticeData;
  return (
    <div className='flex flex-wrap bg-white'>
    {noticeData.map(({title,descrp,classes},index)=>(
    <div key={index} className="relative flex flex-col m-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div className="p-6">
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      class="w-12 h-12 mb-4 text-gray-900">
      <path fill-rule="evenodd"
        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clip-rule="evenodd"></path>
      <path
        d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
      </path>
    </svg> */}
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-megaphone-fill" viewBox="0 0 16 16"> <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"/> </svg>
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    {title}
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    {descrp}
    </p>
  </div>
  {/* <div class="p-6 pt-0">
    <a href="#" class="inline-block">
      <button
        class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg>
      </button>
    </a>
  </div> */}
  <div className="flex flex-wrap px-4">
                    {classes.map((tag) => (
                        <span className="bg-blue-100 text-blue-500 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
</div> 
  ))}
  </div>
  )
}

export default Notices