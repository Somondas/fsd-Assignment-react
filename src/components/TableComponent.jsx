import React, { useRef, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteModal from "./DeleteModal";
const TableComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Function to handle clicks outside the dialog box
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const data = React.useMemo(
    () => [
      {
        name: "Phoenix Baker",
        handle: "@phoenix",
        status: "Active",
        role: "Product Manager",
        email: "phoenix@untitledui.com",
        teams: ["Design", "Product", "Marketing"],
      },
      {
        name: "Lana Steiner",
        handle: "@lana",
        status: "Active",
        role: "Frontend Developer",
        email: "lana@untitledui.com",
        teams: ["Design", "Product", "Marketing"],
      },
      {
        name: "Lana Steiner",
        handle: "@lana",
        status: "Active",
        role: "Frontend Developer",
        email: "lana@untitledui.com",
        teams: ["Design", "Product", "Marketing"],
      },
      {
        name: "Lana Steiner",
        handle: "@lana",
        status: "Active",
        role: "Frontend Developer",
        email: "lana@untitledui.com",
        teams: ["Design", "Product", "Marketing"],
      },
      {
        name: "Lana Steiner",
        handle: "@lana",
        status: "Active",
        role: "Frontend Developer",
        email: "lana@untitledui.com",
        teams: ["Design", "Product", "Marketing"],
      },
      {
        name: "Lana Steiner",
        handle: "@lana",
        status: "Active",
        role: "Frontend Developer",
        email: "lana@untitledui.com",
        teams: ["Design", "Product", "Marketing"],
      },
      {
        name: "Lana Steiner",
        handle: "@lana",
        status: "Active",
        role: "Frontend Developer",
        email: "lana@untitledui.com",
        teams: ["Design", "Product", "Marketing"],
      },
      // Add more rows here
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
          <div className="flex items-center ">
            <div className="w-10 h-10 rounded-full bg-gray-300">
              <img
                className="rounded-full"
                src="https://avatars.githubusercontent.com/u/1774007"
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {row.original.name}
              </div>
              <div className="text-sm text-gray-500">{row.original.handle}</div>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {getValue()}
          </span>
        ),
      },
      {
        accessorKey: "role",
        header: "Role",
      },
      {
        accessorKey: "email",
        header: "Email address",
      },
      {
        accessorKey: "teams",
        header: "Teams",
        cell: ({ getValue }) => {
          const teams = getValue();
          return (
            <div className="flex space-x-2">
              {teams.slice(0, 3).map((team) => (
                <span
                  key={team}
                  className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800"
                >
                  {team}
                </span>
              ))}
              {teams.length > 3 && (
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                  +{teams.length - 3}
                </span>
              )}
            </div>
          );
        },
      },
      {
        id: "actions",
        header: "",
        cell: () => (
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-gray-600">
              <ModeEditOutlineOutlinedIcon />
            </button>
            <button
              className="text-gray-400 hover:text-gray-600"
              onClick={openModal}
            >
              <DeleteOutlinedIcon />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        <span>
                          {header.column.getIsSorted() === "asc"
                            ? " ▲"
                            : header.column.getIsSorted() === "desc"
                            ? " ▼"
                            : ""}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
