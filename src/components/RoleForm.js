// //=================================================================
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAllPermissions } from "../apis/Permission";
// import { addRole } from "../apis/Role";
// import Footer from "../layouts/Footer";
// import Header from "../layouts/Header";
// import Dashboard from "../screens/dashboard";
// import { isValidRole } from "../Validator";
// // import Checkbox from "../Checkbox";
// //===============================================================
// const RoleForm = ({ permissions }) => {
//   let userPermissions = Array.from(permissions);

//   let navigate = useNavigate();

//   const [roleState, setRoleState] = useState({
//     role_name: "",
//     permissions: new Set(),
//   });
//   const [permissionState, setPermissionsState] = useState([]);
//   //===============================================================
//   const onRoleStateChange = (e) =>
//     setRoleState({ ...roleState, [e.target.name]: e.target.value });
//   //===============================================================
//   const onPermissionModify = (e) => {
//     const { value, checked, id } = e.target;
//     const newPermissions = new Set(roleState.permissions);

//     if (checked) {
//       newPermissions.add(value);
//     } else {
//       newPermissions.delete(value);
//     }
//     console.log(newPermissions);
//     setRoleState({ ...roleState, permissions: newPermissions });
//   };
//   //===============================================================

//   function selectAll(e) {
//     e.preventDefault();
//     const { value, checked, id } = e.target;

//     const newPermissions = new Set();

//     let x = document.getElementsByName("permissionCheck");

//     for (let i = 0; i < x.length; i++) {
//       x[i].checked = true;
//     }
//     userPermissionsWithId.map((m) => {
//       newPermissions.add(m._id);
//     });

//     // if (checked) {
//     //   newPermissions.add(value);
//     // } else {
//     //   newPermissions.delete(value);
//     // }
//     console.log(newPermissions);
//     setRoleState({ ...roleState, permissions: newPermissions });
//   }
//   //===============================================================
//   function unSelectAll(e) {
//     e.preventDefault();
//     const newPermissions = new Set(roleState.permissions);

//     let x = document.getElementsByName("permissionCheck");
//     for (let i = 0; i < x.length; i++) {
//       x[i].checked = false;
//     }
//     userPermissionsWithId.map((m) => {
//       newPermissions.delete(m._id);
//     });
//     setRoleState({ ...roleState, permissions: newPermissions });
//   }
//   //===============================================================
//   useEffect(() => {
//     getAllPermissions().then(({ data: { permissions } }) =>
//       setPermissionsState(permissions)
//     );
//   }, []);
//   //===============================================================
//   // console.log("-->",permissionState)

//   let userPermissionsWithId = [];
//   {
//     permissionState.map((x) => {
//       for (let perma of userPermissions) {
//         if (perma === x.permission_name) {
//           userPermissionsWithId.push(x);
//         }
//       }
//     });
//   }
//   console.log("-->user's permissions are :", userPermissionsWithId);
//   //===============================================================

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
//                 </div>
//                 {/*end::Header*/}
//                 {/*begin::Body*/}
//                 <div class="card-body py-3">
//                   {/*begin::Table container*/}
//                   <div class="table-responsive">
//                     <form>
//                       <div>
//                         <label class="d-flex align-items-center fs-5 fw-bold mb-2">
//                           <span class="required">Role Name</span>
//                           <i
//                             class="fas fa-exclamation-circle ms-2 fs-7"
//                             data-bs-toggle="tooltip"
//                             title="Specify your unique app name"
//                           ></i>
//                         </label>
//                         <input
//                           type="text"
//                           name="role_name"
//                           className="form-control form-control-lg form-control-solid"
//                           placeholder="Enter Role Name"
//                           onChange={onRoleStateChange}
//                         />
//                       </div>
//                       <div>
//                         <label class="d-flex align-items-center fs-5 fw-bold mb-2">
//                           <span class="required">Role Permissions</span>
//                           <i
//                             class="fas fa-exclamation-circle ms-2 fs-7"
//                             data-bs-toggle="tooltip"
//                             title="Specify your unique app name"
//                           ></i>
//                         </label>
//                         <button
//                           class="btn btn-primary me-2 mb-5"
//                           onClick={selectAll}
//                         >
//                           Select All
//                         </button>

//                         <button
//                           class="btn btn-primary mb-5"
//                           onClick={unSelectAll}
//                         >
//                           UnSelect All
//                         </button>

