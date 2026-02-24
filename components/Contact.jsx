'use client'
// @ts-nocheck
import React from 'react'
import PageTitle from './ui/page-title'
import { Button, Checkbox, Input, Textarea, Typography } from '@material-tailwind/react'

// import { Input } from '@material-tailwind/react'
// type PageTitle={section:string,heading:string}

const Contact = () => {
  return (
    <>
    
     <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" crossOrigin={undefined} />
              <Input variant="outlined" size="lg" label="Email Address" crossOrigin={undefined} />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a href="#" className="font-medium transition-colors hover:text-gray-900">
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
          </>
  )
}

export default Contact