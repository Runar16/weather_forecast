'use client'

import React from "react";
import {
    Dropdown, 
    DropdownTrigger, 
    DropdownMenu, 
    DropdownItem, 
    Button,
    Selection,
} from "@heroui/react";
import { Station } from "../lib/definitions";

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

//This component handles the dropdown menu for selecting stations
export default function Stations({
    stations,
}: {
    stations: Station[];
}){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["1"]));
    // I use the URL to save the selected station see the "Why use URL search parameters" in https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
    const [shouldNavigate, setShouldNavigate] = React.useState(false);

    React.useEffect(() => {
        if (shouldNavigate) {
            const term = Array.from(selectedKeys)[0];
            const params = new URLSearchParams(searchParams);
            if (term && term != 0) {
                params.set('query', term.toString());
            }
            replace(`${pathname}?${params.toString()}`);
            setShouldNavigate(false); // Prevent multiple navigations
        }
    }, [shouldNavigate, selectedKeys, pathname, searchParams, replace]);

    // See why it is done this why in "Single Selection" in https://www.heroui.com/docs/components/dropdown 
    const selectedValue = React.useMemo(
        () => 
            {
                setShouldNavigate(true);
                return stations.find(station => Array.from(selectedKeys)[0] == station.id)?.name;
            },
        [selectedKeys],
    );
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="solid" className="p-4" data-cy="stations">
                    {selectedValue}
                </Button>
            </DropdownTrigger>
            <DropdownMenu 
                aria-label="Dropdown menu to select where to get the weather forecast from" 
                items={stations}
                selectionMode="single"
                onSelectionChange={setSelectedKeys}
                autoFocus = "first"
                className="p-4" 
                data-cy="stationsMenu"
            >
                {(item) => (
                <DropdownItem
                    key={item.id}
                >
                    {item.name}
                </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    )
}