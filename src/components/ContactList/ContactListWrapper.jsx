import React from "react";
import ContactListTableHead from "./ContactListTableHead";
import ContactlistTabelBody from "./ContactListTableBody";

const ContactTable = () => {
  return (
    <div className="w-full px-8">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <ContactListTableHead />
        <ContactlistTabelBody />
      </table>
    </div>
  );
};

export default ContactTable;
