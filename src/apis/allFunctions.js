import Axios from 'axios'
import { BASE_URL } from '../Constants'

//For Converitng any timestamp to yyyy-mm-dd format
export const convert = (str) => {
  var mnths = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12',
    },
    date = str.split(' ')
  return [date[3], mnths[date[1]], date[2]].join('-')
}

//For Getting Todays Date
export const todaysDate = () => {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()

  today = yyyy + '-' + mm + '-' + dd
  return today
}

//For Gettings all Users Data by ID

export const getUserById = async (id) => {
  Axios.get(`${BASE_URL}/api/user/${id}`)
}

//For Getting user Activity by ID

export const getUserActivity = async (id) => {
  //Get User Subscriptions Today by ID
  //Get User Instant Today by ID
  //Get SellOld Gold By ID
  //Get User Order Palced by ID
  //var subscriptionDatabyUser = getUserSubscriptionToday(id)
  //var UnserInstantToday = getUserInstantToday(id)
  //var UserSellOldGold = getUserSellOldGold(id)
  //var UserOrderPlaced = getUserOrdersPlaced(id)
}

export const getCalculation = (calculationId) =>
  Axios.get(`${BASE_URL}/api/calculation/${calculationId}`)

export const getPlanByID = (PlanID) =>
  Axios.get(`${BASE_URL}/api/plan/${PlanID}`)

export const getLatestBuyPrice = () =>
  Axios.get(`${BASE_URL}/api/buy-sell-price/letest`)

export const sortVideos = (lang, cat) => {
  Axios.post(`${BASE_URL}/api/video/sort`, {
    language: `${lang}`,
    category: `${cat}`,
  })
}

export const getUserByID = (userID) => {
  Axios.get(`${BASE_URL}/api/user//${userID}`)
}

export const getInstallmentByID = (InstallmentID) => {
  Axios.get(`${BASE_URL}/api/installment/${InstallmentID}`)
}

export const changeInstallment = (InstallmentID, status) => {
  Axios.put(`${BASE_URL}/api/installment/update/status/${InstallmentID}`, {
    status: `${status}`,
  })
}

export const createOnlineInstallment = (amount, gold, userID) => {
  Axios.post(`${BASE_URL}/api/installment/create/${userID}`, {
    status: 'Saved',
    amount: `${amount}`,
    gold: `${gold}`,
    mode: 'online',
  })
}

export const createCODInstallment = (amount, gold, userID, addressID) => {
  Axios.post(`${BASE_URL}/api/installment/create/${userID}`, {
    status: 'Plan Initiated',
    amount: `${amount}`,
    gold: `${gold}`,
    mode: 'COD',
    address: `${addressID}`,
  })
}

export const getSingleSubscription = (subscriptionID) => {
  Axios.get(`${BASE_URL}/api/subscription/${subscriptionID}`)
}
export const getBalanceBySubscriptionIdUserId = (subscriptionId, userId) =>
  Axios.get(
    `${BASE_URL}/api/subscription/balance/individual/${userId}/${subscriptionId}`
  )
export const getSubscriptionsByUserID = (userID) => {
  Axios.get(`${BASE_URL}/api/subscription/user/${userID}`)
}

export const ChangeSubscriptionStatus = (status, subscriptionID) => {
  Axios.post(`${BASE_URL}/api/subscription/changeStatus`, {
    subscription_id: `${subscriptionID}`,
    subscription_status: `${status}`,
  })
}

export const getPortfolioBalanceByUserID = (userID) => {
  Axios.get(`${BASE_URL}/api/subscription/balance/user/${userID}`)
}

export const AddInstallmentToSubscription = (subscriptionID, InstallmentID) => {
  Axios.post(
    `${BASE_URL}/api/subscription/installments/add/${subscriptionID}`,
    {
      installmentId: `${InstallmentID}`,
    }
  )
}

export const UpdateSkips = (subscriptionID, userID) => {
  Axios.post(`${BASE_URL}/api/subscription/skip/${subscriptionID}/${userID}`)
}

export const OrderByUserID = (userID) => {
  Axios.get(`${BASE_URL}/api/order/user/${userID}`)
}

export const OrderByID = (orderID) => {
  Axios.get(`${BASE_URL}/api/order/${orderID}`)
}

export const ChangeOrderStatus = (orderID, status) => {
  Axios.post(`${BASE_URL}/api/order/status/${orderID}`, {
    status: `${status}`,
  })
}

export const GetBankByID = (userID) => {
  Axios.get(`${BASE_URL}/api/bank/${userID}`)
}
export const CreateCODTransanction = (userID, amount, isInstant) => {
  Axios.post(`${BASE_URL}/api/transaction/create/${userID}`, {
    status: 'Order Placed',
    amount: `${amount}`,
    mode: 'COD',
    instantGoldApplied: `${isInstant}`,
  })
}

