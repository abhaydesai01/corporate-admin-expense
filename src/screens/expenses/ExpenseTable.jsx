import { useState } from "react";
import ReusableTable from "../../components/reusable/Table";
import "react-datepicker/dist/react-datepicker.css";
import { IoSearchOutline } from "react-icons/io5";

const ExpenseTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const columnsCorporateAdmin = [
    { id: "category", label: "Category", minWidth: 120 },
    { id: "expenseId", label: "Expense ID", minWidth: 100 },
    { id: "expenseDate", label: "Created Date", minWidth: 120 },
    { id: "amount", label: "Amount", minWidth: 100, align: "right" },
    { id: "memberId", label: "Member ID", minWidth: 150 },
    { id: "status", label: "Status", minWidth: 100 },
  ];

  const data = [
    {
      expenseId: "EXP001",
      expenseDate: "2024-09-01",
      category: "Travel",
      username: "John Doe",
      memberId: "M001",
      amount: "AED200",
      organisation: "ABC Corp",
      receipt: "View",
      status: "Pending",
    },
    {
      expenseId: "EXP002",
      expenseDate: "2024-09-02",
      category: "Meals",
      username: "Jane Smith",
      memberId: "M002",
      amount: "AED50",
      organisation: "XYZ Ltd",
      receipt: "View",
      status: "Approved",
    },
    {
      expenseId: "EXP003",
      expenseDate: "2024-09-03",
      category: "Accommodation",
      username: "Mark Lee",
      memberId: "M003",
      amount: "AED500",
      organisation: "DEF Inc",
      receipt: "View",
      status: "Rejected",
    },
    {
      expenseId: "EXP004",
      expenseDate: "2024-09-04",
      category: "Supplies",
      username: "Emily Brown",
      memberId: "M004",
      amount: "AED150",
      organisation: "GHI Group",
      receipt: "View",
      status: "Pending",
    },
    {
      expenseId: "EXP005",
      expenseDate: "2024-09-05",
      category: "Software",
      username: "Robert Johnson",
      memberId: "M005",
      amount: "AED300",
      organisation: "LMN Co",
      receipt: "View",
      status: "Approved",
    },
    {
      expenseId: "EXP006",
      expenseDate: "2024-09-06",
      category: "Travel",
      username: "Michael Davis",
      memberId: "M006",
      amount: "AED120",
      organisation: "OPQ Corp",
      receipt: "View",
      status: "Rejected",
    },
    {
      expenseId: "EXP007",
      expenseDate: "2024-09-07",
      category: "Meals",
      username: "Lisa Williams",
      memberId: "M007",
      amount: "AED80",
      organisation: "RST Ltd",
      receipt: "View",
      status: "Pending",
    },
    {
      expenseId: "EXP008",
      expenseDate: "2024-09-08",
      category: "Accommodation",
      username: "Kevin Martinez",
      memberId: "M008",
      amount: "AED450",
      organisation: "UVW Enterprises",
      receipt: "View",
      status: "Approved",
    },
    {
      expenseId: "EXP009",
      expenseDate: "2024-09-09",
      category: "Supplies",
      username: "Olivia Clark",
      memberId: "M009",
      amount: "AED200",
      organisation: "XYZ Ltd",
      receipt: "View",
      status: "Rejected",
    },
    {
      expenseId: "EXP010",
      expenseDate: "2024-09-10",
      category: "Software",
      username: "Sophia Rodriguez",
      memberId: "M010",
      amount: "AED350",
      organisation: "ABC Corp",
      receipt: "View",
      status: "Pending",
    },
    {
      expenseId: "EXP011",
      expenseDate: "2024-09-11",
      category: "Entertainment",
      username: "Chris Evans",
      memberId: "M011",
      amount: "AED100",
      organisation: "DEF Inc",
      receipt: "View",
      status: "Approved",
    },
    {
      expenseId: "EXP012",
      expenseDate: "2024-09-12",
      category: "Travel",
      username: "Natalie Portman",
      memberId: "M012",
      amount: "AED400",
      organisation: "XYZ Ltd",
      receipt: "View",
      status: "Pending",
    },
    {
      expenseId: "EXP013",
      expenseDate: "2024-09-13",
      category: "Supplies",
      username: "Samuel Jackson",
      memberId: "M013",
      amount: "AED180",
      organisation: "LMN Co",
      receipt: "View",
      status: "Rejected",
    },
    {
      expenseId: "EXP014",
      expenseDate: "2024-09-14",
      category: "Meals",
      username: "Scarlett Johansson",
      memberId: "M014",
      amount: "AED90",
      organisation: "OPQ Corp",
      receipt: "View",
      status: "Approved",
    },
    {
      expenseId: "EXP015",
      expenseDate: "2024-09-15",
      category: "Accommodation",
      username: "Tom Hiddleston",
      memberId: "M015",
      amount: "AED550",
      organisation: "UVW Enterprises",
      receipt: "View",
      status: "Pending",
    },
    {
      expenseId: "EXP016",
      expenseDate: "2024-09-16",
      category: "Software",
      username: "Benedict Cumberbatch",
      memberId: "M016",
      amount: "AED320",
      organisation: "RST Ltd",
      receipt: "View",
      status: "Approved",
    },
    {
      expenseId: "EXP017",
      expenseDate: "2024-09-17",
      category: "Entertainment",
      username: "Chris Hemsworth",
      memberId: "M017",
      amount: "AED250",
      organisation: "ABC Corp",
      receipt: "View",
      status: "Pending",
    },
    {
      expenseId: "EXP018",
      expenseDate: "2024-09-18",
      category: "Meals",
      username: "Robert Downey",
      memberId: "M018",
      amount: "AED150",
      organisation: "GHI Group",
      receipt: "View",
      status: "Rejected",
    },
    {
      expenseId: "EXP019",
      expenseDate: "2024-09-19",
      category: "Travel",
      username: "Chris Pratt",
      memberId: "M019",
      amount: "AED400",
      organisation: "XYZ Ltd",
      receipt: "View",
      status: "Approved",
    },
    {
      expenseId: "EXP020",
      expenseDate: "2024-09-20",
      category: "Accommodation",
      username: "Zoe Saldana",
      memberId: "M020",
      amount: "AED600",
      organisation: "LMN Co",
      receipt: "View",
      status: "Pending",
    },
  ];

  const filteredData = data.filter((item) => {
    const matchesCategory =
      categoryFilter === "" || item.category === categoryFilter;
    const matchesSearch =
      searchQuery === "" ||
      item.expenseId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.organisation.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const columnStyles = {
    status: (value) => {
      let backgroundColor;
      let textColor;

      if (value === "Pending") {
        backgroundColor = "bg-orange-100";
        textColor = "text-orange-500";
      }

      if (value === "Approved") {
        backgroundColor = "bg-green-100";
        textColor = "text-green-500";
      }

      if (value === "Rejected") {
        backgroundColor = "bg-red-100";
        textColor = "text-red-500";
      }

      return `py-1 px-3 rounded-lg ${backgroundColor} ${textColor} font-bold text-center inline-block min-w-[80px]`;
    },
  };

  const customRender = {
    receipt: (value) => (
      <span
        className="underline cursor-pointer text-black"
        onClick={() => console.log("View Receipt clicked")}
      >
        {value}
      </span>
    ),
    status: (value) => (
      <span className={columnStyles.status(value)}>{value}</span>
    ),
  };

  const userRole = localStorage.getItem("userRole");
  console.log(userRole);

  const renderFilters = () => (
    <div className="flex justify-between items-end mb-4 space-x-4">
      <div className="flex flex-col justify-start items-start">
        <label className="block text-gray-700 text-sm font-semibold mb-1">
          Category
        </label>
        <select
          className="border border-gray-300 rounded-md py-2 px-3 w-auto focus:outline-none"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Travel">Travel</option>
          <option value="Meals">Meals</option>
          <option value="Accommodation">Accommodation</option>
          <option value="Supplies">Supplies</option>
          <option value="Software">Software</option>
        </select>
      </div>

      <div className="relative w-full">
        <label className="block text-gray-700 text-sm font-semibold mb-1">
          Search
        </label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="px-8 border border-gray-300 rounded-md p-2 w-full focus:outline-none"
        />
        <span className="absolute bottom-3 left-2">
          <IoSearchOutline className="text-gray-400" size={18} />
        </span>
      </div>
    </div>
  );

  return (
    <div>
      {renderFilters()}
      <ReusableTable
        columns={columnsCorporateAdmin}
        data={filteredData}
        page={page}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
        customRender={customRender}
      />
    </div>
  );
};

export default ExpenseTable;
