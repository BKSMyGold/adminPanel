import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AppointmentTime from "./screens/AppointmentTime";
import BankPaymentEntries from "./screens/BankPaymentEntries";
import BuySell from "./screens/BuySave";
import Categories from "./screens/Categories";
import Collector from "./screens/Collector";
import CyclePeriods from "./screens/CyclePeriods";
import DailyActivity from "./screens/DailyActivity";
import DailyStatement from "./screens/DailyStatement";
import Delivery from "./screens/Delivery";
import Diamonds from "./screens/Diamonds";
import EnterMasterDetails from "./screens/EnterMasterDetails";
import GBPEntry from "./screens/GBPEntry";
import GBPLevels from "./screens/GBPLevels";
import GoldAdjustments from "./screens/GoldAdjustments";
import Home from "./screens/home";
import HowTo from "./screens/HowTo";
import InStoreCashCollection from "./screens/InStoreCashCollection";
import InStoreRedeem from "./screens/InStoreRedeem";
import InStoreReturns from "./screens/InStoreReturns";
import InStoreTokenRefund from "./screens/InStoreTokenRefund";
import ItemDetails from "./screens/Products";
import Items from "./screens/items";
import MasterUserRights from "./screens/MasterUserRights";
import MetalGroups from "./screens/MetalGroups";
import NewuserData from "./screens/NewuserData";
import OfferDetails from "./screens/OfferDetails";
import PendingPayment from "./screens/PendingPayment";
import Products from "./screens/Products";
import ReferenceData from "./screens/RefereceData";
import Reference from "./screens/Reference";
import Security from "./screens/security";
import SellReasons from "./screens/SellReasons";
import Shipping from "./screens/Shipping";
import Sliders from "./screens/Sliders";
import StandardPlans from "./screens/StandardPlans";
import SubmissionOfGoldEntry from "./screens/SubmissionOfGoldEntry";
import CustomDuties from "./screens/CustomDuties";
import Testimonials from "./screens/Testimonials";
import Tracking from "./screens/Tracking";
import UpdateAppointments from "./screens/UpdateAppoinments";
import UserPasswords from "./screens/UserPasswords";
import Varieties from "./screens/Varieties";
import Ledger from "./screens/Ledger";
import AccumalatedBonusSummaryPlansAccured from "./screens/AccumalatedBonusSummaryPlansAccured";
import AccumalatedBonusSummaryPlansDue from "./screens/AccumalatedBonusSummaryPlansDue";
import AccumalatedBonusSummaryPlansForfieted from "./screens/AccumalatedBonusSummaryPlansForfieted";
import AccumalatedBonusSummaryReferalsAccrued from "./screens/AccumalatedBonusSummaryReferalsAccrued";
import AccumalatedBonusSummaryReferalsDue from "./screens/AccumalatedBonusSummaryReferalsDue";
import AccumalatedBonusSummaryReferalsForfieted from "./screens/AccumalatedBonusSummaryReferalsForfieted";
import AccumalatedGoldSummary from "./screens/AccumalatedGoldSummary";
import AccumalatedGoldSummaryDue from "./screens/AccumalatedGoldSummaryDue";
import AccumalatedGoldSummaryInPlan from "./screens/AccumalatedGoldSummaryInPlan";
import CollectorSummary from "./screens/CollectorSummary";
import CollectorUserWise from "./screens/CollectorUserWise";
import CompletedPayment from "./screens/CompletedPayment";
import ConvertedNormalFull from "./screens/ConvertedNormalFull";
import ConvertedNormalPlan from "./screens/ConvertedNormalPlan";
import ConvertedNormalUser from "./screens/ConvertedNormalUser";
import CreateFAQ from "./screens/CreateFAQ";
import CustomeOrderTracking from "./screens/CustomOrderTracking";
import DeliverySummary from "./screens/DeliverySummary";
import DeliveryUserwise from "./screens/DeliveryUserwise";
import EmailCreate from "./screens/EmailCreate";
import EmailReport from "./screens/EmailReport";
import EmailSend from "./screens/EmailSend";
import FixedPlanValueCycle from "./screens/FixedPlanValueCycle";
import FixedPlanValueFull from "./screens/FixedPlanValueFull";
import FixedPlanValueMaturity from "./screens/FixedPlanValueMaturity";
import FixedPlanWeightCycle from "./screens/FixedPlanWeightCycle";
import FixedPlanWeightFull from "./screens/FixedPlanWeightFull";
import FixedPlanWeightMaturity from "./screens/FixedPlanWeightMaturity";
import MetalCurrencySummary from "./screens/MetalCurrencySummary";
import MetalCurrencyUserbased from "./screens/MetalCurrencyUserbased";
import MetalCurrencySystembase from "./screens/MetalCurrencySystembase";
import OrderCompleted from "./screens/OrderCompleted";
import OrderInTransit from "./screens/OrderInTransit";
import OrderPernding from "./screens/OrderPernding";
import OrderShippingEntry from "./screens/OrderShippingEntry";
import OrderSummary from "./screens/OrderSummary";
import CustomOrderTracking from "./screens/CustomOrderTracking";
import PlanBonusAccrued from "./screens/PlanBonusAccrued";
import PlanBonusDue from "./screens/PlanBonusDue";
import PlanBonusForfieted from "./screens/PlanBonusForfieted";
import PushCreate from "./screens/PushCreate";
import PushReport from "./screens/PushReport";
import PushSend from "./screens/PushSend";
import RedeemCompleted from "./screens/RedeemCompleted";
import RedeemPending from "./screens/RedeemPending";
import HowToForm from "./components/HowToForm";
import RedeemUser from "./screens/RedeemUser";
import ReferalBonusAccrued from "./screens/ReferalBonusAccrued";
import ReferalBonusDue from "./screens/ReferalBonusDue";
import ReferalBonusForfieted from "./screens/ReferalBonusForfieted";
import ReferedBonusAccrued from "./screens/ReferedBonusAccrued";
import ReferedBonusDue from "./screens/ReferedBonusDue";
import ReferedBonusForfieted from "./screens/ReferedBonusForfieted";
import ReferSummaryCategory from "./screens/ReferSummaryCategory";
import ReferSummaryUser from "./screens/ReferSummaryUser";
import SellCompleted from "./screens/SellCompleted";
import SellCustomerQuery from "./screens/SellCustomerQuery";
import SellCustomerwise from "./screens/SellCustomerwise";
import SellDetailed from "./screens/SellDetailed";
import SellHomeVisitCanceled from "./screens/SellHomeVisitCanceled";
import SellHomeVisitDue from "./screens/SellHomeVisitDue";
import SellHomeVisitFixed from "./screens/SellHomeVisitFixed";
import SellInStoreCanceled from "./screens/SellInStoreCanceled";
import SellInStoreDue from "./screens/SellInStoreDue";
import SellInStoreFixed from "./screens/SellInStoreFixed";
import SellPaymentCompleted from "./screens/SellPaymentCompleted";
import SellPaymentReports from "./screens/SellPaymentReports";
import SellPending from "./screens/SellPending";
import SellSecurityGuard from "./screens/SellSecurityGuard";
import SellTamperProof from "./screens/SellTamperProof";
import SellUser from "./screens/SellUser";
import SellVerfierWise from "./screens/SellVerfierWise";
import InStoreReturnForm from "./components/InStoreReturnForm";
import SellVerifierCustomerAllotment from "./screens/SellVerifierCustomerAllotment";
import SellVerifierCustomerValuation from "./screens/SellVerifierCustomerValuation";
import SellVerifierOnSite from "./screens/SellVerifierOnSite";
import SkipNowFull from "./screens/SkipNowFull";
import SkipNowPlan from "./screens/SkipNowPlan";
import SkipNowUser from "./screens/SkipNowUser";
import SMSCreate from "./screens/SMSCreate";
import SMSreport from "./screens/SMSreport";
import SMSsend from "./screens/SMSsend";
import StandardPlanCycle from "./screens/StandardPlanCycle";
import StandardPlanFull from "./screens/StandardPlanFull";
import StandardPlanMaturity from "./screens/StandardPlanMaturity";
import UserBonusFromInvestments from "./screens/UserBonusFromInvestments";
import UserBonusFromReferals from "./screens/UserBonusFromReferals";
import UserDataCycle from "./screens/UserDataCycle";
import BuyAndSaveReport from "./screens/BuyAndSaveReport";
import UserDataPlan from "./screens/UserDataPlan";
import ViewFAQs from "./screens/ViewFAQs";
import WhatsappCreate from "./screens/WhatsappCreate";
import WhatsappSend from "./screens/WhatsappSend";
import WhatsappReport from "./screens/WhatsappReport";
import RoleForm from "./components/RoleForm";
import LoginScreen from "./screens/LoginScreen";
import MetalGroupForm from "./components/MetalGroupForm";
import CurrentRateForm from "./components/CurrentRateForm";
import StandardPlanForm from "./components/StandardPlansForm";
import CustomDutiesForm from "./components/CustomDutiesForm";
import CyclePeriodsForm from "./components/CyclePeriodsForm";
import SlidersForm from "./components/SlidersForm";
import Offers from "./screens/offers";
import OffersForm from "./components/OffersForm";
import Permissions from "./screens/Permissions";
import PermissionsForm from "./components/PermissionsForm";
import DiamondsForm from "./components/DiamondsForm";
import CategoryForm from "./components/CategoryForm";
import VarietyForm from "./components/VarietyForm";
import Collections from "./screens/Collections";
import CollectionForm from "./components/CollectionForm";
import ProductForm from "./components/ProductForm";
import ItemForm from "./components/ItemForm";
import AddMasterDetails from "./components/AddMasterDetails";
import UserSignUp from "./components/UserSignUp";
import RegisteredUser from "./screens/registeredUsers";
import NoAccessComponent from "./screens/NoAccessComponent";
// import UserDetails from "./components/UserDetails";
import FilteredUsers from "./components/FilteredUsers";
import PlanBonus from "./screens/PlanBonus";
import PlanBonusForm from "./components/PlanBonusForm";
import ItemDetailsForm from "./components/ProductForm";
// import UserTransaction from "./screens/UserTransaction"
import UserDetails from "./screens/UserDetails";
import SystemUserDetail from "./screens/SystemUserDetail";
import ZohoBooks from "./screens/ZohoBooks";
import ZohoBooksForm from "./components/ZohoBoksForm";
import EachItemsDetails from "./screens/EachItemsDetails";
import PageNotFound from "./screens/PageNotFound";
import ForgotPassword from "./components/ForgotPassword";
import RoleRight from "./components/RoleRight";
import RoleChangeForm from "./components/RoleChangeForm";
import UserNameChangeForm from "./components/UserNameChangeForm";
import AllRoles from "./screens/AllRoles";
import Units from "./screens/Units";
import Style from "./screens/Style";
import StyleForm from "./components/StyleForm";
import Metal from "./screens/Metal";
import MetalForm from "./components/MetalForm";
import UnitsForm from "./components/UnitsForm";
import Ornament from "./screens/Ornament";
import OrnamentForm from "./components/OrnamentForm";
import Shape from "./screens/Shape";
import ShapeForm from "./components/ShapeForm";
import Clarity from "./screens/Clarity";
import ClarityForm from "./components/ClarityForm";
import Colour from "./screens/Colour";
import ColourForm from "./components/ColourForm";
import MakingCharges from "./screens/MakingCharges";
import MakingChargesForm from "./components/MakingChargesForm";
import Cut from "./screens/Cut";
import CutForm from "./components/CutForm";
import Badla from "./screens/Badla";
import BadlaForm from "./components/BadlaForm";
import Calculation from "./screens/Calculation";
import CalculationForm from "./components/CalculationForm";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import FAQ from "./screens/FAQ";
import FAQForm from "./components/FAQForm";
import { ADMIN_API } from "./Constants";
import axios from "axios";
import Policy from "./screens/Policy";
import PolicyForm from "./components/PolicyForm"
import SkipCount from "./screens/SkipCount"
import SkipCountForm from "./components/SkipCountForm";
import UnpaidSkipCount from "./screens/UnpaidSkipCount";
import UnpaidSkipCountForm from "./components/UnpaidSkipCountForm";
import Loader from "./screens/Loader";
import LoanInterestRates from "./screens/LoanInterestRates";
import LoanInterestRatesForm from "./components/LoanInterestRatesForm";
import SellRequest from "./screens/SellRequest"
import SellRequestDetails from "./screens/SellRequestDetails"
import ReturnReason from "./screens/ReturnReason";

