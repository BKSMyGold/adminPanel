import React from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import axios from "axios";
import { ROLE_PERMISSION_BASE_URL } from "../Constants";

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
            label: "Metal Group",
            value: "Metal",
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
            label: "Diamond & Gems",
            value: "Diamond",
            children: [
                {
                  label: "Create",
                  value: "add_diamond_gems",
                },
              {
                label: "Read",
                value: "view_diamond_gems",
              },
              {
                label: "Update",
                value: "edit_diamond_gems",
              },
              {
                label: "Delete",
                value: "delete_diamond_gems",
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
            label: "Item Details",
            value: "Item_Details",
            children: [
                {
                  label: "Create",
                  value: "add_item_details",
                },
              {
                label: "Read",
                value: "view_item_details",
              },
              {
                label: "Update",
                value: "edit_item_details",
              },
              {
                label: "Delete",
                value: "delete_item_details",
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

class RoleRight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: [],
      expanded: [],
      role: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
      let set = new Set(this.state.checked)
    console.log("=->", this.state.role, set);
  }

  render() {
    return (
      <>
        <Header />
        <div class="role_right">
          <h1>Define Role Rights</h1>
          <h3>Role</h3>
          <input
            class="form-control my-5"
            onChange={(e) => {
              this.setState({ role: e.target.value });
            }}
          />
          <CheckboxTree
            nodes={nodes}
            checked={this.state.checked}
            expanded={this.state.expanded}
            onCheck={(checked) => this.setState({ checked })}
            onExpand={(expanded) => this.setState({ expanded })}
          />
        </div>
        <button class="btn btn-danger m-5" onClick={this.handleSubmit}>
          Add Role Rights
        </button>
        <Footer />
      </>
    );
  }
}
export default RoleRight;
