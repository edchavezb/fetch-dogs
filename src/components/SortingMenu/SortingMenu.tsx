interface SortingMenuProps {
    sortingChangeHandler: (field: string, direction: string) => void;
}

export const SortingMenu = ({sortingChangeHandler}: SortingMenuProps) => {
    return (
        <div className="dropdown dropdown-top">
        <label tabIndex={0} className="btn h-[40px] min-h-0 m-1">
          <div className='w-4 h-4'>
            <img className='w-full' src="/sort.svg" alt="menu"></img>
          </div>
        </label>
        <div tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52 bottom-[-290px] left-[-150px] text-left">
          <div className="font-lexend font-semibold text-primary p-2"> Sort By </div>
          <ul className="menu bg-white w-full rounded-box">
            <li onClick={() => sortingChangeHandler("age", "asc")}><a className="text-bodyText">Age, Ascending</a></li>
            <li onClick={() => sortingChangeHandler("age", "desc")}><a className="text-bodyText">Age, Descending</a></li>
            <li onClick={() => sortingChangeHandler("name", "asc")}><a className="text-bodyText">Name, Ascending</a></li>
            <li onClick={() => sortingChangeHandler("name", "desc")}><a className="text-bodyText">Name, Descending</a></li>
            <li onClick={() => sortingChangeHandler("breed", "asc")}><a className="text-bodyText">Breed, Ascending</a></li>
            <li onClick={() => sortingChangeHandler("breed", "desc")}><a className="text-bodyText">Breed, Descending</a></li>
            <li onClick={() => sortingChangeHandler("", "")}><a className="text-bodyText">Default</a></li>
          </ul>
        </div>
      </div>
    )
}