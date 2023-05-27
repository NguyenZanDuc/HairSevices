import React from 'react'
import TableRow from './TableRow'

type Props = {}

const ScheduleTable = (props: Props) => {
  return (
    <section className="py-8">
  <div className="container px-4 mx-auto">
    <div className="p-4 mb-6 overflow-x-auto bg-white rounded shadow">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-xs text-left text-gray-500"><th className="pb-3 pl-6 font-medium">Customer ID</th><th className="pb-3 font-medium">User</th><th className="pb-3 font-medium">Joined</th><th className="pb-3 font-medium">Status</th><th className="pb-3 font-medium">Purchased</th><th className="pb-3 font-medium">Action</th></tr>
        </thead>
        <tbody>
            <TableRow />
            <TableRow className="bg-slate-50"/>
            <TableRow />
            <TableRow className="bg-slate-50"/>
            <TableRow />
            <TableRow className="bg-slate-50"/>
            <TableRow />
            <TableRow className="bg-slate-50"/>
            <TableRow />
          </tbody>
      </table>
    </div>
    <TablePagination />
  </div>
</section>
  )
}

export default ScheduleTable
const TablePagination = () => {
    return (
        <div className="flex flex-wrap items-center justify-between -mx-4">
      <div className="flex items-center w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
        <p className="text-xs text-gray-400">Show</p>
        <div className="px-2 py-2 mx-3 text-xs text-gray-500 bg-white border rounded">
          <select name="" id="">
            <option value="1">15</option>
            <option value="1">25</option>
            <option value="1">50</option>
            <option value="1">100</option>
          </select>
        </div>
        <p className="text-xs text-gray-400">of 1200</p>
      </div>
      <div className="flex items-center justify-center w-full px-4 lg:w-auto">
        <a className="inline-flex items-center justify-center w-8 h-8 mr-3 text-xs text-gray-500 bg-white border border-gray-300 rounded hover:bg-indigo-50" href="#">
          <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.53335 3.99999L4.86668 1.66666C5.13335 1.39999 5.13335 0.999992 4.86668 0.733325C4.60002 0.466659 4.20002 0.466659 3.93335 0.733325L1.13335 3.53333C0.866683 3.79999 0.866683 4.19999 1.13335 4.46666L3.93335 7.26666C4.06668 7.39999 4.20002 7.46666 4.40002 7.46666C4.60002 7.46666 4.73335 7.39999 4.86668 7.26666C5.13335 6.99999 5.13335 6.59999 4.86668 6.33333L2.53335 3.99999Z" fill="#A4AFBB"></path>
          </svg>
        </a>
        <a className="inline-flex items-center justify-center w-8 h-8 mr-3 text-xs text-gray-500 bg-white border border-gray-300 rounded hover:bg-indigo-50" href="#">1</a>
        <span className="inline-block mr-3">
          <svg className="w-3 h-3 text-gray-200" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0.666687C5.26667 0.666687 4.66667 1.26669 4.66667 2.00002C4.66667 2.73335 5.26667 3.33335 6 3.33335C6.73333 3.33335 7.33333 2.73335 7.33333 2.00002C7.33333 1.26669 6.73333 0.666687 6 0.666687ZM1.33333 0.666687C0.6 0.666687 0 1.26669 0 2.00002C0 2.73335 0.6 3.33335 1.33333 3.33335C2.06667 3.33335 2.66667 2.73335 2.66667 2.00002C2.66667 1.26669 2.06667 0.666687 1.33333 0.666687ZM10.6667 0.666687C9.93333 0.666687 9.33333 1.26669 9.33333 2.00002C9.33333 2.73335 9.93333 3.33335 10.6667 3.33335C11.4 3.33335 12 2.73335 12 2.00002C12 1.26669 11.4 0.666687 10.6667 0.666687Z" fill="currentColor"></path>
          </svg>
        </span>
        <a className="inline-flex items-center justify-center w-8 h-8 mr-3 text-xs text-white bg-indigo-500 rounded" href="#">12</a><a className="inline-flex items-center justify-center w-8 h-8 mr-3 text-xs text-gray-500 bg-white border border-gray-300 rounded hover:bg-indigo-50" href="#">13</a><a className="inline-flex items-center justify-center w-8 h-8 mr-3 text-xs text-gray-500 bg-white border border-gray-300 rounded hover:bg-indigo-50" href="#">14</a>
        <span className="inline-block mr-3">
          <svg className="w-3 h-3 text-gray-200" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0.666687C5.26667 0.666687 4.66667 1.26669 4.66667 2.00002C4.66667 2.73335 5.26667 3.33335 6 3.33335C6.73333 3.33335 7.33333 2.73335 7.33333 2.00002C7.33333 1.26669 6.73333 0.666687 6 0.666687ZM1.33333 0.666687C0.6 0.666687 0 1.26669 0 2.00002C0 2.73335 0.6 3.33335 1.33333 3.33335C2.06667 3.33335 2.66667 2.73335 2.66667 2.00002C2.66667 1.26669 2.06667 0.666687 1.33333 0.666687ZM10.6667 0.666687C9.93333 0.666687 9.33333 1.26669 9.33333 2.00002C9.33333 2.73335 9.93333 3.33335 10.6667 3.33335C11.4 3.33335 12 2.73335 12 2.00002C12 1.26669 11.4 0.666687 10.6667 0.666687Z" fill="currentColor"></path>
          </svg>
        </span>
        <a className="inline-flex items-center justify-center w-8 h-8 mr-3 text-xs bg-white border border-gray-300 rounded hover:bg-indigo-50" href="#">62</a>
        <a className="inline-flex items-center justify-center w-8 h-8 text-xs text-gray-500 bg-white border border-gray-300 rounded hover:bg-indigo-50" href="#">
          <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.88663 3.52667L2.05996 0.700006C1.99799 0.637521 1.92425 0.587925 1.84301 0.554079C1.76177 0.520233 1.67464 0.502808 1.58663 0.502808C1.49862 0.502808 1.41148 0.520233 1.33024 0.554079C1.249 0.587925 1.17527 0.637521 1.1133 0.700006C0.989128 0.824915 0.919434 0.993883 0.919434 1.17001C0.919434 1.34613 0.989128 1.5151 1.1133 1.64001L3.4733 4.00001L1.1133 6.36001C0.989128 6.48491 0.919434 6.65388 0.919434 6.83001C0.919434 7.00613 0.989128 7.1751 1.1133 7.30001C1.17559 7.36179 1.24947 7.41068 1.33069 7.44385C1.41192 7.47703 1.49889 7.49385 1.58663 7.49334C1.67437 7.49385 1.76134 7.47703 1.84257 7.44385C1.92379 7.41068 1.99767 7.36179 2.05996 7.30001L4.88663 4.47334C4.94911 4.41136 4.99871 4.33763 5.03256 4.25639C5.0664 4.17515 5.08383 4.08801 5.08383 4.00001C5.08383 3.912 5.0664 3.82486 5.03256 3.74362C4.99871 3.66238 4.94911 3.58865 4.88663 3.52667Z" fill="#A4AFBB"></path>
          </svg>
        </a>
      </div>
    </div>
    )
}