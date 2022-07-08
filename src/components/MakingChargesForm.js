import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidMetalGroup } from "../Validator";
import AddUpdateSpinner from "../AddUpdateSpinner";
import MakingCharges from "../screens/MakingCharges";
import {addMakingCharges,updateMakingCharges} from "../APIs_Hai/MakingCharges"
import {getAllMetal} from "../APIs_Hai/Metal" 
import {getItem} from "../APIs_Hai/Item"
import {getVariety} from "../APIs_Hai/Variety"
//===================================================================================
const MakingChargesForm = (props) => {
  //===================================================================================
  let location = useLocation();
  console.log(location.state);
  let navigate = useNavigate();
  //===================================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [makingCharges, setMakingCharges] = useState(
    location?.state ?? {
      supplierName : "",
        variety:"",
        item:"",
        metalId:"",
        fromWeight:0,
        toWeight:0,
        rateType:"",
        rate:0,
      
    }
  );
//===================================================================================
const [metal,setMetal] = useState([])
useEffect(()=>{
  getAllMetal().then(res => setMetal(res.data.data.data))
},[])
//===================================================================================
const [item,setItem] = useState([])
useEffect(()=>{
  getItem().then(res => setItem(res.data.data.data))
},[])
//===================================================================================
const [variety,setVariety] = useState([])
useEffect(()=>{
  getVariety().then(res => setVariety(res.data.data.data))
},[])

console.log(item)
console.log(variety)