import ReturnReasonForm from "./components/ReturnReasonForm";
import MainReports from "./screens/MainReports";
import ResetPasswordForm from "./components/ResetPasswordForm";
import EcommerceReport from "./screens/EcommerceReport";
import InstantGoldReport from "./screens/InstantGoldReport";
import SellAndReserveReport from "./screens/SellAndReserveReport";
//====================================================================
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [permissions, setPermissions] = useState(new Set());
  const [loading, setLoading] = useState(true);
  //====================================================================
  let navigate = useNavigate();
  //====================================================================

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      axios.defaults.headers.common= {Authorization: `Bearer ${token}`}

    }
    if (localStorage.getItem("user")) {
      let localStorageUser = JSON.parse(localStorage.getItem("user"));
      let permissionSet = new Set();
      for (let perma of localStorageUser.role.permissions) {
        permissionSet.add(perma);
      }
      setPermissions(permissionSet);
      setLoggedInUser(localStorageUser);
    } else {
      navigate("/login");
    }
  }, []);
  //====================================================================
  const handleLogout = () => {
    setLoggedInUser({});
    localStorage.clear();
    window.location.reload(false);
  };

  // const loadUser = async () => {
  //   const token = localStorage.getItem("token");
  //   console.log(token);
  //   if (!token) {
  //     setLoading(false);
  //     setLoggedInUser(false);
  //     return;
  //   }
  //   const response = await axios.get(`${ADMIN_API}/admin/user/me`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   // console.log("--->",response.data)
  //   localStorage.setItem("user", JSON.stringify(response.data.data));
  //   setLoggedInUser(response.data.data);

  //   let permissionSet = new Set();
  //   for (let perma of response.data.data.role.permissions) {
  //     console.log(perma);
  //     permissionSet.add(perma);
  //   }
  //   setPermissions(permissionSet);
  //   // let newSet = new Set(response.data.data.role.permissions)
  //   // setPermissions(newSet)
  //   setLoading(false);
  // };
  // console.log("====> yeh hai permissions", permissions);
  // console.log("====> yeh hai user", loggedInUser);

  // // useEffect(()=>{
  // // if(loading) return
  // // if(!loggedInUser)
  // // navigate("/login")

  // // },[loggedInUser,loading])

  // useEffect(() => {
  //   loadUser();
  // }, []);

  // if (loading) {
  //   return null;
  // }
  // // if(! loggedInUser){
  // //   // navigate("/login")
  // //   return null
  // // }

  //====================================================================
  return (
    // <>
    <div className="App">
      <Routes>
        {/* {!loggedInUser ?( */}
        {/* <> */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/reset_password" element={<ResetPasswordForm />} />

        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/register" element={<UserSignUp />} exact />
        {/* </> */}
        {/* ):( */}
        {/* <> */}
        {/* <Route path="/registered_User" element={<RegisteredUser />} /> */}
        {/*Master =============================================*/}
        {/*Products Data ======================*/}

        <Route path="/change_name" element={<UserNameChangeForm />} />
        <Route path="/loader" element={<Loader />} />


        <Route path="*" element={<PageNotFound />} />
        <Route path="/change_role" element={<RoleChangeForm />} />

        <Route path="/" element={<Home />} />

        <Route path="/master/plans/plan-bonus" element={<PlanBonus />} />
        {/*================================ Units =================================================*/}

        <Route
          path="/master/product-data/units"
          element={
            // permissions.has("view_metal_groups") ? (
            <Units user={loggedInUser} />
            // ) : (
            // <NoAccessComponent user={loggedInUser} />
            // )
          }
        />
        <Route
          path="/master/product-data/units/add"
          element={
            // permissions.has("") ? (
            <UnitsForm />
            // ) : (
            // <NoAccessComponent user={loggedInUser} />
            // )
          }
        />
        <Route
          path="/master/product-data/units/edit"
          element={
            permissions.has("") ? (
              <UnitsForm user={loggedInUser} />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        {/*================================ Style =================================================*/}

        <Route
          path="/master/product-data/style"
          element={
            permissions.has("view_style") ? (
              <Style user={loggedInUser} />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/product-data/style/add"
          element={
            permissions.has("add_style") ? (
              <StyleForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/product-data/style/edit"
          element={
            permissions.has("edit_style") ? (
              <StyleForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        {/*================================ Making_Charges =================================================*/}

        <Route
          path="/master/product-data/making-charges"
          element={<MakingCharges />}
        />
        <Route
          path="/master/product-data/making-charges/add"
          element={<MakingChargesForm />}
        />
        <Route
          path="/master/product-data/making-charges/edit"
          element={<MakingChargesForm />}
        />

        <Route
          path="/master/plans/plan-bonus/edit"
          element={<PlanBonusForm />}
        />
        <Route
          path="/master/plans/plan-bonus/add"
          element={<PlanBonusForm />}
        />
        <Route path="/system_user_detail" element={<SystemUserDetail />} />
        <Route path="/view_item_details" element={<EachItemsDetails />} />
        <Route
          path="/master/product-data/metal"
          // element={
          //   permissions.has("view_metal_groups") ? (
          //     <Metal user={loggedInUser} />
          //   ) : (
          //     <NoAccessComponent user={loggedInUser} />
          //   )
          // }
          element={<Metal />}
        />
        <Route path="/master/product-data/metal/edit" element={<MetalForm />} />
        <Route path="/master/product-data/metal/add" element={<MetalForm />} />

        <Route
          path="/master/product-data/metal_groups"
          element={
            permissions.has("view_metal_groups") ? (
              <MetalGroups user={loggedInUser} />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />

        <Route path="/master/product-data/ornament" element={<Ornament />} />
        <Route
          path="/master/product-data/ornament/add"
          element={<OrnamentForm />}
        />
        <Route
          path="/master/product-data/ornament/edit"
          element={<OrnamentForm />}
        />

        <Route path="/master/product-data/cut" element={<Cut />} />
        <Route path="/master/product-data/cut/add" element={<CutForm />} />
        <Route path="/master/product-data/cut/edit" element={<CutForm />} />

        <Route path="/master/calculation" element={<Calculation />} />
        <Route path="/master/calculation/add" element={<CalculationForm />} />
        <Route path="/master/calculation/edit" element={<CalculationForm />} />

        <Route path="/master/product-data/shape" element={<Shape />} />
        <Route path="/master/product-data/shape/add" element={<ShapeForm />} />
        <Route path="/master/product-data/shape/edit" element={<ShapeForm />} />

        <Route path="/master/product-data/clarity" element={<Clarity />} />
        <Route
          path="/master/product-data/clarity/add"
          element={<ClarityForm />}
        />
        <Route
          path="/master/product-data/clarity/edit"
          element={<ClarityForm />}
        />

        <Route path="/master/product-data/colour" element={<Colour />} />
        <Route
          path="/master/product-data/colour/add"
          element={<ColourForm />}
        />
        <Route
          path="/master/product-data/colour/edit"
          element={<ColourForm />}
        />

        <Route path="/user_details" element={<UserDetails />} />
        <Route path="/filtered_users" element={<FilteredUsers />} />
        <Route
          path="/master/product-data/metal_groups/add"
          element={
            permissions.has("add_metal_groups") ? (
              <MetalGroupForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/product-data/metal_groups/edit"
          element={
            permissions.has("edit_metal_groups") ? (
              <MetalGroupForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />

        <Route
          path="/master/product-data/offers/add"
          element={
            permissions.has("add_offer") ? (
              <OffersForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/product-data/offers/edit"
          element={
            permissions.has("edit_offer") ? (
              <OffersForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/buysell/add"
          element={
            permissions.has("add_buy_price") ? (
              <CurrentRateForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/buysell/edit"
          element={
            permissions.has("edit_buy_price") ? (
              <CurrentRateForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/plans/standard-plans/add"
          element={
            permissions.has("add_plan") ? (
              <StandardPlanForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/plans/standard-plans/edit"
          element={
            permissions.has("update_plan") ? (
              <StandardPlanForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/taxes/add"
          element={
            permissions.has("add_tax") ? (
              <CustomDutiesForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/taxes/edit"
          element={
            permissions.has("edit_tax") ? (
              <CustomDutiesForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/plans/cycle-periods/add"
          element={
            permissions.has("add_cycle_periods") ? (
              <CyclePeriodsForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/plans/cycle-periods/edit"
          element={
            permissions.has("edit_cycle_periods") ? (
              <CyclePeriodsForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/settings/sliders/add"
          element={
            permissions.has("add_slider") ? (
              <SlidersForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/settings/sliders/edit"
          element={
            permissions.has("update_slider") ? (
              <SlidersForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />

        <Route
          path="/master/product-data/diamonds"
          element={
            permissions.has("view_diamond_gems") ? (
              <Diamonds user={loggedInUser} />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/product-data/categories"
          element={
            permissions.has("view_categories") ? (
              <Categories user={loggedInUser} />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/product-data/products"
          element={
            permissions.has("view_products") ? (
              <Products user={loggedInUser} />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/product-data/varieties"
          element={
            permissions.has("view_varities") ? (
              <Varieties user={loggedInUser} />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/product-data/items"
          element={
            permissions.has("view_items") ? (
              <Items user={loggedInUser} />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/product-data/offers"
          element={
            // permissions.has("view_offer") ? (
              <Offers user={loggedInUser} />
            // ) : (
              // <NoAccessComponent user={loggedInUser} />
            // )
          }
        />
        {/*Security =============================================*/}
        <Route
          path="/master/security/role_right"
          element={
            // permissions.has("add_diamond_gems") ? (
            <RoleRight />
            // ) : (
            // <NoAccessComponent user={loggedInUser} />
            // )
          }
        />
        <Route path="/master/security/all_roles" element={<AllRoles />} />

        <Route
          path="master/product-data/diamonds/add"
          element={
            permissions.has("add_diamond_gems") ? (
              <DiamondsForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />

        {/* <Route
            path="/master/security/role_right"
            element={
              permissions.has("edit_diamond_gems") ? (
                <DiamondsForm />
              ) : (
                <NoAccessComponent user={loggedInUser} />
              )
            }
          /> */}
        <Route
          path="master/product-data/collections"
          element={
            permissions.has("view_collections") ? (
              <Collections user={loggedInUser} />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
          exact
        />
        <Route
          path="master/product-data/products/add"
          element={
            permissions.has("add_product") ? (
              <ProductForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="master/product-data/products/edit"
          element={
            permissions.has("edit_product") ? (
              <ProductForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="master/product-data/items/add"
          element={
            permissions.has("add_items") ? (
              <ItemForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="master/product-data/items/edit"
          element={
            permissions.has("edit_item") ? (
              <ItemForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="master/product-data/collections/add"
          element={
            permissions.has("add_collections") ? (
              <CollectionForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="master/product-data/collections/edit"
          element={
            permissions.has("edit_collections") ? (
              <CollectionForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="master/product-data/categories/edit"
          element={
            permissions.has("edit_categories") ? (
              <CategoryForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/security/masterUserRights"
          element={
            permissions.has("view_roles") ? (
              <MasterUserRights />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/product-data/categories/add"
          element={
            permissions.has("add_categories") ? (
              <CategoryForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/product-data/varieties/add"
          element={
            permissions.has("add_varities") ? (
              <VarietyForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/product-data/varieties/edit"
          element={
            permissions.has("edit_varities") ? (
              <VarietyForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/security/permissions"
          element={
            permissions.has("view_permissions") ? (
              <Permissions user={loggedInUser} />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/security/role_right/edit"
          element={
            // permissions.has("manage_roles") ? (
            <RoleForm />
            // ) : (
            // <NoAccessComponent user={loggedInUser} />
            // )
          }
        />
        <Route
          path="/master/security/masterUserRights/edit"
          element={
            permissions.has("update_roles") ? (
              <RoleForm permissions={permissions} />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/security/userpasswords"
          element={<RegisteredUser />}
        />
        {/*Settings =============================================*/}
        <Route
          path="/master/settings/sliders"
          element={
            permissions.has("view_sliders") ? (
              <Sliders />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/settings/how-to-videos"
          element={
            permissions.has("view_videos") ? (
              <HowTo />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/settings/how-to-videos/add"
          element={
            permissions.has("add_video") ? (
              <HowTo />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/settings/how-to-videos/edit"
          lement={
            permissions.has("edit_video") ? (
              <HowTo />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/settings/testimonials"
          element={<Testimonials />}
        />

        <Route path="/master/faq" element={<FAQ />} />
        <Route path="/master/faq/add" element={<FAQForm />} />
        <Route path="/master/faq/edit" element={<FAQForm />} />

        {/*Buy Sell =============================================*/}
        <Route
          path="/master/buysell"
          element={
            permissions.has("view_buy_price") ? (
              <BuySell />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        {/*Reference Data =============================================*/}
        <Route path="/master/reference/reference" element={<Reference />} />
        <Route path="/master/reference/gbplevels" element={<GBPLevels />} />
        {/*Plans =============================================*/}
        <Route
          path="/master/plans/cycle-periods/"
          element={
            // permissions.has("view_cycle_periods") ? (
              <CyclePeriods user={loggedInUser} />
            // ) : (
              // <NoAccessComponent user={loggedInUser} />
            // )
          }
        />
        <Route
          path="/master/plans/standard-plans/"
          element={
            permissions.has("view_plans") ? (
            <StandardPlans user={loggedInUser} />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/security/permissions/add"
          element={
            permissions.has("add_permissions") ? (
              <PermissionsForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/master/security/permissions/edit"
          element={
            permissions.has("edit_permission") ? (
              <PermissionsForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />

        <Route path="/master/badla" element={<Badla user={loggedInUser} />} />
        <Route path="/master/badla/add" element={<BadlaForm />} />
        <Route path="/master/badla/edit" element={<BadlaForm />} />

        <Route path="/master/loan_intrest_rates" element={<LoanInterestRates />} />
        <Route path="/master/loan_intrest_rates/add" element={<LoanInterestRatesForm />} />
        <Route path="/master/loan_intrest_rates/edit" element={<LoanInterestRatesForm />} />


        <Route path="/master/policy" element={<Policy/>} />
        <Route path="/master/policy/add" element={<PolicyForm />} />
        <Route path="/master/policy/edit" element={<PolicyForm />} />




        <Route path="/master/sell_request" element={<SellRequest/>} />
        <Route path="/master/sell_request/details" element={<SellRequestDetails/>} />


        <Route path="/master/skip_count" element={<SkipCount/>} />
        <Route path="/master/skip_count/add" element={<SkipCountForm />} />
        <Route path="/master/skip_count/edit" element={<SkipCountForm />} />

        <Route path="/master/unpaid_skip_count" element={<UnpaidSkipCount/>} />
        <Route path="/master/unpaid_skip_count/add" element={<UnpaidSkipCountForm />} />
        <Route path="/master/unpaid_skip_count/edit" element={<UnpaidSkipCountForm />} />

        <Route path="/master/return_reason" element={<ReturnReason/>} />
        <Route path="/master/return_reason/add" element={<ReturnReasonForm />} />
        <Route path="/master/return_reason/edit" element={<ReturnReasonForm />} />
      {/*Duties Taxes =============================================*/}
        <Route
          path="/master/taxes"
          element={
            // permissions.has("view_tax") ? (
              <CustomDuties />
            // ) : (
              // <NoAccessComponent user={loggedInUser} />
            // )
          }
        />
        {/*Sales Returns Reasons =============================================*/}
        <Route path="/master/sellReasons" element={<SellReasons />} />
        {/*Trasanctions =============================================*/}

        {/*Financials =============================================*/}
        <Route
          path="/transaction/financials/InStoreReturns"
          element={<InStoreReturns />}
        />
        <Route
          path="/transaction/financials/ZohoBooks"
          element={<ZohoBooks />}
        />
        <Route
          path="/transaction/financials/ZohoBooks/add"
          element={<ZohoBooksForm />}
        />
        <Route
          path="/transaction/financials/InStoreReturns/add"
          element={<InStoreReturnForm />}
        />
        <Route
          path="/transaction/financials/InStoreRedeem"
          element={<InStoreRedeem />}
        />
        <Route
          path="/transaction/financials/InStoreCashCollection"
          element={<InStoreCashCollection />}
        />
        <Route
          path="/transaction/financials/InStoreTokenRefund"
          element={<InStoreTokenRefund />}
        />
        <Route
          path="/transaction/financials/SubmissionOfGoldEntry"
          element={<SubmissionOfGoldEntry />}
        />
        <Route
          path="/transaction/financials/BankPaymentEntries"
          element={<BankPaymentEntries />}
        />
        <Route
          path="/transaction/financials/GoldAdjustments"
          element={<GoldAdjustments />}
        />
        {/*Orders =============================================*/}
        <Route path="/transaction/order/Shipping" element={<Shipping />} />
        <Route path="/transaction/order/Tracking" element={<Tracking />} />
        {/* Data Entry =============================================*/}
        <Route
          path="/transaction/data-entry/reference-data"
          element={<ReferenceData />}
        />
        <Route
          path="/transaction/data-entry/gbp-entry"
          element={<GBPEntry />}
          exact={true}
        />
        {/* <Route
            path="/transaction/data-entry/gbp-entry/add"
            element={('manage_roles') ?<GbpEntryForm />  }
          /> */}
        <Route
          path="/transaction/data-entry/enter-master-details"
          element={<EnterMasterDetails />}
          exact={true}
        />
        <Route
          path="/transaction/data-entry/enter-master-details/add"
          element={<AddMasterDetails />}
        />
        {/* Status Updates============================================= */}
        <Route
          path="/transaction/status-updates/collector"
          element={<Collector />}
        />
        <Route
          path="/transaction/status-updates/delivery"
          element={<Delivery />}
        />
        <Route
          path="/transaction/status-updates/security"
          element={<Security />}
        />
        <Route
          path="/transaction/status-updates/appointmenttime"
          element={<AppointmentTime />}
        />
        <Route
          path="/transaction/status-updates/updateappoinments"
          element={<UpdateAppointments />}
        />
        {/*Products =============================================*/}
        <Route
          path="master/product-data/items_details"
          element={
            permissions.has("view_item_details") ? (
              <ItemDetails user={loggedInUser} />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="master/product-data/items_details/add"
          element={
            permissions.has("add_item_details") ? (
              <ItemDetailsForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="master/product-data/items_details/edit"
          element={
            permissions.has("edit_item_details") ? (
              <ItemDetailsForm />
            ) : (
              <NoAccessComponent user={loggedInUser} />
            )
          }
        />
        <Route
          path="/transaction/products/OfferDetails"
          element={<OfferDetails />}
        />
        {/*Reports=============================================*/}

        <Route
          path="/report/reports"
          element={<MainReports />}
        />


        {/*Daily =============================================*/}
        <Route
          path="/reports/daily-reports/DailyActivity"
          element={<DailyActivity />}
        />
        <Route
          path="/reports/daily-reports/DailyStatement"
          element={<DailyStatement />}
        />
        <Route
          path="/reports/daily-reports/NewuserData"
          element={<NewuserData />}
        />
        <Route
          path="/reports/daily-reports/CompletedPayment"
          element={<CompletedPayment />}
        />
        <Route
          path="/reports/daily-reports/PendingPayment"
          element={<PendingPayment />}
        />
        {/*Accounts =============================================*/}
        <Route
          path="/reports/accounts-reports/Metal-Currency-Userbased"
          element={<MetalCurrencyUserbased />}
        />
        <Route
          path="/reports/accounts-reports/Metal-Currency-Systembase"
          element={<MetalCurrencySystembase />}
        />
        <Route
          path="/reports/accounts-reports/Metal-Currency-Summary"
          element={<MetalCurrencySummary />}
        />
        <Route path="/reports/accounts-reports/Ledger" element={<Ledger />} />
        {/*Buy and Save =============================================*/}
        {/* All User Data Report ( filter to one or selected users) =============================================*/}
        <Route
          path="/reports/buy-save/userdata/plan"
          element={<UserDataPlan />}
        />
        <Route
          path="/reports/buy-save/userdata/cycle"
          element={<UserDataCycle />}
        />
        <Route
          path="/reports/buy_and_save"
          element={<BuyAndSaveReport />}
        />
        <Route
          path="/reports/ecommerce_report"
          element={<EcommerceReport />}
        />
         <Route
          path="/reports/instant_gold_report"
          element={<InstantGoldReport />}
        />
         <Route
          path="/reports/sell_and_reserve_report"
          element={<SellAndReserveReport />}
        />
        {/*Fixed Value plan Report  =============================================*/}
        <Route
          path="/reports/buy-save/fixedPlanValue/cycle"
          element={<FixedPlanValueCycle />}
        />
        <Route
          path="/reports/buy-save/fixedPlanValue/maturity"
          element={<FixedPlanValueMaturity />}
        />
        <Route
          path="/reports/buy-save/fixedPlanValue/full"
          element={<FixedPlanValueFull />}
        />
        {/*Fixed Weight plan Report =============================================*/}
        <Route
          path="/reports/buy-save/fixedPlanWeight/cycle"
          element={<FixedPlanWeightCycle />}
        />
        <Route
          path="/reports/buy-save/fixedPlanWeight/maturity"
          element={<FixedPlanWeightMaturity />}
        />
        <Route
          path="/reports/buy-save/fixedPlanWeight/full"
          element={<FixedPlanWeightFull />}
        />
        {/*Standard Plan Report =============================================*/}
        <Route
          path="/reports/buy-save/StandardPlan/cycle"
          element={<StandardPlanCycle />}
        />
        <Route
          path="/reports/buy-save/StandardPlan/maturity"
          element={<StandardPlanMaturity />}
        />
        <Route
          path="/reports/buy-save/StandardPlan/full"
          element={<StandardPlanFull />}
        />
        {/*Plans Converted to Normal Investment Report =============================================*/}
        <Route
          path="/reports/buy-save/converted-normal/user"
          element={<ConvertedNormalUser />}
        />
        <Route
          path="/reports/buy-save/converted-normal/plan"
          element={<ConvertedNormalPlan />}
        />
        <Route
          path="/reports/buy-save/converted-normal/full"
          element={<ConvertedNormalFull />}
        />
        {/*Skip Now Report ============================================= */}
        <Route
          path="/reports/buy-save/skipnow/user"
          element={<SkipNowUser />}
        />
        <Route
          path="/reports/buy-save/skipnow/plan"
          element={<SkipNowPlan />}
        />
        <Route
          path="/reports/buy-save/skipnow/full"
          element={<SkipNowFull />}
        />
        {/*Redeem Report =============================================*/}
        <Route path="/reports/buy-save/redeem/user" element={<RedeemUser />} />
        <Route
          path="/reports/buy-save/redeem/completed"
          element={<RedeemCompleted />}
        />
        <Route
          path="/reports/buy-save/redeem/pending"
          element={<RedeemPending />}
        />
        {/*Sell Report =============================================*/}
        <Route path="/reports/buy-save/sell/user" element={<SellUser />} />
        <Route
          path="/reports/buy-save/sell/completed"
          element={<SellCompleted />}
        />
        <Route
          path="/reports/buy-save/sell/pending"
          element={<SellPending />}
        />
        {/*Plan Bonus Report =============================================*/}
        <Route
          path="/reports/buy-save/planBonus/Accrued"
          element={<PlanBonusAccrued />}
        />
        <Route
          path="/reports/buy-save/planBonus/Due"
          element={<PlanBonusDue />}
        />
        <Route
          path="/reports/buy-save/planBonus/Forfieted"
          element={<PlanBonusForfieted />}
        />
        {/*User Bonus summary =============================================*/}
        <Route
          path="/reports/buy-save/userBonus/fromReferals"
          element={<UserBonusFromReferals />}
        />
        <Route
          path="/reports/buy-save/userBonus/fromInvestments"
          element={<UserBonusFromInvestments />}
        />
        {/*Referral Bonus Report =============================================*/}
        <Route
          path="/reports/buy-save/ReferalBonus/Accrued"
          element={<ReferalBonusAccrued />}
        />
        <Route
          path="/reports/buy-save/ReferalBonus/Due"
          element={<ReferalBonusDue />}
        />
        <Route
          path="/reports/buy-save/ReferalBonus/Forfieted"
          element={<ReferalBonusForfieted />}
        />
        {/*Referred/ joining Bonus Report =============================================*/}
        <Route
          path="/reports/buy-save/ReferedBonus/Accrued"
          element={<ReferedBonusAccrued />}
        />
        <Route
          path="/reports/buy-save/ReferedBonus/Due"
          element={<ReferedBonusDue />}
        />
        <Route
          path="/reports/buy-save/ReferedBonus/Forfieted"
          element={<ReferedBonusForfieted />}
        />
        {/*Referral  & Referred Data Summary  Report =============================================*/}
        <Route
          path="/reports/buy-save/Referal-Refered-Summary/category"
          element={<ReferSummaryCategory />}
        />
        <Route
          path="/reports/buy-save/Referal-Refered-Summary/user"
          element={<ReferSummaryUser />}
        />
        {/*Sell your old gold =============================================* /}

          {/*User Data Report =============================================*/}
        <Route
          path="/reports/sell-old-gold/userdata/customerquery"
          element={<SellCustomerQuery />}
        />
        <Route
          path="/reports/sell-old-gold/userdata/detailed"
          element={<SellDetailed />}
        />
        {/*Appointment Report =============================================*/}
        {/*In -Store Appointments Report =============================================*/}
        <Route
          path="/reports/sell-old-gold/appointment/in-store/due"
          element={<SellInStoreDue />}
        />
        <Route
          path="/reports/sell-old-gold/appointment/in-store/fixed"
          element={<SellInStoreFixed />}
        />
        <Route
          path="/reports/sell-old-gold/appointment/in-store/canceled"
          element={<SellInStoreCanceled />}
        />
        {/*Home Visit Appointments Report =============================================*/}
        <Route
          path="/reports/sell-old-gold/appointment/home-visit/due"
          element={<SellHomeVisitDue />}
        />
        <Route
          path="/reports/sell-old-gold/appointment/home-visit/fixed"
          element={<SellHomeVisitFixed />}
        />
        <Route
          path="/reports/sell-old-gold/appointment/home-visit/canceled"
          element={<SellHomeVisitCanceled />}
        />
        {/*Verifier Reports =============================================*/}
        {/*Customer Related Report =============================================*/}
        <Route
          path="/reports/sell-old-gold/verfier/CustomerRelated/CustomerAllotment"
          element={<SellVerifierCustomerAllotment />}
        />
        <Route
          path="/reports/sell-old-gold/verfier/CustomerRelated/OnSiteCustomer"
          element={<SellVerifierOnSite />}
        />
        <Route
          path="/reports/sell-old-gold/verfier/CustomerRelated/CustomerValuation"
          element={<SellVerifierCustomerValuation />}
        />
        {/*Payments Report =============================================*/}
        <Route
          path="/reports/sell-old-gold/verfier/CustomerRelated/PaymentReportWithMetals"
          element={<SellPaymentReports />}
        />
        <Route
          path="/reports/sell-old-gold/verfier/CustomerRelated/Completed"
          element={<SellPaymentCompleted />}
        />
        {/*Metal Report =============================================*/}
        <Route
          path="/reports/sell-old-gold/verfier/CustomerRelated/CustmerWise"
          element={<SellCustomerwise />}
        />
        <Route
          path="/reports/sell-old-gold/verfier/CustomerRelated/VerifierWise"
          element={<SellVerfierWise />}
        />
        <Route
          path="/reports/sell-old-gold/verfier/TamperProof"
          element={<SellTamperProof />}
        />
        <Route
          path="/reports/sell-old-gold/verfier/SecuirtyGuard"
          element={<SellSecurityGuard />}
        />
        {/*E Shop =============================================*/}
        <Route path="/reports/eshop/orderSummary" element={<OrderSummary />} />
        <Route path="/reports/eshop/orderPending" element={<OrderPernding />} />
        <Route
          path="/reports/eshop/orderShippingEntry"
          element={<OrderShippingEntry />}
        />
        <Route
          path="/reports/eshop/orderInTransit"
          element={<OrderInTransit />}
        />
        <Route
          path="/reports/eshop/orderTrackingEntry"
          element={<CustomeOrderTracking />}
        />
        <Route
          path="/reports/eshop/orderCompleted"
          element={<OrderCompleted />}
        />
        <Route
          path="/reports/eshop/CustomeOrderTracking"
          element={<CustomOrderTracking />}
        />
        {/*Stock =============================================*/}
        <Route
          path="/reports/stock/Summary"
          element={<AccumalatedGoldSummary />}
        />
        {/* Accumalated Gold Summary =============================================*/}
        <Route
          path="/reports/stock/AccumalatedGoldSummary/Due"
          element={<AccumalatedGoldSummaryDue />}
        />
        <Route
          path="/reports/stock/AccumalatedGoldSummary/InPlan"
          element={<AccumalatedGoldSummaryInPlan />}
        />
        <Route
          path="/reports/stock/AccumalatedGoldSummary/Summary"
          element={<AccumalatedGoldSummary />}
        />
        {/* Accumalated Bonus Summary ============================================= */}
        {/* Accumalated Bonus From Plans ============================================= */}
        <Route
          path="/reports/stock/AccumalatedBonusSummary/FromPlans/Accrued"
          element={<AccumalatedBonusSummaryPlansAccured />}
        />
        <Route
          path="/reports/stock/AccumalatedBonusSummary/FromPlans/Due"
          element={<AccumalatedBonusSummaryPlansDue />}
        />
        <Route
          path="/reports/stock/AccumalatedBonusSummary/FromPlans/Forfieted"
          element={<AccumalatedBonusSummaryPlansForfieted />}
        />
        {/* Accumalated Bonus From Referreals ============================================= */}
        <Route
          path="/reports/stock/AccumalatedBonusSummary/FromReferals/Accrued"
          element={<AccumalatedBonusSummaryReferalsAccrued />}
        />
        <Route
          path="/reports/stock/AccumalatedBonusSummary/FromReferals/Due"
          element={<AccumalatedBonusSummaryReferalsDue />}
        />
        <Route
          path="/reports/stock/AccumalatedBonusSummary/FromReferals/Forfieted"
          element={<AccumalatedBonusSummaryReferalsForfieted />}
        />
        {/*Delivery ============================================= */}
        <Route path="/reports/delivery/summary" element={<DeliverySummary />} />
        <Route
          path="/reports/delivery/userwise"
          element={<DeliveryUserwise />}
        />
        {/*Collector  =============================================*/}
        <Route
          path="/reports/collector/summary"
          element={<CollectorSummary />}
        />
        <Route
          path="/reports/collector/userwise"
          element={<CollectorUserWise />}
        />
        {/*Customer Relations  =============================================*/}
        {/*SMS  =============================================*/}
        <Route path="/customer-relations/sms/create" element={<SMSCreate />} />
        <Route path="/customer-relations/sms/send" element={<SMSsend />} />
        <Route path="/customer-relations/sms/report" element={<SMSreport />} />
        {/*Whatsapp  =============================================*/}
        <Route
          path="/customer-relations/whatsapp/create"
          element={<WhatsappCreate />}
        />
        <Route
          path="/customer-relations/whatsapp/send"
          element={<WhatsappSend />}
        />
        <Route
          path="/customer-relations/whatsapp/report"
          element={<WhatsappReport />}
        />
        {/*Email  ============================================= */}
        <Route
          path="/customer-relations/email/create"
          element={<EmailCreate />}
        />
        <Route path="/customer-relations/email/send" element={<EmailSend />} />
        <Route
          path="/customer-relations/email/report"
          element={<EmailReport />}
        />
        {/*Push =============================================*/}
        <Route
          path="/customer-relations/push/create"
          element={<PushCreate />}
        />
        <Route path="/customer-relations/push/send" element={<PushSend />} />
        <Route
          path="/customer-relations/push/report"
          element={<PushReport />}
        />
        {/*FAQs =======================================================*/}
        <Route path="/customer-relations/faq/create" element={<CreateFAQ />} />
        <Route path="/customer-relations/faq/all" element={<ViewFAQs />} />
        {/* </> */}
        {/* )} */}
      </Routes>
    </div>
    // {/* </> */}
  );
};

export default App;
