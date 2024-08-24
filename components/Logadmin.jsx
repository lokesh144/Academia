'use client'
import React,{useState} from 'react'

// import type { InputProps,TypographyProps,ButtonProps } from "@material-tailwind/react";
import { Typography, Input, Button, alert } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import {login} from '@/src/actions';
import { useFormState } from 'react-dom';
// import { registerUserAction } from "@/app/data/actions/auth-actions";
// type Props = LoginProps & Button & Input & Typography & {
//   title: string;
// };
const Logadmin  = () => {
  const [state,formAction]=useFormState(login,undefined);
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('Invalid');
    // const session = getSession();
    // const onLogin = (email, password) => {
      
    //   console.log('Logged in with:', email, password);
    // };
    // const handleLogin = async (e) => {
    //   e.preventDefault();
    //   const result = await signIn('credentials', {
    //     redirect: false,
    //     email,
    //     password
    //   });
  
    //   if (result.error) {
    //     setError(result.error);
    //   } else {
    //     router.push('/mdash');
    //   }
    // };
  
    // if (loading) return <div>Loading...</div>;
    // if (session) {
    //   router.push('/mdash');
    //   return null;
    // }
  
  return (
      <section className="bg-white grid text-center h-screen items-center p-8">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-2">
            Sign In
          </Typography>
          {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}
          <form action={formAction} className="mx-auto max-w-[24rem] text-left">
            <div className="mb-6">
              <label htmlFor="email">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                > Email
                </Typography>
              </label>
              <Input
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Password
                </Typography>
              </label>
              <Input
                size="lg"
                placeholder="********"
                labelProps={{
                  className: "hidden",
                }}
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                type={passwordShown ? "text" : "password"}
                icon={
                  <i onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <EyeIcon className="h-5 w-5" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5" />
                    )}
                  </i>
                }
                value={password}
            onChange={(e) => setPassword(e.target.value)}
            name='password'
              />
            </div>
            <Button color="gray" size="lg" className="mt-6" fullWidth type="submit">
              sign in
            </Button>
          {state?.error && <p className='text-red-500'>{state.error}</p>}
          </form>
        </div>
      </section>
      
  )
}
export default Logadmin