//===================================================================================
  // const metal = [
  //   {
  //     _id: 1,
  //     name: "Gold",
  //     icon: "data:image/png;base64,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",
  //   },
  //   {
  //     _id: 1,
  //     name: "Silver",
  //     icon: "data:image/png;base64,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",
  //   },
  //   {
  //     _id: 1,
  //     name: "Platinum",
  //     icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABC1BMVEX/////sAD/wgD/lwD/2wD/rwD/wwD/0gD/lQD/1gD/9Ob/qzz/78v/yAD/3nf/kQD/3cH//O//vgD/pwD/nAD/tAD/nwD/twD/qwD/owD/+fP//vn//fT/jgD/9+b/30T/5Wv/5F//8aL/4ar/893/3KH/8rz/76n/tyH/2Jb/41T/1Ir/6MD/3jf/xmL/3Sn/6Yv/5nb/yi3/yID/1Xb/wnP/2oH/5KX/zkX/6rr/8Nr/89X/0H3/vTX/+NP/wU7/ujH/x1b/6IP/87j/5mf/347/3K3/0Wv/0pX/vGf/0FT/s1v/5MD/x33/zoz/4YL/5Zz/3Gz/1Tb/2VL/zk//u3X/sUv/oyr/3bThwmIYAAAJLklEQVR4nO2de1/TSBSGG21Kq2hNoRCaECiwUBHkJnKpgIIXCizCrot+/0+ySUibmclMMjOZIRHP848r7u/NnORMMjnnnVCpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFOwcdfUKrmLZI/cT4oPYAEVbVyb4iA3KNDtQcQxmscqxV8+xb925K5plZenGPVEVZOTuKJ17cTWfvgLDeWFSs6R6MQ1+y/FItLsNxYUS3p9D664X+sTbxWrS3BSmNTuabb7ln+Hwczb5RLS7DZOFUvavXaXmVxohQBVk4bWxpUvXbv9UThD8J75hvzOmRdwy5JgJVuo6tDdtE2jCUdwuKsNlY1qPpz0OuZngZlceaqGiIMbzJW2yhFiDoiPJgJn4NuOULUEOHaRLSSsT62LdXi4qxX5xQrjsdrUfeoV/TLoYYIl2zkbcI5OSo8RNURWu1x7O/4y1QRKI6w84m8ubwpeO3mbKiN0OskflTwK7DqCMuHH+F60WPQC0T4W+G4lne8fLaysOlzurU1P9/tdler1erqarf7eX5+a+vU/4eFhZWz5b5luYU/x0RZ8GNpjKiyiP+HjVXVRTjNuN7xmX/1trpz6xt4KEjg95FvzHW3NhfOln67q5jAcV23789Dz//TdXyKHpAW3Md0p6Hy+CN8VE8LKn/Equ2RR6jhHb9srOuotZUKiPD3R0tFuFTMVbX0LUrEXONz0UPQzKqe7lqJ6GrpkJaJeQ19/HJx2lBr+yofm+rdJiVjRbljqGws011fljgPPXJeqBEed5nFODZzZw8/eh6OG0nLRJ9dbUyjpDPaq7qJn92OSVLA+DmgOGhrrSfCtFpt0y6Jg4Yg+TgcFw2w9qQ1bZiGYd8UMH4Z3gtFWKsF4fnxGYa5XfTQOamJXr0wvJBypikJd5KS4flpulf04LngS1IkOWPMT0UPnottmasXRdgug80ri37WJWSFF6Zp8db8bL6kRhgkZ5sRXnARvxU9fA72M+aewQwviHA6uUJi4BS1l2aJdQnTkhNJ0wPeA3W+6gwjhRtqhBnJiUTInaadc51hpEC5k4bhpSYnkqZt3gN1dnSGwcYjL2HNz07e8MKLOJ59kJCiItxrJa4eT3IiEb7jPFLnb62BMNnHwhO6elGaTnMeqbOrNRAWHnrrFA8vDLHPd6iCIoySNAhPLDlj7Pd8h+oM9IbC4CLP1YuuIa+zu5AIrdrwdT0PqS+Jh7/Or3d2B4PLy5+DwWB35/zr1UO+VO4Fq7LhtQixUSZwZmKmECazjd2BxezZoFKA02zQrOenyXcLKWYeDupP89Pke5QXcy89n80fYL3J99JQTITObjM/nCvqotY0h6/ywvvaV9S69OHoXBc9At10SvAxAr10rooegXYep60cADg4eCkBq0LY/y4hxlvHkeRWqkM/9pIqticl1viuM8BlOQtCdYx24i1JMeUfNUK5fSFDrTVNq/MuSom9eEIVU4Qr0N0dEpbyzR6lHXEh7mcIa5NUMUUIWhCQRoyZTFNL7HQhlWWbsxongYgFAW/EUApoayJiWPHO1rd/nfusJ2rdlALaO+52P1m84y4aC5PZ3UXCI+ttiTqvw9EMD9UotUltaUpvnCVOOLXPZH+ROV2M0qut6yNnmWe9xq51my1CLL0ZHoXHKL2aPT0BJhpnlPDYxWCTqNtmnK70yrImA9xiWoSZpXzCs5Z6uqheG0xMz/v9RWp4WY0Y8wgT22NGyNPvN090BMh6QnM2Yky8HcFwbPDZGXx0OIsOaGddoBGDedYsqeRExHQ4i5JPaH9EAm00zLOWPF0C4QViGr485BBJKtxGwzxr31oUMSE19atvbNUtPiIDMwO524SYcMeY31nETfyEFssnZFDxe914bjENafoix9WLBjU9Wn1HLynBEk9SzLBVBxja1XKEFw5qlFnbssmJiKn+QNZNSzafYkbWyqWWiBGMIcbrLOJlPxhR1kEprXuse288G56uVqbY0AdgssRstVX9w0kctGcr0KGPnhczKtSaajszV4EFIXcDezZSC/0MecWar5RGaCmI72l9MlJ7rsTQoNgjfD6b20jSnB3mVb+e35Uyq9yocDh4npNBfNLd67xid79UBwgAAAAAfwZL4+IwiyWWhBi7ji0hRund3DYkGGPsar0Zk1G7pYv1pcT+ISuqt5KuAWpBSNbQQHVZeLKGBlzGkfwIwosL2qD+lVWj54OkGN5Ypxa0MwiKGjZtR6QrIRZ2Pqi7un7IDg1vrN+KehCGvRha3TK1SUVTGxaXabu6Mnp6DDGTbAW5Qhpoq4m2I/KHVHgGvUHP03hOhheC3k8FfBFEq4kyKGrXJTu8UC2Zpinbikkxwh6BNdZ5fRGUTlpy7vDOaUp5MmlKseTF0DTl8zrR+6DJucPupOJilOor0UatpHVSM8XQDVQcXidmqymRphxep5TaObkWyU5S9j5VpLGe5XVK7aSRTpmsJE2tnZOmFC9dK30Ttbk/0kk961mNQnLufMvjQTB/CCRp9i7j4ffDUpKUow9KzJ2UOc3V2MGXkynuiGCXcYbYqLHOSlLeVhP2UsBKUs5t3fgXajyWO4LPHjHKCKoMf6sJd8pQk5S/1YTMHVaS8u/wN6NfiEVxmAk1CvG5QxfjbxSa6Lf3kkmaYiyjEK0pSYeZeB8UmTtkkgp/cwD1kSQWk6KbqKOO5T45ItE+KDp3sCW8TB8UNaXgp0tij7g5HWQE8rmV7O/H0HXiuePITBfKoBJJKrlHPPx9ycMkzdPFdsmzLjZdMOL3MaeVLzwjWlPuS00XXGc0d8I7qeTVi4g/pHR/unLt8A/8H/4bJsvXy68znDuBEyjnJxWQDyld5Euse7V+ZS8oIMgrRIOK5o6/OkK+OSCrFr2PWfe3hXz4C90jm/aNA+IzB1NTpLcgdheE7d1o7nywqV9MIMWmUo0KzejX5K6xxDKGhqvZFf6+clpPPepfX/J3r1PEom3oOyrE6hOVLEMAF0PXwH9NFWLRR7x+qRCr71auZ3MbI+rNu+jeEJhScotNRr8C0Zps5h/arH/uz3/yJyojRy5Hz8Oru7xi9buRoaFzOZlX7GdoaHCf5aWCUC4x2O8NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCD8j8PrknzkMY9UQAAAABJRU5ErkJggg==",
  //   },
  // ];

  // const varieties =[
  //     {
  //         varietyName : "Wedding",
  //     },
  //     {
  //       varietyName : "Ladies Sangeet",
  //   },
  //   {
  //       varietyName : "Party wear",
  //   }
  // ]

  
