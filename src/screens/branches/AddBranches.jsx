import { useState } from "react";
import ReusableButton from "../../components/reusable/Button";
import ReusableInput from "../../components/reusable/InputField";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";

const AddBranches = ({ onBack }) => {
  const [initialForm, setInitialForm] = useState({
    name: "",
    country: "",
    city: "",
    pincode: "",
  });

  const [branches, setBranches] = useState([]);

  const handleAddBranch = () => {
    setBranches([
      ...branches,
      {
        id: branches.length + 1,
        branch: "",
        department: "",
        employee: "",
        designation: "",
      },
    ]);
  };

  const handleDeleteBranch = (id) => {
    setBranches(branches.filter((branch) => branch.id !== id));
  };

  const handleInitialChange = (field, value) => {
    setInitialForm({ ...initialForm, [field]: value });
  };

  const handleBranchChange = (id, field, value) => {
    const updatedBranches = branches.map((branch) =>
      branch.id === id ? { ...branch, [field]: value } : branch
    );
    setBranches(updatedBranches);
  };

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <IoArrowBackOutline
            size={24}
            className="cursor-pointer"
            onClick={onBack}
          />
          <h1 className="ml-4 text-2xl font-semibold">Add Branch</h1>
        </div>
      </div>

      <div className="flex items-center mb-4 gap-4">
        <ReusableInput
          label="Name"
          value={initialForm.name}
          type="text"
          placeholder="name"
          onChange={(e) => handleInitialChange("name", e.target.value)}
        />
        <ReusableInput
          label="Country"
          value={initialForm.country}
          type="text"
          placeholder="country"
          onChange={(e) => handleInitialChange("country", e.target.value)}
        />
        <ReusableInput
          label="City"
          value={initialForm.city}
          type="text"
          placeholder="city"
          onChange={(e) => handleInitialChange("city", e.target.value)}
        />
        <ReusableInput
          label="Pincode"
          value={initialForm.pincode}
          type="text"
          placeholder="pincode"
          onChange={(e) => handleInitialChange("pincode", e.target.value)}
        />
      </div>

      {branches.map((branch) => (
        <div key={branch.id} className="flex items-center mb-4 gap-4">
          <ReusableInput
            label="Branch"
            value={branch.branch}
            type="text"
            placeholder="branch"
            onChange={(e) =>
              handleBranchChange(branch.id, "branch", e.target.value)
            }
          />
          <ReusableInput
            label="Department"
            value={branch.department}
            type="text"
            placeholder="department"
            onChange={(e) =>
              handleBranchChange(branch.id, "department", e.target.value)
            }
          />
          <ReusableInput
            label="Employee"
            value={branch.employee}
            type="text"
            placeholder="employee"
            onChange={(e) =>
              handleBranchChange(branch.id, "employee", e.target.value)
            }
          />
          <ReusableInput
            label="Designation"
            value={branch.designation}
            type="text"
            placeholder="designation"
            onChange={(e) =>
              handleBranchChange(branch.id, "designation", e.target.value)
            }
          />
          <IoTrashOutline
            size={80}
            className="text-red-500 cursor-pointer pt-2"
            onClick={() => handleDeleteBranch(branch.id)}
          />
        </div>
      ))}

      <div className="flex justify-between mt-6">
        <button
          className="flex items-center text-green-600 text-sm font-medium"
          onClick={handleAddBranch}
        >
          <GoPlus size={20} />
          Add More Branches
        </button>

        <div className="flex flex-row items-center gap-x-2">
          <ReusableButton outlined={true} onClick={onBack}>
            Cancel
          </ReusableButton>
          <ReusableButton outlined={false} onClick={() => console.log("Save")}>
            Save Branches
          </ReusableButton>
        </div>
      </div>
    </div>
  );
};

export default AddBranches;
