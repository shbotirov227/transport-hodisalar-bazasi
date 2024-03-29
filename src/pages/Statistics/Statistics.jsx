import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

import Header from "../../containers/Header/Header";

import "./Statistics.scss";

const data = [
    { name: "JIzzax", value: 400 },
    { name: "Toshkent", value: 700 },
    { name: "Qashqadaryo", value: 1000 },
    { name: "Farg'ona", value: 1000 },
    { name: "Andijon", value: 100 },
];

let renderLabel = function (entry) {
    return entry.name;
};

const COLORS = [
    "#455A64",
    "#4B6C81",
    "#517E9E",
    "#5891BC",
    "#5EA3D9",
    "#64B5F6",
];

class Statistics extends PureComponent {
    render() {
        return (
            <div className="Statistics">
                <Header title="Statistics" />
                <PieChart width={600} height={500}>
                    <Pie data={data} dataKey="value" outerRadius={150} fill="#4fd1c0" isAnimationActive={true} label={renderLabel} cx="50%" cy="50%">
                        {data.map((entry, index) => <Cell  key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        );
    }
}
export default Statistics;
