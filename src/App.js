import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AppointmentTime from './screens/AppointmentTime'
import BankPaymentEntries from './screens/BankPaymentEntries'
import BuySell from './screens/BuySave'
import Categories from './screens/Categories'
import Collector from './screens/Collector'
import CyclePeriods from './screens/CyclePeriods'
import DailyActivity from './screens/DailyActivity'
import DailyStatement from './screens/DailyStatement'
import Delivery from './screens/Delivery'
import Diamonds from './screens/Diamonds'
import EnterMasterDetails from './screens/EnterMasterDetails'
import GBPEntry from './screens/GBPEntry'
import GBPLevels from './screens/GBPLevels'
import GoldAdjustments from './screens/GoldAdjustments'
import Home from './screens/home'
import HowTo from './screens/HowTo'
import InStoreCashCollection from './screens/InStoreCashCollection'
import InStoreRedeem from './screens/InStoreRedeem'
import InStoreReturns from './screens/InStoreReturns'
import InStoreTokenRefund from './screens/InStoreTokenRefund'
import ItemDetails from './screens/ItemDetails'
import Items from './screens/items'
import MasterUserRights from './screens/MasterUserRights'
import MetalGroups from './screens/MetalGroups'
import NewuserData from './screens/NewuserData'
import OfferDetails from './screens/OfferDetails'
import PendingPayment from './screens/PendingPayment'
import Products from './screens/Products'
import ReferenceData from './screens/RefereceData'
import Reference from './screens/Reference'
import Security from './screens/security'
import SellReasons from './screens/SellReasons'
import Shipping from './screens/Shipping'
import Sliders from './screens/Sliders'
import StandardPlans from './screens/StandardPlans'
import SubmissionOfGoldEntry from './screens/SubmissionOfGoldEntry'
import TaxesDuties from './screens/TaxesDuties'
import Testimonials from './screens/Testimonials'
import Tracking from './screens/Tracking'
import UpdateAppointments from './screens/UpdateAppoinments'
import UserPasswords from './screens/UserPasswords'
import Varieties from './screens/Varieties'
import Ledger from './screens/Ledger'
import AccumalatedBonusSummaryPlansAccured from './screens/AccumalatedBonusSummaryPlansAccured'
import AccumalatedBonusSummaryPlansDue from './screens/AccumalatedBonusSummaryPlansDue'
import AccumalatedBonusSummaryPlansForfieted from './screens/AccumalatedBonusSummaryPlansForfieted'
import AccumalatedBonusSummaryReferalsAccrued from './screens/AccumalatedBonusSummaryReferalsAccrued'
import AccumalatedBonusSummaryReferalsDue from './screens/AccumalatedBonusSummaryReferalsDue'
import AccumalatedBonusSummaryReferalsForfieted from './screens/AccumalatedBonusSummaryReferalsForfieted'
import AccumalatedGoldSummary from './screens/AccumalatedGoldSummary'
import AccumalatedGoldSummaryDue from './screens/AccumalatedGoldSummaryDue'
import AccumalatedGoldSummaryInPlan from './screens/AccumalatedGoldSummaryInPlan'
import CollectorSummary from './screens/CollectorSummary'
import CollectorUserWise from './screens/CollectorUserWise'
import CompletedPayment from './screens/CompletedPayment'
import ConvertedNormalFull from './screens/ConvertedNormalFull'
import ConvertedNormalPlan from './screens/ConvertedNormalPlan'
import ConvertedNormalUser from './screens/ConvertedNormalUser'
import CreateFAQ from './screens/CreateFAQ'
import CustomeOrderTracking from './screens/CustomOrderTracking'
import DeliverySummary from './screens/DeliverySummary'
import DeliveryUserwise from './screens/DeliveryUserwise'
import EmailCreate from './screens/EmailCreate'
import EmailReport from './screens/EmailReport'
import EmailSend from './screens/EmailSend'
import FixedPlanValueCycle from './screens/FixedPlanValueCycle'
import FixedPlanValueFull from './screens/FixedPlanValueFull'
import FixedPlanValueMaturity from './screens/FixedPlanValueMaturity'
import FixedPlanWeightCycle from './screens/FixedPlanWeightCycle'
import FixedPlanWeightFull from './screens/FixedPlanWeightFull'
import FixedPlanWeightMaturity from './screens/FixedPlanWeightMaturity'
import MetalCurrencySummary from './screens/MetalCurrencySummary'
import MetalCurrencyUserbased from './screens/MetalCurrencyUserbased'
import MetalCurrencySystembase from './screens/MetalCurrencySystembase'
import OrderCompleted from './screens/OrderCompleted'
import OrderInTransit from './screens/OrderInTransit'
import OrderPernding from './screens/OrderPernding'
import OrderShippingEntry from './screens/OrderShippingEntry'
import OrderSummary from './screens/OrderSummary'
import CustomOrderTracking from './screens/CustomOrderTracking'
import PlanBonusAccrued from './screens/PlanBonusAccrued'
import PlanBonusDue from './screens/PlanBonusDue'
import PlanBonusForfieted from './screens/PlanBonusForfieted'
import PushCreate from './screens/PushCreate'
import PushReport from './screens/PushReport'
import PushSend from './screens/PushSend'
import RedeemCompleted from './screens/RedeemCompleted'
import RedeemPending from './screens/RedeemPending'
import RedeemUser from './screens/RedeemUser'
import ReferalBonusAccrued from './screens/ReferalBonusAccrued'
import ReferalBonusDue from './screens/ReferalBonusDue'
import ReferalBonusForfieted from './screens/ReferalBonusForfieted'
import ReferedBonusAccrued from './screens/ReferedBonusAccrued'
import ReferedBonusDue from './screens/ReferedBonusDue'
import ReferedBonusForfieted from './screens/ReferedBonusForfieted'
import ReferSummaryCategory from './screens/ReferSummaryCategory'
import ReferSummaryUser from './screens/ReferSummaryUser'
import SellCompleted from './screens/SellCompleted'
import SellCustomerQuery from './screens/SellCustomerQuery'
import SellCustomerwise from './screens/SellCustomerwise'
import SellDetailed from './screens/SellDetailed'
import SellHomeVisitCanceled from './screens/SellHomeVisitCanceled'
import SellHomeVisitDue from './screens/SellHomeVisitDue'
import SellHomeVisitFixed from './screens/SellHomeVisitFixed'
import SellInStoreCanceled from './screens/SellInStoreCanceled'
import SellInStoreDue from './screens/SellInStoreDue'
import SellInStoreFixed from './screens/SellInStoreFixed'
import SellPaymentCompleted from './screens/SellPaymentCompleted'
import SellPaymentReports from './screens/SellPaymentReports'
import SellPending from './screens/SellPending'
import SellSecurityGuard from './screens/SellSecurityGuard'
import SellTamperProof from './screens/SellTamperProof'
import SellUser from './screens/SellUser'
import SellVerfierWise from './screens/SellVerfierWise'
import InStoreReturnForm from './components/InStoreReturnForm'
import SellVerifierCustomerAllotment from './screens/SellVerifierCustomerAllotment'
import SellVerifierCustomerValuation from './screens/SellVerifierCustomerValuation'
import SellVerifierOnSite from './screens/SellVerifierOnSite'
import SkipNowFull from './screens/SkipNowFull'
import SkipNowPlan from './screens/SkipNowPlan'
import SkipNowUser from './screens/SkipNowUser'
import SMSCreate from './screens/SMSCreate'
import SMSreport from './screens/SMSreport'
import SMSsend from './screens/SMSsend'
import StandardPlanCycle from './screens/StandardPlanCycle'
import StandardPlanFull from './screens/StandardPlanFull'
import StandardPlanMaturity from './screens/StandardPlanMaturity'
import UserBonusFromInvestments from './screens/UserBonusFromInvestments'
import UserBonusFromReferals from './screens/UserBonusFromReferals'
import UserDataCycle from './screens/UserDataCycle'
import UserDataFull from './screens/UserDataFull'
import UserDataPlan from './screens/UserDataPlan'
import ViewFAQs from './screens/ViewFAQs'
import WhatsappCreate from './screens/WhatsappCreate'
import WhatsappSend from './screens/WhatsappSend'
import WhatsappReport from './screens/WhatsappReport'
import RoleForm from './components/RoleForm'
import LoginScreen from './screens/LoginScreen'
import MetalGroupForm from './components/MetalGroupForm'
import CurrentRateForm from './components/CurrentRateForm'
import StandardPlanForm from './components/StandardPlansForm'
import CalculationsForm from './components/CalculationsForm'
import CyclePeriodsForm from './components/CyclePeriodsForm'
import SlidersForm from './components/SlidersForm'
import Offers from './screens/offers'
import OffersForm from './components/OffersForm'
import Permissions from './screens/Permissions'
import PermissionsForm from './components/PermissionsForm'
import DiamondsForm from './components/DiamondsForm'
import CategoryForm from './components/CategoryForm'
import VarietyForm from './components/VarietyForm'
import Collections from './screens/Collections'
import CollectionForm from './components/CollectionForm'
import ProductForm from './components/ProductForm'
import ItemForm from './components/ItemForm'
import AddMasterDetails from './components/AddMasterDetails'
//====================================================================
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [permissions, setPermissions] = useState(new Set())
  //====================================================================
  let navigate = useNavigate()
  //====================================================================
  useEffect(() => {
    if (
      localStorage.getItem('loggedInUser') &&
      Object.keys(loggedInUser).length === 0
    ) {
      let localStorageUser = JSON.parse(localStorage.getItem('loggedInUser'))
      let permissionSet = new Set()
      for (let permissions of localStorageUser.role.permissions) {
        permissionSet.add(permissions.permission_name)
      } 
      setPermissions(permissionSet) 
      setLoggedInUser(localStorageUser)
    } else {
      navigate('/login')
    }
  }, [])
  //====================================================================
  const handleLogout = () => {
    setLoggedInUser({});
    localStorage.clear();
    window.location.reload(false);
  };
  //====================================================================
  return (
    <>
      <div className='App'>
      <button onClick={handleLogout} type="button" class="btn btn-danger">
          Logout
        </button>
        <Routes>
          {/*Master =============================================*/}
          {/*Products Data =============================================*/}
          <Route path='/' element={<Home />} exact />
          <Route path='/login' element={<LoginScreen />} />

          <Route
            path='/master/product-data/metal-groups'
            element={
              <MetalGroups />
            }
          />
          <Route
            path='/master/product-data/metal-groups/add'
            element={
              <MetalGroupForm />
            }
          />
          <Route
            path='/master/product-data/metal-groups/edit'
            element={
              <MetalGroupForm />
            }
          />
          <Route
            path='/master/product-data/offers/add'
            element={<OffersForm />}
          />
          <Route
            path='/master/product-data/offers/edit'
            element={<OffersForm />}
          />
          <Route
            path='/master/buysell/add'
            element={
              <CurrentRateForm />
            }
          />
          <Route
            path='/master/plans/standard-plans/add'
            element={<StandardPlanForm />}
          />
          <Route
            path='/master/plans/standard-plans/edit'
            element={<StandardPlanForm />}
          />
          <Route
            path='/master/taxes/add'
            element={<CalculationsForm />}
          />
          <Route
            path='/master/taxes/edit'
            element={<CalculationsForm />}
          />
          <Route
            path='/master/plans/cycle-periods/add'
            element={
              <CyclePeriodsForm />
            }
          />
          <Route
            path='/master/plans/cycle-periods/edit'
            element={
              <CyclePeriodsForm />
            }
          />
          <Route
            path='/master/settings/sliders/add'
            element={<SlidersForm />}
          />
          <Route
            path='/master/settings/sliders/edit'
            element={<SlidersForm />}
          />
          <Route
            path='/master/product-data/diamonds'
            element={<Diamonds />}
          />
          <Route
            path='/master/product-data/categories'
            element={<Categories />}
          />
          <Route
            path='/master/product-data/products'
            element={<Products />}
          />
          <Route
            path='/master/product-data/varieties'
            element={<Varieties />}
          />
          <Route
            path='/master/product-data/items'
            element={<Items />}
          />
          <Route
            path='/master/product-data/offers'
            element={<Offers />}
          />

          {/*Security =============================================*/}
          <Route
            path='master/product-data/diamonds/add'
            element={
              <DiamondsForm />
            }
          />
          <Route
            path='master/product-data/diamonds/edit'
            element={
              <DiamondsForm />
            }
          />

          <Route
            path='master/product-data/collections'
            element={
              <Collections />
            }
            exact
          />
          <Route
            path='master/product-data/products/add'
            element={<ProductForm />}
          />
          <Route
            path='master/product-data/products/edit'
            element={<ProductForm />}
          />
          <Route
            path='master/product-data/items/add'
            element={<ItemForm />}
          />
          <Route
            path='master/product-data/items/edit'
            element={<ItemForm />}
          />
          <Route
            path='master/product-data/collections/add'
            element={
              <CollectionForm />
            }
          />
           <Route
            path='master/product-data/collections/edit'
            element={
              <CollectionForm />
            }
          />
          <Route
            path='master/product-data/categories/edit'
            element={
              <CategoryForm />
            }
          />

          <Route
            path='/master/security/masterUserRights'
            element={
              <MasterUserRights />
            }
          />
          <Route
            path='/master/product-data/categories/add'
            element={
              <CategoryForm />
            }
          />
          <Route
            path='/master/product-data/varieties/add'
            element={<VarietyForm />}
          />
          <Route
            path='/master/product-data/varieties/edit'
            element={<VarietyForm />}
          />

          <Route
            path='/master/security/permissions'
            element={
              <Permissions />
            }
          />
          <Route
            path='/master/security/masterUserRights/add'
            element={<RoleForm />}
          />
          <Route
            path='/master/security/masterUserRights/edit'
            element={<RoleForm />}
          />

          <Route
            path='/master/security/userpasswords'
            element={
              <UserPasswords />
            }
          />
          {/*Settings =============================================*/}
          <Route
            path='/master/settings/sliders'
            element={<Sliders />}
          />
          <Route
            path='/master/settings/how-to-videos'
            element={<HowTo />}
          />
          <Route
            path='/master/settings/testimonials'
            element={<Testimonials />}
          />
          {/*Buy Sell =============================================*/}
          <Route
            path='/master/buysell'
            element={<BuySell />}
          />
          {/*Reference Data =============================================*/}
          <Route
            path='/master/reference/reference'
            element={
              <Reference />
            }
          />
          <Route
            path='/master/reference/gbplevels'
            element={<GBPLevels />}
          />
          {/*Plans =============================================*/}
          <Route
            path='/master/plans/cycle-periods/'
            element={
              <CyclePeriods />
            }
          />
          <Route
            path='/master/plans/standard-plans/'
            element={<StandardPlans />}
          />
          <Route
            path='/master/security/permissions/add'
            element={
              <PermissionsForm />
            }
          />
          <Route
            path='/master/security/permissions/edit'
            element={
              <PermissionsForm />
            }
          />

          {/*Duties Taxes =============================================*/}
          <Route
            path='/master/taxes'
            element={<TaxesDuties />}
          />
          {/*Sales Returns Reasons =============================================*/}
          <Route path='/master/sellReasons' element={<SellReasons />} />

          {/*Trasanctions =============================================*/}
          {/*Financials =============================================*/}

          <Route
            path='/transaction/financials/InStoreReturns'
            element={

              <InStoreReturns />

            }
          />
          <Route
            path='/transaction/financials/InStoreReturns/add'
            element={

              <InStoreReturnForm />

            }
          />
          <Route
            path='/transaction/financials/InStoreRedeem'
            element={

              <InStoreRedeem />

            }
          />
          <Route
            path='/transaction/financials/InStoreCashCollection'
            element={

              <InStoreCashCollection />

            }
          />
          <Route
            path='/transaction/financials/InStoreTokenRefund'
            element={

              <InStoreTokenRefund />

            }
          />
          <Route
            path='/transaction/financials/SubmissionOfGoldEntry'
            element={

              <SubmissionOfGoldEntry />

            }
          />
          <Route
            path='/transaction/financials/BankPaymentEntries'
            element={

              <BankPaymentEntries />

            }
          />
          <Route
            path='/transaction/financials/GoldAdjustments'
            element={

              <GoldAdjustments />

            }
          />

          {/*Orders =============================================*/}

          <Route
            path='/transaction/order/Shipping'
            element={
              <Shipping />
            }
          />
          <Route
            path='/transaction/order/Tracking'
            element={
              <Tracking />
            }
          />

          {/* Data Entry =============================================*/}
          <Route
            path='/transaction/data-entry/reference-data'
            element={

              <ReferenceData />

            }
          />

          <Route
            path='/transaction/data-entry/gbp-entry'
            element={<GBPEntry />}
            exact={true}
          />
          {/* <Route
            path="/transaction/data-entry/gbp-entry/add"
            element={('manage_roles') ?<GbpEntryForm />  }
          /> */}
          <Route
            path='/transaction/data-entry/enter-master-details'
            element={

              <EnterMasterDetails />

            }
            exact={true}
          />
          <Route
            path='/transaction/data-entry/enter-master-details/add'
            element={
              <AddMasterDetails />
            }
          />

          {/* Status Updates============================================= */}
          <Route
            path='/transaction/status-updates/collector'
            element={
              <Collector />
            }
          />
          <Route
            path='/transaction/status-updates/delivery'
            element={
              <Delivery />
            }
          />
          <Route
            path='/transaction/status-updates/security'
            element={

              <Security />

            }
          />
          <Route
            path='/transaction/status-updates/appointmenttime'
            element={

              <AppointmentTime />

            }
          />
          <Route
            path='/transaction/status-updates/updateappoinments'
            element={

              <UpdateAppointments />

            }
          />

          {/*Products =============================================*/}

          <Route
            path='/transaction/products/ItemDetails'
            element={
              <ItemDetails />
            }
          />
          <Route
            path='/transaction/products/OfferDetails'
            element={<OfferDetails />}
          />

          {/*Reports=============================================*/}

          {/*Daily =============================================*/}
          <Route
            path='/reports/daily-reports/DailyActivity'
            element={

              <DailyActivity />

            }
          />
          <Route
            path='/reports/daily-reports/DailyStatement'
            element={
              <DailyStatement />
            }
          />
          <Route
            path='/reports/daily-reports/NewuserData'
            element={
              <NewuserData />
            }
          />
          <Route
            path='/reports/daily-reports/CompletedPayment'
            element={
              <CompletedPayment />
            }
          />
          <Route
            path='/reports/daily-reports/PendingPayment'
            element={
              <PendingPayment />
            }
          />
          {/*Accounts =============================================*/}

          <Route
            path='/reports/accounts-reports/Metal-Currency-Userbased'
            element={

              <MetalCurrencyUserbased />

            }
          />
          <Route
            path='/reports/accounts-reports/Metal-Currency-Systembase'
            element={

              <MetalCurrencySystembase />

            }
          />
          <Route
            path='/reports/accounts-reports/Metal-Currency-Summary'
            element={

              <MetalCurrencySummary />

            }
          />
          <Route
            path='/reports/accounts-reports/Ledger'
            element={<Ledger />}
          />
          {/*Buy and Save =============================================*/}

          {/* All User Data Report ( filter to one or selected users) =============================================*/}
          <Route
            path='/reports/buy-save/userdata/plan'
            element={

              <UserDataPlan />

            }
          />
          <Route
            path='/reports/buy-save/userdata/cycle'
            element={

              <UserDataCycle />

            }
          />
          <Route
            path='/reports/buy-save/userdata/full'
            element={
              <UserDataFull />
            }
          />
          {/*Fixed Value plan Report  =============================================*/}
          <Route
            path='/reports/buy-save/fixedPlanValue/cycle'
            element={

              <FixedPlanValueCycle />

            }
          />
          <Route
            path='/reports/buy-save/fixedPlanValue/maturity'
            element={

              <FixedPlanValueMaturity />

            }
          />
          <Route
            path='/reports/buy-save/fixedPlanValue/full'
            element={

              <FixedPlanValueFull />

            }
          />
          {/*Fixed Weight plan Report =============================================*/}
          <Route
            path='/reports/buy-save/fixedPlanWeight/cycle'
            element={

              <FixedPlanWeightCycle />

            }
          />
          <Route
            path='/reports/buy-save/fixedPlanWeight/maturity'
            element={

              <FixedPlanWeightMaturity />

            }
          />
          <Route
            path='/reports/buy-save/fixedPlanWeight/full'
            element={

              <FixedPlanWeightFull />

            }
          />
          {/*Standard Plan Report =============================================*/}
          <Route
            path='/reports/buy-save/StandardPlan/cycle'
            element={

              <StandardPlanCycle />

            }
          />
          <Route
            path='/reports/buy-save/StandardPlan/maturity'
            element={

              <StandardPlanMaturity />

            }
          />
          <Route
            path='/reports/buy-save/StandardPlan/full'
            element={

              <StandardPlanFull />

            }
          />
          {/*Plans Converted to Normal Investment Report =============================================*/}
          <Route
            path='/reports/buy-save/converted-normal/user'
            element={

              <ConvertedNormalUser />

            }
          />
          <Route
            path='/reports/buy-save/converted-normal/plan'
            element={

              <ConvertedNormalPlan />

            }
          />
          <Route
            path='/reports/buy-save/converted-normal/full'
            element={

              <ConvertedNormalFull />

            }
          />
          {/*Skip Now Report ============================================= */}
          <Route
            path='/reports/buy-save/skipnow/user'
            element={

              <SkipNowUser />

            }
          />
          <Route
            path='/reports/buy-save/skipnow/plan'
            element={

              <SkipNowPlan />

            }
          />
          <Route
            path='/reports/buy-save/skipnow/full'
            element={

              <SkipNowFull />

            }
          />
          {/*Redeem Report =============================================*/}
          <Route
            path='/reports/buy-save/redeem/user'
            element={
              <RedeemUser />
            }
          />
          <Route
            path='/reports/buy-save/redeem/completed'
            element={

              <RedeemCompleted />

            }
          />
          <Route
            path='/reports/buy-save/redeem/pending'
            element={

              <RedeemPending />

            }
          />
          {/*Sell Report =============================================*/}
          <Route
            path='/reports/buy-save/sell/user'
            element={

              <SellUser />

            }
          />
          <Route
            path='/reports/buy-save/sell/completed'
            element={

              <SellCompleted />

            }
          />
          <Route
            path='/reports/buy-save/sell/pending'
            element={

              <SellPending />

            }
          />
          {/*Plan Bonus Report =============================================*/}
          <Route
            path='/reports/buy-save/planBonus/Accrued'
            element={

              <PlanBonusAccrued />

            }
          />
          <Route
            path='/reports/buy-save/planBonus/Due'
            element={
              <PlanBonusDue />
            }
          />
          <Route
            path='/reports/buy-save/planBonus/Forfieted'
            element={

              <PlanBonusForfieted />

            }
          />
          {/*User Bonus summary =============================================*/}
          <Route
            path='/reports/buy-save/userBonus/fromReferals'
            element={

              <UserBonusFromReferals />

            }
          />
          <Route
            path='/reports/buy-save/userBonus/fromInvestments'
            element={

              <UserBonusFromInvestments />

            }
          />
          {/*Referral Bonus Report =============================================*/}
          <Route
            path='/reports/buy-save/ReferalBonus/Accrued'
            element={

              <ReferalBonusAccrued />

            }
          />
          <Route
            path='/reports/buy-save/ReferalBonus/Due'
            element={

              <ReferalBonusDue />

            }
          />
          <Route
            path='/reports/buy-save/ReferalBonus/Forfieted'
            element={

              <ReferalBonusForfieted />

            }
          />
          {/*Referred/ joining Bonus Report =============================================*/}
          <Route
            path='/reports/buy-save/ReferedBonus/Accrued'
            element={

              <ReferedBonusAccrued />

            }
          />
          <Route
            path='/reports/buy-save/ReferedBonus/Due'
            element={

              <ReferedBonusDue />

            }
          />
          <Route
            path='/reports/buy-save/ReferedBonus/Forfieted'
            element={

              <ReferedBonusForfieted />

            }
          />
          {/*Referral  & Referred Data Summary  Report =============================================*/}
          <Route
            path='/reports/buy-save/Referal-Refered-Summary/category'
            element={

              <ReferSummaryCategory />

            }
          />
          <Route
            path='/reports/buy-save/Referal-Refered-Summary/user'
            element={

              <ReferSummaryUser />

            }
          />

          {/*Sell your old gold =============================================* /}

          {/*User Data Report =============================================*/}
          <Route
            path='/reports/sell-old-gold/userdata/customerquery'
            element={

              <SellCustomerQuery />

            }
          />
          <Route
            path='/reports/sell-old-gold/userdata/detailed'
            element={

              <SellDetailed />

            }
          />
          {/*Appointment Report =============================================*/}

          {/*In -Store Appointments Report =============================================*/}
          <Route
            path='/reports/sell-old-gold/appointment/in-store/due'
            element={

              <SellInStoreDue />

            }
          />
          <Route
            path='/reports/sell-old-gold/appointment/in-store/fixed'
            element={

              <SellInStoreFixed />

            }
          />
          <Route
            path='/reports/sell-old-gold/appointment/in-store/canceled'
            element={

              <SellInStoreCanceled />

            }
          />
          {/*Home Visit Appointments Report =============================================*/}

          <Route
            path='/reports/sell-old-gold/appointment/home-visit/due'
            element={

              <SellHomeVisitDue />

            }
          />
          <Route
            path='/reports/sell-old-gold/appointment/home-visit/fixed'
            element={

              <SellHomeVisitFixed />

            }
          />
          <Route
            path='/reports/sell-old-gold/appointment/home-visit/canceled'
            element={

              <SellHomeVisitCanceled />

            }
          />
          {/*Verifier Reports =============================================*/}
          {/*Customer Related Report =============================================*/}
          <Route
            path='/reports/sell-old-gold/verfier/CustomerRelated/CustomerAllotment'
            element={

              <SellVerifierCustomerAllotment />

            }
          />
          <Route
            path='/reports/sell-old-gold/verfier/CustomerRelated/OnSiteCustomer'
            element={

              <SellVerifierOnSite />

            }
          />
          <Route
            path='/reports/sell-old-gold/verfier/CustomerRelated/CustomerValuation'
            element={

              <SellVerifierCustomerValuation />

            }
          />

          {/*Payments Report =============================================*/}
          <Route
            path='/reports/sell-old-gold/verfier/CustomerRelated/PaymentReportWithMetals'
            element={

              <SellPaymentReports />

            }
          />
          <Route
            path='/reports/sell-old-gold/verfier/CustomerRelated/Completed'
            element={

              <SellPaymentCompleted />

            }
          />

          {/*Metal Report =============================================*/}
          <Route
            path='/reports/sell-old-gold/verfier/CustomerRelated/CustmerWise'
            element={

              <SellCustomerwise />

            }
          />
          <Route
            path='/reports/sell-old-gold/verfier/CustomerRelated/VerifierWise'
            element={

              <SellVerfierWise />

            }
          />

          <Route
            path='/reports/sell-old-gold/verfier/TamperProof'
            element={

              <SellTamperProof />

            }
          />
          <Route
            path='/reports/sell-old-gold/verfier/SecuirtyGuard'
            element={

              <SellSecurityGuard />

            }
          />
          {/*E Shop =============================================*/}
          <Route
            path='/reports/eshop/orderSummary'
            element={
              <OrderSummary />
            }
          />
          <Route
            path='/reports/eshop/orderPending'
            element={
              <OrderPernding />
            }
          />
          <Route
            path='/reports/eshop/orderShippingEntry'
            element={

              <OrderShippingEntry />

            }
          />
          <Route
            path='/reports/eshop/orderInTransit'
            element={

              <OrderInTransit />

            }
          />
          <Route
            path='/reports/eshop/orderTrackingEntry'
            element={

              <CustomeOrderTracking />

            }
          />
          <Route
            path='/reports/eshop/orderCompleted'
            element={

              <OrderCompleted />

            }
          />
          <Route
            path='/reports/eshop/CustomeOrderTracking'
            element={
              <CustomOrderTracking />
            }
          />

          {/*Stock =============================================*/}

          <Route
            path='/reports/stock/Summary'
            element={

              <AccumalatedGoldSummary />

            }
          />
          {/* Accumalated Gold Summary =============================================*/}
          <Route
            path='/reports/stock/AccumalatedGoldSummary/Due'
            element={

              <AccumalatedGoldSummaryDue />

            }
          />
          <Route
            path='/reports/stock/AccumalatedGoldSummary/InPlan'
            element={

              <AccumalatedGoldSummaryInPlan />

            }
          />
          <Route
            path='/reports/stock/AccumalatedGoldSummary/Summary'
            element={

              <AccumalatedGoldSummary />

            }
          />
          {/* Accumalated Bonus Summary ============================================= */}
          {/* Accumalated Bonus From Plans ============================================= */}
          <Route
            path='/reports/stock/AccumalatedBonusSummary/FromPlans/Accrued'
            element={

              <AccumalatedBonusSummaryPlansAccured />

            }
          />
          <Route
            path='/reports/stock/AccumalatedBonusSummary/FromPlans/Due'
            element={

              <AccumalatedBonusSummaryPlansDue />

            }
          />
          <Route
            path='/reports/stock/AccumalatedBonusSummary/FromPlans/Forfieted'
            element={

              <AccumalatedBonusSummaryPlansForfieted />

            }
          />
          {/* Accumalated Bonus From Referreals ============================================= */}
          <Route
            path='/reports/stock/AccumalatedBonusSummary/FromReferals/Accrued'
            element={

              <AccumalatedBonusSummaryReferalsAccrued />

            }
          />
          <Route
            path='/reports/stock/AccumalatedBonusSummary/FromReferals/Due'
            element={

              <AccumalatedBonusSummaryReferalsDue />

            }
          />
          <Route
            path='/reports/stock/AccumalatedBonusSummary/FromReferals/Forfieted'
            element={

              <AccumalatedBonusSummaryReferalsForfieted />

            }
          />

          {/*Delivery ============================================= */}
          <Route
            path='/reports/delivery/summary'
            element={

              <DeliverySummary />

            }
          />
          <Route
            path='/reports/delivery/userwise'
            element={

              <DeliveryUserwise />

            }
          />
          {/*Collector  =============================================*/}
          <Route
            path='/reports/collector/summary'
            element={

              <CollectorSummary />

            }
          />
          <Route
            path='/reports/collector/userwise'
            element={

              <CollectorUserWise />

            }
          />
 
          {/*Customer Relations  =============================================*/}

          {/*SMS  =============================================*/}

          <Route
            path='/customer-relations/sms/create'
            element={<SMSCreate />}
          />
          <Route
            path='/customer-relations/sms/send'
            element={<SMSsend />}
          />
          <Route
            path='/customer-relations/sms/report'
            element={<SMSreport />}
          />

          {/*Whatsapp  =============================================*/}
          <Route
            path='/customer-relations/whatsapp/create'
            element={
              <WhatsappCreate />
            }
          />
          <Route
            path='/customer-relations/whatsapp/send'
            element={<WhatsappSend />}
          />
          <Route
            path='/customer-relations/whatsapp/report'
            element={
              <WhatsappReport />
            }
          />

          {/*Email  ============================================= */}
          <Route
            path='/customer-relations/email/create'
            element={<EmailCreate />}
          />
          <Route
            path='/customer-relations/email/send'
            element={<EmailSend />}
          />
          <Route
            path='/customer-relations/email/report'
            element={<EmailReport />}
          />

          {/*Push =============================================*/}

          <Route
            path='/customer-relations/push/create'
            element={<PushCreate />}
          />
          <Route
            path='/customer-relations/push/send'
            element={<PushSend />}
          />
          <Route
            path='/customer-relations/push/report'
            element={<PushReport />}
          />
          {/*FAQs =======================================================*/}
          <Route
            path='/customer-relations/faq/create'
            element={<CreateFAQ />}
          />
          <Route
            path='/customer-relations/faq/all'
            element={<ViewFAQs />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App
