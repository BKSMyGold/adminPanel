import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
import { deleteMetalGroup } from "../apis/MetalGroup";
import DeleteSpinner from "../delete";
import { BASE_URL } from "../Constants";
import { CSVLink } from "react-csv";
//============================================================================
const Metal = (props) => {
  const metal = [
    {
      _id: 1,
      name: "Gold",
      icon: "data:image/png;base64,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",
    },
    {
      _id: 1,
      name: "Silver",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABC1BMVEX/////sAD/wgD/lwD/2wD/rwD/wwD/0gD/lQD/1gD/9Ob/qzz/78v/yAD/3nf/kQD/3cH//O//vgD/pwD/nAD/tAD/nwD/twD/qwD/owD/+fP//vn//fT/jgD/9+b/30T/5Wv/5F//8aL/4ar/893/3KH/8rz/76n/tyH/2Jb/41T/1Ir/6MD/3jf/xmL/3Sn/6Yv/5nb/yi3/yID/1Xb/wnP/2oH/5KX/zkX/6rr/8Nr/89X/0H3/vTX/+NP/wU7/ujH/x1b/6IP/87j/5mf/347/3K3/0Wv/0pX/vGf/0FT/s1v/5MD/x33/zoz/4YL/5Zz/3Gz/1Tb/2VL/zk//u3X/sUv/oyr/3bThwmIYAAAJLklEQVR4nO2de1/TSBSGG21Kq2hNoRCaECiwUBHkJnKpgIIXCizCrot+/0+ySUibmclMMjOZIRHP848r7u/NnORMMjnnnVCpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFOwcdfUKrmLZI/cT4oPYAEVbVyb4iA3KNDtQcQxmscqxV8+xb925K5plZenGPVEVZOTuKJ17cTWfvgLDeWFSs6R6MQ1+y/FItLsNxYUS3p9D664X+sTbxWrS3BSmNTuabb7ln+Hwczb5RLS7DZOFUvavXaXmVxohQBVk4bWxpUvXbv9UThD8J75hvzOmRdwy5JgJVuo6tDdtE2jCUdwuKsNlY1qPpz0OuZngZlceaqGiIMbzJW2yhFiDoiPJgJn4NuOULUEOHaRLSSsT62LdXi4qxX5xQrjsdrUfeoV/TLoYYIl2zkbcI5OSo8RNURWu1x7O/4y1QRKI6w84m8ubwpeO3mbKiN0OskflTwK7DqCMuHH+F60WPQC0T4W+G4lne8fLaysOlzurU1P9/tdler1erqarf7eX5+a+vU/4eFhZWz5b5luYU/x0RZ8GNpjKiyiP+HjVXVRTjNuN7xmX/1trpz6xt4KEjg95FvzHW3NhfOln67q5jAcV23789Dz//TdXyKHpAW3Md0p6Hy+CN8VE8LKn/Equ2RR6jhHb9srOuotZUKiPD3R0tFuFTMVbX0LUrEXONz0UPQzKqe7lqJ6GrpkJaJeQ19/HJx2lBr+yofm+rdJiVjRbljqGws011fljgPPXJeqBEed5nFODZzZw8/eh6OG0nLRJ9dbUyjpDPaq7qJn92OSVLA+DmgOGhrrSfCtFpt0y6Jg4Yg+TgcFw2w9qQ1bZiGYd8UMH4Z3gtFWKsF4fnxGYa5XfTQOamJXr0wvJBypikJd5KS4flpulf04LngS1IkOWPMT0UPnottmasXRdgug80ri37WJWSFF6Zp8db8bL6kRhgkZ5sRXnARvxU9fA72M+aewQwviHA6uUJi4BS1l2aJdQnTkhNJ0wPeA3W+6gwjhRtqhBnJiUTInaadc51hpEC5k4bhpSYnkqZt3gN1dnSGwcYjL2HNz07e8MKLOJ59kJCiItxrJa4eT3IiEb7jPFLnb62BMNnHwhO6elGaTnMeqbOrNRAWHnrrFA8vDLHPd6iCIoySNAhPLDlj7Pd8h+oM9IbC4CLP1YuuIa+zu5AIrdrwdT0PqS+Jh7/Or3d2B4PLy5+DwWB35/zr1UO+VO4Fq7LhtQixUSZwZmKmECazjd2BxezZoFKA02zQrOenyXcLKWYeDupP89Pke5QXcy89n80fYL3J99JQTITObjM/nCvqotY0h6/ywvvaV9S69OHoXBc9At10SvAxAr10rooegXYep60cADg4eCkBq0LY/y4hxlvHkeRWqkM/9pIqticl1viuM8BlOQtCdYx24i1JMeUfNUK5fSFDrTVNq/MuSom9eEIVU4Qr0N0dEpbyzR6lHXEh7mcIa5NUMUUIWhCQRoyZTFNL7HQhlWWbsxongYgFAW/EUApoayJiWPHO1rd/nfusJ2rdlALaO+52P1m84y4aC5PZ3UXCI+ttiTqvw9EMD9UotUltaUpvnCVOOLXPZH+ROV2M0qut6yNnmWe9xq51my1CLL0ZHoXHKL2aPT0BJhpnlPDYxWCTqNtmnK70yrImA9xiWoSZpXzCs5Z6uqheG0xMz/v9RWp4WY0Y8wgT22NGyNPvN090BMh6QnM2Yky8HcFwbPDZGXx0OIsOaGddoBGDedYsqeRExHQ4i5JPaH9EAm00zLOWPF0C4QViGr485BBJKtxGwzxr31oUMSE19atvbNUtPiIDMwO524SYcMeY31nETfyEFssnZFDxe914bjENafoix9WLBjU9Wn1HLynBEk9SzLBVBxja1XKEFw5qlFnbssmJiKn+QNZNSzafYkbWyqWWiBGMIcbrLOJlPxhR1kEprXuse288G56uVqbY0AdgssRstVX9w0kctGcr0KGPnhczKtSaajszV4EFIXcDezZSC/0MecWar5RGaCmI72l9MlJ7rsTQoNgjfD6b20jSnB3mVb+e35Uyq9yocDh4npNBfNLd67xid79UBwgAAAAAfwZL4+IwiyWWhBi7ji0hRund3DYkGGPsar0Zk1G7pYv1pcT+ISuqt5KuAWpBSNbQQHVZeLKGBlzGkfwIwosL2qD+lVWj54OkGN5Ypxa0MwiKGjZtR6QrIRZ2Pqi7un7IDg1vrN+KehCGvRha3TK1SUVTGxaXabu6Mnp6DDGTbAW5Qhpoq4m2I/KHVHgGvUHP03hOhheC3k8FfBFEq4kyKGrXJTu8UC2Zpinbikkxwh6BNdZ5fRGUTlpy7vDOaUp5MmlKseTF0DTl8zrR+6DJucPupOJilOor0UatpHVSM8XQDVQcXidmqymRphxep5TaObkWyU5S9j5VpLGe5XVK7aSRTpmsJE2tnZOmFC9dK30Ttbk/0kk961mNQnLufMvjQTB/CCRp9i7j4ffDUpKUow9KzJ2UOc3V2MGXkynuiGCXcYbYqLHOSlLeVhP2UsBKUs5t3fgXajyWO4LPHjHKCKoMf6sJd8pQk5S/1YTMHVaS8u/wN6NfiEVxmAk1CvG5QxfjbxSa6Lf3kkmaYiyjEK0pSYeZeB8UmTtkkgp/cwD1kSQWk6KbqKOO5T45ItE+KDp3sCW8TB8UNaXgp0tij7g5HWQE8rmV7O/H0HXiuePITBfKoBJJKrlHPPx9ycMkzdPFdsmzLjZdMOL3MaeVLzwjWlPuS00XXGc0d8I7qeTVi4g/pHR/unLt8A/8H/4bJsvXy68znDuBEyjnJxWQDyld5Euse7V+ZS8oIMgrRIOK5o6/OkK+OSCrFr2PWfe3hXz4C90jm/aNA+IzB1NTpLcgdheE7d1o7nywqV9MIMWmUo0KzejX5K6xxDKGhqvZFf6+clpPPepfX/J3r1PEom3oOyrE6hOVLEMAF0PXwH9NFWLRR7x+qRCr71auZ3MbI+rNu+jeEJhScotNRr8C0Zps5h/arH/uz3/yJyojRy5Hz8Oru7xi9buRoaFzOZlX7GdoaHCf5aWCUC4x2O8NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCD8j8PrknzkMY9UQAAAABJRU5ErkJggg==",
    },
    {
      _id: 1,
      name: "Platinum",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABC1BMVEX/////sAD/wgD/lwD/2wD/rwD/wwD/0gD/lQD/1gD/9Ob/qzz/78v/yAD/3nf/kQD/3cH//O//vgD/pwD/nAD/tAD/nwD/twD/qwD/owD/+fP//vn//fT/jgD/9+b/30T/5Wv/5F//8aL/4ar/893/3KH/8rz/76n/tyH/2Jb/41T/1Ir/6MD/3jf/xmL/3Sn/6Yv/5nb/yi3/yID/1Xb/wnP/2oH/5KX/zkX/6rr/8Nr/89X/0H3/vTX/+NP/wU7/ujH/x1b/6IP/87j/5mf/347/3K3/0Wv/0pX/vGf/0FT/s1v/5MD/x33/zoz/4YL/5Zz/3Gz/1Tb/2VL/zk//u3X/sUv/oyr/3bThwmIYAAAJLklEQVR4nO2de1/TSBSGG21Kq2hNoRCaECiwUBHkJnKpgIIXCizCrot+/0+ySUibmclMMjOZIRHP848r7u/NnORMMjnnnVCpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFOwcdfUKrmLZI/cT4oPYAEVbVyb4iA3KNDtQcQxmscqxV8+xb925K5plZenGPVEVZOTuKJ17cTWfvgLDeWFSs6R6MQ1+y/FItLsNxYUS3p9D664X+sTbxWrS3BSmNTuabb7ln+Hwczb5RLS7DZOFUvavXaXmVxohQBVk4bWxpUvXbv9UThD8J75hvzOmRdwy5JgJVuo6tDdtE2jCUdwuKsNlY1qPpz0OuZngZlceaqGiIMbzJW2yhFiDoiPJgJn4NuOULUEOHaRLSSsT62LdXi4qxX5xQrjsdrUfeoV/TLoYYIl2zkbcI5OSo8RNURWu1x7O/4y1QRKI6w84m8ubwpeO3mbKiN0OskflTwK7DqCMuHH+F60WPQC0T4W+G4lne8fLaysOlzurU1P9/tdler1erqarf7eX5+a+vU/4eFhZWz5b5luYU/x0RZ8GNpjKiyiP+HjVXVRTjNuN7xmX/1trpz6xt4KEjg95FvzHW3NhfOln67q5jAcV23789Dz//TdXyKHpAW3Md0p6Hy+CN8VE8LKn/Equ2RR6jhHb9srOuotZUKiPD3R0tFuFTMVbX0LUrEXONz0UPQzKqe7lqJ6GrpkJaJeQ19/HJx2lBr+yofm+rdJiVjRbljqGws011fljgPPXJeqBEed5nFODZzZw8/eh6OG0nLRJ9dbUyjpDPaq7qJn92OSVLA+DmgOGhrrSfCtFpt0y6Jg4Yg+TgcFw2w9qQ1bZiGYd8UMH4Z3gtFWKsF4fnxGYa5XfTQOamJXr0wvJBypikJd5KS4flpulf04LngS1IkOWPMT0UPnottmasXRdgug80ri37WJWSFF6Zp8db8bL6kRhgkZ5sRXnARvxU9fA72M+aewQwviHA6uUJi4BS1l2aJdQnTkhNJ0wPeA3W+6gwjhRtqhBnJiUTInaadc51hpEC5k4bhpSYnkqZt3gN1dnSGwcYjL2HNz07e8MKLOJ59kJCiItxrJa4eT3IiEb7jPFLnb62BMNnHwhO6elGaTnMeqbOrNRAWHnrrFA8vDLHPd6iCIoySNAhPLDlj7Pd8h+oM9IbC4CLP1YuuIa+zu5AIrdrwdT0PqS+Jh7/Or3d2B4PLy5+DwWB35/zr1UO+VO4Fq7LhtQixUSZwZmKmECazjd2BxezZoFKA02zQrOenyXcLKWYeDupP89Pke5QXcy89n80fYL3J99JQTITObjM/nCvqotY0h6/ywvvaV9S69OHoXBc9At10SvAxAr10rooegXYep60cADg4eCkBq0LY/y4hxlvHkeRWqkM/9pIqticl1viuM8BlOQtCdYx24i1JMeUfNUK5fSFDrTVNq/MuSom9eEIVU4Qr0N0dEpbyzR6lHXEh7mcIa5NUMUUIWhCQRoyZTFNL7HQhlWWbsxongYgFAW/EUApoayJiWPHO1rd/nfusJ2rdlALaO+52P1m84y4aC5PZ3UXCI+ttiTqvw9EMD9UotUltaUpvnCVOOLXPZH+ROV2M0qut6yNnmWe9xq51my1CLL0ZHoXHKL2aPT0BJhpnlPDYxWCTqNtmnK70yrImA9xiWoSZpXzCs5Z6uqheG0xMz/v9RWp4WY0Y8wgT22NGyNPvN090BMh6QnM2Yky8HcFwbPDZGXx0OIsOaGddoBGDedYsqeRExHQ4i5JPaH9EAm00zLOWPF0C4QViGr485BBJKtxGwzxr31oUMSE19atvbNUtPiIDMwO524SYcMeY31nETfyEFssnZFDxe914bjENafoix9WLBjU9Wn1HLynBEk9SzLBVBxja1XKEFw5qlFnbssmJiKn+QNZNSzafYkbWyqWWiBGMIcbrLOJlPxhR1kEprXuse288G56uVqbY0AdgssRstVX9w0kctGcr0KGPnhczKtSaajszV4EFIXcDezZSC/0MecWar5RGaCmI72l9MlJ7rsTQoNgjfD6b20jSnB3mVb+e35Uyq9yocDh4npNBfNLd67xid79UBwgAAAAAfwZL4+IwiyWWhBi7ji0hRund3DYkGGPsar0Zk1G7pYv1pcT+ISuqt5KuAWpBSNbQQHVZeLKGBlzGkfwIwosL2qD+lVWj54OkGN5Ypxa0MwiKGjZtR6QrIRZ2Pqi7un7IDg1vrN+KehCGvRha3TK1SUVTGxaXabu6Mnp6DDGTbAW5Qhpoq4m2I/KHVHgGvUHP03hOhheC3k8FfBFEq4kyKGrXJTu8UC2Zpinbikkxwh6BNdZ5fRGUTlpy7vDOaUp5MmlKseTF0DTl8zrR+6DJucPupOJilOor0UatpHVSM8XQDVQcXidmqymRphxep5TaObkWyU5S9j5VpLGe5XVK7aSRTpmsJE2tnZOmFC9dK30Ttbk/0kk961mNQnLufMvjQTB/CCRp9i7j4ffDUpKUow9KzJ2UOc3V2MGXkynuiGCXcYbYqLHOSlLeVhP2UsBKUs5t3fgXajyWO4LPHjHKCKoMf6sJd8pQk5S/1YTMHVaS8u/wN6NfiEVxmAk1CvG5QxfjbxSa6Lf3kkmaYiyjEK0pSYeZeB8UmTtkkgp/cwD1kSQWk6KbqKOO5T45ItE+KDp3sCW8TB8UNaXgp0tij7g5HWQE8rmV7O/H0HXiuePITBfKoBJJKrlHPPx9ycMkzdPFdsmzLjZdMOL3MaeVLzwjWlPuS00XXGc0d8I7qeTVi4g/pHR/unLt8A/8H/4bJsvXy68znDuBEyjnJxWQDyld5Euse7V+ZS8oIMgrRIOK5o6/OkK+OSCrFr2PWfe3hXz4C90jm/aNA+IzB1NTpLcgdheE7d1o7nywqV9MIMWmUo0KzejX5K6xxDKGhqvZFf6+clpPPepfX/J3r1PEom3oOyrE6hOVLEMAF0PXwH9NFWLRR7x+qRCr71auZ3MbI+rNu+jeEJhScotNRr8C0Zps5h/arH/uz3/yJyojRy5Hz8Oru7xi9buRoaFzOZlX7GdoaHCf5aWCUC4x2O8NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCD8j8PrknzkMY9UQAAAABJRU5ErkJggg==",
    },
  ];
  //============================================================================
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          <Dashboard createLink={"/master/product-data/metal/add"} />
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
                      Metal Groups
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      Metal Groups
                    </span>
                  </h3>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div class="card-body py-3">
                  {/*begin::Table container*/}
                  <div class="table-responsive">
                    {/*begin::Table*/}
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                      {/*begin::Table head*/}
                      <thead>
                        <tr class="fw-bolder text-muted text-center">
                          {/* <th class="w-25px">
                            <div class="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="1"
                                data-kt-check="true"
                                data-kt-check-target=".widget-13-check"
                              />
                            </div>
                          </th> */}
                          <th class="fw-bolder text-muted">Metal Group Id</th>
                          <th class="fw-bolder text-muted">Name</th>
                          <th class="fw-bolder text-muted">Icon</th>
                          <th class="fw-bolder text-muted">Action</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        {metal.map((metal) => (
                          <tr class="text-center">
                            {/* <td>
                              <div class="form-check form-check-sm form-check-custom form-check-solid">
                                <input
                                  class="form-check-input widget-13-check"
                                  type="checkbox"
                                  value="1"
                                />
                              </div>
                            </td> */}
                            <td class="fw-bolder">{metal._id}</td>
                            <td class="fw-bolder">{metal.name}</td>
                            <td>
                              <img class="w-100px h-100px" src={metal.icon} />
                            </td>
                            <td class="text-center">
                              <Link
                                to={"/master/product-data/metal/edit"}
                                state={metal}
                              >
                                <button class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                  {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                  <span class="svg-icon svg-icon-3">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        opacity="0.3"
                                        d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </Link>
                              {/* {userPermissions.has("delete_metal_groups") ? ( */}
                              <DeleteSpinner
                                collection={metal}
                                deleting={deleteMetalGroup}
                                url={"/master/product-data/metal-groups/"}
                              />
                              {/* ) : null
                              } */}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
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

export default Metal;
