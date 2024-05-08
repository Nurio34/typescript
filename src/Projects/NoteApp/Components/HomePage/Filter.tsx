function Filters() {
    return (
        <select
            name="tags"
            id="tags"
            className=" w-3/4 my-4 border border-black rounded-md py-1 px-2 focus-within:outline-orange-500"
        >
            <option value="">Filter by Folder Name</option>
        </select>
    );
}

export default Filters;
