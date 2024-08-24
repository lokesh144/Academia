'use client'
import React,{useState,useEffect} from 'react'
import Dashboard from '@/components/dashboard/dashboard'
// import { Button } from "@/components/ui/button"
// import Logadmin from '../components/Logadmin';
const dashboard = () => {
    //     const [isAuthenticated, setIsAuthenticated] = useState(false);
    //     const router = useRouter();
    // useEffect(() => {
    //     // Check if the user is already authenticated
    //     const auth = localStorage.getItem('authenticated');
    //     if (auth) {
    //       setIsAuthenticated(true);
    //     }
    //   }, []);
    
    //   const handleLoginSuccess = () => {
    //     setIsAuthenticated(true);
    //     localStorage.setItem('authenticated', 'true');
    //   };
    
    //   if (!isAuthenticated) {
    //     return <Logadmin onLoginSuccess={handleLoginSuccess} />;
    //   }
  return (
    <Dashboard/>
  )
}

export default dashboard