'use server'
import { sessionOptions,SessionData, defaultSession } from "@/src/lib"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
let email='lokesh@gmail.com';
let password='admin';
export const getSession= async ()=>{
    const session = await getIronSession<SessionData>(cookies(),sessionOptions);
    if(!session.isLoggedIn){
        session.isLoggedIn=defaultSession.isLoggedIn;
    }
    return session;
}
export const login= async (prevState:{error:undefined| string},formData:FormData)=>{
    console.log('Login function')
    const session=await getSession();
    const formEmail=formData.get('email') as string 
    const formPassword=formData.get('password') as string 
    if(formEmail!=email){
        console.log('Please enter correct email')
        return {error:'Wrong credentials'}
    }
    else if(formPassword!=password){
        console.log('Please enter correct password')
        return {error:'Wrong credentials'}
    }
    session.userId='1'
    session.email=formEmail
    session.password=formPassword
    session.isLoggedIn=true
    await session.save();
    redirect('/mdash')
     
};
export const logout= async ()=>{
    console.log('Inside logout function')
    const session= await getSession();
    session.destroy();
    redirect('/lokesh');
}