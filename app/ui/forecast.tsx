'use client'

import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
} from "@heroui/react";
import { Forecast } from "../lib/definitions";

// The header for the columns.
// Note: the key needs to match with the Forecast type found in app/lib/definitions.ts
const columns = [
    {
      key: "ftime",
      label: "DATE",
    },
    {
      key: "T",
      label: "TEMPERATURE (c)",
    },
    {
      key: "W",
      label: "DESCRIPTION",
    },
    {
      key: "F",
      label: "WINDSPEED (m/s)",
    },
    {
      key: "D",
      label: "WIND DIRECTION",
    },
    {
      key: "R",
      label: "PRECIPITATION (mm/h)",
    },
];

// This component handles the display of the forecasts in a table
// Documentation for how to use this table https://www.heroui.com/docs/components/table
export default function Forecasts({
    forecasts,
}: {
    forecasts: Forecast[];
}){
    return (
        <Table 
            isStriped 
            aria-label="Table with weather forecasts for the selected station"
            data-cy="forecast-table"
        >
            <TableHeader>
                {columns.map((column) =>
                <TableColumn key={column.key}>{column.label}</TableColumn>
                )}
            </TableHeader>
            <TableBody 
                emptyContent={"No weather forecasts found for the selected station"
            }>
                {forecasts.map((row) =>
                <TableRow key={row.ftime}>
                    {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
                </TableRow>
                )}
            </TableBody>
        </Table>
    )
}