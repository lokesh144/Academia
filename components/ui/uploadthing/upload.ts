import {useState} from 'react'
type TUploadThingResponseData = {
    customId: string | null;
    key: string;
    name: string;
    serverData: {
      uploadedBy: string;
    };
    size: number;
    type: string;
    url: string;
  };
 
  const imageUploadComplete = (data: TUploadThingResponseData[]) => {
    const [imgageUrl, setImageUrl] = useState('')
    setImageUrl(data[0].url)
    return ({
        title: 'Image Upload',
        variant: 'success',
        description: 'Image Uploaded Successfully!'
    })
}

const imageUploadError = (error: Error) => {
    return ({
        title: 'Image Upload Failed',
        variant: 'destructive',
        description: error.message
        })
    }
export {imageUploadComplete,imageUploadError}