//                         {userPermissionsWithId?.map((permission, _id) => (
//                           <div>
//                             <input
//                               className="form-check-input"
//                               name="permissionCheck"
//                               type={"checkbox"}
//                               value={permission._id}
//                               onChange={onPermissionModify}
//                             />
//                             <label class=" fs-5 fw-bold mb-2">
//                               &nbsp; {permission.permission_name}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                       <div>
//                         <button
//                           className="btn btn-lg btn-primary"
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
// //===============================================================
// export default RoleForm;
// //===============================================================

import { React, useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import axios from "axios";
import { ROLE_PERMISSION_BASE_URL } from "../Constants";
import { addRole } from "../APIs_Hai/Role";
import { Navigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

//===============================================================
const nodes = [
  {
    label: "Master",
    value: "master",
    children: [
      {
        label: "Products",
        value: "products",
        children: [
          {
            label: "Metal",
            value: "Metal",
            children: [
              {
                label: "Create",
                value: "add_metal",
              },
              {
                label: "Read",
                value: "view_metal",
              },
              {
                label: "Update",
                value: "edit_metal",
              },
              {
                label: "Delete",
                value: "delete_metal",
              },
            ],
          },
          {
            label: "Metal Group",
            value: "Metal Group",
            children: [
              {
                label: "Create",
                value: "add_metal_groups",
              },
              {
                label: "Read",
                value: "view_metal_groups",
              },
              {
                label: "Update",
                value: "edit_metal_groups",
              },
              {
                label: "Delete",
                value: "delete_metal_groups",
              },
            ],
          },
          {
            label: "Units",
            value: "Units",
            children: [
              {
                label: "Create",
                value: "add_units",
              },
              {
                label: "Read",
                value: "view_units",
              },
              {
                label: "Update",
                value: "edit_units",
              },
              {
                label: "Delete",
                value: "delete_units",
              },
            ],
          },
          {
            label: "Ornament",
            value: "Ornament",
            children: [
              {
                label: "Create",
                value: "add_ornament",
              },
              {
                label: "Read",
                value: "view_ornament",
              },
              {
                label: "Update",
                value: "edit_ornament",
              },
              {
                label: "Delete",
                value: "delete_ornament",
              },
            ],
          },
          {
            label: "Shape",
            value: "Shape",
            children: [
              {
                label: "Create",
                value: "add_shape",
              },
              {
                label: "Read",
                value: "view_shape",
              },
              {
                label: "Update",
                value: "edit_shape",
              },
              {
                label: "Delete",
                value: "delete_shape",
              },
            ],
          },
          {
            label: "Cut",
            value: "Cut",
            children: [
              {
                label: "Create",
                value: "add_cut",
              },
              {
                label: "Read",
                value: "view_cut",
              },
              {
                label: "Update",
                value: "edit_cut",
              },
              {
                label: "Delete",
                value: "delete_cut",
              },
            ],
          },
          {
            label: "Clarity",
            value: "Clarity",
            children: [
              {
                label: "Create",
                value: "add_clarity",
              },
              {
                label: "Read",
                value: "view_clarity",
              },
              {
                label: "Update",
                value: "edit_clarity",
              },
              {
                label: "Delete",
                value: "delete_clarity",
              },
            ],
          },
          {
            label: "Colour",
            value: "Colour",
            children: [
              {
                label: "Create",
                value: "add_colour",
              },
              {
                label: "Read",
                value: "view_colour",
              },
              {
                label: "Update",
                value: "edit_colour",
              },
              {
                label: "Delete",
                value: "delete_colour",
              },
            ],
          },
          {
            label: "Style",
            value: "Style",
            children: [
              {
                label: "Create",
                value: "add_style",
              },
              {
                label: "Read",
                value: "view_style",
              },
              {
                label: "Update",
                value: "edit_style",
              },
              {
                label: "Delete",
                value: "delete_style",
              },
            ],
          },
          {
            label: "Making Charges",
            value: "Making Charges",
            children: [
              {
                label: "Create",
                value: "add_making_charges",
              },
              {
                label: "Read",
                value: "view_making_charges",
              },
              {
                label: "Update",
                value: "edit_making_charges",
              },
              {
                label: "Delete",
                value: "delete_making_charges",
              },
            ],
          },

          {
            label: "Collections",
            value: "Collection",
            children: [
              {
                label: "Create",
                value: "add_collections",
              },
              {
                label: "Read",
                value: "view_collections",
              },
              {
                label: "Update",
                value: "edit_collections",
              },
              {
                label: "Delete",
                value: "delete_collections",
              },
            ],
          },

          {
            label: "Categories",
            value: "Categories",
            children: [
              {
                label: "Create",
                value: "add_categories",
              },
              {
                label: "Read",
                value: "view_categories",
              },
              {
                label: "Update",
                value: "edit_categories",
              },
              {
                label: "Delete",
                value: "delete_categories",
              },
            ],
          },
          {
            label: "Varieties",
            value: "Varieties",
            children: [
              {
                label: "Create",
                value: "add_varities",
              },
              {
                label: "Read",
                value: "view_varities",
              },
              {
                label: "Update",
                value: "edit_varities",
              },
              {
                label: "Delete",
                value: "delete_varities",
              },
            ],
          },
          {
            label: "Products",
            value: "Products",
            children: [
              {
                label: "Create",
                value: "add_product",
              },
              {
                label: "Read",
                value: "view_products",
              },
              {
                label: "Update",
                value: "edit_product",
              },
              {
                label: "Delete",
                value: "delete_product",
              },
            ],
          },
          {
            label: "Item",
            value: "Item",
            children: [
              {
                label: "Create",
                value: "add_items",
              },
              {
                label: "Read",
                value: "view_items",
              },
              {
                label: "Update",
                value: "edit_item",
              },
              {
                label: "Delete",
                value: "delete_items",
              },
            ],
          },

          {
            label: "Offers",
            value: "Offers",
            children: [
              {
                label: "Create",
                value: "add_offer",
              },
              {
                label: "Read",
                value: "view_offer",
              },
              {
                label: "Update",
                value: "edit_offer",
              },
              {
                label: "Delete",
                value: "delete_offer",
              },
            ],
          },
        ],
      },
      {
        label: "Security",
        value: "security",
        children: [
          {
            label: "Permissions",
            value: "View_permissions",
            children: [
              {
                label: "Create",
                value: "add_permissions",
              },
              {
                label: "Read",
                value: "view_permissions",
              },
              {
                label: "Update",
                value: "edit_permission",
              },
              {
                label: "Delete",
                value: "delete_permission",
              },
            ],
          },
          {
            label: "Role Right",
            value: "role_right",
            children: [
              {
                label: "Create",
                value: "add_roles",
              },
              {
                label: "Read",
                value: "view_roles",
              },
              {
                label: "Update",
                value: "update_roles",
              },
              {
                label: "Delete",
                value: "delete_roles",
              },
            ],
          },
          {
            label: "Master User and Rights",
            value: "view_master_user_right",
            children: [
              {
                label: "Create",
                value: "create_master_user_right",
              },
              {
                label: "Read",
                value: "read_master_user_right",
              },
              {
                label: "Update",
                value: "update_master_user_right",
              },
              {
                label: "Delete",
                value: "delete_master_user_right",
              },
            ],
          },
          {
            label: "User and password linking to master user",
            value: "View_laural",
            children: [
              {
                label: "Create",
                value: "create_user_and_password",
              },
              {
                label: "Read",
                value: "read_user_and_password",
              },
              {
                label: "Update",
                value: "update_user_and_password",
              },
              {
                label: "Delete",
                value: "delete_user_and_password",
              },
            ],
          },
        ],
      },
      {
        label: "Settings",
        value: "Settings",
        children: [
          {
            label: "App/web front-end settings",
            value: "app",
            children: [
              {
                label: "Sliders",
                value: "sliders",
                children: [
                  {
                    label: "Create",
                    value: "add_slider",
                  },
                  {
                    label: "Read",
                    value: "view_sliders",
                  },
                  {
                    label: "Update",
                    value: "update_slider",
                  },
                  {
                    label: "Delete",
                    value: "delete_slider",
                  },
                ],
              },
              {
                label: "Videos",
                value: "Videos",
                children: [
                  {
                    label: "Create",
                    value: "add_video",
                  },
                  {
                    label: "Read",
                    value: "view_videos",
                  },
                  {
                    label: "Update",
                    value: "edit_video",
                  },
                  {
                    label: "Delete",
                    value: "delete_video",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Current Rate",
        value: "current_rate",
        children: [
          {
            label: "Create",
            value: "create_current_rate",
          },
          {
            label: "Read",
            value: "read_current_rate",
          },
          {
            label: "Update",
            value: "update_current_rate",
          },
          {
            label: "Delete",
            value: "delete_current_rate",
          },
        ],
      },
      {
        label: "Plan",
        value: "plan",
        children: [
          {
            label: "Plan Bonus",
            value: "plan_bonus",
            children: [
              {
                label: "Create",
                value: "create_plan_bonus",
              },
              {
                label: "Read",
                value: "read_plan_bonus",
              },
              {
                label: "Update",
                value: "update_plan_bonus",
              },
              {
                label: "Delete",
                value: "delete_plan_bonus",
              },
            ],
          },
          {
            label: "Cycle Period",
            value: "cycle_period",
            children: [
              {
                label: "Create",
                value: "add_cycle_periods",
              },
              {
                label: "Read",
                value: "view_cycle_periods",
              },
              {
                label: "Update",
                value: "edit_cycle_periods",
              },
              {
                label: "Delete",
                value: "delete_cycle_periods",
              },
            ],
          },
          {
            label: "Standard Plan",
            value: "standard_plan",
            children: [
              {
                label: "Create",
                value: "add_plan",
              },
              {
                label: "Read",
                value: "view_plans",
              },
              {
                label: "Update",
                value: "update_plan",
              },
              {
                label: "Delete",
                value: "delete_plan",
              },
            ],
          },
        ],
      },
      {
        label: "Duties & Taxes",
        value: "calculation",
        children: [
          {
            label: "Create",
            value: "create_taxes",
          },
          {
            label: "Read",
            value: "read_taxes",
          },
          {
            label: "Update",
            value: "update_taxes",
          },
          {
            label: "Delete",
            value: "delete_taxes",
          },
        ],
      },
      {
        label: "Badla",
        value: "Badla",
        children: [
          {
            label: "Create",
            value: "create_badla",
          },
          {
            label: "Read",
            value: "read_badla",
          },
          {
            label: "Update",
            value: "update_badla",
          },
          {
            label: "Delete",
            value: "delete_badla",
          },
        ],
      },
      {
        label: "Calculation",
        value: "Calculation",
        children: [
          {
            label: "Create",
            value: "create_calculation",
          },
          {
            label: "Read",
            value: "read_calculation",
          },
          {
            label: "Update",
            value: "update_calculation",
          },
          {
            label: "Delete",
            value: "delete_calculation",
          },
        ],
      },
    ],
  },
  {
    label: "Transactions",
    value: "tran",
    children: [
      {
        label: "Transactions",
        value: "trans",
      },
    ],
  },
];
//===============================================================

export default function RoleForm() {
  const location = useLocation();

  const [name, setName] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const handleSubmit = () => {
    let data = name, permissions,expanded
    addRole(data)
  };
  //===============================================================

  return (
    <>
      <Header />
      <div class="role_right">
        <h1>Define Role Rights</h1>
        <h3>Role</h3>
        <input
          type="text"
          // value={this.props.role.name}
          class="form-control my-5"
          placeholder="Enter new Role"
          onChange={(e) => {
            setName({
              name: e.target.value,
            });
          }}
        />
        <CheckboxTree
          nodes={nodes}
          checked={setPermissions(permissions)}
          expanded={setExpanded(expanded)}
          onCheck={(permissions) => setPermissions(permissions)}
          onExpand={(expanded) => setExpanded(expanded)}
        />
      </div>
      <button class="btn btn-danger m-5" onClick={handleSubmit}>
        Add Role Rights
      </button>
      <Footer />
    </>
  );
}

// class RoleForm extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props.location)

//     this.state = {
//       permissions: [],
//       expanded: [],
//       name: "",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleSubmit() {
//     addRole(this.state).then(() => (
//       <Audio height="100" width="100" color="grey" ariaLabel="loading" />
//     ));
//   }
//   //===============================================================
//   render() {
//     return (
//       <>
//         <Header />
//         <div class="role_right">
//           <h1>Define Role Rights</h1>
//           <h3>Role</h3>
//           <input
//             type="text"
//             // value={this.props.role.name}
//             class="form-control my-5"
//             placeholder="Enter new Role"
//             onChange={(e) => {
//               this.setState({ name: e.target.value });
//             }}
//           />
//           <CheckboxTree
//             nodes={nodes}
//             checked={this.state.permissions}
//             expanded={this.state.expanded}
//             onCheck={(permissions) => this.setState({ permissions })}
//             onExpand={(expanded) => this.setState({ expanded })}
//           />
//         </div>
//         <button class="btn btn-danger m-5" onClick={this.handleSubmit}>
//           Add Role Rights
//         </button>
//         <Footer />
//       </>
//     );
//   }
// }
// export default RoleForm;
