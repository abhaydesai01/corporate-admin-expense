import { useState } from "react";
import ReusableButton from "../../components/reusable/Button";
import ReusableInput from "../../components/reusable/InputField";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";

const AddApprovals = ({ onBack }) => {
  // Initial state for added approval stages
  const [stages, setStages] = useState([]);

  // Initial form for the first row (without stage number)
  const [initialForm, setInitialForm] = useState({
    branch: "",
    department: "",
    approvalStage: "",
    designation: "",
  });

  // Function to add a new approval stage
  const handleAddStage = () => {
    setStages([
      ...stages,
      {
        id: stages.length + 1,
        branch: "",
        department: "",
        employee: "",
        designation: "",
      },
    ]);
  };

  // Function to delete an approval stage
  const handleDeleteStage = (id) => {
    setStages(stages.filter((stage) => stage.id !== id));
  };

  // Function to handle changes in the initial form
  const handleInitialChange = (field, value) => {
    setInitialForm({ ...initialForm, [field]: value });
  };

  // Function to handle changes in approval stages
  const handleStageChange = (id, field, value) => {
    const updatedStages = stages.map((stage) =>
      stage.id === id ? { ...stage, [field]: value } : stage
    );
    setStages(updatedStages);
  };

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-start mb-4">
        <IoArrowBackOutline
          size={24}
          className="cursor-pointer"
          onClick={onBack}
        />
        <h1 className="ml-4 text-2xl font-semibold">Approvals</h1>
      </div>

      {/* Initial form row with no approval stage */}
      <div className="flex justify-center items-center mb-4 gap-4">
        <ReusableInput
          label="Branch"
          value={initialForm.branch}
          type={"select"}
          options={[{ label: "branch" }]}
          onChange={(e) => handleInitialChange("branch", e.target.value)}
        />
        <ReusableInput
          label="Department"
          value={initialForm.department}
          type={"select"}
          options={[{ label: "department" }]}
          onChange={(e) => handleInitialChange("department", e.target.value)}
        />
        <ReusableInput
          label="Approval Stages"
          value={initialForm.approvalStage}
          type="text"
          onChange={(e) => handleInitialChange("approvalStage", e.target.value)}
        />
        <ReusableInput
          label="Designation"
          value={initialForm.designation}
          type={"select"}
          options={[{ label: "designation" }]}
          onChange={(e) => handleInitialChange("designation", e.target.value)}
        />
      </div>

      {/* Additional approval stages after clicking "Add more stages" */}
      {stages.map((stage) => (
        <div
          key={stage.id}
          className="flex justify-center items-center mb-4 gap-4"
        >
          <ReusableInput
            label="Branch"
            value={stage.branch}
            type={"select"}
            options={[{ label: "branch" }]}
            onChange={(e) =>
              handleStageChange(stage.id, "branch", e.target.value)
            }
          />
          <ReusableInput
            label="Department"
            value={stage.department}
            type={"select"}
            options={[{ label: "department" }]}
            onChange={(e) =>
              handleStageChange(stage.id, "department", e.target.value)
            }
          />
          <ReusableInput
            label="Employee"
            value={stage.employee}
            type={"select"}
            options={[{ label: "employee" }]}
            onChange={(e) =>
              handleStageChange(stage.id, "employee", e.target.value)
            }
          />
          <ReusableInput
            label="Designation"
            value={stage.designation}
            type={"select"}
            options={[{ label: "designation" }]}
            onChange={(e) =>
              handleStageChange(stage.id, "designation", e.target.value)
            }
          />
          <IoTrashOutline
            size={90}
            className="text-red-500 cursor-pointer pt-4"
            onClick={() => handleDeleteStage(stage.id)}
          />
        </div>
      ))}

      {/* Button to add more approval stages */}
      <div className="flex justify-between items-center mt-6">
        <div
          className="text-green-500 cursor-pointer flex items-center"
          onClick={handleAddStage}
        >
          <GoPlus size={18} className="mr-2" />
          <span>Add more stages</span>
        </div>

        {/* Save and Cancel buttons */}
        <div className="flex gap-4">
          <ReusableButton outlined={false} onClick={() => console.log("Save")}>
            Save this approval
          </ReusableButton>
          <ReusableButton outlined={true} onClick={onBack}>
            Cancel
          </ReusableButton>
        </div>
      </div>
    </div>
  );
};

export default AddApprovals;
