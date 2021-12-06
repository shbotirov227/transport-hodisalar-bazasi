import React from "react";
import TableContent from "../../components/TableContent/TableContent";

import "./Table.scss";

const Table = () => {
    return (
        <div className="Table">
            <h3 className="Table-title">Authors Table</h3>
            <div className="Table-status"></div>
            <TableContent />
            <TableContent />
            <TableContent />
            <TableContent />
            <TableContent />
            <TableContent />
        </div>
    );
};

export default Table;
