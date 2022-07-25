import React, { useEffect } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import axios from "axios";
import { ROLE_PERMISSION_BASE_URL } from "../Constants";
import { addRole, updateRole } from "../APIs_Hai/Role";
import { Navigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import { withRouter } from "react-router";
import swal from "sweetalert";
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
            label: "All Roles",
            value: "all_roles",
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
        label: "Loan Interest",
        value: "Loan_Interest",
        children: [
          {
            label: "Create",
            value: "create_loan_interest",
          },
          {
            label: "Read",
            value: "read_loan_interest",
          },
          {
            label: "Update",
            value: "update_loan_interest",
          },
          {
            label: "Delete",
            value: "delete_loan_interest",
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
      {
        label: "FAQ",
        value: "FAQ",
        children: [
          {
            label: "Create",
            value: "create_FAQ",
          },
          {
            label: "Read",
            value: "read_FAQ",
          },
          {
            label: "Update",
            value: "update_FAQ",
          },
          {
            label: "Delete",
            value: "delete_FAQ",
          },
        ],
      },
      {
        label: "Policy",
        value: "Policy",
        children: [
          {
            label: "Create",
            value: "create_policy",
          },
          {
            label: "Read",
            value: "read_policy",
          },
          {
            label: "Update",
            value: "update_policy",
          },
          {
            label: "Delete",
            value: "delete_policy",
          },
        ],
      },
      {
        label: "Sell Request",
        value: "Sell_Request",
        children: [
          {
            label: "Create",
            value: "create_sell_request",
          },
          {
            label: "Read",
            value: "read_sell_request",
          },
          {
            label: "Update",
            value: "update_sell_request",
          },
          {
            label: "Delete",
            value: "delete_sell_request",
          },
        ],
      },
      {
        label: "Return Reason",
        value: "Return_Reason",
        children: [
          {
            label: "Create",
            value: "create_return_reason",
          },
          {
            label: "Read",
            value: "read_return_reason",
          },
          {
            label: "Update",
            value: "update_return_reason",
          },
          {
            label: "Delete",
            value: "delete_return_reason",
          },
        ],
      },
      {
        label: "Referral Type",
        value: "Referral Type",
        children: [
          {
            label: "Create",
            value: "create_referral_type",
          },
          {
            label: "Read",
            value: "read_referral_type",
          },
          {
            label: "Update",
            value: "update_referral_type",
          },
          {
            label: "Delete",
            value: "delete_referral_type",
          },
        ],
      },
    ],
  },
  {
    label: "Reports",
    value: "Reports",
    children: [
      {
        label: "Buy & Save Report",
        value: "buy and save Report",
        children: [
          {
            label: "Create",
            value: "create_buy_and_save_report",
          },
          {
            label: "Read",
            value: "read_buy_and_save_report",
          },
          {
            label: "Update",
            value: "update_buy_and_save_report",
          },
          {
            label: "Delete",
            value: "delete_buy_and_save_report",
          },
        ],
      },
      {
        label: "E-Commerce Report",
        value: "E-Commerce Report",
        children: [
          {
            label: "Create",
            value: "create_ecomm_report",
          },
          {
            label: "Read",
            value: "read_ecomm_report",
          },
          {
            label: "Update",
            value: "update_ecomm_report",
          },
          {
            label: "Delete",
            value: "delete_ecomm_report",
          },
        ],
      },
      {
        label: "Instant Gold Report",
        value: "Instant Gold Report",
        children: [
          {
            label: "Create",
            value: "create_instant_gold_report",
          },
          {
            label: "Read",
            value: "read_instant_gold_report",
          },
          {
            label: "Update",
            value: "update_instant_gold_report",
          },
          {
            label: "Delete",
            value: "delete_instant_gold_report",
          },
        ],
      },
      {
        label: "Sell & Reserve Report",
        value: "Sell & Reserve Report",
        children: [
          {
            label: "Create",
            value: "create_sell_and_reserve_report",
          },
          {
            label: "Read",
            value: "read_sell_and_reserve_report",
          },
          {
            label: "Update",
            value: "update_sell_and_reserve_report",
          },
          {
            label: "Delete",
            value: "delete_sell_and_reserve_report",
          },
        ],
      },
    ],
  },
];
//===============================================================
function RoleRight(props) {
  const location = useLocation();
  console.log(location.state);

  const [isUpdate, setIsUpdate] = React.useState(
    location?.state ? true : false
  );
  const [state, setState] = React.useState({
    permissions: [],
    expanded: [],
    name: "",
  });
  //========================================

  const handleSubmit = () => {
    addRole(state).then(() => swal("Added", "Role has been Added", "success"));
  };

  return (
    <>
      <Header />
      <div class="role_right">
        <h1>Define Role Rights</h1>
        <h3>Role</h3>
        <input
          type="text"
          class="form-control my-5"
          placeholder="Enter new Role"
          value={state.name}
          onChange={(e) => {
            setState({ ...state, name: e.target.value });
          }}
        />
        <CheckboxTree
          nodes={nodes}
          checked={state.permissions}
          expanded={state.expanded}
          onCheck={(permissions) => setState({ ...state, permissions })}
          onExpand={(expanded) => setState({ ...state, expanded })}
        />
      </div>
      <button class="btn btn-danger m-5" onClick={handleSubmit}>
        Add Role Rights{" "}
      </button>
      <Footer />
    </>
  );
}

export default RoleRight;
