import { useState } from "react";
import { GoPlus } from "react-icons/go";
import ReusableTable from "../../components/reusable/Table";
import IconButton from "@mui/material/IconButton";
import { FaPencilAlt } from "react-icons/fa";
import ReusableButton from "../../components/reusable/Button";
import { IoSearchOutline } from "react-icons/io5";

const columns = [
  { id: "Name", label: "Name", sortable: true, minWidth: 500 },
  { id: "status", label: "Status", sortable: false, minWidth: 100, width: 100 },
  {
    id: "edit",
    label: "Edit",
    align: "center",
    sortable: false,
    minWidth: 100,
    width: 100,
  },
];

const dummyData = [
  {
    id: 1,
    Name: "Medical",
    status: "Active",
  },
  {
    id: 2,
    Name: "Travel",
    status: "Inactive",
  },
  {
    id: 3,
    Name: "Food",
    status: "Active",
  },
];

const Dashboard = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedDomain, setSelectedDomain] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusStyles = (status) => ({
    backgroundColor: status === "Active" ? "#DFF0EA" : "#f8d7da",
    color: status === "Active" ? "#22B470" : "#721c24",
    borderRadius: "4px",
    padding: "4px 8px",
    textAlign: "center",
    fontWeight: "bold",
  });

  const handleSort = (columnId) => {
    console.log("Sorting by", columnId);
  };

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = dummyData.filter((item) => {
    return (
      (selectedDomain === "" || item.Name === selectedDomain) &&
      (searchQuery === "" ||
        item.Name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const customRender = {
    status: (status) => <span style={getStatusStyles(status)}>{status}</span>,
    edit: () => (
      <>
        <IconButton style={{ color: "black" }}>
          <FaPencilAlt size={16} />
        </IconButton>
      </>
    ),
  };

  return (
    <>
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <h1 className="text-2xl font-semibold">Spend Categories</h1>
            <p className="text-gray-600 mt-1 mb-6">
              List of all categories available
            </p>
          </div>
          <div>
            <ReusableButton outlined={false} icon={<GoPlus size={18} />}>
              Add Category
            </ReusableButton>
          </div>
        </div>

        <div className="flex flex-row gap-4 mt-4 mb-4 w-full">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Domain
            </label>
            <select
              value={selectedDomain}
              onChange={handleDomainChange}
              className="border border-gray-300 text-gray-400 rounded-md p-2 focus:outline-none"
            >
              <option value="">All Domains</option>
              <option value="Medical">Medical</option>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
            </select>
          </div>

          <div className="relative w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Search
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search"
              className="px-8 border border-gray-300 rounded-md p-2 w-full focus:outline-none"
            />
            <span className="absolute bottom-3 left-2">
              <IoSearchOutline className="text-gray-400" size={18} />
            </span>
          </div>
        </div>

        <ReusableTable
          columns={columns}
          data={filteredData}
          page={page}
          rowsPerPage={rowsPerPage}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
          onSort={handleSort}
          customRender={customRender}
        />
      </div>
    </>
  );
};

export default Dashboard;
