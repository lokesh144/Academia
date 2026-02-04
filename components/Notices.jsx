'use client'
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
  // const hashtags = ['#react', '#tailwindcss', '#materialui'];
  const Notices = () => {
    const [noticeData, setNoticeData]=useState([]);
    // const hashtags = noticeData[0].selectedClasses;
    const hashtags = ['#react', '#tailwindcss', '#materialui'];
  const fetchNotice = async () => {
    // alert("Notice added successfully");
    try {
        const res = await fetch('https://academia-4hz2.onrender.com/api/get-notice', {
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
    <div className='flex flex-wrap bg-white justify-center'>
    {noticeData.map(({title,descrp,classes},index)=>(
    <div key={index} className="relative flex flex-col m-8 text-gray-700 bg-white shadow-lg bg-clip-border w-80">
      <div className="shining-border rounded-xl">
  <div className="pt-6 pr-6 pb-2 pl-6">
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      class="w-12 h-12 mb-4 text-gray-900">
      <path fill-rule="evenodd"
        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clip-rule="evenodd"></path>
      <path
        d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
      </path>
    </svg> */}
    <Image
      src="/notice.png"
      width={50}
      height={50}
      alt="Picture of the author"
    />
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
  <div className="flex flex-wrap px-4 mb-2">
                    {classes.map((tag) => (
                        <span key={tag} className="bg-[#3d6f5c] text-white text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
                </div>
</div> 
  ))}
  </div>
  )
}

export default Notices