export const CreateOnlineTransanction = (userID, amount, isInstant) => {
  Axios.post(`${BASE_URL}/api/transaction/create/${userID}`, {
    status: 'Order Placed',
    amount: `${amount}`,
    mode: 'online',
    instantGoldApplied: `${isInstant}`,
  })
}

export const GetTransactionByID = (transactionId) => {
  Axios.get(`${BASE_URL}/api/transaction/${transactionId}`)
}

export const ChangeTransactionStatus = (transactionId, status) => {
  Axios.post(
    `${BASE_URL}/api/transaction/changeAppoinmentStatus/${transactionId}`,
    {
      status: `${status}`,
    }
  )
}

export const GetAppointmentsByUserID = (userID) => {
  Axios.get(`${BASE_URL}/api/appointment/user/${userID}`)
}

export const GetAppointmentsID = (appointmentID) => {
  Axios.get(`${BASE_URL}/api/appointment/${appointmentID}`)
}

export const AppointmentVerifier = (appointmentID, verfierID, Date, Time) => {
  Axios.put(`${BASE_URL}/api/appointment/status/${appointmentID}`, {
    verifier: `${verfierID}`,
    status: 'Verifier Assigned',
    appointmentDate: `${Date}`,
    appointmentTime: `${Time}`,
  })
}

export const GetUserCart = (userID) => {
  Axios.get(`${BASE_URL}/api/cart/${userID}`)
}

export const AddToCart = (userId, ItemDetail) => {
  Axios.post(`${BASE_URL}/api/cart/add/${userId}`, {
    itemDetail: `${ItemDetail}`,
  })
}

export const UpdateFAQ = (faqID, answer) => {
  Axios.put(`${BASE_URL}/api/faq/${faqID}`, {
    answer: `${answer}`,
  })
}

export const AddFAQ = (question, answer) => {
  Axios.post(`${BASE_URL}/api/faq/`, {
    data: [
      {
        question: `${question}`,
        answer: `${answer}`,
      },
    ],
  })
}

export const GetAllFAQs = () => {
  Axios.get(`${BASE_URL}/api/faq/`)
}

export const GetReferalsByUserID = (userID) => {
  Axios.get(`${BASE_URL}/api/referral?refereedBy=${userID}`)
}

export const GetWalletBalanceByUserID = (userID) => {
  Axios.get(`${BASE_URL}/api/wallet/balance/${userID}`)
}

export const SellWallet = (gold, amount, userID) => {
  Axios.put(`${BASE_URL}/api/wallet/remove/${userID}`, {
    gold: `${gold}`,
    transactions: {
      amount: `${amount}`,
      status: 'Debited',
    },
  })
}

export const SellSubscriptionByUser = (
  subscriptionID,
  userID,
  buySellID,
  gold
) => {
  Axios.post(`${BASE_URL}/api/sell-subscription/${subscriptionID}/${userID}`, {
    buySellId: `${buySellID}`,
    goldsell: `${gold}`,
  })
}

export const SellSubscriptionRequestsByUserID = (userID) => {
  Axios.get(`${BASE_URL}/api/sell-subscription/${userID}`)
}

export const sendPushNotification = (deviceToken, title, content) => {
  Axios.post(`${BASE_URL}/api/notification`, {
    title: `${title}`,
    content: `${content}`,
    registrationToken: `${deviceToken}`,
  })
}

export const getAllAppointments = () =>
  Axios.get(`${BASE_URL}/api/appointment/`)

export const getAllInstallments = () =>
  Axios.get(`${BASE_URL}/api/installment/`)

export const getusernameByID = async (userid) => {
  const getdata = Axios.get(`${BASE_URL}/api/user/${userid}`).then(function (
    userdata
  ) {
    console.log(userdata.data.fname)
  })
}

export const calculateCharges = (transaction, type) => {
  console.log(transaction)
  let itemCharge = 0
  transaction.cart.items.forEach(item => {
    item.itemDetail.charges.forEach(charge => {
      if (charge.Type === type) {
        itemCharge += (charge.Percentage * 0.01)
      }
    })
  })

  let finalItemCharge = itemCharge, totalCharge = 0
  transaction.cart.items.forEach(item => {
    totalCharge += finalItemCharge * item.itemDetail.grossweight * item.quantity
  })

  return totalCharge * transaction.buySell.sell
}

export const getCalculations = async (type) => {
  const { data: response } = await Axios.get(`${BASE_URL}/api/calculation`)
  let calculations = response.data
  let percentage = 0

  calculations.forEach(calculation => {
    if (calculation.Type === `${type}`) {
      percentage = calculation.Percentage * 0.01
    }
  })

  return percentage
}