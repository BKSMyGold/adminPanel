import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
import { BASE_URL } from "../Constants";
  
const  Home = () => {  
    
    const [latestBuySell, setPrice] = useState([]);
    const [countUsers, setUsersCount] = useState([]);
    const [countStandard, setSubscriptions] = useState([]);
    const [Users, setUser] = useState({});
    const [Plans, setPlan] = useState({});
    const [buysell, setBuySell] = useState([]);
   
  useEffect(() => {
    const fetchbuysell = async () => {
      const { data } = await axios.get(`${BASE_URL}/api/buy-sell-price`);
      setBuySell(data);
    };
    fetchbuysell();
  }, []);

    useEffect(() => {
    const fetchLatest = async () => {
      const { data:latest } = await axios.get(`${BASE_URL}/api/buy-sell-price/letest`);
      setPrice(latest.data);
    };
    fetchLatest();
  }, []);
  useEffect(() => {
    const fetchCount = async () => {
      const { data:users } = await axios.get(`${BASE_URL}/api/user/`);
      
      setUsersCount(users);
    };
    fetchCount();
  }, []);

  useEffect(() => {
    const fetchCount = async () => {
      const { data:subscriptions } = await axios.get(`${BASE_URL}/api/subscription/`);
      
      setSubscriptions(subscriptions.subscriptions);
    };
    fetchCount();
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/subscription`)
      .then((response) => response.data)
      .then((data) => {
        const subscriptionUserPromises = data.subscriptions.map(({ user }) =>
          axios.get(`${BASE_URL}/api/user/${user}`)
        );
        let userObject = {};
        Promise.allSettled(subscriptionUserPromises).then((responseArray) => {
          responseArray.forEach(({ status, value }) => {
            if (status === "fulfilled") {
              const { data: user } = value;
              userObject[user.id] = user.fname;
            }
          });
          console.log(userObject);
          setUser(userObject);
        });
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/subscription`)
      .then((response) => response.data)
      .then((data) => {
        const subscriptionPlanPromises = data.subscriptions.map(({ plan }) =>
          axios.get(`${BASE_URL}/api/plan/${plan}`)
        );
        let planObject = {};
        Promise.allSettled(subscriptionPlanPromises).then((responseArray) => {
          responseArray.forEach(({ status, value }) => {
            if (status === "fulfilled") {
              const { data: plan } = value;
              planObject[plan.id] = plan.name;
            }
          });
          console.log(planObject);
          setPlan(planObject);
        });
      });
  }, []);

  
  




        return ( 
            <div className="d-flex flex-column flex-root">
			
			<div className="page d-flex flex-row flex-column-fluid">
				
				<div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                        
                            <Header />  
                            <Dashboard />
                            <div className="d-flex flex-column flex-root">
			
            <div className="page d-flex flex-row flex-column-fluid">
              
              <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
                                {/*begin::Post*/}
                                <div className="content flex-row-fluid" id="kt_content">
                                    {/*begin::Row*/}
                                    <div className="row gy-5 g-xl-8 py-5">
                                        {/*begin::Col*/}
                                        <div className="col-xl-6">
                                            {/*begin::Mixed Widget 2*/}
                                            <div className="card ">
                                                {/*begin::Header*/}
                                                <div className="card-header border-0 bg-danger">
                                                    <h3 className="card-title fw-bolder text-white">Latest Buy Sell Prices</h3>
                                                   
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Body*/}
                                                <div className="card-body p-0">
                                                    {/*begin::Chart*/}
                                                    <div className="mixed-widget-2-chart card-rounded-bottom bg-danger" data-kt-color="danger" style={{height: '158px'}}></div>
                                                    {/*end::Chart*/}
                                                    {/*begin::Stats*/}
                                                    <div className="card-p mt-n20 position-relative">
                                                        
                                                       
                                                        
                                                        <div className="row ">
                                                            {/*begin::Col*/}
                                                            <div className="col bg-light-success px-6 py-8 rounded-2 me-7 mb-7">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                                                                <h2 className="d-block my-2">
                                                                   INR {latestBuySell.buy}

                                                                   
                                                                    </h2>
                                                                {/*end::Svg Icon*/}
                                                                <a href="#" className="text-danger fw-bolder fs-6">24KT Buy Price</a>
                                                            </div>
                                                            {/*end::Col*/}
                                                            {/*begin::Col*/}
                                                            <div className="col bg-light-warning px-6 py-8 rounded-2 mb-7">
                                                                {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                                                                <h2 className=" d-block my-2">
                                                                INR {latestBuySell.sell}
                                                                
                                                                </h2>
                                                                {/*end::Svg Icon*/}
                                                                <a href="#" className="text-danger fw-bolder fs-6">24 KT Sell Price</a>
                                                            </div>
                                                            {/*end::Col*/}
                                                        </div>
                                                        {/*end::Row*/}
                                                        {/*begin::Row*/}
                                                        {/*end::Row*/}
                                                    </div>
                                                    {/*end::Stats*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Mixed Widget 2*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-xl-6">
                                                    {/*begin::Tiles Widget 2*/}
                                                    
                                                    {/*end::Tiles Widget 2*/}
                                                    <div className="row gx-5 gx-xl-8 py-3">
                                                        {/*begin::Col*/}
                                                        <div className="col-xxl-6">
                                                            {/*begin::Tiles Widget 5*/}
                                                            <a href="#" className="card card-xxl-stretch bg-primary">
                                                                {/*begin::Body*/}
                                                                <div className="card-body d-flex flex-column justify-content-between">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                    <span className="svg-icon svg-icon-white svg-icon-2hx ms-n1 flex-grow-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                            <rect x="2" y="2" width="9" height="9" rx="2" fill="black" />
                                                                            <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black" />
                                                                            <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black" />
                                                                            <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    <div className="d-flex flex-column">
                                                                        <div className="text-white fw-bolder fs-1 mb-0 mt-5">{countUsers.length}</div>
                                                                        <div className="text-white fw-bold fs-6">Total Customers</div>
                                                                    </div>
                                                                </div>
                                                                {/*end::Body*/}
                                                            </a>
                                                            {/*end::Tiles Widget 5*/}
                                                        </div>
                                                        {/*end::Col*/}
                                                        {/*begin::Col*/}
                                                        <div className="col-xxl-6">
                                                            {/*begin::Tiles Widget 5*/}
                                                            <a href="#" className="card card-xxl-stretch bg-body">
                                                                {/*begin::Body*/}
                                                                <div className="card-body d-flex flex-column justify-content-between">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen002.svg*/}
                                                                    <span className="svg-icon svg-icon-success svg-icon-2hx ms-n1 flex-grow-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                            <path opacity="0.3" d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z" fill="black" />
                                                                            <path d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z" fill="black" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    <div className="d-flex flex-column">
                                                                        <div className="text-dark fw-bolder fs-1 mb-0 mt-5">{countStandard.length}</div>
                                                                        <div className="text-muted fw-bold fs-6">Total Saved Gold</div>
                                                                    </div>
                                                                </div>
                                                                {/*end::Body*/}
                                                            </a>
                                                            {/*end::Tiles Widget 5*/}
                                                        </div>
                                                        {/*end::Col*/}
                                                    </div>
                                                    <div className="row gx-5 gx-xl-8">
                                                        {/*begin::Col*/}
                                                        <div className="col-xxl-4">
                                                            {/*begin::Tiles Widget 5*/}
                                                            <a href="#" className="card card-xxl-stretch bg-primary">
                                                                {/*begin::Body*/}
                                                                <div className="card-body d-flex flex-column justify-content-between">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                    <span className="svg-icon svg-icon-white svg-icon-2hx ms-n1 flex-grow-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                            <rect x="2" y="2" width="9" height="9" rx="2" fill="black" />
                                                                            <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black" />
                                                                            <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black" />
                                                                            <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    <div className="d-flex flex-column">
                                                                        <div className="text-white fw-bolder fs-1 mb-0 mt-5">{countUsers.length}</div>
                                                                        <div className="text-white fw-bold fs-6">Total Gold in Running</div>
                                                                    </div>
                                                                </div>
                                                                {/*end::Body*/}
                                                            </a>
                                                            {/*end::Tiles Widget 5*/}
                                                        </div>
                                                        {/*end::Col*/}
                                                        {/*begin::Col*/}
                                                        <div className="col-xxl-4">
                                                            {/*begin::Tiles Widget 5*/}
                                                            <a href="#" className="card card-xxl-stretch bg-body">
                                                                {/*begin::Body*/}
                                                                <div className="card-body d-flex flex-column justify-content-between">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen002.svg*/}
                                                                    <span className="svg-icon svg-icon-success svg-icon-2hx ms-n1 flex-grow-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                            <path opacity="0.3" d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z" fill="black" />
                                                                            <path d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z" fill="black" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    <div className="d-flex flex-column">
                                                                        <div className="text-dark fw-bolder fs-1 mb-0 mt-5">{countStandard.length}</div>
                                                                        <div className="text-muted fw-bold fs-6">Total Gold in Completed</div>
                                                                    </div>
                                                                </div>
                                                                {/*end::Body*/}
                                                            </a>
                                                            {/*end::Tiles Widget 5*/}
                                                        </div>
                                                        <div className="col-xxl-4">
                                                            {/*begin::Tiles Widget 5*/}
                                                            <a href="#" className="card card-xxl-stretch bg-body">
                                                                {/*begin::Body*/}
                                                                <div className="card-body d-flex flex-column justify-content-between">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen002.svg*/}
                                                                    <span className="svg-icon svg-icon-success svg-icon-2hx ms-n1 flex-grow-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                            <path opacity="0.3" d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z" fill="black" />
                                                                            <path d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z" fill="black" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    <div className="d-flex flex-column">
                                                                        <div className="text-dark fw-bolder fs-1 mb-0 mt-5">{countStandard.length}</div>
                                                                        <div className="text-muted fw-bold fs-6">Total Gold in Forfieted</div>
                                                                    </div>
                                                                </div>
                                                                {/*end::Body*/}
                                                            </a>
                                                            {/*end::Tiles Widget 5*/}
                                                        </div>
                                                        {/*end::Col*/}
                                                    </div>
                                                 
                                                </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        {/*end::Col*/}
                                    </div>
                                    {/*end::Row*/}
                                    {/*begin::Row*/}
                                    
                                    {/*begin::Row*/}
                                    {/*end::Row*/}
                                    {/*begin::Row*/}
                                    <div className="row gy-5 g-xl-8">
                                        {/*begin::Col*/}
                                        <div className="col-xl-4">
                                            {/*begin::List Widget 2*/}
                                            <div className="card card-xl-stretch mb-xl-8">
                                                {/*begin::Header*/}
                                                <div className="card-header border-0">
                                                    <h3 className="card-title fw-bolder text-dark">User Subscription Activity</h3>
                                                    
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Body*/}
                                                <div className="card-body pt-2">
                                                    {/*begin::Item*/}
                                                    {countStandard.filter((subscription, i) => i < 5).map((countStandard,index) => (     
                                                    <div className="d-flex align-items-center mb-7">
                                                        {/*begin::Avatar*/}
                                                        <div className="symbol symbol-50px me-5">
                                                            <img src="assets/media/avatars/150-1.jpg" className="" alt="" />
                                                        </div>
                                                        {/*end::Avatar*/}
                                                        {/*begin::Text*/}
                                                        <div className="flex-grow-1">
                                                            <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">{Users[countStandard.user] ?? "Old User Name Data"}</a>
                                                            <span className="text-muted d-block fw-bold">{Plans[countStandard.plan] ?? "Old User Plan Data"}</span>
                                                            <span className="text-muted d-block fw-bold">{countStandard.status}</span>
                                                        </div>
                                                        {/*end::Text*/}
                                                    </div>
                                                    ))}
                                                    <a href=''>Check all Subscriptions</a>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                       </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::List Widget 2*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-xl-4">
                                            {/*begin::List Widget 6*/}
                                            <div className="card card-xl-stretch mb-xl-8">
                                                {/*begin::Header*/}
                                                <div className="card-header border-0">
                                                    <h3 className="card-title fw-bolder text-dark">Latest Buy/Sell Prices</h3>
                                                    
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Body*/}
                                                
                                                <div className="card-body pt-0">
                                                    {/*begin::Item*/}
                                                    {buysell.filter((buysell, i) => i < 10).map((buysell,index) => (  
                                                    <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-7">
                                                        {/*begin::Icon*/}
                                                        <span className="svg-icon svg-icon-warning me-5">
                                                            {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                            <span className="svg-icon svg-icon-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
                                                                    <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </span>
                                                        {/*end::Icon*/}
                                                        {/*begin::Title*/}
                                                        <div className="flex-grow-1 me-2">
                                                            <h3>Buy Price</h3>
                                                            <a href="#" className="fw-bolder text-gray-800 text-hover-primary fs-6">INR {buysell.buy}</a>
                                                            
                                                        </div>
                                                        {/*end::Title*/}
                                                        {/*begin::Lable*/}
                                                        <div className="flex-grow-1 me-2">
                                                        <h3>Sell Price</h3>
                                                            <a href="#" className="fw-bolder text-gray-800 text-hover-primary fs-6">INR {buysell.sell}</a>
                                                         </div>
                                                        {/*end::Lable*/}
                                                    </div>
                                                    ))}
                                                   {/*end::Item*/}
                                                    {/*begin::Item*/}
                                               </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::List Widget 6*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-xl-4">
                                            {/*begin::List Widget 4*/}
                                            <div className="card card-xl-stretch mb-5 mb-xl-8">
                                                {/*begin::Header*/}
                                                <div className="card-header border-0 pt-5">
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bolder text-dark">Instant Gold Sell Requests</span>
                                                        <span className="text-muted mt-1 fw-bold fs-7">Instant gold Details</span>
                                                    </h3>
                                                    
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Body*/}
                                                <div className="card-body pt-5">
                                                    {/*begin::Item*/}
                                                
                                                   
                                                      <div className="d-flex align-items-sm-center mb-7" key="">
                                                        {/*begin::Symbol*/}
                                                        <div className="symbol symbol-50px me-5">
                                                            <span className="symbol-label">
                                                               
                                                            </span>
                                                        </div>
                                                        {/*end::Symbol*/}
                                                        {/*begin::Section*/}

                                                        <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                            <div className="flex-grow-1 me-2">
                                                                <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bolder"></a>
                                                                <span className="text-muted fw-bold d-block fs-7"></span>
                                                            </div>
                                                            <span className="badge badge-light fw-bolder my-2"></span>
                                                        </div>
                                                        {/*end::Section*/}
                                                    </div>
                                            
                                                 {/*end::Item*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::List Widget 4*/}
                                        </div>
                                        {/*end::Col*/}
                                    </div>
                                    {/*end::Row*/}
                                </div>
                                {/*end::Post*/}
                            </div>
                      </div></div>  </div>    )  
                
                            <Footer /> 
                         
                         
                </div>  
            </div>  
             </div> 
          )  
        
        }
                 
                
     export default Home