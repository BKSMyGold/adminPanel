// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAllPermissions } from "../apis/Permission";
// import { addRole } from "../apis/Role";
// import Footer from "../layouts/Footer";
// import Header from "../layouts/Header";
// import Dashboard from "../screens/dashboard";
// import { isValidRole } from "../Validator";

// const RoleForm = () => {
//   let navigate = useNavigate();

//   const [roleState, setRoleState] = useState({
//     role_name: "",
//     permissions: new Set(),
//   });
//   const [permissionState, setPermissionsState] = useState([]);

//   const onRoleStateChange = (e) =>
//     setRoleState({ ...roleState, [e.target.name]: e.target.value });

//   const onPermissionModify = (e) => {
//     const { value, checked } = e.target;
//     const newPermissions = new Set(roleState.permissions);
//     if (checked) {
//       newPermissions.add(value);
//     } else {
//       newPermissions.delete(value);
//     }
//     console.log(newPermissions);
//     setRoleState({ ...roleState, permissions: newPermissions });
//   };

//   useEffect(() => {
//     getAllPermissions().then(({ data: { permissions } }) =>
//       setPermissionsState(permissions)
//     );
//   }, []);

//   return (
//     <div className="d-flex flex-column flex-root">
//       <div className="page d-flex flex-row flex-column-fluid">
//         <div
//           className="wrapper d-flex flex-column flex-row-fluid"
//           id="kt_wrapper"
//         >
//           <Header />
//           <Dashboard />
//           <div
//             id="kt_content_container"
//             class="d-flex flex-column-fluid align-items-start container-xxl"
//           >
//             {/*begin::Post*/}
//             <div class="content flex-row-fluid" id="kt_content">
//               {/*begin::Row*/}

//               {/*begin::Tables Widget 13*/}
//               <div class="card mb-5 mb-xl-8">
//                 {/*begin::Header*/}
//                 <div class="card-header border-0 pt-5">
//                   <h3 class="card-title align-items-start flex-column">
//                     <span class="card-label fw-bolder fs-3 mb-1">
//                       Add Master User Rights
//                     </span>
//                     <span class="text-muted mt-1 fw-bold fs-7">
//                       Add Master User Rights
//                     </span>
//                   </h3>
//                </div>
//                 {/*end::Header*/}
//                 {/*begin::Body*/}
//                 <div class="card-body py-3">
//                   {/*begin::Table container*/}
//                   <div class="table-responsive">
//                     <form>
//                       <div>
//                       <label class="d-flex align-items-center fs-5 fw-bold mb-2">
// 																		<span class="required">Role Name</span>
// 																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
// 																	</label>
//                         <input
//                           type="text"
//                           name="role_name"
//                           className="form-control form-control-lg form-control-solid"
//                           placeholder="Enter Role Name"
//                           onChange={onRoleStateChange}
//                         />
//                       </div>
//                       <div>
//                       <label class="d-flex align-items-center fs-5 fw-bold mb-2">
// 																		<span class="required">Role Permissions</span>
// 																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
// 																	</label>
//                         {permissionState.map((permission) => (
//                           <div>
//                             <input
//                             className="form-check-input"
//                               type={"checkbox"}
//                               value={permission._id}
//                               onChange={onPermissionModify}
//                             />
//                             <label class=" fs-5 fw-bold mb-2">&nbsp; {permission.permission_name}</label>
//                           </div>
//                         ))}
//                       </div>
//                       <div>
//                         <button
//                         className="btn btn-lg btn-primary"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             if (isValidRole({ ...roleState })) {
//                               addRole({ ...roleState }).then(() => {
//                                 navigate("/master/security/masterUserRights");
//                               });
//                             }
//                           }}
//                         >
//                           Add Role
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                   {/*end::Table container*/}
//                 </div>
//                 {/*begin::Body*/}
//               </div>
//               {/*end::Tables Widget 13*/}
//             </div>
//             {/*end::Post*/}
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoleForm;

// import React, { useState } from "react";
// import { getAllPermissions } from "../apis/Permission";

// export default function RoleForm() {
//   //=================================================================
//   const [roleState, setRoleState] = useState({
//     role_name: "",
//     permissions: new Set(),
//   });
//   const [permissionState, setPermissionsState] = useState([]);
//   const [checkedListAll, setCheckedListAll] = useState([]);
//   const [ItemsChecked, setItemsChecked] = useState(false);

