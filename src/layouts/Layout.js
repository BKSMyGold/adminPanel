import React, { Component } from 'react';   
import Header from './Header'  
import Footer from './Footer'  
import Dashboard from '../screens/dashboard';
import Home from '../screens/home';
 
 
export class Layout extends Component {  
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>  
    render() {  
        return (  
            <div className="d-flex flex-column flex-root">
			
			<div className="page d-flex flex-row flex-column-fluid">
				
				<div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                        
                            <Header />  
                            <Dashboard />
                            <Home />
                            <Footer /> 
                         
                         
                </div>  
            </div>  
        </div> 
        )  
    }  
}  
  
export default Layout  