"use client";
import React, { useState } from "react"; 
import { useRouter } from "next/navigation";

export default function SearchBox() {
	const [search, setSearch] = useState("");
    const router = useRouter();
    function handleSubmit(e) {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
    }
	return (
		<form className="flex max-w-6xl justify-between mx-auto items-center px-5" onSubmit={handleSubmit}>
			<input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				type="text"
				placeholder="Search keywords ..."
				className="w-full h-14 rounded-sm placeholder-gray-500 bg-transparent outline-none flex-1"
			/>
			<button type="submit" className="text-amber-500 disabled:text-gray-500" disabled={!search}>
				{" "}
				Search{" "}
			</button>
		</form>
	);
}
