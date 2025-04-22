---
id: department-management-overview
title: Department Management
sidebar_position: 5 # Adjust position as needed
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Department Management

Departments help organize your members within Mera Monitor. You can create departments and assign members to them through the **My Team** section.

<Tabs groupId="department-management">
  <TabItem value="list" label="Department List" default>

    Navigate to **My Team** and click the **Departments** tab to view and manage existing departments.

    ![Department List View](/img/department-list.png)

    **Key Interface Elements:**

    *   **Tabs:** Switch between **Members** and **Departments** views.
    *   **Search:** Find specific departments by name.
    *   **+ Add Department:** Opens the modal to create a new department (see 'Creating Departments' tab).
    *   **Department Cards:** Each department is listed with:
        *   Department Name (e.g., Admin, Business Development, QA).
        *   Member Count (e.g., "1 Members", "3 Members").
        *   **+ Add New Member:** Opens a modal to assign *existing, unassigned* members to this department (see 'Adding Members to Departments' tab).
        *   **View Members:** Button to likely filter the main member list to show only members of this department.
        *   **(Implicit Actions):** Hovering or clicking might reveal options to Edit or Delete the department (common UI pattern, though not explicitly shown).

  </TabItem>
  <TabItem value="create" label="Creating Departments">

    To create a new department:

    1.  Navigate to **My Team** > **Departments**.
    2.  Click the **+ Add Department** button.
    3.  An "Add Department" modal window appears.
    4.  Enter the desired **Department Name** in the input field.
    5.  (Optional) Click **+ Add New Department** within the modal to add another department name field if creating multiple at once.
    6.  Click **Save Departments** to create the new department(s). Click **Cancel** to close the modal without saving.

    ![Add Department Modal](/img/add-department-modal.png)

  </TabItem>
  <TabItem value="add-members" label="Adding Members to Departments">

    You can assign existing members to a specific department directly from the department list:

    1.  Navigate to **My Team** > **Departments**.
    2.  Locate the desired department card.
    3.  Click the **+ Add New Member** button on that card.
    4.  An "Add Member" modal appears, listing available members.
        *   **Important Note:** Only members *not currently assigned* to any other department will be listed here.
    5.  **Search:** Use the search bar to find members by name or email.
    6.  **Select Members:** Check the box next to the names of the members you want to add to this department.
    7.  Click **Add Members** to assign the selected users to the department. Click **Cancel** to close without adding.

    ![Add Member to Department Modal](/img/add-member-to-department-modal.png)

  </TabItem>
</Tabs> 