//   const items =[
//     {
//         itemName : "coins",
//     },
//     {
//         itemName : "ear rings",
//   },
//   {
//     itemName : "bangles",
//   }
// ]


  //===================================================================================
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          {/* < Dashboard /> */}
          <div
            id="kt_content_container"
            class="d-flex flex-column-fluid align-items-start container-xxl"
          >
            {/*begin::Post*/}
            <div class="content flex-row-fluid" id="kt_content">
              {/*begin::Row*/}

              {/*begin::Tables Widget 13*/}
              <div class="card mb-5 mb-xl-8">
                {/*begin::Header*/}
                <div class="card-header border-0 pt-5">
                  <h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bolder fs-3 mb-1">
                      {isUpdate ? "Update Making Charges" : "Add Making Charges"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Making Charges" : "Add Making Charges"}
                    </span>
                  </h3>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div class="card-body py-3">
                  {/*begin::Table container*/}
                  <div class="table-responsive">
                    <form>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Supplier Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Name of the Supplier"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="supplierName"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Clarity Name"
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              supplierName: e.target.value,
                            })
                          }
                            value={makingCharges.supplierName}                          
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Variety Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Choose the Variety"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          name="variety"
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              variety: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {variety.map((x) => {
                            return (
                              <option class="form-control" value={x.name}>
                                {x.name}
                              </option>
                            );
                          })}
                        </select>
                    
                      </div>


                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Item Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Choose the Item"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              item: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {item.map((x) => {
                            return (
                              <option class="form-control" value={x.name}>
                                {x.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Metal ID</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Choose the Metal ID"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              metalId: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {metal.map((x) => {
                            return (
                              <option class="form-control" value={x.name}>
                                {x.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">From Weight</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Name of the Supplier"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="fromWeight"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter from weight"
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              fromWeight: e.target.value,
                            })
                          }
                            value={makingCharges.fromWeight}                          
                        />
                      </div>


                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">To Weight</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Name of the Supplier"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="toWeight"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter from weight"
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              toWeight: e.target.value,
                            })
                          }
                            value={makingCharges.toWeight}                          
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Rate Type</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Name of the type of  rate type"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="rateType"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter the Rate Type(eg: Gross Weight)"
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              rateType: e.target.value,
                            })
                          }
                            value={makingCharges.rateType}                          
                        />
                      </div>

                      
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Value of Rate Type</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the rate type"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="rate"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter the value of Rate Type"
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              rate: e.target.value,
                            })
                          }
                            value={makingCharges.rate}                          
                        />
                      </div>

                      <div>
                        <br />
                        {/* <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            isUpdate
                              ? console.log({ ...makingCharges })
                              : console.log({ ...makingCharges })
                          }}
                        >
                          {isUpdate ? "Update Making charges" : "Add Making charges"}
                        </button> */}
                      </div>
                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={makingCharges}
                        adding={addMakingCharges}
                        updating={updateMakingCharges}
                        url={"/master/product-data/making-charges/"}
                      />
                    </form>
                  </div>
                  {/*end::Table container*/}
                </div>
                {/*begin::Body*/}
              </div>
              {/*end::Tables Widget 13*/}
            </div>
            {/*end::Post*/}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MakingChargesForm;