//   //=================================================================
//   React.useEffect(() => {
//     getAllPermissions().then(({ data: { permissions } }) =>
//       setPermissionsState(permissions)
//     );
//   }, []);

//   //=================================================================
//   function selectedItems(e) {
//     const { value, checked } = e.target;
//     // let { checkedListAll } = this.state;

//     if (checked) {
//       checkedListAll = [...checkedListAll, value];
//     } else {
//       checkedListAll = checkedListAll.filter((el) => el !== value);
//       if (ItemsChecked) {
//         setItemsChecked({
//           ItemsChecked: !ItemsChecked,
//         });
//       }
//     }
//     setCheckedListAll({ checkedListAll });
//   }
//   //=================================================================
//   function selectItem(e) {
//     const { checked } = e.target;
//     let collection = [];

//     if (checked) {
//       collection = getAllItems();

//     setCheckedListAll({
//       checkedListAll: collection,
//     });

//     setItemsChecked({
//       ItemsChecked: checked,
//     });
//   }
//   }
//   //=================================================================
//   const getAllItems = () => {
//     const collection = [];
//     for (const cat of permissionState) {
//       for (const item of cat.items) {
//         collection.push(item.id);
//       }
//     }

//     return collection;
//   };
//   //=================================================================
//   function handleCheckboxClick(e) {
//     //e.preventDefault();

//     const { value, checked } = e.target;

//     if (checked) {
//       const collection = getAllItems();
//       setCheckedListAll((prevState) => ({
//         checkedListAll: [...prevState.checkedListAll, value * 1],
//       }));
//       setItemsChecked((prevState) => ({
//         ItemsChecked: collection.length === prevState.checkedListAll.length + 1,
//       }));

//       //     setItemsChecked{((ItemsChecked: collection.length === prevState.checkedListAll.length + 1
//       //   ))}
//       // } else {
//       setCheckedListAll((prevState) => ({
//         checkedListAll: prevState.checkedListAll.filter(
//           (item) => item != value
//         ),
//         ItemsChecked: false,
//       }));
//       setItemsChecked(false);
//     }
//   }
//   //=================================================================

//   // const { categories, checkedListAll, ItemsChecked } = this.state;

//   return (
//     <div>
//       <header>
//         <label>
//           <input type="checkbox" checked={ItemsChecked} onClick={selectItem} />
//           Select all
//         </label>
//       </header>
//       {permissionState.map((cat) => {
//         return (
//           <ItemCategory
//             {...cat}
//             key={cat.id}
//             click={this.openModal}
//             selectedItems={this.selectedItems.bind(this)}
//             ItemsChecked={ItemsChecked}
//             checkedListAll={checkedListAll}
//             handleCheckboxClick={this.handleCheckboxClick}
//           />
//         );
//       })}
//       {<pre>All Selected: {JSON.stringify(ItemsChecked, null, 2)}</pre>}
//       {<pre>Selected List: {JSON.stringify(checkedListAll, null, 2)}</pre>}
//     </div>
//   );
// }

// //=================================================================
// //=================================================================
// const ItemCategory = (props) => {
//   // //=================================================================
//   // const getItems = items.map(item => {
//   //   return item;
//   // });
//   //=================================================================
//   return (
//     <div>
//       <ul>
//         {permissionState.map((item) => {
//           return (
//             <li key={item.id}>
//               <Checkbox
//                 item={item}
//                 selectedItems={selectedItems}
//                 isChecked={checkedListAll.includes(item.id)}
//                 handleCheckboxClick={props.handleCheckboxClick}
//               />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// //=================================================================
// //=================================================================
// const Checkbox = (props) => {
//   //const { isChecked } = this.state;

//   return (
//     <label>
//       <input
//         type="checkbox"
//         value={item.id}
//         checked={isChecked}
//         onChange={props.handleCheckboxClick}
//       />
//       {item.name}
//     </label>
//   );
// };

