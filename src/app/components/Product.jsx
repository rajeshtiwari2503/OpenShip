
"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const magImage = 'https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg';


const imgData = [
    {
        id: 1,
        img: "/mob.webp"
    },
    {
        id: 2,
        img: "/mob2.webp"
    },
    {
        id: 3,
        img: "/mob3.webp"
    },
    {
        id: 3,
        img: "/mob.webp"
    },
    {
        id: 4,
        img: "/mob4.webp"
    },
    {
        id: 5,
        img: "/mob.webp"
    },
    {
        id: 6,
        img: "/mob.webp"
    },
    {
        id: 7,
        img: "/mob2.webp"
    },
    {
        id: 8,
        img: "/mob3.webp"
    }, {
        id: 9,
        img: "/mob5.webp"
    }, {
        id: 10,
        img: "/mob4.webp"
    }, {
        id: 11,
        img: "/mob.webp"
    }, {
        id: 12,
        img: "/mob.webp"
    }, {
        id: 13,
        img: "/mob2.webp"
    }, {
        id: 14,
        img: "/mob3.webp"
    }, {
        id: 15,
        img: "/mob4.webp"
    }, {
        id: 16,
        img: "/mob5.webp"
    },

]
const Product = () => {
    const [selectedImage, setSelectedImage] = useState(imgData[0].img)

    const [selectedHover, setSelectedHover] = useState(0)
    const handleImageClick = (index, img) => {
        setSelectedHover(index);
        setSelectedImage(img)
    };

    const [page, setPage] = useState(1);
    const handleArrowClick = (direction) => {
        let newIndex = selectedHover;

        if (direction === 'up' && selectedHover > 0) {
            newIndex = selectedHover - 1;
        } else if (direction === 'down' && selectedHover < imgData.length - 1) {
            newIndex = selectedHover + 1;
        }

        setSelectedHover(newIndex);

    };



    let pageNum = page;
    let size = 7;
    let startIndex = (pageNum - 1) * size;
    let endIndex = imgData?.length > (startIndex + size - 1) ? startIndex + size - 1 : imgData?.length - 1;
    let imgData1 = imgData?.length > size ? imgData?.filter((lt, index) => index >= startIndex && index <= endIndex) : imgData;
    let imgData2 = imgData1?.length < 7 ? imgData?.slice(-7) : imgData1;
    return (
        <>
            <div className='grid grid-rows-1 grid-flow-col   '>
                <div className='col-span-1 border-l border-r   border-gray-300 place-self-center text-left  justify-self-start'>
                    {page > 1 ? <div className='flex justify-center items-start border-t border-gray-300'> <KeyboardArrowUpIcon onClick={() => setPage(page - 1)} /></div> : ""}
                    <div className='col-span-scroll  max-h-[450px]  overflow-y-scroll'>
                        {imgData2?.map((item, i) =>
                            <div onMouseEnter={() => handleImageClick(i, item?.img)} className={` ${selectedHover === i ? "border-2 border-blue-400 w-14 h-16 cursor-pointer relative flex items-center justify-center " : "border-t border-gray-300 w-14 h-16 cursor-pointer relative flex items-center justify-center "} `}>
                                <Image key={i} layout="fill"
                                    objectFit="contain" className='p-2 ' src={item?.img} alt="image" />
                            </div>
                        )}
                    </div>
                    {imgData1?.length < 7 ? "" : <div className='flex justify-center items-start border-b border-t border-gray-300'> <KeyboardArrowDownIcon onClick={() => setPage(page + 1)} /></div>}

                </div>

                <div className='col-span-3 pt-4 pb-4 pl-8 pr-8 w-[450px] max-h-[474px]    border-t border-r border-b border-gray-300'>
                    
                    <ReactImageMagnify
                        smallImage={{
                            alt: 'Phasellus laoreet',
                            isFluidWidth: true,
                            src: selectedImage,
                        }}
                        largeImage={{
                            src: selectedImage,
                            width: 1000,
                            height: 1000,
                        }}
                        
                        // enlargedImageContainerStyle={{ background: '#fff', zIndex: 9 }}
                    />
                     
                </div>


                <div className='w-[700px] col-span-8 flex justify-center items-center font-bold text-5xl'>
                    Our Content
                </div>

            </div>
            <div className='ml-20 mt-3'>
                <button className='px-4 py-4 w-[196px]     bg-red-500 text-white'>ADD TO CART</button>
                <button className='px-4 py-4 w-[196px]  ml-2   bg-red-500 text-white'>BUY NOW</button>
            </div>
        </>
    )
}

export default Product