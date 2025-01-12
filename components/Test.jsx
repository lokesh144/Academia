'use client'
import React,{useState} from 'react'
// interface LoginProps {
//   onLogin: (email: string, password: string) => void;
// }
// import type { TypographyProps } from "@material-tailwind/react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
// import { registerUserAction } from "@/app/data/actions/auth-actions";
const Logadmin = ({onLogin}) => {
    // const [passwordShown, setPasswordShown] = useState(false);
    // const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
      // Replace with your actual authentication logic
      if (email === 'lokesh@gmail.com' && password === 'admin') {
        // onLoginSuccess();
        onLogin(email, password);
      } else {
        setError('Invalid email or password');
      }
    };
  return (
    <section className="bg-white grid text-center h-screen items-center p-8">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Sign In
        </Typography>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form action='#' className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Email
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
                Pass
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
            />
          </div>
          <Button  onClick={handleLogin} color="gray" size="lg" className="mt-6" fullWidth>
            sign in
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Logadmin