//=================================================================
//=================================================================
//=================================================================
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPermissions } from "../apis/Permission";
import { addRole } from "../apis/Role";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "../screens/dashboard";
import { isValidRole } from "../Validator";
// import Checkbox from "../Checkbox";
//===============================================================
const RoleForm = ({ permissions }) => {
  let perm = Array.from(permissions);
  console.log("--> user's Permissions ::", perm);

  let navigate = useNavigate();

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([{}]);

  const [roleState, setRoleState] = useState({
    role_name: "",
    permissions: new Set(),
  });
  const [permissionState, setPermissionsState] = useState([]);
  //--------------------------------------------------------------------
  const onRoleStateChange = (e) =>
    setRoleState({ ...roleState, [e.target.name]: e.target.value });
  //--------------------------------------------------------------------
  const onPermissionModify = (e) => {
    const { value, checked, id } = e.target;
    const newPermissions = new Set(roleState.permissions);

    // setIsCheck([...isCheck, id]);
    // if (!checked) {
    //   setIsCheck(isCheck.filter((item) => item === id));
    // }

    if (checked) {
      newPermissions.add(value);
    } else {
      newPermissions.delete(value);
    }
    console.log(newPermissions);
    setRoleState({ ...roleState, permissions: newPermissions });
  };
  //--------------------------------------------------------------------
  // const handleSelectAll = (e) => {
  //   setIsCheckAll(!isCheckAll);
  //   setIsCheck(list.map((li) => li.id));
  //   if (isCheckAll) {
  //     setIsCheck([]);
  //   }
  // };
  //===============================================================
  // const handleClick = (e) => {
  //   const { id, checked } = e.target;
  //   setIsCheck([...isCheck, id]);
  //   if (!checked) {
  //     setIsCheck(isCheck.filter((item) => item !== id));
  //   }
  // };

  // console.log(isCheck);

  //===============================================================
  function selectAll(e) {
    e.preventDefault();
    const newPermissions = new Set(roleState.permissions);

    let x = document.getElementsByName("permissionCheck");
    for (let i = 0; i < x.length; i++) {
      x[i].checked = true;
    }
    permissionState.map((m) => {
      newPermissions.add(m);
    });
    console.log(newPermissions);
    setRoleState({ ...roleState, permissions: newPermissions });
  }
  //===============================================================
  function unSelectAll(e) {
    e.preventDefault();

    let x = document.getElementsByName("permissionCheck");
    for (let i = 0; i < x.length; i++) {
      x[i].checked = false;
    }
  }
  //===============================================================
  useEffect(() => {
    getAllPermissions().then(({ data: { permissions } }) =>
      setPermissionsState(permissions)
    );
  }, []);
  //===============================================================
  // console.log("-->",permissionState)

  let arr = [];
  {
    permissionState.map((x) => {
      for (let c of perm) {
        if (c === x.permission_name) {
          arr.push(x);
        }
      }
    });
  }
  console.log("-->user's permissions are :", arr);
  //===============================================================

  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          <Dashboard />
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
                      Add Master User Rights
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      Add Master User Rights
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
                          <span class="required">Role Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="role_name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Role Name"
                          onChange={onRoleStateChange}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Role Permissions</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <button
                          class="btn btn-primary me-2 mb-5"
                          onClick={selectAll}
                        >
                          Select All
                        </button>
                        {/* <Checkbox
                          type="checkbox"
                          name="selectAll"
                          id="selectAll"
                          handleClick={handleSelectAll}
                          isChecked={isCheckAll}
                        /> */}
                        {/* <span className="ml-2">Select All</span> */}
                        <button
                          class="btn btn-primary mb-5"
                          onClick={unSelectAll}
                        >
                          UnSelect All
                        </button>
                        {/* <Checkbox
                          type="checkbox"
                          name="selectAll"
                          id="selectAll"
                          handleClick={handleSelectAll}
                          isChecked={isCheckAll}
                        /> */}
                        {/* <span className="ml-2">UnSelect All</span> */}

                        {arr?.map((permission, _id) => (
                          <div>
                            <input
                              className="form-check-input"
                              name="permissionCheck"
                              type={"checkbox"}
                              value={permission._id}
                              onChange={onPermissionModify}
                            />
                            {/* <Checkbox
                              type="checkbox" 
                              name={permission.permission_name}
                              id={_id}
                              handleClick={onPermissionModify}
                              isChecked={isCheck.includes(_id)}
                            /> */}
                            <label class=" fs-5 fw-bold mb-2">
                              &nbsp; {permission.permission_name}
                            </label>
                          </div>
                        ))}
                      </div>
                      <div>
                        <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            if (isValidRole({ ...roleState })) {
                              addRole({ ...roleState }).then(() => {
                                navigate("/master/security/masterUserRights");
                              });
                            }
                          }}
                        >
                          Add Role
                        </button>
                      </div>
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
//===============================================================
export default RoleForm;
//===============================================================
