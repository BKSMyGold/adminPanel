import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidMetalGroup } from "../Validator";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { updateMetalGroup, addMetalGroup } from "../APIs_Hai/MetalGroup";
import { getOrnament } from "../APIs_Hai/Ornament"
import { getAllUnit } from "../APIs_Hai/Unit"
import { getAllMetal } from "../APIs_Hai/Metal"
//===========================================================================
const MetalGroupForm = (props) => {
  let location = useLocation();
  console.log(location.state);
  let navigate = useNavigate();
  //===========================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [metalGroup, setMetalGroup] = useState(
    location?.state ?? {
      shortName: "",
      metal: "",
      fineness: 0,
      unit: "", 
      roundingDigits: 0,
      ornament: "",
    }
  );

  // const metal = [
  //   {
  //     _id: 1,
  //     name: "Gold",
  //     icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABC1BMVEX/////sAD/wgD/lwD/2wD/rwD/wwD/0gD/lQD/1gD/9Ob/qzz/78v/yAD/3nf/kQD/3cH//O//vgD/pwD/nAD/tAD/nwD/twD/qwD/owD/+fP//vn//fT/jgD/9+b/30T/5Wv/5F//8aL/4ar/893/3KH/8rz/76n/tyH/2Jb/41T/1Ir/6MD/3jf/xmL/3Sn/6Yv/5nb/yi3/yID/1Xb/wnP/2oH/5KX/zkX/6rr/8Nr/89X/0H3/vTX/+NP/wU7/ujH/x1b/6IP/87j/5mf/347/3K3/0Wv/0pX/vGf/0FT/s1v/5MD/x33/zoz/4YL/5Zz/3Gz/1Tb/2VL/zk//u3X/sUv/oyr/3bThwmIYAAAJLklEQVR4nO2de1/TSBSGG21Kq2hNoRCaECiwUBHkJnKpgIIXCizCrot+/0+ySUibmclMMjOZIRHP848r7u/NnORMMjnnnVCpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFOwcdfUKrmLZI/cT4oPYAEVbVyb4iA3KNDtQcQxmscqxV8+xb925K5plZenGPVEVZOTuKJ17cTWfvgLDeWFSs6R6MQ1+y/FItLsNxYUS3p9D664X+sTbxWrS3BSmNTuabb7ln+Hwczb5RLS7DZOFUvavXaXmVxohQBVk4bWxpUvXbv9UThD8J75hvzOmRdwy5JgJVuo6tDdtE2jCUdwuKsNlY1qPpz0OuZngZlceaqGiIMbzJW2yhFiDoiPJgJn4NuOULUEOHaRLSSsT62LdXi4qxX5xQrjsdrUfeoV/TLoYYIl2zkbcI5OSo8RNURWu1x7O/4y1QRKI6w84m8ubwpeO3mbKiN0OskflTwK7DqCMuHH+F60WPQC0T4W+G4lne8fLaysOlzurU1P9/tdler1erqarf7eX5+a+vU/4eFhZWz5b5luYU/x0RZ8GNpjKiyiP+HjVXVRTjNuN7xmX/1trpz6xt4KEjg95FvzHW3NhfOln67q5jAcV23789Dz//TdXyKHpAW3Md0p6Hy+CN8VE8LKn/Equ2RR6jhHb9srOuotZUKiPD3R0tFuFTMVbX0LUrEXONz0UPQzKqe7lqJ6GrpkJaJeQ19/HJx2lBr+yofm+rdJiVjRbljqGws011fljgPPXJeqBEed5nFODZzZw8/eh6OG0nLRJ9dbUyjpDPaq7qJn92OSVLA+DmgOGhrrSfCtFpt0y6Jg4Yg+TgcFw2w9qQ1bZiGYd8UMH4Z3gtFWKsF4fnxGYa5XfTQOamJXr0wvJBypikJd5KS4flpulf04LngS1IkOWPMT0UPnottmasXRdgug80ri37WJWSFF6Zp8db8bL6kRhgkZ5sRXnARvxU9fA72M+aewQwviHA6uUJi4BS1l2aJdQnTkhNJ0wPeA3W+6gwjhRtqhBnJiUTInaadc51hpEC5k4bhpSYnkqZt3gN1dnSGwcYjL2HNz07e8MKLOJ59kJCiItxrJa4eT3IiEb7jPFLnb62BMNnHwhO6elGaTnMeqbOrNRAWHnrrFA8vDLHPd6iCIoySNAhPLDlj7Pd8h+oM9IbC4CLP1YuuIa+zu5AIrdrwdT0PqS+Jh7/Or3d2B4PLy5+DwWB35/zr1UO+VO4Fq7LhtQixUSZwZmKmECazjd2BxezZoFKA02zQrOenyXcLKWYeDupP89Pke5QXcy89n80fYL3J99JQTITObjM/nCvqotY0h6/ywvvaV9S69OHoXBc9At10SvAxAr10rooegXYep60cADg4eCkBq0LY/y4hxlvHkeRWqkM/9pIqticl1viuM8BlOQtCdYx24i1JMeUfNUK5fSFDrTVNq/MuSom9eEIVU4Qr0N0dEpbyzR6lHXEh7mcIa5NUMUUIWhCQRoyZTFNL7HQhlWWbsxongYgFAW/EUApoayJiWPHO1rd/nfusJ2rdlALaO+52P1m84y4aC5PZ3UXCI+ttiTqvw9EMD9UotUltaUpvnCVOOLXPZH+ROV2M0qut6yNnmWe9xq51my1CLL0ZHoXHKL2aPT0BJhpnlPDYxWCTqNtmnK70yrImA9xiWoSZpXzCs5Z6uqheG0xMz/v9RWp4WY0Y8wgT22NGyNPvN090BMh6QnM2Yky8HcFwbPDZGXx0OIsOaGddoBGDedYsqeRExHQ4i5JPaH9EAm00zLOWPF0C4QViGr485BBJKtxGwzxr31oUMSE19atvbNUtPiIDMwO524SYcMeY31nETfyEFssnZFDxe914bjENafoix9WLBjU9Wn1HLynBEk9SzLBVBxja1XKEFw5qlFnbssmJiKn+QNZNSzafYkbWyqWWiBGMIcbrLOJlPxhR1kEprXuse288G56uVqbY0AdgssRstVX9w0kctGcr0KGPnhczKtSaajszV4EFIXcDezZSC/0MecWar5RGaCmI72l9MlJ7rsTQoNgjfD6b20jSnB3mVb+e35Uyq9yocDh4npNBfNLd67xid79UBwgAAAAAfwZL4+IwiyWWhBi7ji0hRund3DYkGGPsar0Zk1G7pYv1pcT+ISuqt5KuAWpBSNbQQHVZeLKGBlzGkfwIwosL2qD+lVWj54OkGN5Ypxa0MwiKGjZtR6QrIRZ2Pqi7un7IDg1vrN+KehCGvRha3TK1SUVTGxaXabu6Mnp6DDGTbAW5Qhpoq4m2I/KHVHgGvUHP03hOhheC3k8FfBFEq4kyKGrXJTu8UC2Zpinbikkxwh6BNdZ5fRGUTlpy7vDOaUp5MmlKseTF0DTl8zrR+6DJucPupOJilOor0UatpHVSM8XQDVQcXidmqymRphxep5TaObkWyU5S9j5VpLGe5XVK7aSRTpmsJE2tnZOmFC9dK30Ttbk/0kk961mNQnLufMvjQTB/CCRp9i7j4ffDUpKUow9KzJ2UOc3V2MGXkynuiGCXcYbYqLHOSlLeVhP2UsBKUs5t3fgXajyWO4LPHjHKCKoMf6sJd8pQk5S/1YTMHVaS8u/wN6NfiEVxmAk1CvG5QxfjbxSa6Lf3kkmaYiyjEK0pSYeZeB8UmTtkkgp/cwD1kSQWk6KbqKOO5T45ItE+KDp3sCW8TB8UNaXgp0tij7g5HWQE8rmV7O/H0HXiuePITBfKoBJJKrlHPPx9ycMkzdPFdsmzLjZdMOL3MaeVLzwjWlPuS00XXGc0d8I7qeTVi4g/pHR/unLt8A/8H/4bJsvXy68znDuBEyjnJxWQDyld5Euse7V+ZS8oIMgrRIOK5o6/OkK+OSCrFr2PWfe3hXz4C90jm/aNA+IzB1NTpLcgdheE7d1o7nywqV9MIMWmUo0KzejX5K6xxDKGhqvZFf6+clpPPepfX/J3r1PEom3oOyrE6hOVLEMAF0PXwH9NFWLRR7x+qRCr71auZ3MbI+rNu+jeEJhScotNRr8C0Zps5h/arH/uz3/yJyojRy5Hz8Oru7xi9buRoaFzOZlX7GdoaHCf5aWCUC4x2O8NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCD8j8PrknzkMY9UQAAAABJRU5ErkJggg==",
  //   },
  //   {
  //     _id: 1,
  //     name: "Silver",
  //     icon: "data:image/png;base64,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",
  //   },
  //   {
  //     _id: 1,
  //     name: "Platinum",
  //     icon: "data:image/png;base64,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",
  //   },
  // ];


  // const units = [
  //   {
  //     unitName: "carat",
  //     conversionFactorToGold: 0.2,
  //   },
  //   {
  //     unitName: "cent",
  //     conversionFactorToGold: 0.002,
  //   },
  //   {
  //     unitName: "gram",
  //     conversionFactorToGold: 1,
  //   },
  //   {
  //     unitName: "pcs",
  //     conversionFactorToGold: 1,
  //   },
  // ];


  // const ornaments = [
  //   {
  //     id: 1,
  //     ornamentName: "Fine Metal",
  //   },
  //   {
  //     id: 2,
  //     ornamentName: "Ornaments",
  //   },
  //   {
  //     id: 3,
  //     ornamentName: "Old Metal",
  //   },
  //   {
  //     id: 4,
  //     ornamentName: "Packaging Material",
  //   },
  //   {
  //     id: 5,
  //     ornamentName: "Other",
  //   },
  // ];
  const [metal, setMetal] = useState([]);
  useEffect(() => {
    getAllMetal().then(res => setMetal(res.data.data.data))
  }, [])

  console.log(metal)
  //===================================================================================
  const [ornament, setOrnament] = useState([]);
  useEffect(() => {
    getOrnament().then(res => setOrnament(res.data.data.data))
  }, [])

  console.log(ornament)
  //===================================================================================
  const [units, setUnits] = useState([]);
  useEffect(() => {
    getAllUnit().then(res => setUnits(res.data.data.data))
  }, [])

  console.log(units)
  //===================================================================================

  //===========================================================================
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          {/* <Dashboard /> */}
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
                      {isUpdate ? "Update Metal Group" : "Add Metal Group"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Metal Group" : "Add Metal Group"}
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
                          <span class="required">Metal ID</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Item Group Name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="shortName"
                          maxlength="5"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Item Group Name"
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              shortName: e.target.value,
                            })
                          }
                          value={metalGroup.shortName}
                        />
                      </div>






                      {/* <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Item Master Group Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Type"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          onChange={(e) =>
                            setSlider({
                              ...Slider,
                              type: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {type.map((x) => {
                            return (
                              <option class="form-control" value={x.name}>
                                {x.name}
                              </option>
                            );
                          })}
                        </select>
                      </div> */}













                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Item Master Group Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Item Master Group Name"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              metal: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {metal.map((x) => {
                            return (
                              <option class="form-control"  value={x.id}>
                                {x.name}
                              </option>
                            );
                          })}
                        </select>

                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Purity</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Purity"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="fineness"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter purity"
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              fineness: Number(e.target.value),
                            })
                          }
                          value={metalGroup.fineness}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Unit Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Unit Name"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              unit: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {units.map((x) => {
                            return (
                              <option class="form-control" value={x.id}>
                                {x.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Rounding Digits</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Unit Name"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              roundingDigits: Number(e.target.value),
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          <option class="form-control" value={1}>1</option>
                          <option class="form-control" value={2}>2</option>
                          <option class="form-control" value={3}>3</option>
                        </select>
                      </div>



                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Ornament Type</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the type of the ornament"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              ornament: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {ornament.map((x) => {
                            return (
                              <option class="form-control" value={x.name}>
                                {x.name}
                              </option>
                            );
                          })}
                        </select>

                      </div>

                    
                      {/* <div>
                        <br />
                        <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();

                            isUpdate
                              ? console.log({ ...metalGroup })
                              : console.log({ ...metalGroup });
                          }}
                        >
                          {isUpdate ? "Update Metal Group" : "Add Metal Group"}
                        </button>
                      </div> */}
                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={metalGroup}
                        adding={addMetalGroup}
                        updating={updateMetalGroup}
                        url={"/master/product-data/metal_groups/"}
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

export default MetalGroupForm;
