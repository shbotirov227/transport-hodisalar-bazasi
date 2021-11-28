import React from "react";
import TableContent from "../../components/TableContent/TableContent";

import "./Table.scss";

const Table = () => {
    return (
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        <th className="status-title">AUTHOR</th>
                        <th className="status-title">FUNCTION</th>
                        <th className="status-title">STATUS</th>
                        <th className="status-title">STATUS</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>kajsnda</td>
                        <td>kajsnda</td>
                        <td>kajsnda</td>
                        <td>kajsnda</td>
                        <td>kajsnda</td>
                        <td>kajsnda</td>
                        <td>kajsnda</td>
                    </tr>
                </tbody>
            </table>

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
