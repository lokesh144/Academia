"use client"
import React from 'react';
import {
    Card,
    CardBody,
    IconButton,
    Typography,
    CardHeader,
    Button,
    Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  } from "@material-tailwind/react";
const BlogCard = ({ image, date, title, description, tags }) => {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
    // <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //   <img className="w-full" src={image} alt="Blog cover" />
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">{title}</div>
    //     <p className="text-gray-700 text-base">{description}</p>
    //   </div>
    //   <div className="px-6 pt-4 pb-2">
    //     {tags.map(tag => (
    //       <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
    //     ))}
    //   </div>
    // </div>
    <div className="mx-auto mt-24 flex w-full justify-center md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg w-[80%]">
                <CardHeader floated={false} className="relative h-40">
                  <img
                    alt="Card Image"
                    src={image}
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className='font-tas'>{date}</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    {title}
                  </Typography>
                  <Typography className="text-blue-gray-500">
                    {description}
                  </Typography>
                </CardBody>
                <Button className="w-28 p-3 mb-4 ml-4 text-xs lg:text-sm" size="md" variant="outlined">read more</Button>
              </Card>

              <Dialog size="md" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">Long Dialog
        <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="h-[42rem] overflow-scroll">
          <Typography className="font-normal">
            I&apos;ve always had unwavering confidence in my abilities, and I
            believe our thoughts and self-perception are the primary forces that
            shape us. Many people limit themselves by their own self-doubt,
            slowing their progress. Fortunately, I was raised with the belief
            that I could achieve anything.
            <br />
            <br />
            As we journey through life, we often encounter challenges that
            harden our hearts. Pain, insults, broken trust, and betrayal can
            make us hesitant to help others. Love can lead to heartbreak, and
            time can distance us from family. These experiences can gradually
            erode our optimism.
            <br /> <br />
            Life doesn&apos;t always place us where we want to be. We grow, make
            mistakes, and strive to express ourselves and fulfill our dreams. If
            we&apos;re fortunate enough to participate in life&apos;s journey,
            we should cherish every moment. Regrettably, some only recognize the
            value of a moment after it&apos;s passed.
            <br /> <br />
            One thing I&apos;ve learned is that I can excel at anything I set my
            mind to. My skill is my ability to learn. I&apos;m here to learn, to
            grow, and to inspire others to do the same. Don&apos;t fear making
            mistakes; they teach us far more than compliments ever will.
            Ultimately, what truly matters is how our actions inspire and
            motivate others. Some will be ignited by our endeavors, while others
            may be offended—it&apos;s all part of the process. I&apos;m here to
            pursue my dreams and encourage others to do the same.
            <br /> <br />
            Now is the time to embrace greatness without fear of judgment. Some
            may resent those who shine brightly or stand out, but it&apos;s time
            to be the best version of ourselves. Do you have faith in your
            beliefs, even if you&apos;re the only one who does?
          </Typography>
        </DialogBody>
        {/* <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            confirm
          </Button>
        </DialogFooter> */}
      </Dialog>
            </div>
  );
};

const EventCard = () => {
  const posts = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1670985849616-6aa6c441e0bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'January 2024',
      title: 'आवर पीसल्याण्ड एकेडेमीमा खेलकुद प्रतियोगिता',
      description: 'Don’t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves',
      tags: ['Product', 'Design', 'UX']
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1670985623972-e212c5fdf9a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'February 2024',
      title: 'Lyft launching cross-platform service this week',
      description: 'Don’t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves',
      tags: ['Product', 'Design', 'UX']
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1670985519826-30e064cb07a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'March 2024',
      title: '6 insights into the French Fashion landscape',
      description: 'Don’t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye love',
      tags: ['Product', 'Design', 'UX']
    }
  ];

  return (
    <section className="bg-white min-h-screen py-8 lg:py-8">
        <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-10">
          {/* <Typography
            variant="h6"
            color="blue-gray"
            className="text-lg"
          >
            Meet the Team
          </Typography> */}
          <Typography
            variant="h1"
            color="blue-gray"
            className="my-2 !text-2xl lg:!text-4xl uppercase"
          >
            RECENT Posts
          </Typography>
          {/* <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 max-w-4xl"
          >
            Lorem ipsum dolor sit amet.
          </Typography> */}
        </div>
    <div className="flex flex-wrap justify-center p-0">
      {posts.map(post => (
        <BlogCard key={post.title} {...post} />
      ))}
    </div>
    </div>
    </section>
  );
};

export default EventCard;