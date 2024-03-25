import React from 'react'

const AboutScreenBody = () => {
  return (
    <div className='flex flex-col pt-28 items-center h-screen px-32' style={{backgroundImage:"linear-gradient(45deg, white 50%,skyblue 50%)"}}>
        <h1 className='text-3xl font-semibold pb-5'>About App</h1>
        <div className='flex justify-between w-full border border-gray-400 py-2 px-2 bg-white'>
            <span>Analyse Your Text</span>
            <span>^</span>
        </div>
        <div className=' border border-gray-400 py-2 px-2 bg-white'>
            <p className=' font-semibold text-start'>Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.</p>
        </div>
        <div className='flex justify-between w-full border border-gray-400 py-2 px-2 bg-white'>
            <span>Free To Use</span>
            <span>^</span>
        </div>
        <div className='border border-gray-400 py-2 px-2 bg-white'>
            <p className=' font-semibold text-start'>TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.</p>
        </div>
        <div className='flex justify-between w-full border border-gray-400 py-2 px-2 bg-white'>
            <span>Browser Compatible</span>
            <span>^</span>
        </div>
        <div className='w-full border border-gray-400 py-2 px-2 bg-white'>
            <p className=' font-semibold text-start'>This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.</p>
        </div>
    </div>
  )
}

export default AboutScreenBody
