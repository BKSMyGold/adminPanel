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

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [permissions, setPermissions] = useState(new Set())
  let navigate = useNavigate()

  useEffect(() => {
    if (
      localStorage.getItem('loggedInUser') &&
      Object.keys(loggedInUser).length === 0
    ) {
      let localStorageUser = JSON.parse(localStorage.getItem('loggedInUser'))
      let permissionSet = new Set()
      for (let permission of localStorageUser.role.permissions) {
        permissionSet.add(permission.permission_name)
      }
      setPermissions(permissionSet)
      setLoggedInUser(localStorageUser)
    } else {
      navigate('/login')
    }
  }, [])

  return (
    <>
      <div className='App'>
        <Routes>
          {/*Master*/}
          {/*Products Data*/}
          <Route path='/' element={<Home />} exact />
          <Route path='/login' element={<LoginScreen />} />

          <Route
            path='/master/product-data/metal-groups'
            element={
              permissions.has('view_metal_groups') ? <MetalGroups /> : null
            }
          />
          <Route
            path='/master/product-data/metal-groups/add'
            element={
              permissions.has('add_metal_groups') ? <MetalGroupForm /> : null
            }
          />
          <Route
            path='/master/product-data/offers/add'
            element={permissions.has('add_offer') ? <OffersForm /> : null}
          />
          <Route
            path='/master/buysell/add'
            element={
              permissions.has('add_buy_price') ? <CurrentRateForm /> : null
            }
          />
          <Route
            path='/master/plans/standard-plans/add'
            element={permissions.has('add_plan') ? <StandardPlanForm /> : null}
          />
          <Route
            path='/master/taxes/add'
            element={permissions.has('add_tax') ? <CalculationsForm /> : null}
          />
          <Route
            path='/master/plans/cycle-periods/add'
            element={
              permissions.has('add_cycle_periods') ? <CyclePeriodsForm /> : null
            }
          />
          <Route
            path='/master/settings/sliders/add'
            element={permissions.has('add_slider') ? <SlidersForm /> : null}
          />
          <Route
            path='/master/product-data/diamonds'
            element={permissions.has('view_diamond_gems') ? <Diamonds /> : null}
          />
          <Route
            path='/master/product-data/categories'
            element={permissions.has('view_categories') ? <Categories /> : null}
          />
          <Route
            path='/master/product-data/products'
            element={permissions.has('view_products') ? <Products /> : null}
          />
          <Route
            path='/master/product-data/varieties'
            element={permissions.has('view_varities') ? <Varieties /> : null}
          />
          <Route
            path='/master/product-data/items'
            element={permissions.has('view_items') ? <Items /> : null}
          />
          <Route
            path='/master/product-data/offers'
            element={permissions.has('view_offer') ? <Offers /> : null}
          />

          {/*Security*/}
          <Route
            path='master/product-data/diamonds/add'
            element={
              permissions.has('add_diamond_gems') ? <DiamondsForm /> : null
            }
          />

          <Route
            path='master/product-data/collections'
            element={
              permissions.has('view_collections') ? <Collections /> : null
            }
            exact
          />
          <Route
            path='master/product-data/products/add'
            element={permissions.has('add_product') ? <ProductForm /> : null}
          />
          <Route
            path='master/product-data/items/add'
            element={permissions.has('add_items') ? <ItemForm /> : null}
          />
          <Route
            path='master/product-data/collections/add'
            element={
              permissions.has('add_collections') ? <CollectionForm /> : null
            }
          />

          <Route
            path='/master/security/masterUserRights'
            element={
              permissions.has('view_system_users') ? <MasterUserRights /> : null
            }
          />
          <Route
            path='/master/product-data/categories/add'
            element={
              permissions.has('add_categories') ? <CategoryForm /> : null
            }
          />
          <Route
            path='/master/product-data/varieties/add'
            element={permissions.has('add_varities') ? <VarietyForm /> : null}
          />

          <Route
            path='/master/security/permissions'
            element={
              permissions.has('view_permissions') ? <Permissions /> : null
            }
          />
          <Route
            path='/master/security/masterUserRights/add'
            element={permissions.has('manage_roles') ? <RoleForm /> : null}
          />

          <Route
            path='/master/security/userpasswords'
            element={
              permissions.has('view_system_users') ? <UserPasswords /> : null
            }
          />
          {/*Settings*/}
          <Route
            path='/master/settings/sliders'
            element={permissions.has('view_sliders') ? <Sliders /> : null}
          />
          <Route
            path='/master/settings/how-to-videos'
            element={permissions.has('view_videos') ? <HowTo /> : null}
          />
          <Route
            path='/master/settings/testimonials'
            element={permissions.has('view_videos') ? <Testimonials /> : null}
          />
          {/*Buy Sell*/}
          <Route
            path='/master/buysell'
            element={permissions.has('view_buy_price') ? <BuySell /> : null}
          />
          {/*Reference Data*/}
          <Route
            path='/master/reference/reference'
            element={
              permissions.has('view_ref_commission') ? <Reference /> : null
            }
          />
          <Route
            path='/master/reference/gbplevels'
            element={permissions.has('view_gbp') ? <GBPLevels /> : null}
          />
          {/*Plans*/}
          <Route
            path='/master/plans/cycle-periods/'
            element={
              permissions.has('view_cycle_periods') ? <CyclePeriods /> : null
            }
          />
          <Route
            path='/master/plans/standard-plans/'
            element={permissions.has('view_plans') ? <StandardPlans /> : null}
          />
          <Route
            path='/master/security/permissions/add'
            element={
              permissions.has('add_permissions') ? <PermissionsForm /> : null
            }
          />

          {/*Duties Taxes*/}
          <Route
            path='/master/taxes'
            element={permissions.has('view_tax') ? <TaxesDuties /> : null}
          />
          {/*Sales Returns Reasons*/}
          <Route path='/master/sellReasons' element={<SellReasons />} />

          {/*Trasanctions*/}
          {/*Financials*/}

          <Route
            path='/transaction/financials/InStoreReturns'
            element={
              permissions.has('view_In_store_returns') ? (
                <InStoreReturns />
              ) : null
            }
          />
          <Route
            path='/transaction/financials/InStoreReturns/add'
            element={
              permissions.has('edit_In_store_returns') ? (
                <InStoreReturnForm />
              ) : null
            }
          />
          <Route
            path='/transaction/financials/InStoreRedeem'
            element={
              permissions.has('view_In_store_redeems') ? (
                <InStoreRedeem />
              ) : null
            }
          />
          <Route
            path='/transaction/financials/InStoreCashCollection'
            element={
              permissions.has('view_In_store_cash_collections') ? (
                <InStoreCashCollection />
              ) : null
            }
          />
          <Route
            path='/transaction/financials/InStoreTokenRefund'
            element={
              permissions.has('view_In_store_token_refund') ? (
                <InStoreTokenRefund />
              ) : null
            }
          />
          <Route
            path='/transaction/financials/SubmissionOfGoldEntry'
            element={
              permissions.has('view_submission_gold_entry') ? (
                <SubmissionOfGoldEntry />
              ) : null
            }
          />
          <Route
            path='/transaction/financials/BankPaymentEntries'
            element={
              permissions.has('view_bank_payment_entry') ? (
                <BankPaymentEntries />
              ) : null
            }
          />
          <Route
            path='/transaction/financials/GoldAdjustments'
            element={
              permissions.has('view_bank_adjustment_entry') ? (
                <GoldAdjustments />
              ) : null
            }
          />

          {/*Orders*/}

          <Route
            path='/transaction/order/Shipping'
            element={
              permissions.has('view_order_shipping_entry') ? <Shipping /> : null
            }
          />
          <Route
            path='/transaction/order/Tracking'
            element={
              permissions.has('view_order_tracking_entry') ? <Tracking /> : null
            }
          />

          {/* Data Entry */}
          <Route
            path='/transaction/data-entry/reference-data'
            element={
              permissions.has('add_reference_data_entry') ? (
                <ReferenceData />
              ) : null
            }
          />

          <Route
            path='/transaction/data-entry/gbp-entry'
            element={permissions.has('add_gbp_entry') ? <GBPEntry /> : null}
            exact={true}
          />
          {/* <Route
            path="/transaction/data-entry/gbp-entry/add"
            element={permissions.has('manage_roles') ?<GbpEntryForm /> : null}
          /> */}
          <Route
            path='/transaction/data-entry/enter-master-details'
            element={
              permissions.has('view_system_users') ? (
                <EnterMasterDetails />
              ) : null
            }
            exact={true}
          />
          <Route
            path='/transaction/data-entry/enter-master-details/add'
            element={
              permissions.has('add_system_user') ? <AddMasterDetails /> : null
            }
          />

          {/* Status Updates */}
          <Route
            path='/transaction/status-updates/collector'
            element={
              permissions.has('allocation_collectors') ? <Collector /> : null
            }
          />
          <Route
            path='/transaction/status-updates/delivery'
            element={
              permissions.has('allocation_deliver_boy') ? <Delivery /> : null
            }
          />
          <Route
            path='/transaction/status-updates/security'
            element={
              permissions.has('allocation_security_guards') ? (
                <Security />
              ) : null
            }
          />
          <Route
            path='/transaction/status-updates/appointmenttime'
            element={
              permissions.has('allot_appointment_time') ? (
                <AppointmentTime />
              ) : null
            }
          />
          <Route
            path='/transaction/status-updates/updateappoinments'
            element={
              permissions.has('view_appointment_old_gold') ? (
                <UpdateAppointments />
              ) : null
            }
          />

          {/*Products*/}

          <Route
            path='/transaction/products/ItemDetails'
            element={
              permissions.has('view_item_details') ? <ItemDetails /> : null
            }
          />
          <Route
            path='/transaction/products/OfferDetails'
            element={permissions.has('view_offer') ? <OfferDetails /> : null}
          />

          {/*Reports*/}

          {/*Daily*/}
          <Route
            path='/reports/daily-reports/DailyActivity'
            element={
              permissions.has('daily_activity_report') ? (
                <DailyActivity />
              ) : null
            }
          />
          <Route
            path='/reports/daily-reports/DailyStatement'
            element={
              permissions.has('daily_statement') ? <DailyStatement /> : null
            }
          />
          <Route
            path='/reports/daily-reports/NewuserData'
            element={
              permissions.has('new_user_data_report') ? <NewuserData /> : null
            }
          />
          <Route
            path='/reports/daily-reports/CompletedPayment'
            element={
              permissions.has('completed_payment') ? <CompletedPayment /> : null
            }
          />
          <Route
            path='/reports/daily-reports/PendingPayment'
            element={
              permissions.has('pending_payment') ? <PendingPayment /> : null
            }
          />
          {/*Accounts*/}

          <Route
            path='/reports/accounts-reports/Metal-Currency-Userbased'
            element={
              permissions.has('userbased_metal_currency_ledger') ? (
                <MetalCurrencyUserbased />
              ) : null
            }
          />
          <Route
            path='/reports/accounts-reports/Metal-Currency-Systembase'
            element={
              permissions.has('systembased_metal_currency_ledger') ? (
                <MetalCurrencySystembase />
              ) : null
            }
          />
          <Route
            path='/reports/accounts-reports/Metal-Currency-Summary'
            element={
              permissions.has('metal_currency_ledger_summary') ? (
                <MetalCurrencySummary />
              ) : null
            }
          />
          <Route
            path='/reports/accounts-reports/Ledger'
            element={permissions.has('taxes_ledger') ? <Ledger /> : null}
          />
          {/*Buy and Save*/}

          {/* All User Data Report ( filter to one or selected users)*/}
          <Route
            path='/reports/buy-save/userdata/plan'
            element={
              permissions.has('plan_wise_user_data_report') ? (
                <UserDataPlan />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/userdata/cycle'
            element={
              permissions.has('cycle_wise_user_data_report') ? (
                <UserDataCycle />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/userdata/full'
            element={
              permissions.has('full_user_data_report') ? <UserDataFull /> : null
            }
          />
          {/*Fixed Value plan Report */}
          <Route
            path='/reports/buy-save/fixedPlanValue/cycle'
            element={
              permissions.has('flexi_value_cycle_wise_report') ? (
                <FixedPlanValueCycle />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/fixedPlanValue/maturity'
            element={
              permissions.has('flexi_value_maturity_wise_report') ? (
                <FixedPlanValueMaturity />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/fixedPlanValue/full'
            element={
              permissions.has('flexi_value_user_wise_report') ? (
                <FixedPlanValueFull />
              ) : null
            }
          />
          {/*Fixed Weight plan Report*/}
          <Route
            path='/reports/buy-save/fixedPlanWeight/cycle'
            element={
              permissions.has('flexi_weight_cycle_wise_report') ? (
                <FixedPlanWeightCycle />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/fixedPlanWeight/maturity'
            element={
              permissions.has('flexi_weight_maturity_wise_report') ? (
                <FixedPlanWeightMaturity />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/fixedPlanWeight/full'
            element={
              permissions.has('flexi_weight_user_wise_report') ? (
                <FixedPlanWeightFull />
              ) : null
            }
          />
          {/*Standard Plan Report*/}
          <Route
            path='/reports/buy-save/StandardPlan/cycle'
            element={
              permissions.has('stadard_pan_cycle_wise_report') ? (
                <StandardPlanCycle />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/StandardPlan/maturity'
            element={
              permissions.has('stadard_pan_maturity_wise_report') ? (
                <StandardPlanMaturity />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/StandardPlan/full'
            element={
              permissions.has('stadard_pan_user_wise_report') ? (
                <StandardPlanFull />
              ) : null
            }
          />
          {/*Plans Converted to Normal Investment Report*/}
          <Route
            path='/reports/buy-save/converted-normal/user'
            element={
              permissions.has('forfieted_user_wise_report') ? (
                <ConvertedNormalUser />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/converted-normal/plan'
            element={
              permissions.has('forfieted_plan_wise_report') ? (
                <ConvertedNormalPlan />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/converted-normal/full'
            element={
              permissions.has('forfieted_full_summary_report') ? (
                <ConvertedNormalFull />
              ) : null
            }
          />
          {/*Skip Now Report */}
          <Route
            path='/reports/buy-save/skipnow/user'
            element={
              permissions.has('skip_now_user_wise_report') ? (
                <SkipNowUser />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/skipnow/plan'
            element={
              permissions.has('skip_now_plan_wise_report') ? (
                <SkipNowPlan />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/skipnow/full'
            element={
              permissions.has('skip_now_full_summary_report') ? (
                <SkipNowFull />
              ) : null
            }
          />
          {/*Redeem Report*/}
          <Route
            path='/reports/buy-save/redeem/user'
            element={
              permissions.has('redeem_userwise_report') ? <RedeemUser /> : null
            }
          />
          <Route
            path='/reports/buy-save/redeem/completed'
            element={
              permissions.has('redeem_completed_report') ? (
                <RedeemCompleted />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/redeem/pending'
            element={
              permissions.has('redeem_pending_report') ? (
                <RedeemPending />
              ) : null
            }
          />
          {/*Sell Report*/}
          <Route
            path='/reports/buy-save/sell/user'
            element={
              permissions.has('sell_plan_user_wise_report') ? (
                <SellUser />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/sell/completed'
            element={
              permissions.has('sell_plan_completed_report') ? (
                <SellCompleted />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/sell/pending'
            element={
              permissions.has('sell_plan_pending_report') ? (
                <SellPending />
              ) : null
            }
          />
          {/*Plan Bonus Report*/}
          <Route
            path='/reports/buy-save/planBonus/Accrued'
            element={
              permissions.has('accrued_plan_bonus_report') ? (
                <PlanBonusAccrued />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/planBonus/Due'
            element={
              permissions.has('due_plan_bonus_report') ? <PlanBonusDue /> : null
            }
          />
          <Route
            path='/reports/buy-save/planBonus/Forfieted'
            element={
              permissions.has('forfieted_plan_bonus_report') ? (
                <PlanBonusForfieted />
              ) : null
            }
          />
          {/*User Bonus summary*/}
          <Route
            path='/reports/buy-save/userBonus/fromReferals'
            element={
              permissions.has('user_bonus_earned_from_referals_report') ? (
                <UserBonusFromReferals />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/userBonus/fromInvestments'
            element={
              permissions.has('user_bonus_earned_from_investments_report') ? (
                <UserBonusFromInvestments />
              ) : null
            }
          />
          {/*Referral Bonus Report*/}
          <Route
            path='/reports/buy-save/ReferalBonus/Accrued'
            element={
              permissions.has('accrued_referal_bonus_report') ? (
                <ReferalBonusAccrued />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/ReferalBonus/Due'
            element={
              permissions.has('due_referal_bonus_report') ? (
                <ReferalBonusDue />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/ReferalBonus/Forfieted'
            element={
              permissions.has('forfieted_referal_bonus_report') ? (
                <ReferalBonusForfieted />
              ) : null
            }
          />
          {/*Referred/ joining Bonus Report*/}
          <Route
            path='/reports/buy-save/ReferedBonus/Accrued'
            element={
              permissions.has('Accrued_joining_bonus_report') ? (
                <ReferedBonusAccrued />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/ReferedBonus/Due'
            element={
              permissions.has('due_joining_bonus_report') ? (
                <ReferedBonusDue />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/ReferedBonus/Forfieted'
            element={
              permissions.has('forfieted_joining_bonus_report') ? (
                <ReferedBonusForfieted />
              ) : null
            }
          />
          {/*Referral  & Referred Data Summary  Report*/}
          <Route
            path='/reports/buy-save/Referal-Refered-Summary/category'
            element={
              permissions.has(
                'category_wise_referal_and_refered_data_report'
              ) ? (
                <ReferSummaryCategory />
              ) : null
            }
          />
          <Route
            path='/reports/buy-save/Referal-Refered-Summary/user'
            element={
              permissions.has('user_wise_referal_and_refered_data_report') ? (
                <ReferSummaryUser />
              ) : null
            }
          />

          {/*Sell your old gold*/}

          {/*User Data Report*/}
          <Route
            path='/reports/sell-old-gold/userdata/customerquery'
            element={
              permissions.has('customer_query_generated_report_user_data') ? (
                <SellCustomerQuery />
              ) : null
            }
          />
          <Route
            path='/reports/sell-old-gold/userdata/detailed'
            element={
              permissions.has(
                'customer_query_generated_report_user_data_detailed'
              ) ? (
                <SellDetailed />
              ) : null
            }
          />
          {/*Appointment Report*/}

          {/*In -Store Appointments Report*/}
          <Route
            path='/reports/sell-old-gold/appointment/in-store/due'
            element={
              permissions.has('due_in_store_appointments_report') ? (
                <SellInStoreDue />
              ) : null
            }
          />
          <Route
            path='/reports/sell-old-gold/appointment/in-store/fixed'
            element={
              permissions.has('fixed_in_store_appointments_report') ? (
                <SellInStoreFixed />
              ) : null
            }
          />
          <Route
            path='/reports/sell-old-gold/appointment/in-store/canceled'
            element={
              permissions.has('canceled_in_store_appointments_report') ? (
                <SellInStoreCanceled />
              ) : null
            }
          />
          {/*Home Visit Appointments Report*/}

          <Route
            path='/reports/sell-old-gold/appointment/home-visit/due'
            element={
              permissions.has('due_home_appointments_report') ? (
                <SellHomeVisitDue />
              ) : null
            }
          />
          <Route
            path='/reports/sell-old-gold/appointment/home-visit/fixed'
            element={
              permissions.has('fixed_home_appointments_report') ? (
                <SellHomeVisitFixed />
              ) : null
            }
          />
          <Route
            path='/reports/sell-old-gold/appointment/home-visit/canceled'
            element={
              permissions.has('canceled_home_appointments_report') ? (
                <SellHomeVisitCanceled />
              ) : null
            }
          />
          {/*Verifier Reports*/}
          {/*Customer Related Report*/}
          <Route
            path='/reports/sell-old-gold/verfier/CustomerRelated/CustomerAllotment'
            element={
              permissions.has('verifer_customer_allotment_report') ? (
                <SellVerifierCustomerAllotment />
              ) : null
            }
          />
          <Route
            path='/reports/sell-old-gold/verfier/CustomerRelated/OnSiteCustomer'
            element={
              permissions.has('verifer_on_site_customer_report') ? (
                <SellVerifierOnSite />
              ) : null
            }
          />
          <Route
            path='/reports/sell-old-gold/verfier/CustomerRelated/CustomerValuation'
            element={
              permissions.has('verifer_customer_valuation_report') ? (
                <SellVerifierCustomerValuation />
              ) : null
            }
          />

          {/*Payments Report*/}
          <Route
            path='/reports/sell-old-gold/verfier/CustomerRelated/PaymentReportWithMetals'
            element={
              permissions.has('pending_payment_reports_with_metal_details') ? (
                <SellPaymentReports />
              ) : null
            }
          />
          <Route
            path='/reports/sell-old-gold/verfier/CustomerRelated/Completed'
            element={
              permissions.has(
                'completed_payment_reports_with_metal_details'
              ) ? (
                <SellPaymentCompleted />
              ) : null
            }
          />

          {/*Metal Report */}
          <Route
            path='/reports/sell-old-gold/verfier/CustomerRelated/CustmerWise'
            element={
              permissions.has('customer_with_metal_details') ? (
                <SellCustomerwise />
              ) : null
            }
          />
          <Route
            path='/reports/sell-old-gold/verfier/CustomerRelated/VerifierWise'
            element={
              permissions.has('verifier_wise_with_metal_details') ? (
                <SellVerfierWise />
              ) : null
            }
          />

          <Route
            path='/reports/sell-old-gold/verfier/TamperProof'
            element={
              permissions.has('tamper_proof_security_envelope_reports') ? (
                <SellTamperProof />
              ) : null
            }
          />
          <Route
            path='/reports/sell-old-gold/verfier/SecuirtyGuard'
            element={
              permissions.has('security_guard_reports') ? (
                <SellSecurityGuard />
              ) : null
            }
          />
          {/*E Shop*/}
          <Route
            path='/reports/eshop/orderSummary'
            element={
              permissions.has('order_summary_report') ? <OrderSummary /> : null
            }
          />
          <Route
            path='/reports/eshop/orderPending'
            element={
              permissions.has('order_pending_report') ? <OrderPernding /> : null
            }
          />
          <Route
            path='/reports/eshop/orderShippingEntry'
            element={
              permissions.has('order_shipping_report') ? (
                <OrderShippingEntry />
              ) : null
            }
          />
          <Route
            path='/reports/eshop/orderInTransit'
            element={
              permissions.has('order_in_transit_report') ? (
                <OrderInTransit />
              ) : null
            }
          />
          <Route
            path='/reports/eshop/orderTrackingEntry'
            element={
              permissions.has('order_tracking_report') ? (
                <CustomeOrderTracking />
              ) : null
            }
          />
          <Route
            path='/reports/eshop/orderCompleted'
            element={
              permissions.has('order_completed_report') ? (
                <OrderCompleted />
              ) : null
            }
          />
          <Route
            path='/reports/eshop/CustomeOrderTracking'
            element={
              permissions.has('manage_roles') ? <CustomOrderTracking /> : null
            }
          />

          {/*Stock*/}

          <Route
            path='/reports/stock/Summary'
            element={
              permissions.has('sales_summary') ? (
                <AccumalatedGoldSummary />
              ) : null
            }
          />
          {/* Accumalated Gold Summary */}
          <Route
            path='/reports/stock/AccumalatedGoldSummary/Due'
            element={
              permissions.has('due_accumulated_gold_summary') ? (
                <AccumalatedGoldSummaryDue />
              ) : null
            }
          />
          <Route
            path='/reports/stock/AccumalatedGoldSummary/InPlan'
            element={
              permissions.has('in_plan_accumulated_gold_summary') ? (
                <AccumalatedGoldSummaryInPlan />
              ) : null
            }
          />
          <Route
            path='/reports/stock/AccumalatedGoldSummary/Summary'
            element={
              permissions.has('investments_accumulated_gold_summary') ? (
                <AccumalatedGoldSummary />
              ) : null
            }
          />
          {/* Accumalated Bonus Summary */}
          {/* Accumalated Bonus From Plans */}
          <Route
            path='/reports/stock/AccumalatedBonusSummary/FromPlans/Accrued'
            element={
              permissions.has('accrued_accumulated_bonus_from_plans') ? (
                <AccumalatedBonusSummaryPlansAccured />
              ) : null
            }
          />
          <Route
            path='/reports/stock/AccumalatedBonusSummary/FromPlans/Due'
            element={
              permissions.has('due_accumulated_bonus_from_plans') ? (
                <AccumalatedBonusSummaryPlansDue />
              ) : null
            }
          />
          <Route
            path='/reports/stock/AccumalatedBonusSummary/FromPlans/Forfieted'
            element={
              permissions.has('forfieted_accumulated_bonus_from_plans') ? (
                <AccumalatedBonusSummaryPlansForfieted />
              ) : null
            }
          />
          {/* Accumalated Bonus From Referreals */}
          <Route
            path='/reports/stock/AccumalatedBonusSummary/FromReferals/Accrued'
            element={
              permissions.has('accrued_accumulated_bonus_from_referals') ? (
                <AccumalatedBonusSummaryReferalsAccrued />
              ) : null
            }
          />
          <Route
            path='/reports/stock/AccumalatedBonusSummary/FromReferals/Due'
            element={
              permissions.has('due_accumulated_bonus_from_referals') ? (
                <AccumalatedBonusSummaryReferalsDue />
              ) : null
            }
          />
          <Route
            path='/reports/stock/AccumalatedBonusSummary/FromReferals/Forfieted'
            element={
              permissions.has('forfieted_accumulated_bonus_from_referals') ? (
                <AccumalatedBonusSummaryReferalsForfieted />
              ) : null
            }
          />

          {/*Delivery*/}
          <Route
            path='/reports/delivery/summary'
            element={
              permissions.has('delivery_boy_summary') ? (
                <DeliverySummary />
              ) : null
            }
          />
          <Route
            path='/reports/delivery/userwise'
            element={
              permissions.has('delivery_boy_userwise_detailed_summary') ? (
                <DeliveryUserwise />
              ) : null
            }
          />
          {/*Collector*/}
          <Route
            path='/reports/collector/summary'
            element={
              permissions.has('collector_summary_report') ? (
                <CollectorSummary />
              ) : null
            }
          />
          <Route
            path='/reports/collector/userwise'
            element={
              permissions.has('collector_userwise_detailed_report') ? (
                <CollectorUserWise />
              ) : null
            }
          />

          {/*Customer Relations*/}

          {/*SMS*/}

          <Route
            path='/customer-relations/sms/create'
            element={permissions.has('manage_roles') ? <SMSCreate /> : null}
          />
          <Route
            path='/customer-relations/sms/send'
            element={permissions.has('manage_roles') ? <SMSsend /> : null}
          />
          <Route
            path='/customer-relations/sms/report'
            element={permissions.has('manage_roles') ? <SMSreport /> : null}
          />

          {/*Whatsapp*/}
          <Route
            path='/customer-relations/whatsapp/create'
            element={
              permissions.has('manage_roles') ? <WhatsappCreate /> : null
            }
          />
          <Route
            path='/customer-relations/whatsapp/send'
            element={permissions.has('manage_roles') ? <WhatsappSend /> : null}
          />
          <Route
            path='/customer-relations/whatsapp/report'
            element={
              permissions.has('manage_roles') ? <WhatsappReport /> : null
            }
          />

          {/*Email*/}
          <Route
            path='/customer-relations/email/create'
            element={permissions.has('manage_roles') ? <EmailCreate /> : null}
          />
          <Route
            path='/customer-relations/email/send'
            element={permissions.has('manage_roles') ? <EmailSend /> : null}
          />
          <Route
            path='/customer-relations/email/report'
            element={permissions.has('manage_roles') ? <EmailReport /> : null}
          />

          {/*Push*/}

          <Route
            path='/customer-relations/push/create'
            element={permissions.has('manage_roles') ? <PushCreate /> : null}
          />
          <Route
            path='/customer-relations/push/send'
            element={permissions.has('manage_roles') ? <PushSend /> : null}
          />
          <Route
            path='/customer-relations/push/report'
            element={permissions.has('manage_roles') ? <PushReport /> : null}
          />
          {/*FAQs*/}
          <Route
            path='/customer-relations/faq/create'
            element={permissions.has('manage_roles') ? <CreateFAQ /> : null}
          />
          <Route
            path='/customer-relations/faq/all'
            element={permissions.has('manage_roles') ? <ViewFAQs /> : null}
          />
        </Routes>
      </div>
    </>
  )
}

export default App
